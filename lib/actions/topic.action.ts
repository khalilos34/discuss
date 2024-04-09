"use server";
import { auth } from "@/authentication/auth";
import db from "@/config/db";
import { paths } from "@/utils/paths";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

const TopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "name must be a lowercase letter with one dash and no spaces",
    }),
  description: z.string().min(10),
});
export const createNewTopic = async (
  fromState: CreateTopicFormState,
  formData: FormData,
): Promise<CreateTopicFormState> => {
  const name = formData.get("name");
  const description = formData.get("description");
  const result = TopicSchema.safeParse({ name, description });
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }
  const session = await auth();
  if (!session || !session.user) {
    return { errors: { _form: ["You must be signed in to create a topic"] } };
  }
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { errors: { _form: [err.message] } };
    } else {
      return { errors: { _form: ["something went wrong .."] } };
    }
  }
  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
};
