"use server";

import { auth } from "@/authentication/auth";
import db from "@/config/db";
import { paths } from "@/utils/paths";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}
const PostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "title must be 3 or more letters" })
    .max(255),
  content: z.string().min(3).max(255),
});

export const CreateNewPost = async (
  slug: string,
  formState: CreatePostFormState,
  formData: FormData,
): Promise<CreatePostFormState> => {
  const title = formData.get("title");
  const content = formData.get("content");
  const result = PostSchema.safeParse({ title, content });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["you must be signed in"],
      },
    };
  }
  const topic = await db.topic.findFirst({
    where: { slug },
  });
  if (!topic) return { errors: { _form: ["can not find topic"] } };
  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["something went wrong"],
        },
      };
    }
  }
  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));
};
