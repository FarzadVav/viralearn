"use client";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { freeConsultationAction } from "@/lib/actions/general.actions";

function FreeConsultationForm() {
  return (
    <form
      action={async fd => {
        const res = await freeConsultationAction(fd);

        if (res?.data) {
          toast.success("درخواست ارسال شد")
        } else {
          toast.error("خطای ناشناس سمت سرور")
        }
      }}
      className="card glassy-card rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-6"
    >

      <div className="w-full max-lg:aspect-square lg:size-96 bg-background rounded-2xl"></div>
      <div className="lg:col-span-2">
        <h1 className="heading max-lg:text-center">مشاوره رایگان</h1>
        <p className="mt-6 max-lg:text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-6">
          <Input name="firstName" placeholder="نام" />
          <Input name="lastName" placeholder="نام خانوادگی" />
          <Input
            dir="ltr"
            name="contact_channel_1"
            placeholder="+98 *** *** ****"
          />
          <Input
            dir="ltr"
            name="contact_channel_2"
            placeholder="Email آدرس"
          />
        </div>
        <div className="mt-3 flex lg:items-end max-lg:gap-6 max-lg:flex-col">
          <div>
            <p className="font-yekan-bakh-bold">چه ساعتی با شما تماس بگیریم؟</p>
            <RadioGroup
              name="calling_time"
              className="grid-cols-3 gap-6 mt-3"
              defaultValue="r2">
              <div className="f-align justify-end gap-3">
                <RadioGroupItem
                  value="7-to-13"
                  id="r1"
                />
                <Label htmlFor="r1">7 الی 13</Label>
              </div>
              <div className="f-align justify-end gap-3">
                <RadioGroupItem
                  value="13-to-19"
                  id="r2"
                />
                <Label htmlFor="r2">۱۳ الی ۱۹</Label>
              </div>
              <div className="f-align justify-end gap-3">
                <RadioGroupItem
                  value="19-to-22"
                  id="r3"
                />
                <Label htmlFor="r3">۱۹ الی ۲۲</Label>
              </div>
            </RadioGroup>
          </div>
          <Button className="w-max mr-auto">ثبت درخواست</Button>
        </div>
      </div>

    </form>
  )
}

export default FreeConsultationForm