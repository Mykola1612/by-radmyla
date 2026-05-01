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
                <Image
                  src="/images/hair-style-01.webp"
                  alt="Результат нарощування волосся: стильне фарбування у сірий колір та об'єм"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
              </div>

              <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[170px] sm:h-[226px] lg:w-[234px] lg:h-[312px] xl:w-[298px] xl:h-[398px]">
                <Image
                  src="/images/hair-style-02.webp"
                  alt="Нарощування волосся натурального коричневого відтінку: густота та природний вигляд"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-y-2 flex-col justify-center items-center xs:flex-row xs:gap-x-1 xs:gap-y-0">
              <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[170px] sm:h-[226px] lg:w-[234px] lg:h-[312px] xl:w-[298px] xl:h-[398px]">
                <Image
                  src="/images/hair-style-03.webp"
                  alt="Довгий блонд з накрученими локонами після процедури нарощування волосся"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
              </div>

              <div className="relative w-[170px] h-[226px] xs:w-[140px] xs:h-[186px] sm:w-[170px] sm:h-[226px] lg:w-[234px] lg:h-[312px] xl:w-[298px] xl:h-[398px]">
                <Image
                  src="/images/hair-style-04.webp"
                  alt="Розкішне довге чорне волосся: результат нарощування для максимальної довжини"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
              </div>
            </div>
          </li>
        </ul>

        <ul className="flex flex-col sm:w-[342px]  gap-y-6 justify-between items-center sm:flex-row sm:gap-x-1 md:gap-y-0 md:w-[692px] lg:w-[948px] xl:w-[1204px]">
          <li>
            <div className="flex gap-y-2 flex-col justify-center items-center xs:flex-row xs:gap-x-1 xs:gap-y-0">
              <div className="relative w-[180px] h-[180px]  sm:w-[104px] sm:h-[104px] md:w-[230px] md:h-[230px] lg:w-[315px] lg:h-[315px] xl:w-[400px] xl:h-[400px]">
                <Image
                  src="/images/hair-extension.webp"
                  alt="Натуральне волосся для нарощування у зрізах (пучках)"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-y-2 flex-col justify-center items-center xs:flex-row xs:gap-x-1 xs:gap-y-0">
              <div className="relative w-[180px] h-[180px]  sm:w-[104px] sm:h-[104px] md:w-[230px] md:h-[230px] lg:w-[315px] lg:h-[315px] xl:w-[400px] xl:h-[400px] ">
                <Image
                  src="/images/salon.webp"
                  alt="Інтер'єр професійної студії нарощування волосся"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-y-2 flex-col justify-center items-center xs:flex-row xs:gap-x-1 xs:gap-y-0">
              <div className="relative w-[180px] h-[180px] sm:w-[104px] sm:h-[104px] md:w-[230px] md:h-[230px] lg:w-[315px] lg:h-[315px] xl:w-[400px] xl:h-[400px]">
                <Image
                  src="/images/bang.webp"
                  alt="Результат нарощування чубчика, вигляд до та після"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
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

          <Button className="uppercase bg-primary text-background  focus-visible:ring-offset-background  hover:bg-accentHover focus:bg-accentHover hover:text-primary/80 focus:text-primary/80 ">
            Записатися на консультацію
          </Button>
        </div>
      </div>
    </section>
  );
};
