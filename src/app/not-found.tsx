import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page not found",
};

export default function NotFound() {
  return (
    <div>
      <h1>404 : Not Found</h1>
      <p>Página não encontrada.</p>
    </div>
  );
}
