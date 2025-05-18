"use client";
import React, { ReactNode } from "react";
import useAuth from "@/features/authentication/hooks/useAuth";
import Login from "@/features/authentication/components/Login";
import Link from "next/link";

const PageLayout = ({
  children,
}: {
  children: ReactNode[] | ReactNode;
  className?: string;
}) => {
  const { user } = useAuth();
  if (!user) {
    return <Login />;
  }
  return (
    <div className={"flex flex-col gap-8  w-full "}>
      <div className={"col-span-1 lg:col-span-2 2xl:col-span-4"}>
        <Link href={"/wallpapers/queue"} className="w-full">
          Queue
        </Link>
        /
        <Link href={"/wallpapers/history"} className="w-full">
          History
        </Link>
      </div>
      <div className={"grid  grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4"}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
