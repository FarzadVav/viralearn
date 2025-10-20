import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import ContactUsForm from "@/components/ContactUsForm";

function ContactUsPage() {
  return (
    <>
      <ContactUsForm />

      <div className="container f-center flex-col mt-40">
        <h2 className="heading text-center">
          ارتباط با ما تضمین اینده کسب و کار شماست...
        </h2>
        <p className="mt-6 text-center">
          اجازه دهید با راهکارهای تخصصی و پشتیبانی دلسوزانه، مسیر موفقیت شما را هموار کنیم
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 gap-3">
          <div className="card bordered-glassy-card f-center flex-col gap-3">
            <MapPinIcon className="size-9 lg:size-12 text-primary fill-primary/10" />
            <span className="title">آدرس</span>
            <p className="text-center max-lg:text-sm">
              خراسان رضوی، مشهد، بلوار خیام، خیام جنوبی ۲۶ پلاک ۱۰، طبقه ۵
            </p>
          </div>
          <div className="bordered-glassy-card f-center flex-col p-6 rounded-2xl gap-3">
            <PhoneIcon className="size-9 lg:size-12 text-primary fill-primary/10" />
            <span className="title">تماس</span>
            <p className="text-center max-lg:text-sm">
              +98-9123487980
              <br />
              +98-9256842252
            </p>
          </div>
          <div className="bordered-glassy-card f-center flex-col p-6 rounded-2xl gap-3">
            <MailIcon className="size-9 lg:size-12 text-primary fill-primary/10" />
            <span className="title">ایمیل</span>
            <p className="text-center max-lg:text-sm">Info@loremIpsum</p>
          </div>
          <div className="bordered-glassy-card f-center flex-col p-6 rounded-2xl gap-3">
            <GlobeIcon className="size-9 lg:size-12 text-primary fill-primary/10" />
            <span className="title">وب سایت</span>
            <p className="text-center max-lg:text-sm">www.arvinvira.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
