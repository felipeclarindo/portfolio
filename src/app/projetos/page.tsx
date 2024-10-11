"use client"

import { ProjectProps } from "@/types";
import { useEffect, useState } from "react";

export default function Projetos() {
  const [projetos, setProjetos] = useState(Array<ProjectProps>);
  console.log(projetos)
  useEffect(() => {
    async function getProjetos() {
      const response = await fetch("http://localhost:3000/api/produtos");
      const data = await response.json();

      setProjetos(data);
    }

    getProjetos();
  });

  return (
    <main>
      <h1>Projetos</h1>
    </main>
  );
}
