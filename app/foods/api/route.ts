import dbMongo from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import { ITFood } from "@/types/food";

export async function GET(request: NextRequest) {
  try {
    const client = await dbMongo;
    const db = client.db();
    const data = db.collection<ITFood>('foods');
    const foods = await data.find({}).toArray();
    
    // Return the foods array wrapped in an object with a foods property
    return NextResponse.json({ foods });
  } catch (error) {
    console.error("Error fetching foods:", error);
    return NextResponse.json(
      { error: "Failed to fetch foods", foods: [] },
      { status: 500 }
    );
  } finally {
    // Close the connection if needed
    // client.close();
  }
}
