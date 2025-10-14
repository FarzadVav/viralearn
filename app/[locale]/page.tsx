import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getTranslations } from "next-intl/server";
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";

async function Page() {
  const appT = await getTranslations("App");
  const homeT = await getTranslations("HomePage");

  return (
    <>
      <div className="bordered-glassy-card p-9 rounded-2xl container f-center flex-col mt-6">
        <h2 className="font-morabba-medium">{appT("ProductTopic")}</h2>
        <h1 className="font-morabba-bold text-6xl mt-9">{appT("ProductSlogan")}</h1>
        <p className="font-yekan-bakh-medium text-primary mt-12">
          {appT("ProductDescription")}
        </p>

        <div className="f-align gap-3 mt-6">
          <Button>{appT("ProductOrder")}</Button>
          <Button variant={"link"}>
            <span>{appT("ProductDemo")}</span>
            <ChevronLeftIcon />
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

        <div className="w-3/4 f-align justify-between mt-6">
          <div className="f-align gap-3">
            <Switch
              dir="ltr"
              id="without-viralearn"
            />
            <Label htmlFor="without-viralearn">{homeT("WithOutViralearn")}</Label>
          </div>

          <Link href={""}>
            <Button variant={"link"}>
              <span>{appT("OtherFeatures")}</span>
              <ArrowLeftIcon />
            </Button>
          </Link>
        </div>
      </div>

      <div className="container grid grid-cols-2 mt-20">
        <div className="flex justify-center flex-col">
          <p className="font-morabba-medium text-2xl">{homeT("AdSentence1")}</p>
          <h3 className="font-morabba-bold text-5xl mt-3">{homeT("AdSentence2")}</h3>
        </div>
        <p className="leading-relaxed">{homeT("AdDescription")}</p>
      </div>
    </>
  );
}

export default Page;
