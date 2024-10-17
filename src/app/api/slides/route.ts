import { SlideProps } from "@/types";
import { NextResponse } from "next/server";

const slides: SlideProps[] = [
  {
    id: 1,
    alt: "Alt do Slide",
    url: "",
    title: "Slide 1",
    description: "Descrição do Slide 1",
  },
  {
    id: 2,
    url: "",
    alt: "Alt do Slide",
    title: "Slide 2",
    description: "Descrição do Slide 2",
  },
  {
    id: 3,
    url: "",
    alt: "Alt do Slide",
    title: "Slide 3",
    description: "Descrição do Slide 3",
  },
];

export async function GET() {
  return NextResponse.json(slides);
}
