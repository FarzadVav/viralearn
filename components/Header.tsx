"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";
import logoImg from "@/public/logos/logo.png";
import { Link } from "@/i18n/navigation";

function Header() {
  const t = useTranslations("App");

  return (
    <header className="glassy-card sticky top-3 container mt-3 rounded-2xl f-align p-6 z-40">
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
        <Link href={"/features"}>
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
        <Link href={"/about-us"}>
          <Button
            className="rounded-full"
            size={"lg"}
            variant={"ghost"}>
            {t("AboutUs")}
          </Button>
        </Link>
        <Link href={"/contact-us"}>
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
