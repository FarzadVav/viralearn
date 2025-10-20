import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  CircleCheckIcon,
  CircleXIcon,
  StarIcon,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getFaqs } from "@/lib/fetches/general.fetches";
import features1Img from "@/public/images/features-1.png";
import features2Img from "@/public/images/features-2.png";
import features3Img from "@/public/images/features-3.png";
import cooperationImg from "@/public/images/cooperation.png";
import howToStartImg from "@/public/images/how-to-start.png";
import commentQouteImg from "@/public/images/comment-quote.png";
import commentTextureImg from "@/public/images/comment-texture.png";
import securityLicenceImg from "@/public/images/security-licence.png";
import securityPatternImg from "@/public/images/security-pattern.png";
import securityDownloadImg from "@/public/images/security-download.png";
import securityWatermarkImg from "@/public/images/security-watermark.png";
import securityAuthLimitImg from "@/public/images/security-auth-limit.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HomeDemoRequestForm from "@/components/HomeDemoRequestForm";

async function Page() {
  const appT = await getTranslations("App");
  const homeT = await getTranslations("HomePage");

  const faqs = await getFaqs({ pageNumber: 1, pageSize: 4, keyword: "", orderBy: [""] });

  return (
    // TODO: Add blury circles
    <>
      {/* // TODO: Discussion for hero section, Add icons, Add switch reactivity, Add glow hover effect */}
      <section className="container mt-6">
        <div className="card bordered-glassy-card f-center flex-col">
          <h2 className="sub-heading">{appT("ProductTopic")}</h2>
          <h1 className="heading mt-9 text-center">{appT("ProductSlogan")}</h1>
          <p className="font-yekan-bakh-bold text-primary mt-9">
            {appT("ProductDescription")}
          </p>
          <div className="f-align gap-3 mt-6">
            <Button>{appT("ProductOrder")}</Button>
            <Button variant={"link"}>
              <span>{appT("ProductDemo")}</span>
              <ChevronLeftIcon />
            </Button>
          </div>

          <div className="w-full grid grid-cols-3 gap-3 mt-12 lg:grid-cols-5 lg:gap-6 lg:w-3/4">
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

          <div className="f-align mt-6 gap-3 max-lg:flex-col lg:justify-between lg:w-3/4">
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
      </section>

      <div className="container grid grid-cols-1 gap-6 mt-40 lg:grid-cols-2">
        <div className="flex justify-center flex-col gap-3 max-lg:items-center">
          <p className="sub-heading">{homeT("AdSentence1")}</p>
          <h3 className="heading">{homeT("AdSentence2")}</h3>
        </div>
        <p className="max-lg:text-center leading-relaxed">{homeT("AdDescription")}</p>
      </div>

      {/* // TODO: Fix image files from Figma */}
      <div className="container mt-40">
        <h4 className="text-center heading">حواسمان ب زحماتتان هست</h4>
        <p className="text-center mt-3">
          با ویرا لرن میتوانید با خیال راحت دوره هایتان را روی وبسایت خودتان منتشر کنید و
          نگران نگران کپی برداری و ضبط شدن آن‌ها نباشید.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
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
          <div className="bordered-glassy-card relative h-72 rounded-2xl f-center flex-col p-3 lg:col-span-2">
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
          <div className="bordered-glassy-card h-72 rounded-2xl f-center flex-col p-3 lg:col-span-2">
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
          className="absolute w-full h-full lg:h-auto -z-10 opacity-75"
        />

        <div className="container lg:w-3/4">
          <div className="card bordered-glassy-card pt-20 relative">
            <div className="f-align absolute top-0 -translate-y-1/3 gap-3">
              <div className="size-16 lg:size-20 rounded-full bg-foreground" />
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
      </div>

      <div className="container mt-40">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <Image
            width={640}
            height={434}
            alt="Features"
            src={features1Img}
            className="w-full h-auto"
          />
          <div className="flex justify-center flex-col items-center lg:items-start">
            <Button
              variant={"outline"}
              className="pointer-events-none"
              size={"sm"}>
              امکانات اکسیژن
            </Button>
            <h6 className="sub-heading mt-3">تعامل پر فروش</h6>
            <p className="mt-3 max-lg:text-center">
              با به کارگیری امکانات تعاملی ویرالرن مانند انجمن گفتگو و دریافت گزارشات حرفه
              ای؛ پشتیبانی از دانشجویان را به بهترین نحو ممکن مدیریت کنید و از طریق این
              ارتباط موثر، فرصت‌های فروش بیشتری رقم بزنید.
            </p>
            <Link
              className="mt-3 mr-auto"
              href={""}>
              <Button variant={"link"}>
                <span>مطالعه بیشتر</span>
                <ChevronLeftIcon />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 mt-6">
          <div className="flex justify-center flex-col items-center lg:items-start">
            <Button
              variant={"outline"}
              className="pointer-events-none"
              size={"sm"}>
              امکانات اکسیژن
            </Button>
            <h6 className="sub-heading mt-3">
              طراحی و مدیریت دوره ها سریع‌تر از همیشه
            </h6>
            <p className="mt-3 max-lg:text-center">
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
            className="w-full h-auto max-lg:row-start-1"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 mt-6">
          <Image
            width={640}
            height={434}
            alt="Features"
            src={features3Img}
            className="w-full h-auto"
          />
          <div className="flex justify-center items-center flex-col lg:items-start">
            <Button
              variant={"outline"}
              className="pointer-events-none"
              size={"sm"}>
              امکانات اکسیژن
            </Button>
            <h6 className="sub-heading mt-6">طراحی مدرک با چند کلیک !</h6>
            <p className="mt-3 max-lg:text-center">
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
          className="pointer-events-none"
          size={"sm"}>
          محصولات
        </Button>

        <h6 className="sub-heading mt-3">پروژه انگلیش کلینیک</h6>
        <p className="text-center mt-3">
          با ویرا لرن میتوانید با خیال راحت دوره هایتان را روی وبسایت خودتان منتشر کنید و
          نگران نگران کپی برداری و ضبط شدن آن‌ها نباشید.
        </p>

        <Image
          width={640}
          height={434}
          alt="Cooperation"
          className="mt-3"
          src={cooperationImg}
        />
      </div>

      <div className="container f-center flex-col mt-40">
        <Button
          variant={"outline"}
          className="pointer-events-none"
          size={"sm"}>
          مراحل ساخت حساب
        </Button>

        <h6 className="heading mt-3">چطور شروع کنم؟</h6>
        <p className="text-center mt-3">
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
          className="mt-3"
          src={howToStartImg}
        />
      </div>

      {/* <div className="container f-center flex-col mt-40">
        <Button
          variant={"outline"}
          className="pointer-events-none"
          size={"sm"}>
          بسته ها
        </Button>
        <h6 className="heading text-center mt-3">
          بهینه‌سازی با یک انتخاب درست شروع می‌شود
        </h6>

        <div className="max-lg:w-full mt-6 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-12">
          <div className="f-center flex-col card bordered-glassy-card">
            <span className="font-yekan-bakh-bold text-primary">پایه</span>
            <p className="title mt-1.5">
              {(1_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="mt-3 pointer-events-none"
              size={"sm"}
              variant={"soft"}>
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

          <div className="f-center flex-col card bordered-glassy-card lg:bg-foreground/20 lg:border-foreground lg:scale-110">
            <span className="font-yekan-bakh-bold text-success">به صرفه</span>
            <p className="title mt-1.5">
              {(6_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="mt-3 pointer-events-none"
              size={"sm"}
              variant={"soft"}>
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

          <div className="f-center flex-col card bordered-glassy-card">
            <span className="font-yekan-bakh-bold text-primary">پایه</span>
            <p className="title mt-1.5">
              {(1_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="mt-3 pointer-events-none"
              size={"sm"}
              variant={"soft"}>
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
      </div> */}

      {/* // TODO: Add carousel */}
      <div className="container f-center flex-col mt-40">
        <Button
          variant={"outline"}
          className="pointer-events-none"
          size={"sm"}>
          نظرات
        </Button>
        <h6 className="heading mt-3">تجربه‌ی استفاده از ویرالرن</h6>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="card bordered-glassy-card">
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
          <div className="card bordered-glassy-card">
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
          <div className="card bordered-glassy-card">
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
          className="pointer-events-none"
          size={"sm"}>
          سوالات متداول
        </Button>

        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 lg:grid-cols-2 mt-6 gap-3"
          defaultValue="item-1">
          {faqs.result?.data.map(item => (
            <AccordionItem
              key={item.id}
              className="w-full"
              value={`item-${item.id}`}>
              <AccordionTrigger className="w-full">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {item.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Link className="mt-6" href={"/faq"}>
          <Button>مشاهده همه</Button>
        </Link>
      </div>

      <HomeDemoRequestForm />
    </>
  );
}

export default Page;
