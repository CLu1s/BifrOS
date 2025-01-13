import { ReactNode } from "react";

const PageLayout = ({
  children,
  title,
}: {
  children: ReactNode[] | ReactNode;
  title: string;
}) => {
  return (
    <div className={"flex flex-col gap-8 m-2 lg:m-10 2xl:px-20 w-full"}>
      <h1 className={"text-4xl font-bold"}>{title}</h1>
      <div className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-4"}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
