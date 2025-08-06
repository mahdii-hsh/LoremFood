"use client"
import { ITCategory, ITFood } from "@/types/food";
import FoodCard from "../components/FoodCard";
import { getTotalFoodsAndCategories } from "../page";
import { useEffect, useState } from "react";

export default async function SpecialCategoryFoodsPage({
  params,
}: {
  params: { catId: string };
}) {
  async function getSpecialFoods() {
    const { foods, categories } = await getTotalFoodsAndCategories();
    const filterFoods = foods.filter(
      (food: ITFood) => food.category_id === parseInt(params.catId)
    );
    const name = categories.find(
      (item: ITCategory) => item.id === parseInt(params.catId)
    )?.name;

    return { foods: filterFoods, categoryName: name };
  }

  const [foodArray,setFoodArray] = useState<ITFood[]>()
  const { foods, categoryName }: { foods: ITFood[]; categoryName: string } =
    await getSpecialFoods();

    useEffect(() => {
      setFoodArray(foods)
    }, [])
    
  return (
    <>
      {foods.map((food: ITFood) => (
        <div
          key={food.id}
          className="col-start-2 col-span-10 odd:sm:col-start-2  sm:col-span-5 lg:col-span-4 odd:lg:col-start-auto xl:col-span-3 rounded-2xl w-full h-84 sm:h-86 md:h-90 lg:h-96 sm:gap-x-2 my-3 2xl:mt-0 2xl:mb-5 p-2 md:p-4 lg:p-6 2xl:pt-0"
        >
          <FoodCard food={food} categoryName={categoryName} />
        </div>
      ))}
    </>
  );
}
