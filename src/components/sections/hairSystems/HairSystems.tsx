import { Button } from "@/components/ui";
import Image from "next/image";

export const HairSystems = () => {
  return (
    <section id="systems" className="bg-foreground py-24 md:py-32">
      <div className="container-custom flex flex-col items-center justify-center gap-y-16">
        <div className="flex flex-col items-center justify-center gap-y-4 text-center">
          <p className="tracking-widest text-accent uppercase">Індивідуальні рішення</p>
          <h2
            className="font-accent text-3xl font-light text-background italic md:text-4xl
              lg:text-5xl"
          >
            Hair Systems
          </h2>

          <p className="max-w-[672px] text-grayCostom md:text-lg">
            Преміальні системи заміщення волосся, створені індивідуально під вас. Непомітний
            результат, максимальний комфорт.
          </p>
        </div>

        <ul
          className="flex w-full flex-col items-center justify-center gap-y-6 md:flex-row md:gap-x-6
            md:gap-y-0"
        >
          <li>
            <div
              className="relative h-[226px] w-[170px] sm:h-[456px] sm:w-[342px] md:h-[298px]
                md:w-[224px] lg:h-[412px] lg:w-[310px] xl:h-[526px] xl:w-[395px]"
            >
              <Image
                src="/images/girl-01.webp"
                alt="Розкішне довге чорне волосся: результат нарощування для максимальної довжини"
                fill
                className="object-cover"
                sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
              />
              <div
                className="absolute h-full w-full
                  bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]"
              ></div>
              <div
                className="absolute h-full w-full
                  bg-[linear-gradient(270deg,#1a1a1a_0%,rgba(26,26,26,0)_1%,transparent_20%)]"
              ></div>
              <p className="absolute bottom-6 left-6 py-2 text-background">Натуральне волосся</p>
            </div>
          </li>
          <li>
            <div
              className="relative h-[226px] w-[170px] sm:h-[456px] sm:w-[342px] md:h-[298px]
                md:w-[224px] lg:h-[412px] lg:w-[310px] xl:h-[526px] xl:w-[395px]"
            >
              <Image
                src="/images/girl-02.webp"
                alt="Розкішне довге чорне волосся: результат нарощування для максимальної довжини"
                fill
                className="object-cover"
                sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
              />
              <div
                className="absolute h-full w-full
                  bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]"
              ></div>
              <div
                className="absolute h-full w-full
                  bg-[linear-gradient(270deg,#1a1a1a_0%,rgba(26,26,26,0)_1%,transparent_20%)]"
              ></div>
              <p className="absolute bottom-6 left-6 py-2 text-background">Hair Systems</p>
            </div>
          </li>
          <li>
            <div
              className="relative h-[226px] w-[170px] sm:h-[456px] sm:w-[342px] md:h-[298px]
                md:w-[224px] lg:h-[412px] lg:w-[310px] xl:h-[526px] xl:w-[395px]"
            >
              <Image
                src="/images/girl-03.webp"
                alt="Розкішне довге чорне волосся: результат нарощування для максимальної довжини"
                fill
                className="object-cover"
                sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
              />
              <div
                className="absolute h-full w-full
                  bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]"
              ></div>
              <div
                className="absolute h-full w-full
                  bg-[linear-gradient(270deg,#1a1a1a_0%,rgba(26,26,26,0)_1%,transparent_20%)]"
              ></div>
              <p className="absolute bottom-6 left-6 py-2 text-background">Індивідуальний підбір</p>
            </div>
          </li>
        </ul>

        <ul
          className="flex w-full flex-col justify-between gap-y-6 text-sm text-grayCostom uppercase
            italic md:flex-row md:gap-x-8 md:gap-y-0"
        >
          <li
            className="flex w-full flex-col items-center justify-center gap-y-3 border
              border-borderLink px-8 py-8 text-center"
          >
            <p className="font-accent text-3xl text-accent lg:text-4xl">100%</p>
            <p className="text-[14px]">Натуральне волосся</p>
          </li>
          <li
            className="flex w-full flex-col items-center justify-center gap-y-3 border
              border-borderLink px-8 py-8 text-center"
          >
            <p className="font-accent text-3xl text-accent lg:text-4xl">24/7</p>
            <p className="text-[14px]">Комфортне носіння</p>
          </li>
          <li
            className="flex w-full flex-col items-center justify-center gap-y-3 border
              border-borderLink px-8 py-8 text-center"
          >
            <p className="font-accent text-3xl text-accent lg:text-4xl">∞</p>
            <p className="text-[14px]">Індивідуальний дизайн</p>
          </li>
        </ul>

        <div
          className="flex w-full flex-col items-center justify-center gap-y-10 border
            border-borderLink px-10 py-12 text-center sm:px-12 md:py-16"
        >
          <div className="flex flex-col items-center justify-center gap-y-4 text-center">
            <h3 className="tracking-widest text-grayCostom uppercase">Вартість</h3>
            <p
              className="font-accent text-3xl font-light text-background italic md:text-4xl
                lg:text-5xl"
            >
              200€ – 500€
            </p>
            <p className="max-w-[672px] text-grayCostom md:text-lg">
              Точна вартість визначається після консультації
            </p>
          </div>

          <Button
            className="uppercase [@media(hover:hover)_and_(pointer:fine)]:hover:bg-accentHover
              [@media(hover:hover)_and_(pointer:fine)]:hover:text-primary/80
              focus-visible:bg-accentHover focus-visible:text-primary/80
              focus-visible:ring-offset-foreground active:bg-accentHover active:text-primary/80"
          >
            Записатися на консультацію
          </Button>
        </div>
      </div>
    </section>
  );
};
