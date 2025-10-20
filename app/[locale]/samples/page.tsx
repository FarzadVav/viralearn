import Image from "next/image";

import samples1Img from "@/public/images/samples-1.png";
import samples2Img from "@/public/images/samples-2.png";

function SamplesPage() {
  return (
    <>
      <div className="container mt-6">
        <div className="h-96 glassy-card rounded-2xl"></div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 mt-40">
        <div className="flex justify-center flex-col max-lg:items-center">
          <h1 className="heading">انگلیش کلینیک</h1>
          <p className="leading-relaxed max-lg:text-center mt-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
            شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
            ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>

        <Image
          className="w-full h-auto max-lg:row-start-1"
          src={samples1Img}
          alt="Samples 1"
          width={570}
          height={370}
        />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 mt-40">
        <Image
          className="w-full h-auto"
          src={samples2Img}
          alt="Samples 2"
          width={570}
          height={370}
        />

        <div className="flex justify-center flex-col max-lg:items-center">
          <h1 className="heading">انگلیش کلینیک</h1>
          <p className="leading-relaxed max-lg:text-center mt-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
            شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
            ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </>
  );
}

export default SamplesPage;
