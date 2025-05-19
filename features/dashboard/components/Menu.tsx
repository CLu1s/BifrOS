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
    icon: <BookMarked className={"h-4 w-4"} />,
    label: "Kodansha",
    href: "/mangas",
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
  const isCurrentPath = (path: string) => pathname.includes(path);
  const currentLabel = links.find((link) => isCurrentPath(link.href))?.label;
  return (
    <div className={"flex flex-col w-full gap-4 px-4 xl:px-8 pt-2  "}>
      <div
        className={
          "flex flex-col md:flex-row w-full gap-2 float-end justify-between"
        }
      >
        <h1 className={"text-5xl font-semibold flex flex-col justify-center "}>
          {currentLabel}
        </h1>
        <div
          className={
            " grid grid-cols-2  md:flex gap-1  w-full md:w-2/4 xl:w-2/4 2xl:w-1/3"
          }
        >
          {links.map((link) => (
            <Button
              as={Link}
              href={link.href}
              key={link.href}
              color={"primary"}
              size={"sm"}
              variant={"light"}
              className={cn(
                "flex w-full justify-between",
                isCurrentPath(link.href)
                  ? "bg-gray-200 text-black"
                  : "text-gray-300",
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
    </div>
  );
}
