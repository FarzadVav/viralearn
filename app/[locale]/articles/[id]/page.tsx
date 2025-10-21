import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  DotIcon,
  MailIcon,
  PencilLineIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { NextPageProps } from "@/types/app.types";
import { getArticleComments, getArticleDetail } from "@/lib/fetches/articlees.fetches";

async function ArticleDetailPage({ params }: NextPageProps) {
  const id = (await params).id;

  const article = await getArticleDetail({ id: +id });

  if (!article.result?.data) {
    return notFound();
  }

  const comments = await getArticleComments({ blogId: +id });

  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <div className="card bordered-glassy-card">
            <h1 className="heading">
              {article.result.data.title}
            </h1>
            <div className="f-align gap-3 mt-6">
              <div className="size-10 rounded-full bg-background"></div>
              <p className="f-align gap-0.5">
                <span>فرزاد وحدتی نژاد</span>
                <DotIcon className="size-5 text-primary" />
                <span>{new Date().toLocaleDateString("fa")}</span>
                <DotIcon className="size-5 text-primary" />
                <span>آموزش نرم افزار</span>
              </p>
            </div>
            <div className="w-full aspect-video bg-background rounded-2xl mt-6" />
            <p className="mt-6 leading-relaxed">
              در بخش اخبار و مقالات، جدیدترین اطلاعات و تحلیل‌ها درباره ERP و مدیریت
              سازمانی را مطالعه کنید. این محتوا شامل مقالات تخصصی و اخبار به‌روز است تا
              شما را در بهبود کسب‌وکارتان یاری دهد.
            </p>
          </div>

          <div className="bordered-glassy-card p-6 rounded-2xl mt-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
            شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
            ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </div>
        </div>
        <div className="card bordered-glassy-card lg:h-max lg:sticky lg:top-29 lg:max-h-[calc(100vh-8.75rem)] lg:overflow-y-auto max-lg:row-start-1">
          <div className="f-align gap-3">
            <Input
              className="flex-1"
              placeholder="جستجو..."
            />
            <Button size={"icon"}>
              <SearchIcon />
            </Button>
          </div>

          <p className="font-morabba-medium text-xl mt-6">دسترسی سریع</p>
          <div className="mt-3 pb-6 border-b separator-border f-align flex-wrap gap-1.5 [&>button]:bg-transparent [&>button]:rounded-full">
            <Button variant={"outline"}>برچسب یک</Button>
            <Button variant={"outline"}>برچسب دو</Button>
            <Button variant={"outline"}>برچسب سه</Button>
            <Button variant={"outline"}>برچسب چهار</Button>
            <Button variant={"outline"}>برچسب پنج</Button>
          </div>

          <p className="font-morabba-medium text-xl mt-6">مقالات مشابه</p>
          <div className="pb-6 border-b separator-border mt-3 space-y-3">
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start"
                variant={"ghost"}>
                <DotIcon />
                <span>مقاله مشابه یک</span>
              </Button>
            </Link>
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start"
                variant={"ghost"}>
                <DotIcon />
                <span>مقاله مشابه دو</span>
              </Button>
            </Link>
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start"
                variant={"ghost"}>
                <DotIcon />
                <span>مقاله مشابه سه</span>
              </Button>
            </Link>
          </div>

          <p className="font-morabba-medium text-xl mt-6">سایر دسته بندی ها</p>
          <div className="mt-3 space-y-3">
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start group"
                variant={"ghost"}>
                <DotIcon />
                <span>دسته بندی یک</span>
                <span className="text-primary mr-auto group-hover:text-primary-foreground">
                  ۲۳ مقاله
                </span>
              </Button>
            </Link>
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start group"
                variant={"ghost"}>
                <DotIcon />
                <span>دسته بندی دو</span>
                <span className="text-primary mr-auto group-hover:text-primary-foreground">
                  ۲۳ مقاله
                </span>
              </Button>
            </Link>
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start group"
                variant={"ghost"}>
                <DotIcon />
                <span>دسته بندی سه</span>
                <span className="text-primary mr-auto group-hover:text-primary-foreground">
                  ۲۳ مقاله
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 mt-40">
        <div className="lg:col-span-2">
          <h1 className="heading max-lg:text-center">محبوب ترین مقالات</h1>
          <p className="m-6 max-lg:text-center">
            در این بخش پربازدیدترین و مفیدترین مطالب درباره ERP و مدیریت سازمانی را مشاهده
            کنید. این مقالات توسط کاربران مورد توجه قرار گرفته و برای بهبود عملکرد
            کسب‌وکار شما توصیه می‌شوند.
          </p>

          {/* <div className="card bordered-glassy-card mt-6">
            <div className="f-align gap-3">
              <div className="size-12 rounded-full bg-background"></div>
              <div>
                <p className="font-yekan-bakh-bold">فرزاد وحدتی نژاد</p>
                <p className="text-sm opacity-50">
                  {new Date().toLocaleDateString("fa")}
                </p>
              </div>

              <div className="f-align mr-auto gap-1.5">
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
            <p className="leading-relaxed mt-3">بسیار عالی و مفید</p>
            <div className="pr-6 mr-6 mt-6 border-r-2 separator-border">
              <div className="f-align gap-3">
                <div className="size-12 rounded-full bg-background"></div>
                <div>
                  <p className="font-yekan-bakh-bold">فرزاد وحدتی نژاد</p>
                  <p className="text-sm opacity-50">
                    {new Date().toLocaleDateString("fa")}
                  </p>
                </div>
              </div>
              <p className="leading-relaxed mt-3">ممنون از نظر شما</p>
            </div>
          </div> */}

          {comments.result?.data.map((item) => (
            <div
              key={item.id}
              className="card bordered-glassy-card mt-6">
              <div className="f-align gap-3">
                <div className="size-12 rounded-full bg-background"></div>
                <div>
                  <p className="font-yekan-bakh-bold">{item.userFullName}</p>
                  <p className="text-sm opacity-50">
                    {new Date(item.createdOn).toLocaleDateString("fa")}
                  </p>
                </div>

                <div className="f-align mr-auto gap-1.5">
                  <StarIcon className="size-4 text-yellow-500" />
                  <StarIcon className="size-4 text-yellow-500" />
                  <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                  <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                  <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <p className="leading-relaxed mt-3">{item.text}</p>

              {item.children.length ? (
                item.children.map(itemChild => (
                  <div key={itemChild.id} className="pr-6 mr-6 mt-6 border-r-2 separator-border">
                    <div className="f-align gap-3">
                      <div className="size-12 rounded-full bg-background"></div>
                      <div>
                        <p className="font-yekan-bakh-bold">{itemChild.userFullName}</p>
                        <p className="text-sm opacity-50">
                          {new Date(itemChild.createdOn).toLocaleDateString("fa")}
                        </p>
                      </div>
                    </div>
                    <p className="leading-relaxed mt-3">{itemChild.text}</p>
                  </div>
                ))
              ) : null}
            </div>
          ))}
        </div>

        <div className="card bordered-glassy-card lg:h-max lg:sticky lg:top-29 lg:max-h-[calc(100vh-8.75rem)] lg:overflow-y-auto space-y-3">
          <p className="font-morabba-medium text-xl">ثبت نظر</p>
          <InputGroup>
            <InputGroupInput
              dir="rtl"
              placeholder="نام و نام خانوادگی"
            />
            <InputGroupAddon>
              <UserIcon />
            </InputGroupAddon>
          </InputGroup>

          <InputGroup dir="ltr">
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
            <InputGroupInput
              type="email"
              placeholder="Email آدرس"
            />
          </InputGroup>

          <InputGroup className="items-start">
            <InputGroupAddon>
              <PencilLineIcon />
            </InputGroupAddon>
            <InputGroupTextarea dir="rtl" placeholder="نوشتن نظر..." />
          </InputGroup>

          <div className="f-align justify-end">
            <Button>ارسال نظر</Button>
          </div>
        </div>
      </div>

      <div className="container mt-40">
        <h3 className="heading max-lg:text-center">محبوب ترین مقالات</h3>
        <p className="m-3 max-lg:text-center">
          در این بخش پربازدیدترین و مفیدترین مطالب درباره ERP و مدیریت سازمانی را مشاهده
          کنید. این مقالات توسط کاربران مورد توجه قرار گرفته و برای بهبود عملکرد کسب‌وکار
          شما توصیه می‌شوند.
        </p>
        <div className="grid mt-6 grid-cols-1 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="card bordered-glassy-card space-y-3">
              <div className="w-full aspect-video bg-background rounded-2xl" />
              <Link
                href={`/articles/${i}`}
                className="title line-clamp-2 hover:underline">
                ۲۰ راه حل ساده برای کاهش هزینه های سازمان
              </Link>
              <p className="leading-relaxed line-clamp-3">
                در این بخش ۲۰ روش ساده و کار آمد برای ماهش هزینه های سازمان که توسط موفق
                ترین کمپانی های دنیا اجرا شده اند ر
              </p>
              <div className="f-align gap-1.5">
                <div className="size-10 rounded-full bg-background" />
                <div>
                  <p className="text-sm">فرزاد وحدتی نژاد</p>
                  <p className="text-xs opacity-50">
                    {new Date().toLocaleDateString("fa")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleDetailPage;
