import db from "@/config/db";
import { Comment } from "@prisma/client";

export type CommentsWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};
export const fetchCommentsByPostId = async (
  postId: string,
): Promise<CommentsWithAuthor[]> => {
  return db.comment.findMany({
    where: { id: postId },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
};
