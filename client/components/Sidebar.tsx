"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { House, Pickaxe, BookMarked, Paintbrush } from "lucide-react";

const links = [
  {
    icon: <House className={"h-4 w-4"} />,
    label: "Home",
    href: "/",
  },
  {
    icon: <Pickaxe className={"h-4 w-4"} />,
    label: "Scraper",
    href: "/scrapper",
  },
  {
    icon: <BookMarked className={"h-4 w-4"} />,
    label: "Bookmarks",
    href: "/bookmarks",
  },
  {
    icon: <Paintbrush className={"h-4 w-4"} />,
    label: "Wallpapers",
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
      className={"mx-auto lg:hidden"}
      isIconOnly
    >
      {link.icon}
    </Button>
  ));
  const renderDesktopLinks = links.map((link) => (
    <Button
      as={Link}
      href={link.href}
      variant={pathname == link.href ? "shadow" : "light"}
      key={link.href}
      color={"primary"}
      startContent={link.icon}
    >
      {link.label}
    </Button>
  ));

  return (
    <div className="pt-2 px-2 w-16 lg:w-44 border-r flex flex-col justify-start gap-2 ">
      {renderMobileLinks}
      {renderDesktopLinks}
    </div>
  );
};

export default Sidebar;
