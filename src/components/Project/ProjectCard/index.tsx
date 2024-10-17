import Image from "next/image";
import Link from "next/link";

const imageLoader = ({ src, width }: { src: string; width: number }) => {
  return `${src}?w=${width}`;
};

function ProjectCard({
  id,
  image,
  descricao,
}: {
  id: number;
  image: string;
  descricao: string;
}) {
  return (
    <div className="max-w-[310px] max-h-[470px] flex flex-col p-4 rounded-md">
      <Link href={`/projetos/${id}`}>
        <Image
          className="rounded-md"
          loader={imageLoader}
          src={image}
          alt={descricao}
          width={600}
          height={400}
        />
      </Link>
    </div>
  );
}

export { ProjectCard };
