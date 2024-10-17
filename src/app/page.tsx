import { AboutMe } from "@/screens/AboutMe";
import { HomePage } from "@/screens/HomePage";

export default function Home() {
  return (
    <main className="min-h-[70vh] max-w-[100vw] text-[var(--primary-text-color)]">
      <section className="flex relative max-h-[70vh] max-w-[100vw] bg-blue-700">
        <div className="h-[70vh] w-[50vw]">
          <HomePage />
        </div>
        <div className="w-[50vw] h-[90vh]">{/* <Slides /> */}</div>
      </section>
      <AboutMe />
    </main>
  );
}
