"use client";

import { type QueueElement } from "@/features/wallpapers/types";
import React, { useMemo, useState } from "react";
import { QueueImage } from "@/features/wallpapers/components/QueueImage";
import { cn } from "@/lib/utils";
import useFetchQueue from "@/features/wallpapers/hooks/useFetchQueue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

type SortOption = "date-desc" | "date-asc" | "priority-desc" | "priority-asc";

const Queue = () => {
  const { queueList } = useFetchQueue();
  const [sortOption, setSortOption] = useState<SortOption>("date-desc");

  const sortImages = (images: QueueElement[]) => {
    const sorted = [...images];
    switch (sortOption) {
      case "date-desc":
        return sorted.sort((a, b) =>
          new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
        );
      case "date-asc":
        return sorted.sort((a, b) =>
          new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime()
        );
      case "priority-desc":
        return sorted.sort((a, b) => b.priority - a.priority);
      case "priority-asc":
        return sorted.sort((a, b) => a.priority - b.priority);
      default:
        return sorted;
    }
  };

  const portraitImages = useMemo(
    () => sortImages(queueList.filter((image) => image.aspectRatio < 1)),
    [queueList, sortOption],
  );

  const landscapeImages = useMemo(
    () => sortImages(queueList.filter((image) => image.aspectRatio >= 1)),
    [queueList, sortOption],
  );

  const cycleSortOption = () => {
    const sortCycle: SortOption[] = ["date-desc", "date-asc", "priority-desc", "priority-asc"];
    const currentIndex = sortCycle.indexOf(sortOption);
    const nextIndex = (currentIndex + 1) % sortCycle.length;
    setSortOption(sortCycle[nextIndex]);
  };

  const getSortLabel = () => {
    switch (sortOption) {
      case "date-desc":
        return "Fecha: Más reciente";
      case "date-asc":
        return "Fecha: Más antiguo";
      case "priority-desc":
        return "Prioridad: Mayor";
      case "priority-asc":
        return "Prioridad: Menor";
    }
  };

  const getSortIcon = () => {
    if (sortOption.includes("desc")) {
      return <ArrowDown className="h-4 w-4" />;
    }
    return <ArrowUp className="h-4 w-4" />;
  };

  const renderImageGrid = (images: QueueElement[]) => (
    <div
      className={cn(
        "m-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-7  gap-4 md:gap-4  2xl:gap-6 md:px-10 xls:px-28  2xl:px-32",
      )}
    >
      {images.map((image: QueueElement) => (
        <QueueImage key={image.id} image={image} />
      ))}
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between m-10">
        <h2 className="text-2xl font-semibold">
          In Queue: {queueList.length}
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={cycleSortOption}
          className="flex items-center gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          {getSortLabel()}
          {getSortIcon()}
        </Button>
      </div>

      <Tabs defaultValue="landscape" className="w-full">
        <div className="px-10">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="landscape">
              Landscape ({landscapeImages.length})
            </TabsTrigger>
            <TabsTrigger value="portrait">
              Portrait ({portraitImages.length})
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="landscape" className="mt-6">
          {landscapeImages.length > 0 ? (
            renderImageGrid(landscapeImages)
          ) : (
            <p className="text-center text-muted-foreground py-10">
              No hay imágenes landscape en la cola
            </p>
          )}
        </TabsContent>

        <TabsContent value="portrait" className="mt-6">
          {portraitImages.length > 0 ? (
            renderImageGrid(portraitImages)
          ) : (
            <p className="text-center text-muted-foreground py-10">
              No hay imágenes portrait en la cola
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Queue;
