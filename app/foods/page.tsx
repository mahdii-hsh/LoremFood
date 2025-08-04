import { ITCategory, ITFood } from "@/types/food";
import CategoryCard from "./components/CategoryCard";

async function getFoods() {
  const res = await fetch("http://localhost:3000/foods/api");
  const { foodData, categoryData } = await res.json();
  return { foods: foodData.foods, categories: categoryData.categories };
}

export default async function FoodPage() {
  const { foods, categories }: { foods: ITFood[]; categories: ITCategory[] } =
    await getFoods();

  return (
    <div className="">
      <div className="grid 2xl:grid-cols-12">
        <div className="col-span-full mt-4 2xl:col-span-3 rounded-2xl 2xl:ms-4 p-4 2xl:p-4 bg-amber-50 ">
          {categories.map((cat: ITCategory) => (
            <div key={cat.id} className="w-full sm:w-1/2 inline-flex lg:w-1/5 2xl:w-full justify-center my-4">
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>
        <div className="2xl:col-span-9">

        </div>
      </div>
    </div>
  );
}
