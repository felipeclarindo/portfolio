import { Slides } from "@/components/Slides";
import { SocialMedia } from "@/components/SocialMedia";

export default function Home() {
  return (
    <main className="min-h-[70vh] min-w-[100vw] bg-[var(--primary-bg-color)] text-[var(--primary-text-color)]">
      <section className="flex justify-center items-center max-w-[100vw]">
        <div className="w-[50%] relative">
          <h1 className="text-4xl font-bold">Felipe Clarindo</h1>
          <span className="text-2xl">
            Desenvolvedor Full Stack (Back-end & Front-end)
          </span>
          <SocialMedia />
        </div>
        <div className="w-[50%] h-[80vh] relative bg-blue-50">
          <Slides />
        </div>
      </section>
      {/* <AboutMe /> */}
    </main>
  );
}
