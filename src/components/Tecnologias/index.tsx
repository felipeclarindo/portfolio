import { TechnologiesType } from "@/types";
import Image from "next/image";

function Technologies({ props }: { props: TechnologiesType }) {
  return (
    <div key={props.id}>
      <Image src={props.image} alt={props.nome} />;
    </div>
  );
}

export { Technologies };
