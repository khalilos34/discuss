import PostList from "@/components/posts/post-list";
import { fetchPostBySearch } from "@/lib/queries/posts";
import { redirect } from "next/navigation";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { term: string };
}) => {
  const { term } = searchParams;
  if (!term) redirect("/");

  return (
    <div>
      <PostList fetchData={() => fetchPostBySearch(term)} />
    </div>
  );
};

export default SearchPage;
