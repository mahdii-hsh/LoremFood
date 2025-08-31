import { ObjectId } from "mongoose";

export interface ITFood {
  _id: ObjectId;
  id: number;
  category_id: number;
  name: string;
  ingredients: string[];
  cooking_time: number;
  popular_in: string[];
  is_vegetarian: boolean;
  image: string;
}

export interface ITCategory {
  _id: ObjectId;
  id: number;
  name: string;
  description: string;
}
