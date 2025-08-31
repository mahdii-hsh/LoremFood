import dbMongo from "@/lib/mongo";
import { ITCategory } from "@/types/food";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const client = await dbMongo;
    const db = client.db();

    const data = db.collection<ITCategory>("categories");

    const categories = await data.find({}).toArray();
    client.close();

    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Error fetching foods:", error);
    return NextResponse.json(
      { error: "Failed to fetch foods", foods: [] },
      { status: 500 }
    );
  }
}
