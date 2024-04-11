import PostList from "@/components/posts/post-list";
import CreateTopic from "@/components/topic/CreateTopic";
import TopicList from "@/components/topic/TopicList";
import { fetchTopPosts } from "@/lib/queries/posts";
import { Divider } from "@nextui-org/react";

const Home = async () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="m-2 text-xl font-bold">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="flex flex-col gap-y-2 border p-4">
        <CreateTopic />
        <Divider />
        <TopicList />
      </div>
    </div>
  );
};
export default Home;
