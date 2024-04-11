import { Skeleton } from "@nextui-org/react";

const LoadingSkeleton = () => {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="space-y-2 rounded border p-4">
        <Skeleton h- w-32 />
        <Skeleton h- w-32 />
        <Skeleton h- w-32 />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
