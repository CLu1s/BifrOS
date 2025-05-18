import { Feed } from "@/features/feed/types";

export class FeedElement {
  data: Feed;
  key: string;
  constructor(data: Feed) {
    this.data = data;
    this.key = data.source;
  }
}

export class FeedList {
  feeds: Map<string, FeedElement[]>;
  constructor() {
    this.feeds = new Map();
  }
  static fromArray(feeds: Feed[]) {
    const feedList = new FeedList();
    feeds.forEach((feed) => {
      feedList.addFeed(new FeedElement(feed));
    });
    return feedList;
  }
  addFeed(feed: FeedElement) {
    const { key } = feed;
    if (!this.feeds.has(key)) {
      this.feeds.set(key, []);
    }
    this.feeds.get(key)?.push(feed);
  }

  getFeeds(limitPerFeed: number) {
    const feeds = Array.from(this.feeds.values());
    return feeds.map((feed) => feed.slice(0, limitPerFeed)).flat();
  }

  getFeed(key: string, limit?: number) {
    if (limit == 0 || !limit) return this.feeds.get(key);
    return this.feeds.get(key)?.slice(0, limit);
  }
  getNumberOfFeeds() {
    return this.feeds.size;
  }
}
