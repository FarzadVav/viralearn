import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  CircleCheckIcon,
  CircleXIcon,
  StarIcon,
} from "lucide-react";

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
import features1Img from "@/public/images/features-1.png";
import features2Img from "@/public/images/features-2.png";
import features3Img from "@/public/images/features-3.png";
import cooperationImg from "@/public/images/cooperation.png";
import howToStartImg from "@/public/images/how-to-start.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

async function Page() {
  const appT = await getTranslations("App");
  const homeT = await getTranslations("HomePage");

  return (
    // TODO: Add blury circles
    <>
      {/* // TODO: Discussion for hero section, Add icons, Add switch reactivity, Add glow hover effect */}
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

      {/* // TODO: Fix image files from Figma */}
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

      <div className="mt-40 h-[60vh] f-center flex-col relative">
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

      <div className="container mt-40">
        <div className="grid grid-cols-2">
          <Image
            width={640}
            height={434}
            alt="Features"
            src={features1Img}
            className="w-full h-auto"
          />
          <div className="flex justify-center items-start flex-col">
            <Button
              variant={"outline"}
              disabled
              size={"sm"}>
              امکانات اکسیژن
            </Button>
            <h6 className="text-3xl font-morabba-bold mt-6">تعامل پر فروش</h6>
            <p className="mt-3">
              با به کارگیری امکانات تعاملی ویرالرن مانند انجمن گفتگو و دریافت گزارشات حرفه
              ای؛ پشتیبانی از دانشجویان را به بهترین نحو ممکن مدیریت کنید و از طریق این
              ارتباط موثر، فرصت‌های فروش بیشتری رقم بزنید.
            </p>
            <Link
              className="mr-auto"
              href={""}>
              <Button variant={"link"}>
                <span>مطالعه بیشتر</span>
                <ChevronLeftIcon />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex justify-center items-start flex-col">
            <Button
              variant={"outline"}
              disabled
              size={"sm"}>
              امکانات اکسیژن
            </Button>
            <h6 className="text-3xl font-morabba-bold mt-6">
              طراحی و مدیریت دوره ها سریع‌تر از همیشه
            </h6>
            <p className="mt-3">
              ساخت دوره هرگز به این آسانی نبوده است. با ویرا لرن، بدون نیاز به هیچگونه
              دانش فنی، می‌توانید دوره آموزشی خود را بسازید، دروس را فصل بندی کنید،
              آزمون‌ها و تکالیف را طراحی کرده و به بهترین روش ممکن آموزش خود را ارائه
              دهید.
            </p>
            <div className="w-full f-align gap-3 mt-3 justify-end">
              <Link href={""}>
                <Button>دریافت دمو</Button>
              </Link>
              <Link href={""}>
                <Button variant={"link"}>
                  <span>مطالعه بیشتر</span>
                  <ChevronLeftIcon />
                </Button>
              </Link>
            </div>
          </div>
          <Image
            width={640}
            height={434}
            alt="Features"
            src={features2Img}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-2">
          <Image
            width={640}
            height={434}
            alt="Features"
            src={features3Img}
            className="w-full h-auto"
          />
          <div className="flex justify-center items-start flex-col">
            <Button
              variant={"outline"}
              disabled
              size={"sm"}>
              امکانات اکسیژن
            </Button>
            <h6 className="text-3xl font-morabba-bold mt-6">طراحی مدرک با چند کلیک !</h6>
            <p className="mt-3">
              با قابلیت طراحی مدرک پایان دوره، به همراه لوگو و سربرگ تجاری خودتان میتوانید
              به تدریس خود اعتبار بخشید. علاوه بر این، ویرالرن امکان گرفتن استعلام مدرک را
              نیز برای دانشجویانتان فراهم کرده است تا بتوانند از تایید صحت آن در مراکز و
              موسسات مرتبط استفاده کنند.
            </p>
            <div className="w-full f-align gap-3 mt-3 justify-end">
              <Link href={""}>
                <Button>دریافت دمو</Button>
              </Link>
              <Link href={""}>
                <Button variant={"link"}>
                  <span>مطالعه بیشتر</span>
                  <ChevronLeftIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* // TODO: Add carousel */}
      <div className="container f-center flex-col mt-40">
        <Button
          variant={"outline"}
          disabled
          size={"sm"}>
          محصولات
        </Button>

        <h6 className="text-5xl font-morabba-bold mt-6">پروژه انگلیش کلینیک</h6>
        <p className="text-center mt-6">
          با ویرا لرن میتوانید با خیال راحت دوره هایتان را روی وبسایت خودتان منتشر کنید و
          نگران نگران کپی برداری و ضبط شدن آن‌ها نباشید.
        </p>

        <Image
          width={640}
          height={434}
          alt="Cooperation"
          className="mt-6"
          src={cooperationImg}
        />
      </div>

      <div className="container f-center flex-col mt-40">
        <Button
          variant={"outline"}
          disabled
          size={"sm"}>
          مراحل ساخت حساب
        </Button>

        <h6 className="text-5xl font-morabba-bold mt-6">چطور شروع کنم؟</h6>
        <p className="text-center mt-6">
          اولین ویژگی برجسته این نرم‌افزار، قابلیت گیمیفیکیشن است. با استفاده از این
          ابزار، مدرسان قادرند تا محتوای آموزشی خود را با افزودن عناصر جذاب گیمیفیکیشن،
          تبدیل به یک تجربه‌ی تعلیمی مشوق‌بخش برای دانشجویان خود کنند. این روش، به
          دانشجویان انگیزه بیشتری برای یادگیری می‌دهد و تاثیر مثبت بسیاری بر روی نتایج
          آموزشی دارد.
        </p>

        <Image
          width={640}
          height={434}
          alt="Cooperation"
          className="mt-6"
          src={howToStartImg}
        />
      </div>

      <div className="container f-center flex-col mt-40">
        <Button
          variant={"outline"}
          className="showcase-btn"
          size={"sm"}>
          بسته ها
        </Button>

        <h6 className="text-4xl font-morabba-bold mt-6">
          بهینه‌سازی با یک انتخاب درست شروع می‌شود
        </h6>

        <div className="mt-12 grid grid-cols-3 gap-9">
          <div className="f-center flex-col bordered-glassy-card p-9 rounded-2xl">
            <span className="font-yekan-bakh-bold text-primary">پایه</span>
            <p className="font-yekan-bakh-bold text-2xl mt-1.5">
              {(1_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="mt-3 showcase-btn"
              size={"sm"}>
              پرداخت سه ماه
            </Button>
            <ul className="w-full mt-6 space-y-3 text-sm">
              <div className="f-align gap-3">
                <CircleCheckIcon className="text-primary size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
              <div className="f-align gap-3">
                <CircleXIcon className="text-destructive size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
            </ul>
            <Link
              className="mt-6"
              href={""}>
              <Button variant={"ghost"}>خرید</Button>
            </Link>
          </div>

          <div className="f-center flex-col bordered-glassy-card bg-card/30 p-9 rounded-2xl scale-110">
            <span className="font-yekan-bakh-bold text-success">به صرفه</span>
            <p className="font-yekan-bakh-bold text-2xl mt-1.5">
              {(6_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="showcase-btn mt-3"
              size={"sm"}>
              پرداخت دوازده ماه
            </Button>
            <ul className="w-full mt-6 space-y-3 text-sm">
              <div className="f-align gap-3">
                <CircleCheckIcon className="text-primary size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
              <div className="f-align gap-3">
                <CircleXIcon className="text-destructive size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
            </ul>
            <Link
              className="mt-6"
              href={""}>
              <Button>خرید</Button>
            </Link>
          </div>

          <div className="f-center flex-col bordered-glassy-card p-9 rounded-2xl">
            <span className="font-yekan-bakh-bold text-primary">پایه</span>
            <p className="font-yekan-bakh-bold text-2xl mt-1.5">
              {(1_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="mt-3 showcase-btn"
              size={"sm"}>
              پرداخت سه ماه
            </Button>
            <ul className="w-full mt-6 space-y-3 text-sm">
              <div className="f-align gap-3">
                <CircleCheckIcon className="text-primary size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
              <div className="f-align gap-3">
                <CircleXIcon className="text-destructive size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
            </ul>
            <Link
              className="mt-6"
              href={""}>
              <Button variant={"ghost"}>خرید</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* // TODO: Add carousel */}
      <div className="container f-center flex-col mt-40">
        <Button
          variant={"outline"}
          className="showcase-btn"
          size={"sm"}>
          نظرات
        </Button>

        <h6 className="text-4xl font-morabba-bold mt-6">تجربه‌ی استفاده از ویرالرن</h6>

        <div className="mt-16 grid grid-cols-3 gap-6">
          <div className="bordered-glassy-card p-9 rounded-2xl">
            <div className="f-center flex-col -translate-y-1/2">
              <div className="size-16 rounded-full bg-card" />
              <p className="font-yekan-bakh-bold mt-3">مدیر عامل هلیدینگ آریا</p>
              <div className="f-align gap-1.5 mt-1.5">
                <StarIcon className="size-5 text-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
            <p className="leading-relaxed">
              با اکسیژن توانستیم هزینه‌های عملیاتی خود را به میزان قابل توجهی کاهش دهیم.
              یکپارچگی اطلاعات و خودکارسازی فرآیندها باعث شده تا دقت و سرعت در بخش‌های
              مختلف سازمان بیشتر شود. انتخاب این ERP بهترین تصمیم مدیریتی ما بود.
            </p>
          </div>
          <div className="bordered-glassy-card p-9 rounded-2xl">
            <div className="f-center flex-col -translate-y-1/2">
              <div className="size-16 rounded-full bg-card" />
              <p className="font-yekan-bakh-bold mt-3">مدیر عامل هلیدینگ آریا</p>
              <div className="f-align gap-1.5 mt-1.5">
                <StarIcon className="size-5 text-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
            <p className="leading-relaxed">
              با اکسیژن توانستیم هزینه‌های عملیاتی خود را به میزان قابل توجهی کاهش دهیم.
              یکپارچگی اطلاعات و خودکارسازی فرآیندها باعث شده تا دقت و سرعت در بخش‌های
              مختلف سازمان بیشتر شود. انتخاب این ERP بهترین تصمیم مدیریتی ما بود.
            </p>
          </div>
          <div className="bordered-glassy-card p-9 rounded-2xl">
            <div className="f-center flex-col -translate-y-1/2">
              <div className="size-16 rounded-full bg-card" />
              <p className="font-yekan-bakh-bold mt-3">مدیر عامل هلیدینگ آریا</p>
              <div className="f-align gap-1.5 mt-1.5">
                <StarIcon className="size-5 text-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-5 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
            <p className="leading-relaxed">
              با اکسیژن توانستیم هزینه‌های عملیاتی خود را به میزان قابل توجهی کاهش دهیم.
              یکپارچگی اطلاعات و خودکارسازی فرآیندها باعث شده تا دقت و سرعت در بخش‌های
              مختلف سازمان بیشتر شود. انتخاب این ERP بهترین تصمیم مدیریتی ما بود.
            </p>
          </div>
        </div>
      </div>

      <div className="container f-center flex-col mt-40">
        <Button
          variant={"outline"}
          className="showcase-btn"
          size={"sm"}>
          سوالات متداول
        </Button>

        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-2 mt-6 gap-6"
          defaultValue="item-1">
          <AccordionItem
            className="w-full"
            value="item-1">
            <AccordionTrigger className="w-full">
              ایا امکان شخصی سازی قالب و ظاهر سایت و اپلیکیشن وجود دارد؟
            </AccordionTrigger>
            <AccordionContent>
              <p>
                اکسیژن از آخرین تکنولوژی‌های رمزنگاری و امنیتی برای حفاظت از داده‌های شما
                استفاده می‌کند. داده‌های شما در برابر هرگونه نفوذ و دسترسی غیرمجاز محافظت
                می‌شوند.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="w-full"
            value="item-2">
            <AccordionTrigger className="w-full">
              ایا امکان شخصی سازی قالب و ظاهر سایت و اپلیکیشن وجود دارد؟
            </AccordionTrigger>
            <AccordionContent>
              <p>
                اکسیژن از آخرین تکنولوژی‌های رمزنگاری و امنیتی برای حفاظت از داده‌های شما
                استفاده می‌کند. داده‌های شما در برابر هرگونه نفوذ و دسترسی غیرمجاز محافظت
                می‌شوند.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="w-full"
            value="item-3">
            <AccordionTrigger className="w-full">
              ایا امکان شخصی سازی قالب و ظاهر سایت و اپلیکیشن وجود دارد؟
            </AccordionTrigger>
            <AccordionContent>
              <p>
                اکسیژن از آخرین تکنولوژی‌های رمزنگاری و امنیتی برای حفاظت از داده‌های شما
                استفاده می‌کند. داده‌های شما در برابر هرگونه نفوذ و دسترسی غیرمجاز محافظت
                می‌شوند.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="w-full"
            value="item-4">
            <AccordionTrigger className="w-full">
              ایا امکان شخصی سازی قالب و ظاهر سایت و اپلیکیشن وجود دارد؟
            </AccordionTrigger>
            <AccordionContent>
              <p>
                اکسیژن از آخرین تکنولوژی‌های رمزنگاری و امنیتی برای حفاظت از داده‌های شما
                استفاده می‌کند. داده‌های شما در برابر هرگونه نفوذ و دسترسی غیرمجاز محافظت
                می‌شوند.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default Page;
