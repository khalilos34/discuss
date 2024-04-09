import CreatePost from "@/components/posts/CreatePost";

const TopicPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="mb-2 text-2xl font-bold">{slug}</h1>
      </div>
      <div>
        <div>
          <CreatePost slug={slug} />
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
