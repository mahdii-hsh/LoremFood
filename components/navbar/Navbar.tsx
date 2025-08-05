"use client";
import React, { useState } from "react";
import {
  Moon,
  SearchNormal1,
  Sun1,
  TextalignJustifycenter,
} from "iconsax-react";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useState<string | undefined>("light");

  const changeTheme = (): void => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };

  const getThemeIcon = (): React.ReactNode => {
    let node: React.ReactNode = null;
    if (theme === "light")
      node = (
        <Moon
          className="size-6 2xl:size-10 rounded-full hover:scale-110 duration-300 delay-150 2xl:p-2 stroke-slate-800 cursor-pointer "
          onClick={() => changeTheme()}
        />
      );
    else
      node = (
        <Sun1
          className="size-6 2xl:size-10 rounded-full hover:scale-110 duration-300 delay-150 2xl:p-2 stroke-amber-50 cursor-pointer"
          onClick={() => changeTheme()}
        />
      );

    return node;
  };
  return (
    <nav className=" h-16 2xl:h-24  2xl:p-4">
      <div className="grid grid-cols-12 bg-amber-50 h-full text-slate-800 rounded-2xl">
        <div className="col-span-5 sm:col-span-4 lg:col-span-3 flex items-center justify-start lg:justify-center ps-5 sm:ps-10 lg:ps-0 gap-x-1">
          <TextalignJustifycenter className="size-8 p-1 rounded lg:hidden 2xl:size-10   2xl:p-2 stroke-slate-800 cursor-pointer hover:bg-orange-100" />
          <h1 className="font-bold text-3xl relative">
            لورم
            <span className="text-red-400"> فوود</span>
          </h1>
        </div>
        <div className="hidden lg:col-span-5 lg:flex items-center text-lg justify-center lg:gap-x-2">
          <Link href="foods" className="hover:text-slate-600 cursor-pointer">
            غذاها
          </Link>
          <div>|</div>
          <div className="hover:text-slate-600 cursor-pointer">تماس با ما</div>
          <div>|</div>
          <div className="hover:text-slate-600 cursor-pointer">درباره ما</div>
        </div>
        <div className="col-span-7 sm:col-span-8 lg:col-span-4  flex items-center justify-end pe-5 sm:pe-10 lg:pe-0 lg:justify-center gap-x-1 md:gap-x-3">
          {getThemeIcon()}
          <span className="md:hidden">|</span>
          <SearchNormal1 className="size-6 md:hidden stroke-slate-800 cursor-pointer" />
          <div className="hidden md:flex w-56 h-10 rounded-2xl border border-slate-800  justify-between md:p-2 items-center cursor-pointer">
            <div className=" text-sm">جستجو</div>
            <div>
              <SearchNormal1 className="md:size-6 hover:scale-110 duration-300 delay-150 stroke-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
