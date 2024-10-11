import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Felipe Clarindo",
  description:
    "Projetos desenvolvidos por felipeclarindo (websites, softwares, automações, análises de dados e etc.)",
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
