import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { remesa } = await request.json();

  try {
    const url = process.env.NEXT_PUBLIC_TRACKING_API_URL;

    if (!url) {
      throw new Error("Tracking API URL is not defined");
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        remesa,
      }),
    });
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
