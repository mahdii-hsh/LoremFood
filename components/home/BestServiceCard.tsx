import { ITBestService } from "@/types/home";
import React from "react";
import { FaClock, FaFire, FaHeart, FaLeaf, FaUserTie } from "react-icons/fa";
import { FaFishFins } from "react-icons/fa6";

export default function BestServiceCard({
  service,
}: {
  service: ITBestService;
}) {
  const getCatIcon = (): React.ReactNode => {
    let classList =
      "z-10 size-14 xl:size-12 opacity-80 2xl:mt-10  text-slate-800 group-hover:scale-110 duration-300 delay-150";
    switch (service.id) {
      case 1:
        return <FaClock className={classList} />; // ایرانی
      case 2:
        return <FaHeart className={classList} />; // فست فود
      case 3:
        return <FaLeaf className={classList} />; // گیاهخواری
      case 4:
        return <FaUserTie className={classList} />; // دریایی
    }
  };

  const getRandPosition = (): string => {
    let rand = Math.floor(Math.random() * 4) + 1;
    switch (rand) {
      case 0:
        return "-top-2 -right-2";
      case 1:
        return "-top-2 -left-2";
      case 2:
        return "-bottom-2 -left-2";
      case 3:
        return "-bottom-2 -right-2";
      default:
        return "-top-2 -right-2";
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
    <div
      className={`w-full h-full text-slate-800 ${
        service.id == 3 ? "border rounded-3xl scale-105 shadow-lg" : ""
      }`}
    >
      {/* <span
        className={` z-[-1] absolute size-16 2xl:mt-10 group-hover:rotate-90 duration-300 delay-150  bg-red-400 -bottom-6 -left-6  rounded-sm rounded-tl-xl rounded-br-xl rounded-bl-0 ${service.id ==3 ? "block" : "hidden"}`}
        style={{zIndex : -1}}
      ></span> */}
      
      <div className="flex justify-center w-full">
        <div className=" relative flex justify-center group cursor-pointer">
          <span
            className={`z-1  absolute size-8 2xl:mt-10 group-hover:rotate-90  duration-300 delay-150  bg-amber-100 ${getRandPosition()}  rounded-sm ${getRandRounded()} `}
          ></span>

          {/* <span className="z-2 absolute size-20 rounded-full bg-red-400 blur-lg opacity-0 group-hover:opacity-50  duration-300 delay-150"></span> */}
          {getCatIcon()}
          {/* <CategoryLink category={category} catIcon={getCatIcon()}/>
          <span
            id={`clicked-category`}
            className={`z-2 ${category.name} absolute size-20 rounded-full bg-amber-200 blur-lg hidden`}
          ></span> */}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="w-full">
          <h3 className="flex justify-center font-medium mt-2 2xl:mt-7">
            {service.title}
          </h3>
          <p className="flex justify-self-center font-normal text-xs w-5/6 text-center 2xl:mt-5 text-slate-600">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
