import { auth } from "@/authentication/auth";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  return (
    <Navbar className="mb-6 shadow">
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="search..." />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {session?.user ? <div>signed in</div> : <div>signed out</div>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
