import Image from "next/image";
import { ButtonTheme } from "../ButtonTheme";
import { Menu } from "../Menu";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white flex justify-between items-center px-12 py-6">
      <Link
        className="transition-all ease-in-out duration-300 hover:opacity-65"
        href="/"
      >
        <Image
          className="relative flex w-11 h-11 justify-self-start"
          src="/assets/images/logo.png"
          alt="Letras FC dentro de um circulo representando a logo do site."
          width={300}
          height={300}
        />
      </Link>
      <Menu />
      <ButtonTheme />
    </header>
  );
}

export { Header };
