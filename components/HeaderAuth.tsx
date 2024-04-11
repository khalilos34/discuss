"use client";
import {
  Avatar,
  Button,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

import * as actions from "@/lib/actions/auth.actions";

const HeaderAuth = () => {
  const session = useSession();
  if (session.status === "loading")
    return <Skeleton className="h-10 w-10 rounded-full" />;

  return (
    <div>
      {session.data?.user ? (
        <>
          <Popover placement="left">
            <PopoverTrigger>
              <Avatar
                className="cursor-pointer"
                src={session.data?.user?.image || ""}
              />
            </PopoverTrigger>

            <PopoverContent>
              <div className="p-4">
                <form action={actions.signOut}>
                  <Button type="submit">Sign out</Button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <div className="flex gap-2">
          <NavbarItem>
            <form action={actions.signIn}>
              <Button type="submit" color="secondary" variant="faded">
                Sign in{" "}
              </Button>
            </form>
          </NavbarItem>
          <NavbarItem>
            <form action={actions.signIn}>
              <Button type="submit" color="primary" variant="flat">
                Sign up
              </Button>
            </form>
          </NavbarItem>
        </div>
      )}
    </div>
  );
};

export default HeaderAuth;
