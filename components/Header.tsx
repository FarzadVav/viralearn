"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";
import logoImg from "@/public/logos/logo.png";

function Header() {
  const t = useTranslations("App");

  return (
    <header className="glassy-card container mt-3 rounded-2xl f-align p-6">
      <div className="f-align gap-3">
        <Image
          alt={t("ProductName")}
          height={32}
          width={42.63}
          src={logoImg}
        />
        <span className="font-morabba-medium">{t("ProductName")}</span>
      </div>

      <nav className="f-align gap-3 mx-auto font-yekan-bakh-medium">
        <Link href={""}>
          <Button
            className="rounded-full"
            size={"lg"}
            variant={"ghost"}>
            {t("Home")}
          </Button>
        </Link>
        <Link href={""}>
          <Button
            className="rounded-full"
            size={"lg"}
            variant={"ghost"}>
            {t("Features")}
          </Button>
        </Link>
        <Link href={""}>
          <Button
            className="rounded-full"
            size={"lg"}
            variant={"ghost"}>
            {t("Samples")}
          </Button>
        </Link>
        <Link href={""}>
          <Button
            className="rounded-full"
            size={"lg"}
            variant={"ghost"}>
            {t("Pricing")}
          </Button>
        </Link>
        <Link href={""}>
          <Button
            className="rounded-full"
            size={"lg"}
            variant={"ghost"}>
            {t("Articles")}
          </Button>
        </Link>
        <Link href={""}>
          <Button
            className="rounded-full"
            size={"lg"}
            variant={"ghost"}>
            {t("AboutUs")}
          </Button>
        </Link>
        <Link href={""}>
          <Button
            className="rounded-full"
            size={"lg"}
            variant={"ghost"}>
            {t("ContactUs")}
          </Button>
        </Link>
      </nav>

      <Link
        className="font-yekan-bakh-medium"
        href={""}>
        <Button size={"lg"}>{t("CallingUs")}</Button>
      </Link>
    </header>
  );
}

export default Header;
