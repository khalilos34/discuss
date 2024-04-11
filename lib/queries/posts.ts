import db from "@/config/db";
import type { Post } from "@prisma/client";
import { redirect } from "next/navigation";

export type PostWithData = Post & {
  topic: { slug: string };
  _count: { comments: number };
  user: { name: string | null };
};

export const fetchPostsByTopicsLug = async (
  slug: string,
): Promise<PostWithData[]> => {
  return await db.post.findMany({
    where: {
      topic: { slug },
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
};
export const fetchTopPosts = async (): Promise<PostWithData[]> => {
  return await db.post.findMany({
    orderBy: [{ comments: { _count: "desc" } }],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
};

export const fetchPostBySearch = async (
  term: string,
): Promise<PostWithData[]> => {
  if (!term) return redirect("/");
  return await db.post.findMany({
    where: {
      OR: [{ title: { contains: term } }, { content: { contains: term } }],
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
};
