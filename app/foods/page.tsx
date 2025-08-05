import { ITCategory, ITFood } from "@/types/food";
import CategoryCard from "./components/CategoryCard";
import FoodCard from "./components/FoodCard";

async function getFoods() {
  const res = await fetch("http://localhost:3000/foods/api");
  const { foodData, categoryData } = await res.json();
  return { foods: foodData.foods, categories: categoryData.categories };
}

export default async function FoodPage() {
  const { foods, categories }: { foods: ITFood[]; categories: ITCategory[] } =
    await getFoods();
  const getCategoryName = (id: number): string | undefined => {
    const name = categories.find((item) => item.id === id)?.name;
    return name;
  };
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
          <div className="grid grid-cols-12 sm:mt-4 2xl:mt-0">
            {foods.map((food: ITFood) => (
              <div
                key={food.id}
                className="col-start-2 col-span-10 odd:sm:col-start-2  sm:col-span-5 lg:col-span-4 odd:lg:col-start-auto xl:col-span-3 rounded-2xl w-full h-84 sm:h-86 md:h-90 lg:h-96 sm:gap-x-2 my-3 2xl:mt-0 2xl:mb-5 p-2 md:p-4 lg:p-6 2xl:pt-0"
              >
                <FoodCard
                  food={food}
                  categoryName={getCategoryName(food.category_id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
