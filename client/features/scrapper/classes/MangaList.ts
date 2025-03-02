import { Manga } from "@/features/scrapper/types";

export class MangaSeries {
  volumes: Manga[];
  title: string;
  constructor(title: string) {
    this.volumes = [];
    this.title = title;
  }

  addVolume(manga: Manga) {
    this.volumes.push(manga);
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
