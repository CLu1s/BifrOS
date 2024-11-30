import { Card, CardHeader } from "@nextui-org/react";
import { Activity } from "@/features/dashboard/types";
import { Pickaxe, BookMarked, Paintbrush, Newspaper } from "lucide-react";
import { ReactNode } from "react";
interface Props {
  activities: Activity[];
}

const RecentActivity = ({ activities }: Props) => {
  const icons: Record<string, ReactNode> = {
    scraper: <Pickaxe className={"h-5 w-5 text-blue-500"} />,
    bookmarker: <BookMarked className={"h-5 w-5 text-green-500"} />,
    wallpaper: <Paintbrush className={"h-5 w-5 text-orange-500"} />,
    feed: <Newspaper className={"h-5 w-5 text-red-500"} />,
  };
  const renderActivity = activities.map((activity) => {
    const { type, description, id } = activity;
    return (
      <li key={id} className={"flex gap-4"}>
        <span>{icons[type]}</span>
        <span>{description}</span>
      </li>
    );
  });

  return (
    <Card className={"p-2 w-full h-full"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>Recent Activity</h2>
      </CardHeader>
      <ul className={"flex flex-col gap-2"}>{renderActivity}</ul>
    </Card>
  );
};

export default RecentActivity;
