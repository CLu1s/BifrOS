import type { Image as ImageType } from "@/features/wallpapers/types";

export class ImageWallpaper {
  readonly data: ImageType;
  constructor(image: ImageType) {
    this.data = image;
  }
  isVertical() {
    return Number(this.data.ratio) < 1;
  }
  isPortrait() {
    return !this.isVertical();
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
