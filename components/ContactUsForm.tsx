"use client";

import { toast } from "sonner";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { postContactUsAction } from "@/lib/actions/general.actions";

function ContactUsForm() {
  return (
    <div className="container mt-6">
      <form
        className="card glassy-card grid grid-cols-1 lg:grid-cols-3 gap-6"
        action={async fd => {
          const res = await postContactUsAction(fd);

          if (res?.data) {
            toast.success("درخواست ارسال شد")
          } else {
            toast.error("خطای ناشناس سمت سرور")
          }
        }}
      >
        <div className="size-96 bg-background rounded-2xl"></div>
        <div className="flex justify-center flex-col lg:col-span-2 max-lg:items-center">
          <h1 className="heading">نظرات شما</h1>
          <p className="leading-relaxed max-lg:text-center mt-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </p>
          <div className="w-full flex flex-col gap-3 mt-3">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
              <Input name="fullname" placeholder="نام و نام خانوادگی" />
              <Input
                name="contact_channel"
                type="email"
                placeholder="آدرس Email"
                dir="ltr"
              />
              <Textarea
                name="message"
                className="lg:col-span-2"
                placeholder="نوشتن نظر..."
              />
            </div>
            <Button className="w-max mr-auto">ارسال نظر</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm;