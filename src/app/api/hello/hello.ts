import { NextResponse } from "next/server";

const DATA_SUORCE_URL = "https://jsonplaceholder.typicode.com/todos/";

export async function GET() {
  const res = await fetch(DATA_SUORCE_URL);
  const data = await res.json();

  return NextResponse.json(data);
}
