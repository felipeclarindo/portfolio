import Link from "next/link";
import { QuickLinks } from "../QuickLinks";
import { SocialMedia } from "../SocialMedia";

function Footer() {
  return (
    <footer className="flex justify-between items-center px-[14rem] h-[260px] border-t-2 bg-[var(--primary-bg-color)] text-[var(--primary-text-color)]">
      <div className="mt-6">
        <h3 className="text-2xl font-bold">Desenvolvido</h3>
        <p className="text-base ml-1">
          por{" "}
          <Link
            className="underline font-bold transition-all duration-300 ease-in-out underline-offset-2 text-slate-100 hover:opacity-70 hover:cursor-pointer"
            href="https://linkedin.com/in/felipeclarindo"
          >
            Felipe Clarindo
          </Link>
        </p>
        <div className="ml-3 mt-3">
          <SocialMedia />
        </div>
        <p className="mt-[5em]">© 2024. All rights reserved.</p>
      </div>
      <QuickLinks />
    </footer>
  );
}

export { Footer };
