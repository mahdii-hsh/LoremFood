import BestServiceCard from "@/components/home/BestServiceCard";
import { ITBestService } from "@/types/home";
import "react-loading-skeleton/dist/skeleton.css";
import DecorePluses from "@/public/img/Group4.svg";
import Image from "next/image";
import Subscribe from "@/components/home/Subscribe";
import BestCategorySection from "@/components/home/BestCategorySection";
import { getTotalCategories } from "./foods/page";
import { ITCategory } from "@/types/food";
import Decore1 from "@/public/img/DecoreHomePage.svg";
import MainImageHomePage from "@/public/img/FoodsHomePage.png";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default async function Home() {
  const bestServices: ITBestService[] = [
    {
      id: 1,
      title: "آسان و سریع",
      description:
        "آیا بعد از یک روز کاری طولانی حوصله آشپزی ندارید؟ این مجموعه دستورپخت‌های سریع و آسان مخصوص شماست! از پاستاهای خامه‌ای تا املت‌های ویژه",
    },
    {
      id: 2,
      title: "محبوب‌ترین‌ها",
      description:
        "این غذاها توسط هزاران کاربر تست و تأیید شده‌اند! از کیک شکلاتی ذوب‌شونده تا خورش قیمه اصیل، محبوب‌ترین دستورپخت‌های سایت که بارها و بارها پخته شده‌اند.",
    },
    {
      id: 3,
      title: "دنیای رنگارنگ گیاهی",
      description:
        "کشف کنید که چگونه با گیاهان و حبوبات می‌توانید وعده‌های غذایی مقوی و خوشمزه آماده کنید. از برگرهای گیاهی تا دسرهای بدون لبنیات، همه با ارزش غذایی بالا.",
    },
    {
      id: 4,
      title: "آشپزی حرفه‌ای",
      description:
        "برای کسانی که می‌خواهند مثل سرآشپزهای حرفه‌ای بپزند! تکنیک‌های پیشرفته برش، سس‌های خاص، و روش‌های پخت منحصربه‌فرد.",
    },
  ];

  const categories = await getTotalCategories();
  const bestCategories: ITCategory[] = categories.filter(
    (cat: ITCategory) => cat.id > 2 && cat.id < 8
  );

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 relative">
        <div className="2xl:col-start-3 2xl:col-span-8  flex justify-center 2xl:my-12">
          {/* <Image
            src={MainImageHomePage}
            alt="Logo"
            className="size-36 absolute right-10 top-16 animate-pulse duration-1000 "
            loading="lazy"
          /> */}
          <h1 className="text-2xl font-bold text-slate-800 bg-amber-300  animate-bounce duration-[1000ms]">
            « بهترین خدمات را برای شما آماده کرده ایم »
          </h1>
        </div>
        <div className="px-2 inline-flex 2xl:col-start-3 2xl:col-span-8  justify-center 2xl:mt-5 ">
          {bestServices.map((item: ITBestService) => (
            <div key={item.id} className="w-2/7 h-68 mx-4">
              <BestServiceCard service={item} />
            </div>
          ))}
        </div>
        {/* best categories section */}
        <div className="px-2 inline-flex 2xl:col-start-3 2xl:col-span-8 justify-center 2xl:mt-18 ">
          <BestCategorySection categories={bestCategories} />
        </div>

        <div
          id="subcribe-section"
          className="2xl:col-start-3 2xl:col-span-8 2xl:my-12 h-68 flex justify-center"
        >
          <Subscribe />
        </div>

        {/* <div className=" 2xl:col-span-full grid grid-cols-12 mt-20 bg-amber-50">
          <div className="col-start-2 col-span-10 2xl:col-start-3 2xl:col-span-8 mt-6 z-20 bg-amber-50">
            <Footer />
          </div>
        </div> */}
        <div className="col-span-full lg:col-start-4 lg:col-span-6 2xl:col-span-full mx-4 bg-amber-50 rounded-t-2xl h-16 2xl:h-16 content-center mt-3">
          <p className="justify-center flex">
            این قالب توسط مهدی هاشمی ساخته شده است
          </p>
        </div>
      </div>
    </div>
  );
}
