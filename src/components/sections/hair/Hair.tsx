import { Button } from "@/components/ui";
import Image from "next/image";

export const Hair = () => {
  return (
    <section id="hair" className="py-24 md:py-32">
      <div className="container-custom flex flex-col items-center justify-center gap-y-16">
        <div className="flex flex-col items-center justify-center gap-y-4 text-center">
          <p className="tracking-widest text-accent uppercase">Головна послуга</p>
          <h2 className="font-accent text-3xl font-light italic md:text-4xl lg:text-5xl">
            Нарощування волосся
          </h2>

          <p className="max-w-[672px] md:text-lg">
            Використовуємо лише преміальне європейське волосся. Техніка, яка не пошкоджує власне
            волосся.
          </p>
        </div>

        <ul
          className="flex flex-col items-center justify-center gap-y-6 md:flex-row md:gap-x-1
            md:gap-y-0"
        >
          <li>
            <div
              className="flex flex-col items-center justify-center gap-y-2 xs:flex-row xs:gap-x-1
                xs:gap-y-0"
            >
              <div
                className="relative h-[226px] w-[170px] xs:h-[186px] xs:w-[140px] sm:h-[226px]
                  sm:w-[170px] lg:h-[312px] lg:w-[234px] xl:h-[398px] xl:w-[298px]"
              >
                <Image
                  src="/images/hair-style-01.webp"
                  alt="Результат нарощування волосся: стильне фарбування у сірий колір та об'єм"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
              </div>

              <div
                className="relative h-[226px] w-[170px] xs:h-[186px] xs:w-[140px] sm:h-[226px]
                  sm:w-[170px] lg:h-[312px] lg:w-[234px] xl:h-[398px] xl:w-[298px]"
              >
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
            <div
              className="flex flex-col items-center justify-center gap-y-2 xs:flex-row xs:gap-x-1
                xs:gap-y-0"
            >
              <div
                className="relative h-[226px] w-[170px] xs:h-[186px] xs:w-[140px] sm:h-[226px]
                  sm:w-[170px] lg:h-[312px] lg:w-[234px] xl:h-[398px] xl:w-[298px]"
              >
                <Image
                  src="/images/hair-style-03.webp"
                  alt="Довгий блонд з накрученими локонами після процедури нарощування волосся"
                  fill
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 170px, (max-width: 1024px) 234px, 298px"
                />
              </div>

              <div
                className="relative h-[226px] w-[170px] xs:h-[186px] xs:w-[140px] sm:h-[226px]
                  sm:w-[170px] lg:h-[312px] lg:w-[234px] xl:h-[398px] xl:w-[298px]"
              >
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

        <ul
          className="flex flex-col items-center justify-between gap-y-6 sm:w-[342px] sm:flex-row
            sm:gap-x-1 md:w-[692px] md:gap-y-0 lg:w-[948px] xl:w-[1204px]"
        >
          <li>
            <div
              className="flex flex-col items-center justify-center gap-y-2 xs:flex-row xs:gap-x-1
                xs:gap-y-0"
            >
              <div
                className="relative h-[180px] w-[180px] sm:h-[104px] sm:w-[104px] md:h-[230px]
                  md:w-[230px] lg:h-[315px] lg:w-[315px] xl:h-[400px] xl:w-[400px]"
              >
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
            <div
              className="flex flex-col items-center justify-center gap-y-2 xs:flex-row xs:gap-x-1
                xs:gap-y-0"
            >
              <div
                className="relative h-[180px] w-[180px] sm:h-[104px] sm:w-[104px] md:h-[230px]
                  md:w-[230px] lg:h-[315px] lg:w-[315px] xl:h-[400px] xl:w-[400px]"
              >
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
            <div
              className="flex flex-col items-center justify-center gap-y-2 xs:flex-row xs:gap-x-1
                xs:gap-y-0"
            >
              <div
                className="relative h-[180px] w-[180px] sm:h-[104px] sm:w-[104px] md:h-[230px]
                  md:w-[230px] lg:h-[315px] lg:w-[315px] xl:h-[400px] xl:w-[400px]"
              >
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

        <div
          className="flex w-full flex-col items-center justify-center gap-y-10 bg-[#F8F8F8] px-10
            py-12 text-center sm:px-12 md:py-16"
        >
          <div className="flex flex-col items-center justify-center gap-y-4 text-center">
            <h3 className="tracking-widest text-info uppercase">Вартість</h3>
            <p className="font-accent text-3xl font-light italic md:text-4xl lg:text-5xl">
              200€ – 600€
            </p>
            <p className="max-w-[672px] text-info md:text-lg">
              Точна вартість визначається після консультації
            </p>
          </div>

          <Button
            className="focus-visible::bg-accentHover focus-visible:text-primary/80 bg-primary
              text-background uppercase
              [@media(hover:hover)_and_(pointer:fine)]:hover:bg-accentHover
              [@media(hover:hover)_and_(pointer:fine)]:hover:text-primary/80
              focus-visible:ring-offset-background active:bg-accentHover active:text-primary/80"
          >
            Записатися на консультацію
          </Button>
        </div>
      </div>
    </section>
  );
};
