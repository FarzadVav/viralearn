export type PageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
  params: Promise<{ [key: string]: string | string[] }>;
};
