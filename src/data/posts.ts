import data from "./posts.json";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  tags: string[];
};

export const posts = data as Post[];
