import Link from "next/link";

function LinksRapido() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projetos">Projetos</Link>
        </li>
        <li>
          <Link href="/curriculo">Curriculo</Link>
        </li>
      </ul>
    </nav>
  );
}

export { LinksRapido };
