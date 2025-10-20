"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { MenuIcon, XIcon } from "lucide-react";

import { Button } from "./ui/button";
import logoImg from "@/public/logos/logo.png";
import { Link, usePathname } from "@/i18n/navigation";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "./ui/sheet";


function Header() {
  const pathname = usePathname();
  const t = useTranslations("App");

  const LINKS = [
    { name: t("Home"), href: "/" },
    { name: t("Features"), href: "/features" },
    { name: t("Samples"), href: "/samples" },
    // { name: t("Pricing"), href: "/pricing" },
    { name: t("Articles"), href: "/articles" },
    { name: t("AboutUs"), href: "/about-us" },
    { name: t("ContactUs"), href: "/contact-us" },
  ]

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
          {LINKS.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button
                size={"lg"}
                variant={pathname.endsWith(item.href) ? "default" : "ghost"}>
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="f-align gap-3 max-lg:mr-auto">
          <Link
            className="font-yekan-bakh-bold"
            href={""}>
            <Button className="max-lg:bg-transparent max-lg:hover:bg-foreground/10" size={"lg"}>{t("CallingUs")}</Button>
          </Link>

          <Sheet>
            <SheetTrigger className="lg:hidden" asChild>
              <Button variant="ghost" size={"icon"}>
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-3">
              {LINKS.map((item) => (
                <Link className="block" href={item.href} key={item.name}>
                  <Button
                    className="w-full"
                    variant={pathname.endsWith(item.href) ? "default" : "outline"}>
                    {item.name}
                  </Button>
                </Link>
              ))}

              <SheetFooter>
                <SheetClose asChild>
                  <Button variant={"outline"} className="justify-between">
                    <span>
                      بستن
                    </span>
                    <XIcon />
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
