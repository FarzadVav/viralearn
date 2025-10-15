import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

function FeaturesPage() {
  return (
    // TODO: Add icon, title and description for cards
    <>
      <div className="container h-96 glassy-card rounded-2xl mt-6"></div>

      <div className="container mt-40">
        <div className="f-align justify-between">
          <h1 className="text-5xl font-morabba-bold">مدیریت دوره آموزشی</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align justify-between">
          <h1 className="text-5xl font-morabba-bold">مدیریت وبینار</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align justify-between">
          <h1 className="text-5xl font-morabba-bold">مدیریت ارتباط با مشتریان</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align justify-between">
          <h1 className="text-5xl font-morabba-bold">فروشگاه</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align justify-between">
          <h1 className="text-5xl font-morabba-bold">امنیت</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align justify-between">
          <h1 className="text-5xl font-morabba-bold">مدیریت مالی</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align justify-between">
          <h1 className="text-5xl font-morabba-bold">وبسایت و اپلیکیشن اختصاصی</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container max-w-5xl f-center flex-col mt-40">
        <Button
          variant={"outline"}
          className="showcase-btn"
          size={"sm"}>
          مشاوره رایگان
        </Button>

        <h6 className="text-5xl font-morabba-bold mt-9">
          یک قدم تا تحول کسب‌وکارتان با مشاوره رایگان!
        </h6>

        <p className="text-center leading-relaxed mt-3">
          برای کشف بهترین راهکارهای مدیریت سازمان خود، با کارشناسان ما در تماس باشید.
          مشاوره رایگان ما به شما کمک می‌کند تا نیازهای کسب‌وکارتان را بهتر بشناسید و با
          انتخاب درست، مسیر رشد و موفقیت را هموار کنید
        </p>

        <Link className="mt-6" href={"/about-us"}>
          <Button>تماس با ما</Button>
        </Link>
      </div>
    </>
  );
}

export default FeaturesPage;
