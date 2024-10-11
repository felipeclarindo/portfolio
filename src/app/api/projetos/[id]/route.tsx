import { NextResponse } from "next/server";
import { projetos } from "../route";

export async function GET(
  response: Response,
  { params }: { params: { id: number } }
) {
  const projeto = projetos.find((projeto) => projeto.id == params.id);
  if (projeto) {
    return NextResponse.json(projeto);
  } else {
    return NextResponse.json("Projeto não encontrado.");
  }
}
