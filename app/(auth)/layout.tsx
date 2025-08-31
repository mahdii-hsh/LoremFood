import type { Metadata } from "next";
import Image from "next/image";
import authImg from "@/public/img/AuthPage.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthTabs from "./components/AuthTabs";
import { ArrowLeft, Home } from "iconsax-react";
export const metadata: Metadata = {
  title: "auth",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      id="auth-background"
      className="grid grid-cols-12 items-center h-dvh relative bg-amber-100"
    >
      <Image
        src={authImg}
        alt="auth"
        className=" object-cover w-full h-full absolute opacity-45 z-1"
      />
      {/* <div className="opacity-45 absolute bg-red-400 rounded-4xl rounded-tl-md rounded-br-md size-24 top-1/2 -right-15"></div> */}
      <div className="z-2 col-start-5 col-span-4 bg-white  rounded-3xl">
        <div className="w-full px-10 flex justify-end items-center mt-6">
          <Link href="/" className="text-sm text-slate-800 mx-2">
            بازگشت به خانه
          </Link>
          <ArrowLeft className="size-5 stroke-slate-800 " />
        </div>
        <div className="w-full flex justify-center mt-6">
          <AuthTabs />
        </div>
        {children}
      </div>
    </div>
  );
}
