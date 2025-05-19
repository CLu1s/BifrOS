import { Card } from "@heroui/react";
import React from "react";
import { cn } from "@/lib/utils";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { BaseImage } from "@/features/wallpapers/types";

export interface GalleryImageBaseProps {
  image: BaseImage;
  className?: string;
  dropdownItems?: DropdownItemType[];
}

export interface DropdownItemType {
  key: string;
  label: string;
  action: () => void;
}

export function ImageBase(props: GalleryImageBaseProps) {
  const { dropdownItems, image } = props;
  const isVertical = image.isVertical;
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className={cn("relative m-auto w-full h-full", props.className)}
    >
      {dropdownItems && (
        <div className={"absolute top-2 left-2  z-40 w-full"}>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="ghost" size={"sm"}>
                ...
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dynamic Actions"
              items={dropdownItems}
              onAction={(key) => {
                const item = dropdownItems.find((el) => el.key === key);
                item?.action();
              }}
            >
              {(item) => (
                <DropdownItem
                  key={item.key}
                  className={item.key === "delete" ? "text-danger" : ""}
                  color={item.key === "delete" ? "danger" : "default"}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      )}

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
