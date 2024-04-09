"use client";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const FormButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <Button isLoading={pending} type="submit">
      {children}
    </Button>
  );
};

export default FormButton;
