"use client";
import { createNewTopic } from "@/lib/actions/topic.action";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../shared/FormButton";

const CreateTopic = () => {
  const [formState, action] = useFormState(createNewTopic, { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">+ New topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg">New topic </h3>
            <Input
              name="name"
              label="name"
              labelPlacement="outside"
              placeholder="name"
              isRequired
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
              name="description"
              label="description"
              labelPlacement="outside"
              placeholder="description"
              isRequired
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
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

export default CreateTopic;
