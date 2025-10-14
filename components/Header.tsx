import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import logoImg from "@/public/logos/logo.png";

function Header() {
  return (
    <header className="glassy-card container mt-3 rounded-2xl f-align p-6">
      <div className="f-align gap-3">
        <Image
          alt="خانه"
          height={32}
          width={42.63}
          src={logoImg}
        />
        <span className="font-morabba">خانه</span>
      </div>

      <nav className="f-align gap-3 mx-auto">
        <Link href={""}>
          <Button
            size={"lg"}
            variant={"ghost"}>
            خانه
          </Button>
        </Link>
        <Link href={""}>
          <Button
            size={"lg"}
            variant={"ghost"}>
            خانه
          </Button>
        </Link>
        <Link href={""}>
          <Button
            size={"lg"}
            variant={"ghost"}>
            خانه
          </Button>
        </Link>
        <Link href={""}>
          <Button
            size={"lg"}
            variant={"ghost"}>
            خانه
          </Button>
        </Link>
        <Link href={""}>
          <Button
            size={"lg"}
            variant={"ghost"}>
            خانه
          </Button>
        </Link>
        <Link href={""}>
          <Button
            size={"lg"}
            variant={"ghost"}>
            خانه
          </Button>
        </Link>
        <Link href={""}>
          <Button
            size={"lg"}
            variant={"ghost"}>
            خانه
          </Button>
        </Link>
      </nav>

      <Link href={""}>
        <Button size={"lg"}>خانه</Button>
      </Link>
    </header>
  );
}

export default Header;
