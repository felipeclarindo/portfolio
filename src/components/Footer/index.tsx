import { QuickLinks } from "../QuickLinks";
import { SocialMedia } from "../SocialMedia";

function Footer() {
  return (
    <footer className="flex justify-between items-center px-14 h-[260px] border-t-2 bg-[var(--primary-bg-color)] text-[var(--primary-text-color)]">
      <div>
        <h3 className="text-2xl font-bold">Deselvolvedor</h3>
        <p className="m-[0px 0px 40px 0px]-5">
          Desenvolvido por Felipe Clarindo
        </p>
        <QuickLinks />
        <p>© 2024. All rights reserved.</p>
      </div>
      <SocialMedia />
    </footer>
  );
}

export { Footer };
