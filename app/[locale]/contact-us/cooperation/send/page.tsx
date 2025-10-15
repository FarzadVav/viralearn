import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import cooperationRequestImg from "@/public/images/cooperation-request.png";

function SendCooperationRequestPage() {
  return (
    <>
      <div className="container glassy-card rounded-2xl mt-6 grid grid-cols-3 gap-6 p-6">
        <div className="col-span-2">
          <h1 className="text-5xl font-morabba-bold">برنامه نویسی وب</h1>
          <p className="mt-3 leading-relaxed">
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
          <div className="grid grid-cols-2 gap-3 mt-3">
            <Input placeholder="نام" />
            <Input placeholder="نام خانوادگی" />
            <Input placeholder="جنسیت" />
            <Input placeholder="تاریخ تولد" />
            <Input placeholder="مقطع تحصیلی" />
            <Input placeholder="رشته تحصیلی" />
            <Input placeholder="شماره موبایل" />
            <Input
              type="email"
              placeholder="Email آدرس"
              dir="ltr"
            />
            <div className="col-span-2 f-align gap-3">
              <Input
                className="w-max"
                id="file"
                type="file"
              />
              <Label
                className="font-yekan-bakh-bold"
                htmlFor="file">
                بارگزاری فایل رزومه
              </Label>
            </div>
          </div>
          <div className="f-align justify-end">
            <Button>ارسال</Button>
          </div>
        </div>
        <Image
          width={394}
          height={532}
          src={cooperationRequestImg}
          alt="Cooperation request"
          className="w-full h-auto"
        />
      </div>
    </>
  );
}

export default SendCooperationRequestPage;
