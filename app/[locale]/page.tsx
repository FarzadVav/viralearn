import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";

import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import commentTextureImg from "@/public/images/comment-texture.png";
import securityLicenceImg from "@/public/images/security-licence.png";
import securityPatternImg from "@/public/images/security-pattern.png";
import securityDownloadImg from "@/public/images/security-download.png";
import securityWatermarkImg from "@/public/images/security-watermark.png";
import securityAuthLimitImg from "@/public/images/security-auth-limit.png";
import commentQouteImg from "@/public/images/comment-quote.png";

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

      <div className="container grid grid-cols-2 mt-40">
        <div className="flex justify-center flex-col">
          <p className="font-morabba-medium text-2xl">{homeT("AdSentence1")}</p>
          <h3 className="font-morabba-bold text-5xl mt-3">{homeT("AdSentence2")}</h3>
        </div>
        <p className="leading-relaxed">{homeT("AdDescription")}</p>
      </div>

      <div className="container mt-40">
        <h4 className="font-morabba-bold text-5xl text-center">حواسمان ب زحماتتان هست</h4>
        <p className="text-center mt-6">
          با ویرا لرن میتوانید با خیال راحت دوره هایتان را روی وبسایت خودتان منتشر کنید و
          نگران نگران کپی برداری و ضبط شدن آن‌ها نباشید.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bordered-glassy-card h-72 p-3 rounded-2xl f-center flex-col">
            <Image
              unoptimized
              className="h-2/3 scale-150 w-auto"
              src={securityAuthLimitImg}
              alt="Security"
            />
            <p className="font-yekan-bakh-bold">محدودیت دسترسی</p>
            <p className="text-sm text-center mt-1">
              محدودیت دسترسی برای کاربرانی که دوره را به صورت اقساطی پرداخت کردند
            </p>
          </div>
          <div className="bordered-glassy-card relative h-72 rounded-2xl f-center flex-col p-3 col-span-2">
            <Image
              unoptimized
              className="size-9/12 absolute opacity-50 w-auto"
              src={securityPatternImg}
              alt="Security"
            />
            <Image
              unoptimized
              className="h-2/3 scale-200 w-auto"
              src={securityWatermarkImg}
              alt="Security"
            />
            <p className="font-yekan-bakh-bold">نمایش واتر‌مارک اختصاصی</p>
            <p className="text-sm text-center mt-1">
              نمایش واترمارک اختصاصی هرکاربر بر‌روی ویدیو به منظور جلوگیری از ضبط توسط
              دستگاه‌های دیگر
            </p>
          </div>
          <div className="bordered-glassy-card h-72 rounded-2xl f-center flex-col p-3 col-span-2">
            <Image
              unoptimized
              className="h-2/3 scale-150 w-auto"
              src={securityDownloadImg}
              alt="Security"
            />
            <p className="font-yekan-bakh-bold">محدودیت دسترسی</p>
            <p className="text-sm w-3/4 text-center mt-1">
              جلوگیری از عملکرد نرم‌افزار‌های ضبط صفحه و اسکرین شات در برخی از
              سیستم‌عامل‌ها و جلوگیری از دانلود غیر مجاز فایل‌های آموزشی و اشتراک‌گذاری
              آن‌ها
            </p>
          </div>
          <div className="bordered-glassy-card h-72 p-3 rounded-2xl f-center flex-col">
            <Image
              unoptimized
              alt="Security"
              src={securityLicenceImg}
              className="h-2/3 scale-150 w-auto"
            />
            <p className="font-yekan-bakh-bold">جلوگیری از ضبط و دانلود</p>
            <p className="text-sm text-center mt-1">
              مدیریت لایسنس و محدود کردن تعداد دستگاه‌ها جهت دسترسی به محتوای آموزشی
            </p>
          </div>
        </div>
      </div>

      <div className="mt-40 h-[75vh] f-center flex-col relative">
        <Image
          alt="Comment"
          unoptimized
          src={commentTextureImg}
          className="absolute w-full h-auto -z-10 opacity-75"
        />

        <div className="container lg:w-3/4 bordered-glassy-card p-6 pt-20 rounded-2xl relative">
          <div className="f-align absolute top-0 -translate-y-1/3 gap-3">
            <div className="size-24 rounded-full bg-card" />
            <p className="font-morabba-medium translate-y-full">
              علی‌رضا اسلمی - مدیرعامل آروین ویرا
            </p>
          </div>
          <div className="f-align gap-6">
            <Image
              src={commentQouteImg}
              width={48}
              height={48}
              alt="Comment"
            />
            <p className="leading-relaxed">
              ما معتقدیم موفقیت یک مدرس ثروتساز در گروی روشهایی است که برای انتقال دانش
              خود به دیگران استفاده می کند. و تدوین این روش ها به ابزار مناسب احتیاج دارد.
            </p>
            <Image
              className="rotate-180"
              src={commentQouteImg}
              width={48}
              height={48}
              alt="Comment"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
