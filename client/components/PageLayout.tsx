import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const PageLayout = ({
  children,
  className,
  title,
}: {
  children: ReactNode[] | ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <div className={"flex flex-col gap-8 px-1 lg:px-4 w-full "}>
      <h1 className={"text-4xl font-bold"}>{title}</h1>
      <div className={cn("flex justify-center w-full ", className)}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
