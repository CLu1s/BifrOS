import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Cover from "@/features/dashboard/components/Cover";
import FetcherWallpaperContainer from "@/features/wallpapers/components/FetcherWallpaperContainer";

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
    <div className={"flex flex-col gap-8  w-full "}>
      <FetcherWallpaperContainer>
        <Cover />
      </FetcherWallpaperContainer>
      <h1 className={"text-4xl font-bold px-12"}>{title}</h1>
      <div className={cn("flex justify-center w-full px-12 ", className)}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
