export type ArticleCategoryT = {
  id: number;
  title: string;
  locale: string | null;
  image: string | null;
  slug: string | null;
  content: string | null;
}

export type ArticleT = {
  id: number;
  authorId: string;
  authorName: string;
  authorImage: string | null;
  title: string;
  slug: string | null;
  summery: string;
  imageUrl: string | null;
  thumbnail: string | null;
  published: string;
  seoJson: string | null;
  locale: string | null;
  type: number | null;
  tags: string | null;
  categories: string | null;
  commentsCount: number;
  rate: number;
  r1: number | null;
  r2: number | null;
  r3: number | null;
  r4: number | null;
  r5: number | null;
}