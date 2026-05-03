import Image from "next/image";

export const FounderFoto = () => {
  return (
    <div
      className="relative h-[325px] w-[260px] overflow-hidden sm:h-[428px] sm:w-[342px] md:h-[900px]
        md:w-[720px] lg:h-[560px] lg:w-[448px] xl:h-[720px] xl:w-[576px]"
    >
      <Image
        src="/images/studio-owner.webp"
        alt="Description of the image"
        fill
        className="object-cover object-top"
      />
    </div>
  );
};
