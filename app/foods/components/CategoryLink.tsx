"use client";
import { ITCategory } from "@/types/food";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function CategoryLink({
  category,
  catIcon,
}: {
  category: ITCategory;
  catIcon: React.ReactNode;
}) {
  const router = useRouter();

  const hidePrevCliked = (): void => {
    const totalNodes = document.querySelectorAll("#clicked-category");

    totalNodes.forEach((element) => {
      if (element.classList.contains("show")) {
        element.classList.add("hidden");
        element.classList.remove("show");
      }
    });
  };
  return (
    <Link
      href={`${category.id !== 0 ? "/foods/" + category.id : "/foods"}`}
      className="cursor-pointer z-3"
      onClick={(e) => {
        e.preventDefault();
        hidePrevCliked();
        e.currentTarget.nextSibling?.classList.remove("hidden");
        e.currentTarget.nextSibling?.classList.add("show");
        router.push(category.id !== 0 ? "/foods/" + category.id : "/foods");
      }}
    >
      {catIcon}
    </Link>
  );
}
