export async function safeFetch<T>(endPoint: string, init: RequestInit) {
  let response: Response | null = null
  let result: { data: T } | null = null

  try {
    response = await fetch(process.env.NEXT_PUBLIC_API_URL + endPoint, {
      ...init,
      headers: {
        "Tenant": process.env.NEXT_PUBLIC_API_TENANT || "",
        "Accept-Language": "fa",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        ...init.headers
      }
    });

    result = await response.json();
  } catch (error) {
    console.log(`Unknown error on fetch ${endPoint}:`, error);
  }

  return {
    result,
  }
}

export const CommonHeaders = {
  jsonApplicationType: { "Content-Type": "application/json" },
}