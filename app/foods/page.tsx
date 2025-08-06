import { ITCategory, ITFood } from "@/types/food";
import FoodCard from "./components/FoodCard";

export async function getTotalFoodsAndCategories() {
  const res = await fetch("http://localhost:3000/foods/api", {
    next: {
      tags: ["total-foods"],
      revalidate: 3600,
    },
  });
  const { foodData, categoryData } = await res.json();
  return { foods: foodData.foods, categories: categoryData.categories };
}

export default async function FoodPage() {
  const { foods, categories }: { foods: ITFood[]; categories: ITCategory[] } =
    await getTotalFoodsAndCategories();
  const getCategoryName = (id: number): string | undefined => {
    const name = categories.find((item) => item.id === id)?.name;
    return name;
  };
  return (
    <>
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
    </>
  );
}
