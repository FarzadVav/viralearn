"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import logoImg from "@/public/logos/logo.png";

function Footer() {
  const t = useTranslations("App");

  return (
    <footer className="glassy-card pt-20 pb-12 mt-40">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12 border-b">
        <div className="lg:col-span-2">
          <div className="f-align max-lg:justify-center gap-3">
            <Image
              alt={t("ProductName")}
              height={32}
              width={42.63}
              src={logoImg}
            />
            <span className="font-morabba-medium">{t("ProductName")}</span>
          </div>

          <p className="mt-3 max-lg:text-center">
            در آروین ویرا هر آنچه برای آنلاین کردن کسب و کارتان نیاز دارید برای شما مهیا
            کرده ایم. ما خدمات و محصولاتی داریم که تمام مراحل برای ورود کسب و کار شما به
            دنیای دیجیتال و توسعه آن را پوشش می دهند.
          </p>

          <div className="f-align gap-3 mt-3 max-lg:justify-center">
            <div className="size-9 rounded-full bg-background"></div>
            <div className="size-9 rounded-full bg-background"></div>
            <div className="size-9 rounded-full bg-background"></div>
          </div>
        </div>

        <div className="f-align justify-center lg:justify-end gap-3">
          <div className="size-20 rounded-2xl bg-background"></div>
          <div className="size-20 rounded-2xl bg-background"></div>
        </div>
      </div>

      <div className="container grid grid-cols-2 lg:grid-cols-5 gap-6 mt-12 pb-12 border-b">
        <div>
          <span className="title">امکانات</span>
          <ul className="mt-1.5 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>

        <div>
          <span className="title">امکانات</span>
          <ul className="mt-1.5 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>

        <div>
          <span className="title">امکانات</span>
          <ul className="mt-1.5 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>

        <div>
          <span className="title">امکانات</span>
          <ul className="mt-1.5 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>

        <div>
          <span className="title">امکانات</span>
          <ul className="mt-1.5 space-y-1.5">
            <li>مدیریت دوره آموزشی</li>
            <li>مدیریت وبینار</li>
            <li>مدیریت ارتباط با مشتریان </li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-12">© Design & Develop By ArvinVira Group</p>
    </footer>
  );
}

export default Footer;
