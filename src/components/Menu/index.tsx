"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Menu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-5">
        <li
          className={`text-black text-lg hover:opacity-60 hover:underline hover:underline-offset-2 ${
            pathname === "/" ? "underline underline-offset-2 opacity-60" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`text-black text-lg hover:opacity-60 hover:underline hover:underline-offset-2 ${
            pathname === "/projetos" ? "underline underline-offset-2 opacity-60" : ""
          }`}
        >
          <Link href="/projetos">Projetos</Link>
        </li>
        <li
          className={`text-black text-lg hover:opacity-60 hover:underline hover:underline-offset-2 ${
            pathname === "/curriculo" ? "underline underline-offset-2 opacity-60" : ""
          }`}
        >
          <Link href="/curriculo">Curriculo</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Menu };
