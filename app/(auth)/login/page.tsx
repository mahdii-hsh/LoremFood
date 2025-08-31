import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-12 px-12">
      <div className="col-span-full justify-start flex font-bold text-lg mt-6">
        ورود
      </div>
      <div className="col-span-full flex justify-start text-gray-700 font-prj font-light 2xl:mt-2 mb-3 ">
        نام کاربری و رمز عبور خود را وارد کنید: .
      </div>

      <div className="col-span-full ">
        <label
          htmlFor="customer-name"
          className="ps-6 my-2 block font-medium text-sm"
        >
          نام کاربری
        </label>
        <input
          type="text"
          id="customer-name"
          className="w-full 2xl:w-full h-10 2xl:h-10 bg-slate-100 rounded-2xl font-prj font-light text-gray-700 px-4"
        />
      </div>
      {/* pass  */}

      <div className="col-span-full ">
        <label
          htmlFor="customer-name"
          className="ps-6 my-2 block font-medium text-sm"
        >
          رمز عبور
        </label>
        <input
          type="password"
          id="customer-name"
          className="w-full 2xl:w-full h-10 2xl:h-10 bg-slate-100 rounded-2xl font-prj font-light text-gray-700 px-4"
        />
      </div>
      <div className="col-start-4 col-span-6 2xl:col-start-4 2xl:col-span-6 px-10 my-8 2xl:px-10 2xl:my-8">
        <button
          type="submit"
          className="w-full h-10 2xl:w-full 2xl:h-10 2xl:px-4 bg-red-100 rounded-2xl font-prj font-medium text-red-800 cursor-pointer transition-all hover:scale-95"
        >
          ورود به حساب
        </button>
      </div>
    </div>
  );
}
