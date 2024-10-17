import { NextResponse } from "next/server";
import { projetos } from "./projetos";

export async function GET() {
  return NextResponse.json(projetos);
}
