"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logoImg from "@/public/logos/logo.png";

function Footer() {
  const t = useTranslations("App");

  return (
    <footer className="glassy-card pt-20 pb-10 mt-40">
      <div className="container grid grid-cols-3 gap-3 pb-10 border-b separator-border">
        <div className="col-span-2">
          <div className="f-align gap-3">
            <Image
              alt={t("ProductName")}
              height={32}
              width={42.63}
              src={logoImg}
            />
            <span className="font-morabba-medium">{t("ProductName")}</span>
          </div>

          <p className="mt-3">
            در آروین ویرا هر آنچه برای آنلاین کردن کسب و کارتان نیاز دارید برای شما مهیا
            کرده ایم. ما خدمات و محصولاتی داریم که تمام مراحل برای ورود کسب و کار شما به
            دنیای دیجیتال و توسعه آن را پوشش می دهند.
          </p>

          <div className="f-align gap-3 mt-3">
            <div className="size-9 rounded-full bg-background"></div>
            <div className="size-9 rounded-full bg-background"></div>
            <div className="size-9 rounded-full bg-background"></div>
          </div>
        </div>

        <div className="f-align justify-end gap-3">
          <div className="size-20 rounded-2xl bg-background"></div>
          <div className="size-20 rounded-2xl bg-background"></div>
        </div>
      </div>

      <div className="container grid grid-cols-5 gap-3 mt-10 pb-10 border-b separator-border">
        <div>
          <span className="font-yekan-bakh-bold opacity-50">امکانات</span>
          <ul className="mt-3 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>

        <div>
          <span className="font-yekan-bakh-bold opacity-50">امکانات</span>
          <ul className="mt-3 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>

        <div>
          <span className="font-yekan-bakh-bold opacity-50">امکانات</span>
          <ul className="mt-3 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>

        <div>
          <span className="font-yekan-bakh-bold opacity-50">امکانات</span>
          <ul className="mt-3 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>

        <div>
          <span className="font-yekan-bakh-bold opacity-50">امکانات</span>
          <ul className="mt-3 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>
      </div>

      <div className="container grid grid-cols-3 mt-10">
        <p className="col-span-2">© Design & Develop By ArvinVira Group</p>
        <div className="f-align gap-3">
          <Button>ارسال</Button>
          <Input
            type="email"
            placeholder="Email"
            dir="ltr"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
