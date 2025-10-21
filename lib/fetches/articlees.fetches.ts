import { CommonHeaders, safeFetch } from "../api";
import { ArticleCategoryT, ArticleT } from "@/types/api/articles.api.types";

export const getArticleCategories = () =>
  safeFetch<ArticleCategoryT[]>(`/blogcategories/client/categories/zerocounter/${5}`, {
    headers: CommonHeaders.authBearer
  })

type GetArticleCategoriesParamsT = {
  blogPostCategoryId: number | null;
  keyword: string | null;
  pageNumber: number;
  pageSize: number;
  orderBy: string[];
}
export const getArticles = (params: GetArticleCategoriesParamsT) =>
  safeFetch<{ data: ArticleT[] }>("/blogposts/client/searchsp", {
    method: "POST",
    headers: {
      ...CommonHeaders.authBearer,
      ...CommonHeaders.jsonApplicationType
    },
    body: JSON.stringify(params)
  })