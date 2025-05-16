import { Manga } from "@/features/scrapper/types";

export class MangaSeries {
  volumes: Manga[];
  title: string;
  thumbnail: string;
  avgPrice: number;
  avgDiscountPercentage: number;
  lowestPrice: number;
  highestPrice: number;
  url: string;
  constructor(title: string) {
    this.volumes = [];
    this.title = title;
    this.thumbnail = "";
    this.avgPrice = 0;
    this.avgDiscountPercentage = 0;
    this.lowestPrice = 0;
    this.highestPrice = 0;
    this.url = "";
  }

  addVolume(manga: Manga) {
    this.volumes.push(manga);
    if (!this.thumbnail) {
      this.thumbnail = manga.thumbnails[0].url;
    }
    if (!this.url) {
      this.url = `https://kodansha.us/series/${manga.seriesReadableUrl}/`;
    }
    this.calculateAvgPrice();
    this.calculateAvgDiscountPercentage();
    this.calculateLowestAndHighestPrice();
  }

  calculateAvgPrice() {
    const avgPrice =
      this.volumes.reduce((acc, manga) => acc + manga.discountPrice, 0) /
      this.volumes.length;
    this.avgPrice = Number(avgPrice.toFixed(2));
  }
  calculateAvgDiscountPercentage() {
    const avgDiscountPercentage =
      this.volumes.reduce(
        (acc, manga) => acc + manga.discountPrice / manga.fullPrice,
        0,
      ) / this.volumes.length;
    this.avgDiscountPercentage = Number(avgDiscountPercentage.toFixed(2));
  }

  calculateLowestAndHighestPrice() {
    const prices = this.volumes.map((manga) => manga.discountPrice);
    this.lowestPrice = Math.min(...prices);
    this.highestPrice = Math.max(...prices);
  }

  getDiscountPercentage() {
    return (this.avgDiscountPercentage * 100).toFixed(2);
  }
  getVolumes() {
    return this.volumes;
  }
}

export class MangaList {
  series: Map<string, MangaSeries>;
  constructor(mangas: Manga[]) {
    this.series = new Map<string, MangaSeries>();
    mangas.forEach((manga) => {
      if (this.series.has(manga.seriesName)) {
        this.series.get(manga.seriesName)?.addVolume(manga);
      } else {
        const newSeries = new MangaSeries(manga.seriesName);
        newSeries.addVolume(manga);
        this.series.set(manga.seriesName, newSeries);
      }
    });
  }

  getSeries() {
    return this.series;
  }
}
