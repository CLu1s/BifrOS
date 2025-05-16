import {
  HistoryElement,
  HistoryElementOld,
  Image as ImageType,
  QueueElement,
  QueueElementOld,
} from "@/features/wallpapers/types";

export class ImageWallpaper {
  readonly data: ImageType;
  constructor(image: ImageType) {
    this.data = image;
  }
  isVertical() {
    return Number(this.data.ratio) < 1;
  }
  getThumbnail() {
    return this.isVertical()
      ? this.data.thumbs.original
      : this.data.thumbs.large;
  }
  getType() {
    return this.isVertical() ? "portrait" : "landscape";
  }
}

class ImageQueue extends ImageWallpaper {
  readonly data: QueueElement;
  constructor(image: QueueElement) {
    super(image);
    this.data = image;
  }
}

export class ImageHistory extends ImageWallpaper {
  readonly data: HistoryElement;
  constructor(image: HistoryElement) {
    super(image);
    this.data = image;
  }
}

export class ImageQueueAdapter {
  readonly data: QueueElementOld;
  constructor(image: QueueElementOld) {
    this.data = {
      ...image,
      url: image.whPath,
      thumb: image.url,
      path: image.thumb,
    };
  }
  isVertical() {
    return this.data.type === "portrait";
  }
  getThumbnail() {
    return this.data.thumb;
  }
  getType() {
    return this.data.type;
  }
}

export class ImageHistoryAdapter extends ImageQueueAdapter {
  readonly data: HistoryElementOld;
  constructor(image: HistoryElementOld) {
    super(image);
    this.data = {
      ...image,
      url: image.whPath,
      thumb: image.url,
      path: image.thumb,
    };
  }
}

export class ImageQueueFactory {
  static createImage(
    image:
      | QueueElement
      | QueueElementOld
      | HistoryElement
      | HistoryElementOld
      | ImageType
      | null,
  ) {
    if (!image) {
      throw new Error("Image is null");
    }

    if ("timestamp" in image) {
      if ("type" in image) {
        return new ImageHistoryAdapter(image);
      }
      return new ImageHistory(image);
    }

    if ("thumbs" in image && !("queue" in image)) {
      return new ImageWallpaper(image);
    }

    if ("type" in image) {
      return new ImageQueueAdapter(image);
    }

    return new ImageQueue(image);
  }
}
