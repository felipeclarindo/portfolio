import { SocialMedia } from "../../components/SocialMedia";

function HomePage() {
  return (
    <section className="flex flex-col justify-center items-start max-w-[50vw] h-[70vh] bg-[var(--primary-bg-color)]">
      <div className="flex flex-col ml-40">
        <h1 className="text-[3.5rem] font-bold">Felipe Clarindo</h1>
        <p className="text-[1.2rem]">
          Desenvolvedor Full Stack (Back-end & Front-end)
        </p>
      </div>
      <div className="ml-[11rem] my-5">
        <SocialMedia />
      </div>
      <button className="bg-slate-100 text-gray-700 ml-40 py-4 px-8 rounded-xl transition-all ease-in-out duration-300 hover:opacity-80 hover:bg-gray-700 hover:text-slate-100 ">
        <a className="text-xl font-bold" href="#about-me">
          Ver mais
        </a>
      </button>
    </section>
  );
}

export { HomePage };
