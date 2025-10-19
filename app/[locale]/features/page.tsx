import { ChevronLeftIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

function FeaturesPage() {
  return (
    // TODO: Add icon, title and description for cards
    <>
      <div className="container mt-6">
        <div className="h-96 glassy-card rounded-2xl"></div>
      </div>

      <div className="container mt-40">
        <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
          <h1 className="heading">مدیریت دوره آموزشی</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
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
        <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
          <h1 className="heading">مدیریت وبینار</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
          <h1 className="heading">مدیریت ارتباط با مشتریان</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
          <h1 className="heading">فروشگاه</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
          <h1 className="heading">امنیت</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
          <h1 className="heading">مدیریت مالی</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
          <div className="bordered-glassy-card p-6 rounded-2xl"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
          <h1 className="heading">وبسایت و اپلیکیشن اختصاصی</h1>
          <Link href={""}>
            <Button variant={"soft"}>
              <span>جزئیات بیشتر</span>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
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

        <h6 className="heading mt-3">
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
