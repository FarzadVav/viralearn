"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";
import { Link } from "@/i18n/navigation";
import logoImg from "@/public/logos/logo.png";

function Header() {
  const t = useTranslations("App");

  return (
    <header className="container mt-3 sticky top-3 z-40">
      <div className="glassy-card rounded-2xl f-align h-20 px-6">
        <div className="f-align gap-3">
          <Image
            alt={t("ProductName")}
            height={32}
            width={42.63}
            src={logoImg}
          />
          <span className="font-morabba-medium">{t("ProductName")}</span>
        </div>

        <nav className="f-align gap-3 mx-auto font-yekan-bakh-bold [&>a>button]:rounded-full max-lg:hidden">
          <Link href={"/"}>
            <Button
              size={"lg"}
              variant={"ghost"}>
              {t("Home")}
            </Button>
          </Link>
          <Link href={"/features"}>
            <Button
              size={"lg"}
              variant={"ghost"}>
              {t("Features")}
            </Button>
          </Link>
          <Link href={"/samples"}>
            <Button
              size={"lg"}
              variant={"ghost"}>
              {t("Samples")}
            </Button>
          </Link>
          <Link href={"/pricing"}>
            <Button
              size={"lg"}
              variant={"ghost"}>
              {t("Pricing")}
            </Button>
          </Link>
          <Link href={"/articles"}>
            <Button
              size={"lg"}
              variant={"ghost"}>
              {t("Articles")}
            </Button>
          </Link>
          <Link href={"/about-us"}>
            <Button
              size={"lg"}
              variant={"ghost"}>
              {t("AboutUs")}
            </Button>
          </Link>
          <Link href={"/contact-us"}>
            <Button
              size={"lg"}
              variant={"ghost"}>
              {t("ContactUs")}
            </Button>
          </Link>
        </nav>

        <div className="f-align gap-3 max-lg:mr-auto">
          <Link
            className="font-yekan-bakh-bold"
            href={""}>
            <Button size={"lg"}>{t("CallingUs")}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
