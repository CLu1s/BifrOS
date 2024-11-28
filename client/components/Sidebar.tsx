"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {
  House,
  Newspaper,
  Pickaxe,
  BookMarked,
  Paintbrush,
} from "lucide-react";

const links = [
  {
    icon: <House className={"h-4 w-4"} />,
    label: "Home",
    href: "/",
  },
  {
    icon: <Newspaper className={"h-4 w-4"} />,
    label: "Feed",
    href: "/feed",
  },
  {
    icon: <Pickaxe className={"h-4 w-4"} />,
    label: "Scraper",
    href: "/scraper",
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
      className={"flex w-full justify-between"}
    >
      <span className={" w-full text-left flex justify-start"}>
        {link.label}
      </span>
    </Button>
  ));

  return (
    <div className="pt-2 px-2 w-14 lg:w-44 border-r flex flex-col justify-start  gap-2 ">
      <div className={"mx-auto lg:hidden flex flex-col gap-2"}>
        {renderMobileLinks}
      </div>
      <div className="lg:flex flex-col gap-2  hidden">{renderDesktopLinks}</div>
    </div>
  );
};

export default Sidebar;
