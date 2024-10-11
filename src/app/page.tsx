import { RedesSociais } from "@/components/RedesSociais";

export default function Home() {
  return (
    <main className="h-[80vh] m-w-[100vw] bg-[var(--primary-bg-color)] text-[var(--primary-text-color)]">
      <section>
        <h1>Felipe Clarindo</h1>
        <span>Desenvolvedor Full Stack (Back-end & Front-end)</span>
        <RedesSociais />
      </section>
      {/* <AboutMe /> */}
    </main>
  );
}
