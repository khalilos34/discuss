import CreateTopic from "@/components/topic/CreateTopic";

const Home = async () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="m-2 text-xl">Top Posts</h1>
      </div>
      <div>
        <CreateTopic />
      </div>
    </div>
  );
};
export default Home;
