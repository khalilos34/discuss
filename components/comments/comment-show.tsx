import Image from "next/image";
import { Button } from "@nextui-org/react";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { CommentsWithAuthor, fetchCommentsByPostId } from "@/lib/queries/comments";

interface CommentShowProps {
  commentId: string;
 postId: string;
}

export default async function CommentShow({ commentId, postId }: CommentShowProps) {
  const comments=await fetchCommentsByPostId(postId)
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return (
      <CommentShow key={child.id} commentId={child.id} postId={postId} />
    );
  });

  return (
    <div className="mb-1 mt-2 border p-2">
      <div className="flex gap-3">
        <Image
          src={comment.user.image || ""}
          alt="user image"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1 space-y-3">
          <p className="text-sm font-medium text-gray-500">
            {comment.user.name}
          </p>
          <p className="text-gray-900">{comment.content}</p>

          <CommentCreateForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
}
