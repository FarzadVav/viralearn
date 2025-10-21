import { ArcticleCategoryT } from "@/types/api/articles.api.types";
import { CommonHeaders, safeFetch } from "../api";

export const getArticleCategories = () =>
  safeFetch<ArcticleCategoryT[]>(`/blogcategories/client/categories/zerocounter/${5}`, {
    headers: CommonHeaders.authBearer
  })