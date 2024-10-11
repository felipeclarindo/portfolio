import "./globals.css";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Home | Felipe Clarindo",
  description: "Portfolio Felipe Clarindo",
  icons: { icon: { rel: "icon", url: "/favicon.png" } },
};
export const viewport = {
  initialScale: 1.0,
  width: "device-width",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
