import { Button } from "@/components/ui";
import Image from "next/image";

export const Hair = () => {
  return (
    <section id="hair" className="py-24 md:py-32">
      <div className="container-custom flex flex-col gap-y-16 justify-center items-center">
        <div className="flex flex-col gap-y-4 justify-center items-center text-center ">
          <p className="text-accent uppercase tracking-widest">
            Головна послуга
          </p>
          <h2 className="font-accent italic font-light  text-3xl  md:text-4xl lg:text-5xl ">
            Нарощування волосся
          </h2>

          <p className="max-w-[672px] md:text-lg">
            Використовуємо лише преміальне європейське волосся. Техніка, яка не
            пошкоджує власне волосся.
          </p>
        </div>

        <ul className="flex flex-col gap-y-6 justify-center items-center md:flex-row md:gap-x-1 md:gap-y-0">
          <li>
            <div className="flex gap-y-2 flex-col justify-center items-center xs:flex-row xs:gap-x-1 xs:gap-y-0">
              <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[170px] sm:h-[226px] lg:w-[234px] lg:h-[312px] xl:w-[298px] xl:h-[398px]">
                <Image fill className="border-2 border-amber-300" />
              </div>

              <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[170px] sm:h-[226px] lg:w-[234px] lg:h-[312px] xl:w-[298px] xl:h-[398px]">
                <Image fill className="border-2 border-amber-300" />
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-y-2 flex-col justify-center items-center xs:flex-row xs:gap-x-1 xs:gap-y-0">
              <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[170px] sm:h-[226px] lg:w-[234px] lg:h-[312px] xl:w-[298px] xl:h-[398px]">
                <Image fill className="border-2 border-amber-300" />
              </div>

              <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[170px] sm:h-[226px] lg:w-[234px] lg:h-[312px] xl:w-[298px] xl:h-[398px]">
                <Image fill className="border-2 border-amber-300" />
              </div>
            </div>
          </li>
        </ul>

        <div className="bg-[#F8F8F8] w-full  flex flex-col gap-y-10 justify-center items-center text-center  py-12 px-10 sm:px-12 md:py-16 ">
          <div className=" flex flex-col gap-y-4 justify-center items-center text-center">
            <h3 className="text-info uppercase tracking-widest">Вартість</h3>
            <p className="font-accent italic font-light   text-3xl  md:text-4xl lg:text-5xl ">
              200€ – 600€
            </p>
            <p className="max-w-[672px] text-info md:text-lg">
              Точна вартість визначається після консультації
            </p>
          </div>

          <Button className="uppercase bg-primary text-background">
            Записатися на консультацію
          </Button>
        </div>
      </div>
    </section>
  );
};
