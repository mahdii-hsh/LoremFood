import Image from "next/image";
import React from "react";
import DecoreSubs1 from "@/public/img/DecoreSubs1.svg";
import DecoreSubs2 from "@/public/img/DecoreSubs2.svg";

export default function Subscribe() {
  return (
    <div className="relative rounded-2xl rounded-tl-[8rem] bg-purple-50 h-full w-full overflow-hidden  ">
      <Image
        src={DecoreSubs1}
        alt="DecoreSubs1"
        className="size-42 absolute right-0 top-0 opacity-15"
        loading="lazy"
      />
      <Image
        src={DecoreSubs2}
        alt="DecoreSubs1"
        className="size-60 absolute left-14 bottom-0 opacity-15"
        loading="lazy"
      />
      <div className="w-full flex justify-center">
        <h2 className="text-2xl w-5/6 2xl:mt-8 text-center leading-loose text-slate-500 font-medium">
          برای دریافت اطلاعات، آخرین اخبار ، جدید ترین غذاها و سایر پیشنهادات
          جالب درباره <br></br>
          <b>لورم فوود</b>، مشترک شوید
        </h2>
      </div>

      <div className="w-full h-13  flex justify-center 2xl:mt-6">
        <input
          type="email"
          className="h-full rounded-xl bg-white p-4 w-64 2xl:mx-4 text-slate-500"
          placeholder="ایمیل"
        />
        <button className="h-full rounded-xl bg-amber-400 text-white p-4 cursor-pointer duration-300 delay-150 hover:scale-105">
          مشترک شدن
        </button>
      </div>
    </div>
  );
}
