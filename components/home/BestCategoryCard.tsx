import { FaFire, FaHamburger, FaIceCream, FaLeaf } from "react-icons/fa";
import { ITCategory } from "@/types/food";
import {
  GiForkKnifeSpoon,
  GiFruitBowl,
  GiMeal,
  GiNoodles,
  GiPotato,
  GiRiceCooker,
} from "react-icons/gi";
import { FaFishFins } from "react-icons/fa6";
import Link from "next/link";

export default function BestCategoryCard({
  category,activeId
}: {
  category: ITCategory;
  activeId :  number
}) {
  const getCatIcon = (): React.ReactNode => {
    let classList =
      "z-10 size-14 xl:size-8 flex 2xl:mx-2  text-slate-800 group-hover:scale-110 duration-300 delay-150";
    switch (category.id) {
      case 0:
        return <GiMeal className={classList} />; // کل غذاها
      case 1:
        return <GiMeal className={classList} />; // ایرانی
      case 2:
        return <FaHamburger className={classList} />; // فست فود
      case 3:
        return <FaLeaf className={classList} />; // گیاهخواری
      case 4:
        return <FaFishFins className={classList} />; // دریایی
      case 5:
        return <FaFire className={classList} />; // کباب
      case 6:
        return <GiPotato className={classList} />; // خورشت
      case 7:
        return <GiNoodles className={classList} />; // پاستا
      case 8:
        return <GiFruitBowl className={classList} />; // سالاد
      case 9:
        return <FaIceCream className={classList} />; // دسر
      case 10:
        return <GiForkKnifeSpoon className={classList} />; // سنتی
    }
  };

  return (
    <div className={`w-full h-full flex justify-center items-center rounded-2xl p-2 ${activeId+3 ===category.id ? "shadow-xl scale-105" : ""}`}>
      <div className="bg-white flex justify-center w-full text-center items-center font-bold h-16 rounded-3xl ">
        <Link href={`/foods/${category.id}`} className="flex">
          {getCatIcon()}
          {category.name}
        </Link>
      </div>
      {/* <p></p> */}
    </div>
  );
}
