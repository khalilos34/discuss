import db from "@/config/db";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

const TopicList = async () => {
  const topics = await db.topic.findMany();
  return (
    <div className=" flex flex-wrap gap-2">
      {topics &&
        topics.map((topic) => (
          <Link key={topic.id} href={`/topics/${topic.slug}`}>
            <Chip
              color="warning"
              variant="shadow"
              className="hover:bg-yellow-200/50"
            >
              {topic.slug}
            </Chip>
          </Link>
        ))}
    </div>
  );
};

export default TopicList;
