"use client";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ImageFoodCard({
  imgSrc,
  imgAlt,
}: {
  imgSrc: string;
  imgAlt: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full h-full rounded-t-2xl relative group overflow-hidden">
      {/* <Skeleton
          className={` -z-1 w-full h-full opacity-0 ${
          isLoading && !hasError ? "opacity-100 " : "opacity-0 hidden"
        }`}
          style={{
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        /> */}
      <div className="z-1 absolute -bottom-1 w-full h-16 duration-300 delay-150 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white to-transparent"></div>
      <div className="z-1 absolute -top-1 rounded-t-2xl w-full h-16 duration-300 delay-150 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white to-transparent"></div>


      <img
        src={imgSrc}
        alt={imgAlt}
        className={` w-full h-full object-cover transition-all duration-300 delay-150 group-hover:scale-110  rounded-t-2xl `}
        onLoad={(e) => {
          setIsLoading(true);
        }}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
