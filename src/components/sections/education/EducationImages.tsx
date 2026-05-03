import Image from "next/image";

export const EducationImages = () => {
  return (
    <div className="flex gap-y-4 flex-col sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <div
        className="relative w-[260px] h-[348px] sm:w-[164px] sm:h-[218px] md:w-[352px] md:h-[470px]
          lg:w-[216px] lg:h-[288px] xl:w-[280px] xl:h-[374px] overflow-hidden"
      >
        <Image
          src="/images/studio-owner-ligth.webp"
          alt="studio owner"
          fill
          className="object-cover object-center"
        />
      </div>

      <div
        className="relative w-[260px] h-[348px] sm:w-[164px] sm:h-[218px] md:w-[352px] md:h-[470px]
          lg:w-[216px] lg:h-[288px] xl:w-[280px] xl:h-[374px] overflow-hidden sm:mt-4"
      >
        <Image
          src="/images/hair.webp"
          alt="Description of the image"
          fill
          className="object-cover scale-[1.01]"
        />
      </div>
    </div>
  );
};
