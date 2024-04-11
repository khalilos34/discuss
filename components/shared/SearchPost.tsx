"use client";

import { search } from "@/lib/actions/search.actions";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

const SearchPost = () => {
  const searchParams = useSearchParams();
  return (
    <form action={search}>
      <Input
        name="term"
        placeholder="search..."
        defaultValue={searchParams.get("term") || ""}
      />
    </form>
  );
};

export default SearchPost;
