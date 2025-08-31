import Link from "next/link";
import React from "react";
import {
  CallAdd,
  CallCalling,
  CallReceived,
  ClipboardTick,
  Link1,
  Location,
  LocationAdd,
  SecurityUser,
  TruckTime,
} from "iconsax-react";

export default function Footer() {
  type TIcon = {
    Component: React.ReactNode;
    txtPersian: string;
    txtEnglish: string;
  };
  type TLink = {
    title: string;
    href: string;
  };
  type TAppDownload = {
    title: string;
    imgSrc: string;
  };

  const icons: TIcon[] = [
    {
      Component: CallAdd,
      txtPersian: "پشتیبانی ۲۴ ساعته",
      txtEnglish: "Support",
    },
    {
      Component: TruckTime,
      txtPersian: "ارسال رایگان",
      txtEnglish: "Free shipping",
    },
    {
      Component: ClipboardTick,
      txtPersian: " کیفیت بالا",
      txtEnglish: "High quality",
    },
    {
      Component: SecurityUser,
      txtPersian: "حریم خصوصی",
      txtEnglish: "Privacy",
    },
  ];
  const usefullLinks: TLink[] = [
    {
      title: "دسته بندی ها",
      href: "",
    },
    {
      title: "حساب کاربری من",
      href: "",
    },
    {
      title: "سبد خرید",
      href: "",
    },
    {
      title: "فروشگاه",
      href: "",
    },
  ];

  const appDownloadIcons: TAppDownload[] = [
    {
      title: "کافه بازار",
      imgSrc: "/icons/bazaar-icon.webp",
    },
    {
      title: "مایکت",
      imgSrc: "/icons/myket.png",
    },
    {
      title: "فروشگاه play",
      imgSrc: "/icons/playstore.svg",
    },
  ];

  return (
    <div className="container rounded-3xl overflow-hidden ">
      <div className="relative grid grid-cols-12 content-center rounded-3xl p-4  2xl:h-28 2xl:p-4 ">
        {icons.map((item: TIcon) => (
          <div
            key={item.txtEnglish}
            className="col-span-6  lg:col-span-3 xl:col-span-3 2xl:col-span-2 flex p-1 content-center justify-start"
          >
            <CallAdd
              variant="Bulk"
              className="stroke-slate-800 content-center size-8 md:size-12 lg:size-14 xl:size-16 2xl:size-12 p-1 rounded-2xl "
            />

            <span className="text-slate-800 text-xs lg:text-sm content-center 2xl:ps-2">
              {item.txtPersian}
              <span className="text-slate-800 text-xs block 2xl:mt-1">
                {item.txtEnglish}
              </span>
            </span>
          </div>
        ))}

        <div className="col-span-12 lg:col-span-4 lg:col-start-5   content-center 2xl:col-span-4 2xl:px-16 mt-4">
          <div
            style={{}}
            className="text-2xl lg:text-3xl text-center 2xl:text-end mb-2 text-slate-800"
          >
            {" "}
            ۰۰۰ ۰۰۰ ۹۱ ۹۸{" "}
            <CallCalling
              variant="Bold"
              className="inline p-1 size-8 2xl:mb-1 stroke-slate-800 "
            />
          </div>
          <div className="text-slate-800 bg-red-300 rounded-xl h-15 text-center items-center">
            info@yourwebsite.com
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 rounded-3xl">
        <div className="col-span-full lg:col-span-6 2xl:col-span-6 p-2 my-2 2xl:p-4">
          <div
            style={{}}
            className=" rounded-3xl text-start content-center text-sm xl:text-base border border-b-2 h-12 2xl:h-10 ps-2 sm:ps-5 md:ps-10 lg:ps-7 2xl:p-2 2xl:ps-6"
          >
            درباره ما
            <span className="text-end ms-4 ps-4 sm:ms-72 md:ms-80 lg:ms-36 xl:ms-48 2xl:ms-56 2xl:ps-3 text-slate-800 border-s border-opacity-15">
              همه چیز درباره ی فروشگاه لورم
            </span>
          </div>
          {/* Location */}
          <div className="mt-6 content-center ">
            <LocationAdd
              
              className="text-slate-800 stroke-slate-800 block lg:inline-block 2xl:inline size-9 2xl:size-7 justify-center lg:justify-start w-full lg:w-12"
            />

            <span
              style={{}}
              className="text-center sm:justify-center sm:text-lg flex lg:inline-block mt-4 2xl:ms-4"
            >
              تهران – خیابان پاسداران – فرعی ۱۲ – پلاک صفر
            </span>
            {/* Lorem text */}
            <p
              className=" text-justify text-sm sm:text-base mt-6 2xl:mt-6 "
              style={{ lineHeight: "24px" }}
            >
              <b> لورم ایپسوم</b> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه
              ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از{" "}
              <b>صنعت چاپ</b> و با استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
        {/* UseFull Links */}
        <div className="col-span-full md:col-span-4 lg:col-span-2 2xl:col-span-2  2xl:ms-4">
          <p
            className="text-base 2xl:text-sm sm:mt-4 lg:mt-8 2xl:mt-6"
            style={{}}
          >
            {" "}
            <Link1 className="inline" /> لینک های کاربردی{" "}
          </p>
          <ul>
            {usefullLinks.map((item: TLink) => (
              <li
                key={item.title}
                className="ms-6 my-4 2xl:ms-3 2xl:my-3 text-sm sm:text-base hover:text-blue-500 border-s border-opacity-10"
                style={{}}
              >
                <Link href={item.href} className="2xl:ps-1">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* e-namd icon*/}
        <div className="col-span-full md:col-span-8 lg:col-span-4 2xl:col-span-4 mt-8 md:mt-4 lg:mt-8 2xl:mt-0 2xl:ms-4 ">
          <div className="flex justify-center 2xl:mt-6">
            <p style={{ wordSpacing: "1px" }}>
              می توانید به ما <b> اعتماد </b> کنید{" "}
            </p>
          </div>
          <div className="block md:flex  2xl:flex justify-center gap-3 mt-4 2xl:mt-9">
            <div className="flex justify-center border w-full md:w-1/2 2xl:w-1/3 mb-3 md:mb-0  rounded-3xl border-b-4 border-blue-100">
              <img
                src="/img/enamad.png"
                alt="e-namd"
                className=" object-contain border"
              />
            </div>
            <div className="flex justify-center border w-full md:w-1/2 xl:me-3 2xl:w-1/3 rounded-3xl border-b-4 border-blue-100">
              <img
                src="/img/samandehi.png"
                alt="samandehi"
                className="object-contain border"
              />
            </div>
          </div>
        </div>

        {/* app download */}
        <div className="col-span-full lg:col-span-4 2xl:col-span-5 mt-8 lg:mt-4 lg:ps-2 2xl:ps-4">
          <p style={{}} className="text-center lg:text-start">
            اپ ما را دانلود کنید
          </p>
          <p className="text-sm text-center mb-4 lg:text-start">
            اپ ما را برای همیشه در <b>موبایل</b> خود داشته باشید
          </p>
        </div>
        <div className="col-span-full lg:col-span-8 2xl:col-span-7 lg:mt-4 justify-center block sm:flex">
          {appDownloadIcons.map((item: TAppDownload) => (
            <div
              key={item.imgSrc}
              className="w-full sm:w-36 2xl:w-40 sm:inline-flex justify-center flex "
            >
              <div className="justify-center sm:inline 2xl:inline-block content-center w-32 lg:w-40 h-12 my-1 px-1 lg:px-1 2xl:h-10 2xl:mx-2 2xl:px-2 lg:mx-1 bg-blue-50 rounded-xl">
                <div className="flex justify-center w-full h-full content-center 2xl:py-1">
                  <div className="w-3/4 h-full content-center">
                    {item.title}
                  </div>
                  <div className="w-1/4 h-full content-center">
                    <img src={item.imgSrc} alt="" className="object-contain " />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
