import db from "@/config/db";
import { Comment } from "@prisma/client";
import { cache } from "react";

export type CommentsWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};
export const fetchCommentsByPostId = cache(
  async (postId: string): Promise<CommentsWithAuthor[]> => {
    return await db.comment.findMany({
      where: { postId },
      include: {
        user: { select: { name: true, image: true } },
      },
    });
  },
);
