import Link from "next/link";

function Menu() {
  return (
    <nav>
      <ul className="flex gap-5">
        <li className="text-black text-lg hover: text-opacity-70 underline-offset-1">
          <Link href="/">Home</Link>
        </li>
        <li className="text-black text-lg">
          <Link href="/projetos">Projetos</Link>
        </li>
        <li className="text-black text-lg">
          <Link href="/curriculo">Curriculo</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Menu };
