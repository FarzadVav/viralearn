import { ChevronLeftIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { getFeatures } from "@/lib/fetches/features.fetches";
import { CategoryT } from "@/types/api/general.api.types";
import Image from "next/image";

async function FeaturesPage() {
  const features = await getFeatures();

  const withChildren: CategoryT[] = [];
  const withoutChildren: CategoryT[] = [];
  features.result?.data.forEach(item => {
    if (item.children.length) {
      withChildren.push(item);
    } else {
      withoutChildren.push(item);
    }
  })

  return (
    // TODO: Add icon, title and description for cards
    <>
      <div className="container mt-6">
        <div className="h-96 glassy-card rounded-2xl"></div>
      </div>

      <div className="container mt-40">
        {withChildren.map(item => (
          <div className="not-first:mt-40" key={item.id}>
            <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
              <h6 className="heading">{item.name}</h6>
              <Link href={`/features/${item.id}`}>
                <Button variant={"soft"}>
                  <span>جزئیات بیشتر</span>
                  <ChevronLeftIcon />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
              {item.children.map((item) => (
                <div key={item.id} className="card bordered-glassy-card">
                  <div className="f-align gap-3">
                    <Image
                      width={48}
                      height={48}
                      alt={item.name}
                      className="size-12"
                      src={process.env.NEXT_PUBLIC_API_BASE_URL + item.thumbnail}
                    />
                    <p>
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-40">
        <div>
          <div className="f-align lg:justify-between gap-3 max-lg:flex-col">
            <h6 className="heading">سایر ویژگی ها</h6>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-3">
            {withoutChildren.map((item) => (
              <div key={item.id} className="card bordered-glassy-card">
                {item.name}
              </div>
            ))}
          </div>
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
