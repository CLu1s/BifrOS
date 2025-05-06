"use client";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { Newspaper, Pickaxe, BookMarked, Paintbrush } from "lucide-react";

const links = [
  {
    icon: <Paintbrush className={"h-4 w-4"} />,
    label: "Wallpapers",
    href: "/wallpapers",
  },
  {
    icon: <Newspaper className={"h-4 w-4"} />,
    label: "Feed",
    href: "/feed",
  },
  {
    icon: <BookMarked className={"h-4 w-4"} />,
    label: "Bookmarks",
    href: "/bookmarks",
  },
  {
    icon: <Pickaxe className={"h-4 w-4"} />,
    label: "Scraper",
    href: "/scraper",
  },
];
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Menu() {
  const pathname = usePathname();
  const isCurrentPath = (path: string) => pathname === path;
  console.log("Current path:", isCurrentPath(pathname), pathname);
  const currentLabel = links.find((link) => isCurrentPath(link.href))?.label;

  return (
    <div className={"flex flex-col w-full gap-4 px-8"}>
      <h1 className={"text-4xl font-bold  "}>{currentLabel}</h1>
      <div className={"grid grid-cols-2 xl:grid-cols-8 gap-2"}>
        {links.map((link) => (
          <Button
            as={Link}
            href={link.href}
            key={link.href}
            color={"primary"}
            size={"sm"}
            className={cn(
              "flex w-full justify-between",
              isCurrentPath(link.href)
                ? "bg-gray-200 text-black"
                : "bg-gray-800 text-gray-300",
            )}
          >
            {link.icon}
            <span className={" w-full text-left flex justify-start"}>
              {link.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
