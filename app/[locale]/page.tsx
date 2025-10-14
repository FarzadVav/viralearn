import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function Page() {
  const t = await getTranslations("App");

  return (
    <div className="bordered-glassy-card p-9 rounded-2xl container f-center flex-col mt-6">
      <h2 className="font-morabba-medium">{t("ProductTopic")}</h2>
      <h1 className="font-morabba-bold text-6xl mt-9">{t("ProductSlogan")}</h1>
      <p className="font-yekan-bakh-medium text-primary mt-12">
        {t("ProductDescription")}
      </p>

      <div className="f-align gap-3 mt-6">
        <Button>{t("ProductOrder")}</Button>
        <Button variant={"link"}>
          <span>{t("ProductDemo")}</span>
          <ChevronLeftIcon  />
        </Button>
      </div>

      <div className="w-3/4 grid grid-cols-5 gap-6 mt-16">
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
        <div className="bg-background rounded-2xl aspect-square"></div>
      </div>
    </div>
  );
}

export default Page;
