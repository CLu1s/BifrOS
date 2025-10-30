"use client";

import { type QueueElement } from "@/features/wallpapers/types";
import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import useFetchQueue from "@/features/wallpapers/hooks/useFetchQueue";
import useQueue from "@/features/wallpapers/hooks/useQueue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableQueueImage } from "./SortableQueueImage";
import { GripVertical } from "lucide-react";

const Queue = () => {
  const { queueList } = useFetchQueue();
  const { bulkUpdatePriorities } = useQueue();
  const [activeTab, setActiveTab] = useState<"landscape" | "portrait">("landscape");

  const portraitImages = useMemo(
    () => queueList.filter((image) => image.aspectRatio < 1),
    [queueList],
  );

  const landscapeImages = useMemo(
    () => queueList.filter((image) => image.aspectRatio >= 1),
    [queueList],
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = async (event: DragEndEvent, images: QueueElement[]) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = images.findIndex((img) => img.id === active.id);
    const newIndex = images.findIndex((img) => img.id === over.id);

    const reorderedImages = arrayMove(images, oldIndex, newIndex);

    // Calculate new priorities based on position
    // Higher index = higher priority (first item has highest priority)
    const updates = reorderedImages.map((img, index) => ({
      id: img.id,
      priority: reorderedImages.length - index,
    }));

    await bulkUpdatePriorities(updates);
  };

  const renderImageGrid = (images: QueueElement[]) => (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event) => handleDragEnd(event, images)}
    >
      <SortableContext items={images.map((img) => img.id)} strategy={rectSortingStrategy}>
        <div
          className={cn(
            "m-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-7 gap-4 md:gap-4 2xl:gap-6 md:px-10 xls:px-28 2xl:px-32",
          )}
        >
          {images.map((image: QueueElement) => (
            <SortableQueueImage key={image.id} image={image} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between m-10">
        <h2 className="text-2xl font-semibold">In Queue: {queueList.length}</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GripVertical className="h-4 w-4" />
          Arrastra para reordenar
        </div>
      </div>

      <Tabs
        defaultValue="landscape"
        className="w-full"
        onValueChange={(value) => setActiveTab(value as "landscape" | "portrait")}
      >
        <div className="px-10">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="landscape">Landscape ({landscapeImages.length})</TabsTrigger>
            <TabsTrigger value="portrait">Portrait ({portraitImages.length})</TabsTrigger>
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
