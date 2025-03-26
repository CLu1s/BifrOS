"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import useAuth from "@/features/authentication/hooks/useAuth";
import Login from "@/features/authentication/components/Login";

const PageLayout = ({
  children,
  className,
  title,
}: {
  children: ReactNode[] | ReactNode;
  title: string;
  className?: string;
}) => {
  const { user } = useAuth();
  if (!user) {
    return <Login />;
  }
  return (
    <div className={"flex flex-col gap-8  w-full "}>
      <h1 className={"text-4xl font-bold px-12"}>{title}</h1>
      <div
        className={cn("flex justify-center w-full px-2 xl:px-12 ", className)}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
