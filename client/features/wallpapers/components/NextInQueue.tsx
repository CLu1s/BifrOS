import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";

const NextInQueue = () => {
  const { getQueue } = useWallpapers();
  const portrait = getQueue("portrait");
  const landscape = getQueue("landscape");

  return (
    <Card className={"p-2"}>
      <CardHeader>
        <h2 className={"text-xl font-semibold"}>Next wallpaper in queue </h2>
      </CardHeader>
      <CardBody>
        <div className={"flex gap-2 m-auto"}>
          <div className={"flex flex-col gap-2 text-center"}>
            <Image
              src={landscape[0]?.url}
              width={200}
              height={200}
              alt="landscape"
            />

            <p>Wallpapers on landscape queue:</p>
            <p>{landscape.length} </p>
          </div>
          <div className={"flex flex-col gap-2 text-center"}>
            <Image
              src={portrait[0]?.url}
              width={200}
              height={200}
              alt="landscape"
            />
            <p>Wallpapers on portrait queue:</p>
            <p> {portrait.length} </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default NextInQueue;
