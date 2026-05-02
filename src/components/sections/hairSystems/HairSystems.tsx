import { Button } from "@/components/ui";
import Image from "next/image";

export const HairSystems = () => {
  return (
    <section id="systems" className="py-24 md:py-32 bg-foreground ">
      <div className="container-custom flex flex-col gap-y-16 justify-center items-center">
        <div className="flex flex-col gap-y-4 justify-center items-center text-center ">
          <p className="text-accent uppercase tracking-widest">
            Індивідуальні рішення
          </p>
          <h2 className="font-accent italic font-light  text-background  text-3xl  md:text-4xl lg:text-5xl ">
            Hair Systems
          </h2>

          <p className="max-w-[672px] text-grayCostom md:text-lg">
            Преміальні системи заміщення волосся, створені індивідуально під
            вас. Непомітний результат, максимальний комфорт.
          </p>
        </div>

        <ul className="flex flex-col w-full gap-y-6 justify-center items-center md:flex-row md:gap-x-6 md:gap-y-0">
          <li>
            <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[342px] sm:h-[456px] md:w-[224px] md:h-[298px] lg:w-[310px] lg:h-[412px] xl:w-[395px] xl:h-[526px]">
              <Image
                src="/images/girl-01.webp"
                alt="Розкішне довге чорне волосся: результат нарощування для максимальної довжини"
                fill
                className="object-cover "
                sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
              />
            </div>
          </li>
          <li>
            <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[342px] sm:h-[456px] md:w-[224px] md:h-[298px] lg:w-[310px] lg:h-[412px] xl:w-[395px] xl:h-[526px]">
              <Image
                src="/images/girl-02.webp"
                alt="Розкішне довге чорне волосся: результат нарощування для максимальної довжини"
                fill
                className="object-cover "
                sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
              />
            </div>
          </li>
          <li>
            <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[342px] sm:h-[456px] md:w-[224px] md:h-[298px] lg:w-[310px] lg:h-[412px] xl:w-[395px] xl:h-[526px]">
              <Image
                src="/images/girl-03.webp"
                alt="Розкішне довге чорне волосся: результат нарощування для максимальної довжини"
                fill
                className="object-cover "
                sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
              />
            </div>
          </li>
        </ul>

        <ul className="w-full text-grayCostom italic text-sm uppercase  flex justify-between  flex-col gap-y-6 md:flex-row md:gap-x-8 md:gap-y-0 ">
          <li className="border border-borderLink flex flex-col gap-y-3 justify-center items-center w-full py-8 text-center px-8">
            <p className="text-3xl  lg:text-4xl   font-accent  text-accent">
              100%
            </p>
            <p className="text-[14px]">Натуральне волосся</p>
          </li>
          <li className="border border-borderLink flex flex-col gap-y-3 justify-center items-center w-full py-8 text-center px-8">
            <p className="text-3xl  lg:text-4xl   font-accent  text-accent">
              24/7
            </p>
            <p className="text-[14px]">Комфортне носіння</p>
          </li>
          <li className="border border-borderLink flex flex-col gap-y-3 justify-center items-center w-full py-8 text-center px-8">
            <p className="text-3xl  lg:text-4xl   font-accent  text-accent  ">
              ∞
            </p>
            <p className="text-[14px]">Індивідуальний дизайн</p>
          </li>
        </ul>

        <div className="border border-borderLink w-full  flex flex-col gap-y-10 justify-center items-center text-center  py-12 px-10 sm:px-12 md:py-16 ">
          <div className=" flex flex-col gap-y-4 justify-center items-center text-center">
            <h3 className="text-grayCostom uppercase tracking-widest">
              Вартість
            </h3>
            <p className="font-accent italic font-light  text-background  text-3xl  md:text-4xl lg:text-5xl ">
              200€ – 500€
            </p>
            <p className="max-w-[672px] text-grayCostom md:text-lg">
              Точна вартість визначається після консультації
            </p>
          </div>

          <Button className="uppercase  focus-visible:ring-offset-foreground  hover:bg-accentHover focus:bg-accentHover hover:text-primary/80 focus:text-primary/80">
            Записатися на консультацію
          </Button>
        </div>
      </div>
    </section>
  );
};
