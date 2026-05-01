import { HeroBg } from "./HeroBg";

export const Hero = () => {
  return (
    <section className="h-screen w-full relative flex items-center justify-center">
      <HeroBg />
      <div className="max-w-[664px] relative z-10 px-6 text-center flex flex-col items-center gap-y-6">
        <h2 className="text-accent uppercase tracking-widest text-[14px] md:text-[16px]">
          Ексклюзивна студія краси
        </h2>
        <h1 className="font-accent italic text-4xl md:text-6xl lg:text-7xl  text-background  [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000]">
          Преміальне нарощування волосся
        </h1>
        <p className="text-grayCostom text-[18px]">
          Натуральність, яку неможливо відрізнити від власного волосся.
          Індивідуальний підхід до кожної клієнтки.
        </p>
        <a
          href="#hair"
          className="block py-3 px-6 bg-accent text-background tracking-wider uppercase  focus-visible:ring-accentHover focus-visible:ring-offset-foreground  hover:bg-accentHover focus:bg-accentHover hover:text-primary/80 focus:text-primary/80 transition-colors outline-none  focus-visible:ring-2  focus-visible:ring-offset-2    focus-visible:duration-0"
        >
          Дізнатися Більше
        </a>
      </div>
    </section>
  );
};
