import Image from "next/image";

export const FounderFoto = () => {
  return (
    <div className="relative w-[260px] h-[325px]   sm:w-[342px] sm:h-[428px] md:w-[720px]  md:h-[900px] lg:w-[448px] lg:h-[560px] xl:w-[576px] xl:h-[720px] overflow-hidden">
      <Image
        src="/images/studio-owner.webp"
        alt="Description of the image"
        fill
        className="object-cover object-top"
      />
    </div>
  );
};
