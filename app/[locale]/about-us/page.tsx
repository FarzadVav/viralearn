import Image from "next/image";
import { StarIcon } from "lucide-react";

import aboutUsOurMissionImg from "@/public/images/about-us_our-mission.png";
import aboutUsOurAbilitiesImg from "@/public/images/about-us_our-abilities.png";
import aboutUsOurValuesImg from "@/public/images/about-us_our-values.png";
import aboutUsOurFutureImg from "@/public/images/about-us_our-future.png";

function AboutUsPage() {
  return (
    <>
      <div className="container h-96 glassy-card rounded-2xl mt-6"></div>

      <div className="container mt-40 grid grid-cols-3 gap-12">
        <div className="flex justify-center flex-col col-span-2">
          <h1 className="text-5xl font-morabba-bold">داستان ما</h1>
          <p className="mt-3 w-4/5">
            هر داستان موفقی از یک چالش آغاز می‌شود. در میان دغدغه‌های روزمره‌ی مدیریت
            کلاس‌ها، پیگیری پیشرفت دانش‌آموزان و هماهنگی ابزارهای مختلف آموزشی، مدرسان با
            مشکلات فراوانی روبرو شدند. ما تصمیم گرفتیم تا با خلق یک سامانه جامع، این
            چالش‌ها را از ریشه برطرف کنیم. ویرالرن از نیاز واقعی به یک بستر یکپارچه متولد
            شد؛ بسترهایی که هم زمان کارایی مدیریتی و کیفیت یادگیری را افزایش دهد.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 font-yekan-bakh-bold">
          <div className="aspect-square bordered-glassy-card p-6 rounded-2xl f-center flex-col">
            <span className="text-3xl text-primary">+۲۰،۰۰۰</span>
            <span className="mt-3">دانش پذیر</span>
          </div>
          <div className="aspect-square bordered-glassy-card p-6 rounded-2xl f-center flex-col">
            <span className="text-3xl text-primary">۵۰٪</span>
            <span className="mt-3">فروش بیشتر</span>
          </div>
          <div className="aspect-square bordered-glassy-card p-6 rounded-2xl f-center flex-col">
            <span className="text-3xl text-primary">+۲۰،۰۰۰</span>
            <span className="mt-3">دانش پذیر</span>
          </div>
          <div className="aspect-square bordered-glassy-card p-6 rounded-2xl f-center flex-col">
            <span className="text-3xl text-primary">۳۰۰</span>
            <span className="mt-3">مدرس</span>
          </div>
        </div>
      </div>

      <div className="container mt-40 grid grid-cols-2 gap-12">
        <Image
          width={616}
          height={393}
          alt="Our mission"
          src={aboutUsOurMissionImg}
          className="rounded-2xl w-full h-auto"
        />
        <div className="flex justify-center flex-col">
          <h2 className="text-5xl font-morabba-bold">ماموریت ما</h2>
          <p className="mt-3 leading-relaxed">
            ما در ویرالرن بر این باوریم که:
            {'"'}ما معتقدیم تدریس تدریس به عنوان یک امر مقدس، باید بهینه و کارآمد باشد و
            این امر مستلزم استفاده از ابزارهای هوشمند است. این اعتقاد، ما را به خلق
            ویرالرن هدایت کرد.{'"'}
            ماموریت ما ایجاد فضایی است که در آن مدرسان بتوانند با استفاده از امکانات
            پیشرفته، به‌سادگی کلاس‌های خود را مدیریت کرده و دانش‌آموزان را در مسیر یادگیری
            همراهی کنند. از طراحی دوره‌های آموزشی گرفته تا ارزیابی پیشرفت و مدیریت مالی،
            همه چیز در یک محیط منسجم و امن ارائه می‌شود.
          </p>
        </div>
      </div>

      <div className="container mt-40 grid grid-cols-2 gap-12">
        <div className="flex justify-center flex-col">
          <h2 className="text-5xl font-morabba-bold">ویژگی‌های منحصربه‌فرد ما</h2>
          <p className="mt-3 leading-relaxed">
            یکپارچگی کامل: تمامی ابزارهای مورد نیاز برای مدیریت آموزشی در یک بستر جمع‌آوری
            شده‌اند.
            <br />
            سفارشی‌سازی حرفه‌ای: امکان ایجاد تجربه کاربری شخصی‌سازی‌شده مطابق با نیاز هر
            برند.
            <br />
            تکنولوژی به‌روز: استفاده از فناوری‌های پیشرفته نظیر گیمیفیکیشن، آزمون‌های
            هوشمند و ابزارهای تعامل زنده.
            <br />
            امنیت و پشتیبانی: تضمین حفظ حقوق و کپی‌رایت مدرسان و ارائه پشتیبانی مداوم.
          </p>
        </div>
        <Image
          width={616}
          height={393}
          alt="Our mission"
          src={aboutUsOurAbilitiesImg}
          className="rounded-2xl w-full h-auto"
        />
      </div>

      <div className="container mt-40">
        <h2 className="text-5xl font-morabba-bold">چهارچوب ارزش‌های ویرالرن</h2>
        <div className="mt-6 grid grid-cols-2 gap-12">
          <Image
            width={616}
            height={393}
            alt="Our mission"
            src={aboutUsOurValuesImg}
            className="rounded-2xl w-full h-auto"
          />
          <div className="flex justify-center flex-col gap-3">
            <div className="bordered-glassy-card p-6 rounded-2xl">
              <div className="f-align gap-3">
                <StarIcon className="text-primary fill-primary size-7" />
                <p className="font-yekan-bakh-bold">یکپارچگی در خدمات</p>
              </div>
              <p className="mt-3 leading-relaxed">
                ویرالرن متعهد است تمام ابزارهای مورد نیاز مدرسان و دانش پذیران را در یک
                بستر یکپارچه و هماهنگ ارائه دهد تا بهره‌وری آن‌ها افزایش یابد و پراکندگی
                ذهنی آنها از بین برود.
              </p>
            </div>

            <div className="bordered-glassy-card p-6 rounded-2xl">
              <div className="f-align gap-3">
                <StarIcon className="text-primary fill-primary size-7" />
                <p className="font-yekan-bakh-bold">تمرکز بر رشد و برندینگ مدرسان</p>
              </div>
              <p className="mt-3 leading-relaxed">
                ویرالرن به‌عنوان یک ERP آموزشی، به مدرسان کمک می‌کند تا علاوه بر تدریس،
                کسب و کار خود را مدیریت کنند و برند شخصی خود را بسازند و رشد پایدار داشته
                باشند. ویرالرن متعهد است که مدیریت دوره‌ها، تعاملات، فروش و بازاریابی را
                برای مدرسان آسان‌تر و کارآمدتر کند.
              </p>
            </div>

            <div className="bordered-glassy-card p-6 rounded-2xl">
              <div className="f-align gap-3">
                <StarIcon className="text-primary fill-primary size-7" />
                <p className="font-yekan-bakh-bold">نوآوری مستمر</p>
              </div>
              <p className="mt-3 leading-relaxed">
                ویرالرن همواره در حال طراحی و توسعه ابزارهای نوآورانه برای پاسخ به
                چالش‌های آموزشی و بهبود کیفیت خدمات است.
              </p>
            </div>

            <div className="bordered-glassy-card p-6 rounded-2xl">
              <div className="f-align gap-3">
                <StarIcon className="text-primary fill-primary size-7" />
                <p className="font-yekan-bakh-bold"> ساده‌سازی فرایندهای مدیریتی</p>
              </div>
              <p className="mt-3 leading-relaxed">
                ویرالرن متعهد است که مدیریت دوره‌ها، تعاملات، فروش و بازاریابی را برای
                مدرسان آسان‌تر و کارآمدتر کند.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-40 grid grid-cols-2 gap-12">
        <div className="flex justify-center flex-col">
          <h2 className="text-5xl font-morabba-bold">چشم‌انداز آینده</h2>
          <p className="mt-3 leading-relaxed">
            در ویرالرن همواره در جستجوی نوآوری و بهبود مستمر هستیم. چشم‌انداز ما، ایجاد
            تجربه‌ای آموزشی است که نه تنها برای مدرسان و دانش‌پذیران بلکه موسسات و آکادمی
            ها نیز مؤثر باشد. ما متعهدیم تا با به‌روزرسانی‌های مداوم و افزودن امکانات
            جدید، همیشه در کنار شما باشیم.
          </p>
        </div>
        <Image
          width={616}
          height={393}
          alt="Our mission"
          src={aboutUsOurFutureImg}
          className="rounded-2xl w-full h-auto"
        />
      </div>

      <div className="container mt-40">
        <h6 className="text-5xl font-morabba-bold text-center">تیم ما</h6>
        <p className="max-w-5xl mt-3 text-center mx-auto">
          در این بخش پربازدیدترین و مفیدترین مطالب درباره ERP و مدیریت سازمانی را مشاهده
          کنید. این مقالات توسط کاربران مورد توجه قرار گرفته و برای بهبود عملکرد کسب‌وکار
          شما توصیه می‌شوند.
        </p>
        <div className="grid grid-cols-5 gap-3 mt-3">
          <div className="f-center flex-col gap-3">
            <div className="w-full aspect-square glassy-card rounded-2xl"></div>
            <span className="font-yekan-bakh-bold">فرزاد وحدتی نژاد</span>
            <span className="opacity-50">برنامه نویس</span>
          </div>
          <div className="f-center flex-col gap-3">
            <div className="w-full aspect-square glassy-card rounded-2xl"></div>
            <span className="font-yekan-bakh-bold">فرزاد وحدتی نژاد</span>
            <span className="opacity-50">برنامه نویس</span>
          </div>
          <div className="f-center flex-col gap-3">
            <div className="w-full aspect-square glassy-card rounded-2xl"></div>
            <span className="font-yekan-bakh-bold">فرزاد وحدتی نژاد</span>
            <span className="opacity-50">برنامه نویس</span>
          </div>
          <div className="f-center flex-col gap-3">
            <div className="w-full aspect-square glassy-card rounded-2xl"></div>
            <span className="font-yekan-bakh-bold">فرزاد وحدتی نژاد</span>
            <span className="opacity-50">برنامه نویس</span>
          </div>
          <div className="f-center flex-col gap-3">
            <div className="w-full aspect-square glassy-card rounded-2xl"></div>
            <span className="font-yekan-bakh-bold">فرزاد وحدتی نژاد</span>
            <span className="opacity-50">برنامه نویس</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
