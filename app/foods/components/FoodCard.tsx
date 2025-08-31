"use client";
import { ITFood } from "@/types/food";
import {
  Dislike,
  Heart,
  HeartAdd,
  HeartSlash,
  Like,
  Like1,
  MoreCircle,
  Star1,
  Timer1,
} from "iconsax-react";
import React from "react";
import ImageFoodCard from "./ImageFoodCard";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/state/store";
import { disLike, like } from "@/state/comment/commentSlice";

export default function FoodCard({
  food,
  categoryName,
}: {
  food: ITFood;
  categoryName: string | undefined;
}) {
  const getPersianCookTime = () => {
    let str: string | undefined = "";
    let engTime = food.cooking_time;
    while (engTime >= 1) {
      let persianChar = null;
      switch (engTime % 10) {
        case 0:
          persianChar = "۰";
          break;
        case 1:
          persianChar = "۱";
          break;
        case 2:
          persianChar = "۲";
          break;
        case 3:
          persianChar = "۳";
          break;
        case 4:
          persianChar = "۴";
          break;
        case 5:
          persianChar = "۵";
          break;
        case 6:
          persianChar = "۶";
          break;
        case 7:
          persianChar = "۷";
          break;
        case 8:
          persianChar = "۸";
          break;
        case 9:
          persianChar = "۹";
          break;
        default:
          persianChar = "0";
          break;
      }
      engTime = Math.floor(engTime / 10);
      str = persianChar?.concat(str);
    }
    return str;
  };

  const commentLikeCnt = useSelector(
    (state: RootState) =>
      state.comment.find((item) => item.id == food.id)?.likeCnt
  );

  const commentDisLikeCnt = useSelector(
    (state: RootState) =>
      state.comment.find((item) => item.id == food.id)?.disLikeCnt
  );

  const dispatch = useDispatch();

  return (
    <div className="flex items-center w-full h-full justify-center  rounded-t-2xl">
      <div className="w-full h-full rounded-2xl shadow-lg relative text-slate-800 hover:rotate-2 duration-300 delay-150">
        {/* label of category */}
        <div className="z-10 bg-red-100 text-red-400 absolute top-4 start-4 rounded-lg p-1 text-xs">
          {categoryName}
        </div>

        <div className=" h-48 sm:h-52 2xl:h-56 rounded-t-2xl relative">
          <ImageFoodCard imgAlt={food.name} imgSrc={food.image} />
          <div className="z-10 bg-white absolute bottom-2 end-2 rounded-lg p-1">
            <span className="flex items-center justify-center">
              {/* <p className="mx-1 text-sm">
                {commentDisLikeCnt / commentLikeCnt}
              </p> */}
              <Star1
                id="star-1"
                className={`order-5 size-3 stroke-slate-800 fill-amber-400`}
              />

              <Star1
                id="star-1"
                className={`order-4 size-3 stroke-slate-800 ${
                  commentDisLikeCnt / commentLikeCnt < 0.6
                    ? "fill-amber-400"
                    : ""
                }`}
              />

              <Star1
                id="star-1"
                className={`order-3 size-3 stroke-slate-800 ${
                  commentDisLikeCnt / commentLikeCnt < 0.4
                    ? "fill-amber-400"
                    : ""
                }`}
              />

              <Star1
                id="star-1"
                className={`order-2 size-3 stroke-slate-800 ${
                  commentDisLikeCnt / commentLikeCnt < 0.2
                    ? "fill-amber-400"
                    : ""
                }`}
              />
              <Star1
                id="star-1"
                className={`order-1 size-3 stroke-slate-800 ${
                  commentDisLikeCnt / commentLikeCnt < 0.1
                    ? "fill-amber-400"
                    : ""
                }`}
              />

              {/* <Heart
                className="size-5 stroke-slate-800  "
                style={{
                  fill: "linear-gradient(to right, #ec4899 50%, transparent 50%)"
                }}
              /> */}
            </span>
          </div>
        </div>
        <div className="flex justify-between w-full p-4 px-6 sm:px-0 sm:p-3 lg:p-4">
          <h2 className="">{food.name}</h2>
          <div className="flex items-center">
            <span>{getPersianCookTime()}</span>
            <Timer1 className="size-6 stroke-slate-800" />
          </div>
        </div>
        <div className="w-full justify-center flex">
          <div className="items-center text-sm justify-center cursor-pointer flex rounded-2xl">
            <span>
              <Dislike
                className="p-1 size-7 rounded-full border  border-slate-800 bg-slate-200 stroke-slate-800 transition-all duration-300 delay-150 hover:border-red-800 hover:stroke-red-500 hover:bg-red-100"
                onClick={() => dispatch(disLike({ id: food.id }))}
              />
            </span>

            <span>
              <Like1
                className="p-1 size-7 mx-2 rounded-full border border-slate-800 bg-slate-200 stroke-slate-800 transition-all duration-300 delay-150 hover:border-green-800 hover:stroke-green-500 hover:bg-green-100"
                onClick={() => dispatch(like({ id: food.id }))}
              />
            </span>
          </div>
        </div>

        <div className="w-full justify-center flex">
          <button className="items-center text-sm justify-center cursor-pointer flex mt-4 px-1 border border-slate-400 bg-slate-200 rounded-2xl">
            اطلاعات بیش تر
            <span>
              <MoreCircle className="size-5 stroke-slate-800" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
