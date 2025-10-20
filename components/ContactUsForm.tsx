"use client";

import { toast } from "sonner";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { postContactUsAction } from "@/lib/actions/general.actions";

function ContactUsForm() {
  return (
    <form
      className="container glassy-card rounded-2xl mt-6 grid grid-cols-3 gap-6 p-6"
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
      <div className="flex justify-center flex-col col-span-2">
        <h1 className="text-5xl font-morabba-bold">نظرات شما</h1>
        <p className="leading-relaxed mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است
        </p>
        <div className="flex flex-col gap-3 mt-3">
          <div className="w-full grid grid-cols-2 gap-3">
            <Input name="fullname" placeholder="نام و نام خانوادگی" />
            <Input
              name="contact_channel"
              type="email"
              placeholder="آدرس Email"
              dir="ltr"
            />
            <Textarea
              name="message"
              className="col-span-2"
              placeholder="نوشتن نظر..."
            />
          </div>
          <Button className="w-max mr-auto">ارسال نظر</Button>
        </div>
      </div>
    </form>
  )
}

export default ContactUsForm;