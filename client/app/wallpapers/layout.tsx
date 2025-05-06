import Link from "next/link";
import React from "react";
import { Button, ButtonGroup } from "@heroui/react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex flex-col gap-2  w-full "}>
      <div className={"col-span-1 lg:col-span-2 2xl:col-span-4 px-8"}>
        <ButtonGroup>
          <Button as={Link} href={"/wallpapers"}>
            WallHaven
          </Button>
          <Button as={Link} href={"/wallpapers/queue"}>
            Queue
          </Button>
          <Button as={Link} href={"/wallpapers/history"}>
            History
          </Button>
        </ButtonGroup>
      </div>
      <div className={"grid  grid-cols-1 px-8 gap-4"}>{children}</div>
    </div>
  );
}
