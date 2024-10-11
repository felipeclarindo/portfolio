import Link from "next/link";

function QuickLinks() {
  return (
    <nav>
      <ul>
        <li className="text-[var(--primary-text-color)]">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[var(--primary-text-color)]">
          <Link href="/projetos">Projetos</Link>
        </li>
        <li className="text-[var(--primary-text-color)]">
          <Link href="/curriculo">Curriculo</Link>
        </li>
      </ul>
    </nav>
  );
}

export { QuickLinks };
