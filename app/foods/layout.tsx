import { ITCategory, ITFood } from "@/types/food";
import CategoryCard from "./components/CategoryCard";
import { getTotalCategories } from "./page";

export default async function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories : ITCategory[] | undefined = await getTotalCategories();

  return (
    <div className="">
      <div className="grid grid-cols-12 relative">
        {/* <div className="absolute -left-16 bottom-2/6 size-64 opacity-50 overflow-hidden  bg-red-200 blur-3xl rounded-full"></div> */}
        <img
          src="/img/Decore.png"
          className="absolute -z-10 left-0 top-2/12 overflow-clip"
          alt=""
        />
        <img
          src="/img/Decore.png"
          className="absolute right-0 bottom-2/12 rotate-180 lg:rotate-0  2xl:right-1/15 2xl:bottom-4/12 2xl:rotate-0"
          alt=""
        />
        <img
          src="/img/Decore.png"
          className="hidden 2xl:block absolute -z-10 left-1/12 bottom-1/26 -rotate-90 "
          alt=""
        />

        {/* icon of categories  */}
        <div className="col-span-full mt-4 2xl:col-span-3 rounded-2xl 2xl:ms-4 p-4 bg-amber-50 ">
          {categories.map((cat: ITCategory) => (
            <div
              key={cat.id}
              className="w-full sm:w-1/2 inline-flex lg:w-1/5 2xl:w-full justify-center my-4"
            >
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>

        {/* list of foods */}
        <div className="col-span-full mt-4 2xl:mt-0 2xl:col-span-9 rounded-2xl mx-4 2xl:mx-4 p-4">
          {/* <div>لیست غذاها</div> */}
          <div className="grid grid-cols-12 sm:mt-4 2xl:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
