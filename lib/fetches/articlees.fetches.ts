import { CommonHeaders, safeFetch } from "../api";
import { ArticleCategoryT, ArticleCommentT, ArticleT } from "@/types/api/articles.api.types";

export const getArticleCategories = () =>
  safeFetch<ArticleCategoryT[]>(`/blogcategories/client/categories/zerocounter/${5}`, {})

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
      ...CommonHeaders.jsonApplicationType
    },
    body: JSON.stringify(params)
  })

type GetArticleDetailParamsT = {
  id: number;
}
export const getArticleDetail = (params: GetArticleDetailParamsT) =>
  safeFetch<ArticleT>(`/blogposts/client/byslug/${params.id}`, {})

type GetArticleCommentsParamsT = {
  blogId: number
}
export const getArticleComments = (params: GetArticleCommentsParamsT) =>
  safeFetch<ArticleCommentT[]>("/comments/client/search", {
    method: "POST",
    body: JSON.stringify(params)
  })