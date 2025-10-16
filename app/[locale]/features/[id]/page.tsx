function FeatureDetailPage() {
  return (
    <>
      <div className="container grid grid-cols-3 gap-6 glassy-card rounded-2xl p-6 mt-6">
        <div className="aspect-square rounded-2xl bg-background"></div>
        <div className="col-span-2 flex justify-center flex-col">
          <h1 className="text-5xl font-morabba-bold">مدیریت دوره آموزشی</h1>
          <p className="leading-relaxed mt-6">
            ابزار های متنوع و یکپارچه از ERP اکسیژن که به کسب‌وکارها کمک می‌کنند تا
            بخش‌های مالی، منابع انسانی، فروش، تولید و سایر فرآیندها را به‌صورت کارآمد
            مدیریت کنند. این ابزارها برای بهینه‌سازی عملیات و افزایش بهره‌وری طراحی
            شده‌اند و به‌سادگی با یکدیگر هماهنگ می‌شوند تا نیازهای مختلف سازمان‌ها را به
            بهترین شکل پوشش دهند.
          </p>
        </div>
      </div>
    </>
  );
}

export default FeatureDetailPage;
