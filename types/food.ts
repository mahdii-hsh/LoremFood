export interface ITFood {
  id: number;
  category_id: number;
  name: string;
  ingredients: string[];
  cooking_time: number;
  popular_in: string[];
  is_vegetarian: boolean;
}

export interface ITCategory {
  id: number;
  name: string;
  description: string;
}
