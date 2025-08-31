"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const toggleTab = (id: string) => {
  const authBackground = document.getElementById("auth-background");

  if (id === "auth-tab-1") {
    const authTab1 = document.getElementById("auth-tab-1");
    const authTab2 = document.getElementById("auth-tab-2");

    authBackground?.classList.add("bg-red-100");
    authBackground?.classList.remove("bg-amber-100");

    authTab1?.classList.add("bg-white");
    authTab2?.classList.remove("bg-white");
  } else if (id === "auth-tab-2") {
    const authTab1 = document.getElementById("auth-tab-1");
    const authTab2 = document.getElementById("auth-tab-2");

    authBackground?.classList.add("bg-amber-100");
    authBackground?.classList.remove("bg-red-100");

    authTab2?.classList.add("bg-white");
    authTab1?.classList.remove("bg-white");
  }
};

export default function AuthTabs() {
  const router = useRouter();
  const url = usePathname();
  useEffect(() => {
    if (url.includes("register")) {
      toggleTab("auth-tab-2");
    } else if (url.includes("login")) {
      toggleTab("auth-tab-1");
    }
  });

  return (
    <div className="flex justify-center w-1/3 h-10 rounded-xl bg-slate-100 items-center ">
      <div className="w-1/2 h-full p-1">
        <Link
          href="/login"
          className="flex justify-center h-full w-full items-center rounded-xl  cursor-pointer"
          id="auth-tab-1"
          // onClick={(e) => {
          //   e.preventDefault();
          //   // toggleTab(e.currentTarget.id);
          //   router.push("/login");
          // }}
        >
          ورود
        </Link>
      </div>
      <div className="w-1/2 h-full p-1 cursor-pointer">
        <Link
          href="/register"
          className="flex justify-center h-full w-full items-center rounded-xl cursor-pointer"
          id="auth-tab-2"
          // onClick={(e) => {
          //   e.preventDefault();
          //   // toggleTab(e.currentTarget.id);
          //   router.push("/register");
          // }}
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
}
