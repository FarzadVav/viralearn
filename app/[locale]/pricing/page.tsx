import { CircleCheckIcon, CircleXIcon, DotIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@/i18n/navigation";

function PricingPage() {
  return (
    <>
      <div className="container h-96 glassy-card rounded-2xl mt-6"></div>

      <div className="container f-center flex-col mt-40">
        <h1 className="text-5xl font-morabba-bold">تعرفه‌های ویرالرن</h1>
        <p className="mt-6">
          اجازه دهید با راهکارهای تخصصی و پشتیبانی دلسوزانه، مسیر موفقیت شما را هموار کنیم
        </p>

        <div className="mt-12 grid grid-cols-3 gap-9">
          <div className="f-center flex-col bordered-glassy-card p-9 rounded-2xl">
            <span className="font-yekan-bakh-bold text-primary">پایه</span>
            <p className="font-yekan-bakh-bold text-2xl mt-1.5">
              {(1_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="mt-3 showcase-btn"
              size={"sm"}>
              پرداخت سه ماه
            </Button>
            <ul className="w-full mt-6 space-y-3 text-sm">
              <div className="f-align gap-3">
                <CircleCheckIcon className="text-primary size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
              <div className="f-align gap-3">
                <CircleXIcon className="text-destructive size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
            </ul>
            <Link
              className="mt-6"
              href={""}>
              <Button variant={"ghost"}>خرید</Button>
            </Link>
          </div>

          <div className="f-center flex-col bordered-glassy-card bg-card/30 p-9 rounded-2xl scale-110">
            <span className="font-yekan-bakh-bold text-success">به صرفه</span>
            <p className="font-yekan-bakh-bold text-2xl mt-1.5">
              {(6_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="showcase-btn mt-3"
              size={"sm"}>
              پرداخت دوازده ماه
            </Button>
            <ul className="w-full mt-6 space-y-3 text-sm">
              <div className="f-align gap-3">
                <CircleCheckIcon className="text-primary size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
              <div className="f-align gap-3">
                <CircleXIcon className="text-destructive size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
            </ul>
            <Link
              className="mt-6"
              href={""}>
              <Button>خرید</Button>
            </Link>
          </div>

          <div className="f-center flex-col bordered-glassy-card p-9 rounded-2xl">
            <span className="font-yekan-bakh-bold text-primary">پایه</span>
            <p className="font-yekan-bakh-bold text-2xl mt-1.5">
              {(1_000_000).toLocaleString("fa")}
            </p>
            <Button
              className="mt-3 showcase-btn"
              size={"sm"}>
              پرداخت سه ماه
            </Button>
            <ul className="w-full mt-6 space-y-3 text-sm">
              <div className="f-align gap-3">
                <CircleCheckIcon className="text-primary size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
              <div className="f-align gap-3">
                <CircleXIcon className="text-destructive size-5" />
                <p>ویژگی و امکانات این پکیج</p>
              </div>
            </ul>
            <Link
              className="mt-6"
              href={""}>
              <Button variant={"ghost"}>خرید</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container f-center flex-col mt-40">
        <h1 className="text-5xl font-morabba-bold">امکانات ویژه‌ی هر پکیج</h1>
        <p className="mt-6">
          اجازه دهید با راهکارهای تخصصی و پشتیبانی دلسوزانه، مسیر موفقیت شما را هموار کنیم
        </p>

        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead className="p-9 glassy-card rounded-tr-2xl">
                <div className="f-center">بسته پیشرفته</div>
              </TableHead>
              <TableHead className="p-9 glassy-card">
                <div className="f-center">بسته پایه</div>
              </TableHead>
              <TableHead className="p-9 glassy-card rounded-tl-2xl">
                <div className="f-center">بسته به صرفه</div>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <div className="f-center font-yekan-bakh-bold">۱</div>
              </TableCell>
              <TableCell>
                <div className="f-center font-yekan-bakh-bold">ساخت آزمون پایان دوره</div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleCheckIcon className="size-5 text-green-500" />
                </div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleXIcon className="size-5 text-red-500" />
                </div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleXIcon className="size-5 text-red-500" />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="f-center font-yekan-bakh-bold">۲</div>
              </TableCell>
              <TableCell>
                <div className="f-center font-yekan-bakh-bold">ساخت آزمون پایان دوره</div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleCheckIcon className="size-5 text-green-500" />
                </div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleXIcon className="size-5 text-red-500" />
                </div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleXIcon className="size-5 text-red-500" />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="f-center font-yekan-bakh-bold">۳</div>
              </TableCell>
              <TableCell>
                <div className="f-center font-yekan-bakh-bold">ساخت آزمون پایان دوره</div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleCheckIcon className="size-5 text-green-500" />
                </div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleXIcon className="size-5 text-red-500" />
                </div>
              </TableCell>
              <TableCell>
                <div className="f-center">
                  <CircleXIcon className="size-5 text-red-500" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="container grid grid-cols-3 gap-6 mt-40">
        <div className="col-span-2">
          <div className="bordered-glassy-card p-6 rounded-2xl">
            <h6 className="text-5xl font-morabba-bold">بسته پیشرفته</h6>
            <p className="leading-relaxed mt-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="w-full aspect-video bg-background rounded-2xl mt-6"></div>
          </div>

          <div className="bordered-glassy-card p-6 rounded-2xl mt-6">
            <h6 className="text-5xl font-morabba-bold">بسته به صرفه</h6>
            <p className="leading-relaxed mt-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="w-full aspect-video bg-background rounded-2xl mt-6"></div>
          </div>

          <div className="bordered-glassy-card p-6 rounded-2xl mt-6">
            <h6 className="text-5xl font-morabba-bold">بسته پایه</h6>
            <p className="leading-relaxed mt-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="w-full aspect-video bg-background rounded-2xl mt-6"></div>
          </div>
        </div>
        <div className="bordered-glassy-card p-6 rounded-2xl h-max sticky top-29 max-h-[calc(100vh-8.75rem)] overflow-y-auto">
          <p className="font-morabba-medium text-xl">بسته های قابل سفارش</p>
          <div className="mt-3 space-y-3">
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start not-hover:text-primary"
                variant={"ghost"}>
                <DotIcon />
                <span>بسته پیشرفته</span>
              </Button>
            </Link>
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start"
                variant={"ghost"}>
                <DotIcon />
                <span>بسته به صرفه</span>
              </Button>
            </Link>
            <Link
              href={""}
              className="block">
              <Button
                className="w-full justify-start"
                variant={"ghost"}>
                <DotIcon />
                <span>بسته پایه</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
