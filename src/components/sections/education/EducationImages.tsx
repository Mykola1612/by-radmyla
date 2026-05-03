import Image from "next/image";

export const EducationImages = () => {
  return (
    <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <div
        className="relative h-[348px] w-[260px] overflow-hidden sm:h-[218px] sm:w-[164px]
          md:h-[470px] md:w-[352px] lg:h-[288px] lg:w-[216px] xl:h-[374px] xl:w-[280px]"
      >
        <Image
          src="/images/studio-owner-ligth.webp"
          alt="studio owner"
          fill
          className="object-cover object-center"
        />
      </div>

      <div
        className="relative h-[348px] w-[260px] overflow-hidden sm:mt-4 sm:h-[218px] sm:w-[164px]
          md:h-[470px] md:w-[352px] lg:h-[288px] lg:w-[216px] xl:h-[374px] xl:w-[280px]"
      >
        <Image
          src="/images/hair.webp"
          alt="Description of the image"
          fill
          className="scale-[1.01] object-cover"
        />
      </div>
    </div>
  );
};
