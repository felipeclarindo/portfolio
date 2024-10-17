import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function QuickLinks() {
  return (
    <nav className="flex flex-col">
      <span className="text-[1.1em] font-bold">Links Rapidos</span>
      <ul>
        <li className="text-[var(--primary-text-color) cursor-pointer transition-all duration-300 hover:opacity-65">
          <Link className="flex gap-[0.5rem]" href="/">
            <FontAwesomeIcon className="w-3" icon={faShare} /> Home
          </Link>
        </li>
        <li className="text-[var(--primary-text-color)] cursor-pointer transition-all duration-300 hover:opacity-65">
          <Link className="flex gap-[0.5rem]" href="/projetos">
            <FontAwesomeIcon className="w-3" icon={faShare} /> Projetos
          </Link>
        </li>
        <li className="text-[var(--primary-text-color)] cursor-pointer transition-all duration-300 hover:opacity-65">
          <Link className="flex gap-[0.5rem] " href="/curriculo">
            <FontAwesomeIcon className="w-3" icon={faShare} /> Curriculo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { QuickLinks };
