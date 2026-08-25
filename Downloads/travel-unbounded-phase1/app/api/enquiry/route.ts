import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isFutureDate(date: string) {
  const selected = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return !Number.isNaN(selected.getTime()) && selected > today;
}
export const dynamic = 'force-dynamic';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, contactNumber, email, travelDate, numberOfPeople, hotelCategory, children } = body;

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!contactNumber || typeof contactNumber !== "string" || contactNumber.replace(/\D/g, "").length < 8) {
      return NextResponse.json({ error: "A valid contact number is required." }, { status: 400 });
    }
    if (!isFutureDate(travelDate)) {
      return NextResponse.json({ error: "Date of travel must be a future date." }, { status: 400 });
    }
    if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1) {
      return NextResponse.json({ error: "Number of people must be at least 1." }, { status: 400 });
    }
    if (!["Standard", "Deluxe", "Luxury"].includes(hotelCategory)) {
      return NextResponse.json({ error: "Invalid hotel category." }, { status: 400 });
    }
    if (!Number.isInteger(children) || children < 0) {
      return NextResponse.json({ error: "Number of children cannot be negative." }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "travel_unbounded");
    const result = await db.collection("enquiries").insertOne({
      fullName: fullName.trim(),
      contactNumber,
      email: email.trim().toLowerCase(),
      travelDate,
      numberOfPeople,
      hotelCategory,
      children,
      createdAt: new Date()
    });

    return NextResponse.json({ success: true, id: result.insertedId.toString() }, { status: 201 });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json({ error: "Unable to save enquiry. Please try again." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "travel_unbounded");
    const enquiries = await db.collection("enquiries").find({}).sort({ createdAt: -1 }).limit(100).toArray();
    return NextResponse.json(enquiries);
  } catch {
    return NextResponse.json({ error: "Unable to retrieve enquiries." }, { status: 500 });
  }
}