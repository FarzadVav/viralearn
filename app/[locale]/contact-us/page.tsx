import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactUsPage() {
  return (
    <>
      <div className="container glassy-card rounded-2xl mt-6 grid grid-cols-3 gap-6 p-6">
        <div className="size-96 bg-background rounded-2xl"></div>
        <div className="flex justify-center flex-col col-span-2">
          <h1 className="text-5xl font-morabba-bold">نظرات شما</h1>
          <p className="leading-relaxed mt-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </p>
          <div className="flex flex-col gap-3 mt-3">
            <div className="w-full grid grid-cols-2 gap-3">
              <Input placeholder="نام و نام خانوادگی" />
              <Input
                type="email"
                placeholder="آدرس Email"
                dir="ltr"
              />
              <Textarea
                className="col-span-2"
                placeholder="نوشتن نظر..."
              />
            </div>
            <Button className="w-max mr-auto">ارسال نظر</Button>
          </div>
        </div>
      </div>

      <div className="container f-center flex-col mt-40">
        <h2 className="text-5xl font-morabba-bold">
          ارتباط با ما تضمین اینده کسب و کار شماست...
        </h2>
        <p className="mt-6">
          اجازه دهید با راهکارهای تخصصی و پشتیبانی دلسوزانه، مسیر موفقیت شما را هموار کنیم
        </p>
        <div className="grid grid-cols-4 mt-6 gap-3">
          <div className="bordered-glassy-card f-center flex-col p-6 rounded-2xl gap-3">
            <MapPinIcon className="size-12 text-primary fill-primary/10" />
            <span className="font-yekan-bakh-bold text-xl">آدرس</span>
            <p className="text-center">
              خراسان رضوی، مشهد، بلوار خیام، خیام جنوبی ۲۶ پلاک ۱۰، طبقه ۵
            </p>
          </div>
          <div className="bordered-glassy-card f-center flex-col p-6 rounded-2xl gap-3">
            <PhoneIcon className="size-12 text-primary fill-primary/10" />
            <span className="font-yekan-bakh-bold text-xl">تماس</span>
            <p className="text-center">
              +98-9123487980
              <br />
              +98-9256842252
            </p>
          </div>
          <div className="bordered-glassy-card f-center flex-col p-6 rounded-2xl gap-3">
            <MailIcon className="size-12 text-primary fill-primary/10" />
            <span className="font-yekan-bakh-bold text-xl">ایمیل</span>
            <p className="text-center">Info@loremIpsum</p>
          </div>
          <div className="bordered-glassy-card f-center flex-col p-6 rounded-2xl gap-3">
            <GlobeIcon className="size-12 text-primary fill-primary/10" />
            <span className="font-yekan-bakh-bold text-xl">وب سایت</span>
            <p className="text-center">www.arvinvira.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
