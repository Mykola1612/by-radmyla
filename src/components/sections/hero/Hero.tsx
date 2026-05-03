import { HeroBg } from "./HeroBg";
import { HeroLink } from "./HeroLink";

export const Hero = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      <HeroBg />
      <div
        className="relative z-10 flex max-w-[664px] flex-col items-center gap-y-6 px-6 text-center"
      >
        <h2 className="text-[14px] tracking-widest text-accent uppercase md:text-[16px]">
          Ексклюзивна студія краси
        </h2>
        <h1
          className="font-accent text-4xl text-background italic
            [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000]
            md:text-6xl lg:text-7xl"
        >
          Преміальне нарощування волосся
        </h1>
        <p className="text-[18px] text-grayCostom">
          Натуральність, яку неможливо відрізнити від власного волосся. Індивідуальний підхід до
          кожної клієнтки.
        </p>
        <HeroLink />
      </div>
    </section>
  );
};
