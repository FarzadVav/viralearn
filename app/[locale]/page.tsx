import { getTranslations } from "next-intl/server";

async function Page() {
  const t = await getTranslations("HomePage");

  return <div className="container">{t("heroSectionName")}</div>;
}

export default Page;
