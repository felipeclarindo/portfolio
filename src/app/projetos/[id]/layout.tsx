import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeto | Felipe Clarindo",
};

export default function ProjetosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
