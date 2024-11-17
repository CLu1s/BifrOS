"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { House } from "lucide-react";

const links = [
  {
    icon: <House className={"h-4 w-4"} />,
    label: "Home",
    href: "/",
  },
  {
    icon: <House className={"h-4 w-4"} />,
    label: "Home",
    href: "/scrapper",
  },
  {
    icon: <House className={"h-4 w-4"} />,
    label: "Home",
    href: "/wallpapers",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const renderMobileLinks = links.map((link) => (
    <Button
      as={Link}
      href={link.href}
      variant={pathname == link.href ? "shadow" : "light"}
      key={link.href}
      color={"primary"}
      className={"mx-auto"}
      isIconOnly
    >
      {link.icon}
    </Button>
  ));

  return (
    <div className="pt-2 w-16 lg:w-44 border-r flex flex-col justify-start gap-2 ">
      {renderMobileLinks}
    </div>
  );
};

export default Sidebar;
