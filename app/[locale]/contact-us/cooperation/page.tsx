import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

import { Clock2Icon, WalletIcon } from "lucide-react";

function CooperationPage() {
  return (
    <>
      <div className="container mt-6">
        <div className="h-96 glassy-card rounded-2xl"></div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 mt-40">
        <div>
          <h1 className="heading max-lg:text-center">برنامه نویس</h1>
          <p className="mt-3 leading-relaxed max-lg:text-center">
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
          </p>
        </div>

        <div>
          <div className="card bordered-glassy-card">
            <span className="title">برنامه نویسی وب</span>
            <p className="mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است و برای شرایط فعلی
            </p>
            <div className="f-align gap-3 mt-3">
              <Button
                variant={"ghost"}
                className="showcase-btn" size={"sm"}>
                <Clock2Icon />
                <span>تمام وقت</span>
              </Button>
              <Button
                variant={"ghost"}
                className="showcase-btn" size={"sm"}>
                <WalletIcon />
                <span>حقوق توافقی</span>
              </Button>
              <Link href={""} className="mr-auto">
                <Button>ارسال رزومه</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CooperationPage;
