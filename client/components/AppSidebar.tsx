"use client";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  House,
  Newspaper,
  Pickaxe,
  BookMarked,
  Paintbrush,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Apps</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.label}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={link.href}
                      key={link.href}
                      color={"primary"}
                      className={cn(
                        "flex w-full justify-between",
                        pathname == link.href && "bg-gray-300 text-gray-900",
                      )}
                    >
                      {link.icon}
                      <span className={" w-full text-left flex justify-start"}>
                        {link.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
