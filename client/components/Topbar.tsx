import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Topbar = () => {
  return (
    <Navbar position={"static"} className={"border-b h-[4rem]"}>
      <NavbarBrand>
        <p className="font-bold text-inherit">BifrOS</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Topbar;
