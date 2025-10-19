import { CommonHeaders, safeFetch } from "../api";

export const getFaqs = ({ pageSize }: { pageSize: number }) => safeFetch<{ id: number; title: string; description: string }[]>("/faqs/client/searchex", {
  method: "POST",
  headers: {
    ...CommonHeaders.jsonApplicationType
  },
  body: JSON.stringify({
    keyword: "",
    pageNumber: 1,
    pageSize,
    orderBy: [""]
  })
})