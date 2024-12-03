"use client";
import useWallpapers from "@/features/wallpapers/hooks/useWallpapers";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Jumbo = () => {
  const { all } = useWallpapers();
  const [index, setIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      const length = all.length;
      setIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [all]);
  if (all.length === 0 || !all[index]) return null;
  return (
    <div className="">
      <Image
        className={
          " h-20 lg:h-60 xl:h-72 w-[722px] xl:w-[922px] object-cover object-top"
        }
        alt={all[index].url}
        src={all[index].url}
        height={700}
        width={1200}
      />
    </div>
  );
};

export default Jumbo;
