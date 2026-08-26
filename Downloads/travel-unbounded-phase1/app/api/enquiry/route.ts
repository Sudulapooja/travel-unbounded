import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("travel-unbounded");
    
    await db.collection("enquiries").insertOne(body);

    return NextResponse.json({ message: "Enquiry submitted successfully!" }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unable to save enquiry.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}