"use client";
import { getTotalFoodsAndCategories } from "@/app/foods/page";
import { ITCategory } from "@/types/food";
import React, { useEffect, useState } from "react";
import BestCategoryCard from "./BestCategoryCard";

export default function BestCategorySection({
  categories,
}: {
  categories: ITCategory[];
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [activeIndex]);
  return (
    <>
      {categories.map((item: ITCategory) => (
        <div key={item.id} className="w-2/7 h-24">
          <BestCategoryCard
            activeId={activeIndex}
            category={item}
          />
        </div>
      ))}
    </>
  );
}
