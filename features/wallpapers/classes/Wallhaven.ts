const KEY = process.env.WALLHAVEN_KEY;

interface Meta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  query?: never;
  seed?: never;
}

export default class Wallhaven {
  private static instance: Wallhaven;
  private SEARCH_URL = `https://wallhaven.cc/api/v1/search`;
  private meta: Meta = {
    current_page: 1,
    last_page: 1,
    per_page: 64,
    total: 0,
  };
  private constructor() {
    // Constructor privado para evitar instanciación externa
  }

  public static getInstance(): Wallhaven {
    if (!Wallhaven.instance) {
      Wallhaven.instance = new Wallhaven();
    }
    return Wallhaven.instance;
  }

  public async getCollections() {
    const collections = await fetch(
      `https://wallhaven.cc/api/v1/collections?apikey=${KEY}`,
    );
    return await collections.json();
  }
  public async getHotCollection() {
    const collections = await fetch(this.SEARCH_URL);
    return await collections.json();
  }
}
