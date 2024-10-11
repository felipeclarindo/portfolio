import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import { ButtonTheme } from "../ButtonTheme";
import { Menu } from "../Menu";

function Header() {
  return (
    <header className="bg-white flex justify-between items-center px-12 py-6">
      <Image
        className="relative flex w-11 h-11 justify-self-start"
        src={Logo}
        alt="Letras FC dentro de um circulo representando a logo do site."
      />
      <Menu />
      <ButtonTheme />
    </header>
  );
}

export { Header };
