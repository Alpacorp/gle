import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { remesa } = await request.json();

  const res = await fetch("https://api.nmv.app/api/getUrbRemesa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usuario: "api_gle",
      clave: "gle001&.",
      remesa,
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
