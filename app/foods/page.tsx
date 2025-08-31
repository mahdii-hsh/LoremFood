import { ITCategory, ITFood } from "@/types/food";
import FoodCard from "./components/FoodCard";

export async function getTotalFoods() {
  const res = await fetch("http://localhost:3000/foods/api", {
    next: {
      tags: ["total-foods"],
      revalidate: 3600,
    },
  });
  const data = await res.json();
  console.log("data food ::" ,data );

  return data.foods;
}

export async function getTotalCategories() {
  const res = await fetch("http://localhost:3000/api/categories", {
    next: {
      tags: ["total-categories"],
      revalidate: 3600,
    },
  });
  const data = await res.json();
  console.log("data ::" ,data );
  return data.categories;
}

export default async function FoodPage() {
  const foods = await getTotalFoods();
  // if (!foods || foods.length === 0) {
  //   return (
  //     <div className="col-start-2 col-span-10 text-center py-10">
  //       <h2 className="text-xl font-semibold text-gray-600">No foods available</h2>
  //       <p className="text-gray-500 mt-2">Please check back later.</p>
  //     </div>
  //   );
  // }
  return (
    <>
      {await foods.map((food: ITFood) => (
        <div
          key={food.id}
          className="col-start-2 col-span-10 odd:sm:col-start-2  sm:col-span-5 lg:col-span-4 odd:lg:col-start-auto xl:col-span-3 rounded-2xl w-full h-84 sm:h-86 md:h-90 lg:h-98 sm:gap-x-2 my-3 2xl:mt-0 2xl:mb-5 p-2 md:p-4 lg:p-6 2xl:pt-0"
        >
          <FoodCard
            food={food}
            categoryName="A"
            // categoryName={getCategoryName(food.category_id)}
          />
        </div>
      ))}
    </>
  );
}
