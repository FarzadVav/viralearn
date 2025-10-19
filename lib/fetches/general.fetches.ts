import { CommonHeaders, safeFetch } from "../api";
import { FaqT } from "@/types/api/general.api.types";

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