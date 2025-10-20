import { CommonHeaders, safeFetch } from "../api";
import { CategoryT, FaqT } from "@/types/api/general.api.types";

type GetCategoryParamsT = {
  type: number;
}
export const getCategory = (params: GetCategoryParamsT) =>
  safeFetch<CategoryT[]>(`/categories/client/by-type/${params.type}`, {
    headers: CommonHeaders.authBearer
  })

type GetFaqsParamsT = {
  pageNumber?: number
  pageSize?: number;
  keyword?: string;
  orderBy?: string[]
}
export const getFaqs = (params: GetFaqsParamsT) =>
  safeFetch<FaqT[]>("/faqs/client/searchex", {
    method: "POST",
    headers: CommonHeaders.jsonApplicationType,
    body: JSON.stringify(params)
  })

type PostContactUsT = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  jsonExt: string;
  type: number;
  responseStatus: number;
}
export const postContactUs = (params: PostContactUsT) =>
  safeFetch<{ data: number }>("/contactusmessages", {
    method: "POST",
    headers: {
      ...CommonHeaders.jsonApplicationType,
      ...CommonHeaders.authBearer
    },
    body: JSON.stringify(params)
  })