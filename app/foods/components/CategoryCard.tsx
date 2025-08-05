import { ITCategory } from "@/types/food";
import React from "react";
import { FaFire, FaHamburger, FaIceCream, FaLeaf } from "react-icons/fa";
import { FaFishFins } from "react-icons/fa6";
import {
  GiForkKnifeSpoon,
  GiFruitBowl,
  GiNoodles,
  GiPotato,
  GiRiceCooker,
} from "react-icons/gi";

export default function CategoryCard({ category }: { category: ITCategory }) {
  const getCatIcon = (): React.ReactNode => {
    let classList = "z-10 size-14 xl:size-16  text-slate-800 group-hover:scale-110 duration-300 delay-150"
    switch (category.id) {
      case 1:
        return <GiRiceCooker className={classList} />; // ایرانی
      case 2:
        return <FaHamburger className={classList} />; // فست فود
      case 3:
        return <FaLeaf className={classList} />; // گیاهخواری
      case 4:
        return <FaFishFins className={classList}/>; // دریایی
      case 5:
        return <FaFire className={classList}/>; // کباب
      case 6:
        return <GiPotato className={classList}/>; // خورشت
      case 7:
        return <GiNoodles className={classList}/>; // پاستا
      case 8:
        return <GiFruitBowl className={classList}/>; // سالاد
      case 9:
        return <FaIceCream className={classList}/>; // دسر
      case 10:
        return <GiForkKnifeSpoon className={classList}/>; // سنتی
    }
  };

  const getRandPosition = (): string => {
    let rand = Math.floor(Math.random() * 4) + 1;
    switch (rand) {
      case 0:
        return "top-0 right-0";
      case 1:
        return "top-0 left-0";
      case 2:
        return "bottom-0 left-0";
      case 3:
        return "bottom-0 right-0";
      default:
        return "top-0 right-0";
    }
  };

  const getRandRounded = (): string => {
    let rand = Math.floor(Math.random() * 2) + 1;
    switch (rand) {
      case 0:
        return "rounded-tl-xl rounded-br-xl";
      case 1:
        return "rounded-tr-xl rounded-bl-xl";
      default:
        return "rounded-tl-xl rounded-br-xl";
    }
  };

  return (
      <div className="w-full h-full">
        <div className="flex justify-center w-full ">
          <div></div>
          <div className=" relative flex justify-center group cursor-pointer">
            <span
              className={`absolute size-8 group-hover:rotate-90  duration-300 delay-150  bg-amber-400 ${getRandPosition()}  rounded-sm ${getRandRounded()} `}
            ></span>
            {getCatIcon()}

            <span className="absolute size-20 rounded-full bg-red-400 blur-lg opacity-0 group-hover:opacity-50  duration-300 delay-150"></span>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full">
            <h3 className="flex justify-center font-medium">{category.name}</h3>
            <p className="flex justify-center font-light text-xs">
              {category.description}
            </p>
          </div>
        </div>
      </div>
  );
}
