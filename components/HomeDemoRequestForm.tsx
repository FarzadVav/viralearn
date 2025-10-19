"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { postContactUsAction } from "@/lib/actions/general.actions";

function HomeDemoRequestForm() {
  // TODO: Add wave pattern, Add icon to inputs
  return (
    <form className="container mt-40" action={async fd => {
      const res = await postContactUsAction(fd);

      if (res?.data) {
        alert("درخواست ارسال شد")
      } else {
        alert("خطای ناشناس سمت سرور")
      }
    }}>
      <div className="card bordered-glassy-card grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 flex justify-center flex-col max-lg:items-center">
          <h6 className="heading">
            فرصت دمو رایگان را از دست ندهید!
          </h6>
          <p className="mt-3">امکانات ویرالرن را متناسب با نیاز های خود بسنجید</p>
        </div>

        <div className="flex justify-center flex-col">
          <Label
            className="font-yekan-bakh-bold"
            htmlFor="demo-fullname">
            نام و نام خانوادگی
          </Label>
          <Input
            name="fullname"
            className="mt-3"
            placeholder="نام و نام خانوادگی"
          />

          <Label
            className="font-yekan-bakh-bold mt-6"
            htmlFor="demo-fullname">
            شماره موبایل
          </Label>
          <Input
            name="phone_number"
            className="mt-3"
            placeholder="+98 *** *** ****"
            dir="ltr"
          />

          <Button className="w-max mr-auto mt-6">ارسال</Button>
        </div>
      </div>
    </form>
  )
}

export default HomeDemoRequestForm