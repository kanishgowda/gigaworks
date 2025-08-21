import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("gigs").select("*")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, category, location, pay, description, contactEmail } = body;
  if (!title || !description || !pay || !contactEmail)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const { data, error } = await supabase
    .from("gigs")
    .insert([{ title, category, location, pay, description, contact_email: contactEmail }])
    .select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data[0]);
}
