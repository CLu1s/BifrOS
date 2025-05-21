import { Card } from "@heroui/react";
import React from "react";
import { cn } from "@/lib/utils";
import { Smartphone, ExternalLink, EyeIcon } from "lucide-react";
import { Button } from "@heroui/react";
import useActions from "@/features/wallpapers/hooks/useActions";

import { BaseImage } from "@/features/wallpapers/types";

export interface GalleryImageBaseProps {
  image: BaseImage;
  className?: string;
  extraButtons?: ExtraButton[];
}

export interface ExtraButton {
  key: string;
  icon: React.ReactNode;
  action: () => void;
  color?:
    | "default"
    | "danger"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
}

export function ImageBase(props: GalleryImageBaseProps) {
  const { extraButtons, image } = props;
  const isVertical = image.isVertical;
  const { openModal } = useActions();

  const VARIANT = "flat";

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className={cn("relative m-auto w-full h-full", props.className)}
    >
      <div className={"absolute top-2 left-2  z-40 w-full"}>
        <div className={"flex gap-2"}>
          <Button
            isIconOnly
            aria-label="see full"
            variant={VARIANT}
            size={"sm"}
            onPress={() => {
              openModal(image);
            }}
          >
            <EyeIcon />
          </Button>
          <Button
            isIconOnly
            aria-label="wallhaven"
            variant={VARIANT}
            size={"sm"}
            onPress={() => {
              window.open(
                `https://wallhaven.cc/w/${image.wallhavenId}`,
                "_blank",
              );
            }}
          >
            <ExternalLink />
          </Button>
          {extraButtons &&
            extraButtons.length > 0 &&
            extraButtons.map((item: ExtraButton) => (
              <Button
                key={item.key}
                isIconOnly
                onPress={() => {
                  item.action();
                }}
                color={item.color ?? "danger"}
                variant={VARIANT}
                size={"sm"}
              >
                {item.icon}
              </Button>
            ))}
        </div>
      </div>

      <div
        className={cn(
          "absolute m-auto top-2 right-2 z-40 text-black/40 bg-gray-300/40 rounded-xl p-1",
          !isVertical && "rotate-90",
        )}
      >
        <Smartphone />
      </div>
      <img
        className={"    h-[200px]  object-cover object-top"}
        loading="lazy"
        alt={image.alt}
        src={image.thumbnail}
      />
    </Card>
  );
}
