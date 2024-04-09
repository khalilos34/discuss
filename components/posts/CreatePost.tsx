"use client";

import {
  Button,
  Popover,
  Input,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../shared/FormButton";
import { useFormState } from "react-dom";
import { CreateNewPost } from "@/lib/actions/post.action";

const CreatePost = ({ slug }: { slug: string }) => {
  const [formState, action] = useFormState(CreateNewPost.bind(null, slug), {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">+ New Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg">New Post </h3>
            <Input
              name="title"
              label="title"
              labelPlacement="outside"
              placeholder="title"
              isRequired
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="content"
              labelPlacement="outside"
              placeholder="content"
              isRequired
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form && (
              <div className="w-full rounded-md border border-red-500 bg-red-400 p-2">
                {formState.errors._form.join(", ")}
              </div>
            )}
            <FormButton>save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreatePost;
