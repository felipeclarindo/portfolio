import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculo | Felipe Clarindo",
};

export default function CurriculoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
