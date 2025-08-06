import { ITFood } from "@/types/food";
import { MoreCircle, Timer1 } from "iconsax-react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import ImageFoodCard from "./ImageFoodCard";

export default function FoodCard({
  food,
  categoryName,
}: {
  food: ITFood;
  categoryName: string | undefined;
}) {
  const getPersianCookTime = () => {
    let str: string | undefined = "";
    let engTime = food.cooking_time;
    while (engTime >= 1) {
      let persianChar = null;
      switch (engTime % 10) {
        case 0:
          persianChar = "۰";
          break;
        case 1:
          persianChar = "۱";
          break;
        case 2:
          persianChar = "۲";
          break;
        case 3:
          persianChar = "۳";
          break;
        case 4:
          persianChar = "۴";
          break;
        case 5:
          persianChar = "۵";
          break;
        case 6:
          persianChar = "۶";
          break;
        case 7:
          persianChar = "۷";
          break;
        case 8:
          persianChar = "۸";
          break;
        case 9:
          persianChar = "۹";
          break;
        default:
          persianChar = "0";
          break;
      }
      engTime = Math.floor(engTime / 10);
      str = persianChar?.concat(str);
    }
    return str;
  };
  return (
    <div className="flex items-center w-full h-full justify-center  rounded-t-2xl">
      <div className="w-full h-full rounded-2xl shadow-lg relative text-slate-800 hover:rotate-2 duration-300 delay-150">
        {/* label of category */}
        <div className="z-10 bg-red-100 text-red-400 absolute top-4 start-4 rounded-lg p-1 text-xs">
          {categoryName}
        </div>

        <div className=" h-48 sm:h-52 2xl:h-56 rounded-t-2xl">
          <ImageFoodCard imgAlt={food.name} imgSrc={food.image} />
        </div>
        <div className="flex justify-between w-full p-4 px-6 sm:px-0 sm:p-3 lg:p-4">
          <h2 className="">{food.name}</h2>
          <div className="flex items-center">
            <span>{getPersianCookTime()}</span>
            <Timer1 className="size-6 stroke-slate-800" />
          </div>
        </div>
        <div className="w-full justify-center flex">
          <button className="items-center text-sm justify-center cursor-pointer flex mt-4 px-1 border border-slate-400 bg-slate-200 rounded-2xl">
            اطلاعات بیش تر
            <span>
              <MoreCircle className="size-5 stroke-slate-800" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
