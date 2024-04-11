import { paths } from "@/utils/paths";
import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import { fetchCommentsByPostId } from "@/lib/queries/comments";
import { Suspense } from "react";
import LoadingSkeleton from "@/components/posts/LoadingSkeleton";

const PostShowPage = ({
  params,
}: {
  params: { slug: string; postId: string };
}) => {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<LoadingSkeleton />}>
        <PostShow postId={postId} />
      </Suspense>

      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
};

export default PostShowPage;
