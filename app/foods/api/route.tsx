import foods from "../../../data/foods.json";
import categories from "../../../data/categories.json"
export async function GET() {
  return Response.json({ foodData : foods,categoryData :categories });
}
