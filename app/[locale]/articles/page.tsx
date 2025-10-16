import { SearchIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ArticlesPage() {
  return (
    <>
      <div className="container h-96 glassy-card rounded-2xl mt-6"></div>

      <div className="w-max max-w-full f-align gap-1.5 p-1.5 mx-auto mt-40 rounded-full bordered-glassy-card [&>button]:rounded-full">
        <Button>همه مقالات</Button>
        <Button variant={"ghost"}>آموزش مجازی هاور</Button>
        <Button variant={"ghost"}>آموزش هیبریدی</Button>
        <Button variant={"ghost"}>ارزشبابی توصیفی</Button>
        <Button variant={"ghost"}>مدیریت آموزش</Button>
        <Button variant={"ghost"}>آموزش نوجوانان</Button>
      </div>
      <div className="w-max max-w-full f-align gap-3 mx-auto mt-6">
        <Input placeholder="جستجو..." />
        <Button size={"icon"}>
          <SearchIcon />
        </Button>
      </div>

      <div className="container mt-40">
        <h1 className="text-5xl font-morabba-bold">محبوب ترین مقالات</h1>
        <p className="m-3">
          در این بخش پربازدیدترین و مفیدترین مطالب درباره ERP و مدیریت سازمانی را مشاهده
          کنید. این مقالات توسط کاربران مورد توجه قرار گرفته و برای بهبود عملکرد کسب‌وکار
          شما توصیه می‌شوند.
        </p>
        <div className="grid mt-6 grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bordered-glassy-card p-3 rounded-2xl space-y-3">
              <div className="w-full aspect-video bg-background rounded-2xl" />
              <Link
                href={`/articles/${i}`}
                className="font-yekan-bakh-bold line-clamp-2 hover:underline">
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
}

export default ArticlesPage;
