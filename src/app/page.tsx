import { Header } from "@/components/layout/header/Header";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/footer/Footer";

const courseFeatures = [
  {
    id: "individual",
    text: "Індивідуальне навчання",
  },
  {
    id: "practice",
    text: "Практика на реальних моделях",
  },
  {
    id: "certificate",
    text: "Сертифікат про проходження",
  },
  {
    id: "support",
    text: "Підтримка після курсу",
  },
];

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <section className="h-screen w-full relative flex items-center justify-center">
        <Image
          src="/images/premium-hair-salon-bg.webp"
          alt="Description of the image"
          fill
          className="object-cover absolute -z-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.3)_50%,_transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>

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
            className="block py-3 px-6 bg-accent text-background tracking-wider uppercase  hover:text-primary hover:text-foreground transition-colors"
          >
            Дізнатися Більше
          </a>
        </div>
      </section>
      <section id="founder" className="py-32 ">
        <div className="container-custom flex flex-1 flex-col gap-y-12  justify-center items-center lg:flex-row lg:gap-x-20 lg:gap-y-0">
          <div className="relative w-[260px] h-[325px]   sm:w-[342px] sm:h-[428px] md:w-[720px]  md:h-[900px] lg:w-[448px] lg:h-[560px] xl:w-[576px] xl:h-[720px] overflow-hidden">
            <Image
              src="/images/studio-owner.webp"
              alt="Description of the image"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="max-w-[544]">
            <p className="text-accent uppercase tracking-widest">
              Засновниця студії
            </p>
            <h2 className="mt-4 font-accent italic  font-light text-3xl  md:text-4xl lg:text-5xl">
              Radmyla - Мистецтво краси
            </h2>
            <ul className="flex flex-col gap-y-6 mt-8 max-w-[544] text-info ">
              <li>
                <p>
                  Понад <b className="text-primary">20 років досвіду </b> у
                  сфері преміального нарощування волосся та створення
                  індивідуальних систем заміщення.
                </p>
              </li>
              <li>
                <p>
                  Кожна клієнтка — це унікальна історія. Ми не просто нарощуємо
                  волосся, ми створюємо{" "}
                  <b className="text-primary">впевненість та красу</b>, яка
                  виглядає абсолютно природньо.
                </p>
              </li>
              <li>
                <p>
                  Використовуємо лише{" "}
                  <b className="text-primary">преміальні матеріали</b> та
                  техніки, що пройшли міжнародну сертифікацію.
                </p>
              </li>
            </ul>
            <ul className="pt-16 mt-16 border-t border-accent/40  text-accent italic text-sm uppercase  flex justify-between flex-col gap-y-6 sm:flex-row sm:gap-x-8 sm:gap-y-0 ">
              <li>
                <p className="text-3xl  lg:text-4xl   font-accent ">20+</p>
                <p className="text-[14px]">Років досвіду</p>
              </li>
              <li>
                <p className="text-3xl  lg:text-4xl   font-accent ">1000+</p>
                <p className="text-[14px]">Задоволених клієнтів</p>
              </li>
              <li>
                <p className="text-3xl  lg:text-4xl   font-accent ">100%</p>
                <p className="text-[14px]">Натуральність</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="education" className="py-24 md:py-32 bg-foreground">
        <div className="container-custom flex  flex-col  gap-20 justify-center items-center lg:flex-row">
          <div className="max-w-[544]">
            <p className="text-accent uppercase tracking-widest">
              Для майстрів
            </p>
            <h2 className="mt-4 font-accent italic font-light text-background text-3xl  md:text-4xl lg:text-5xl ">
              Навчання та майстер-класи
            </h2>
            <ul className="flex flex-col gap-y-6 mt-8 max-w-[544] text-grayCostom ">
              <li>
                <p>
                  Передаємо свій досвід та техніки преміального нарощування
                  волосся майстрам, які прагнуть вийти на новий рівень.
                </p>
              </li>
              <li>
                <p>
                  Індивідуальний підхід до кожної учениці, практика на моделях,
                  та підтримка після завершення курсу.
                </p>
              </li>
            </ul>
            <ul className=" text-grayCostom flex flex-col gap-y-4 mt-10">
              {courseFeatures.map((item) => (
                <li
                  key={item.id}
                  className="relative pl-6 before:content-[''] 
              before:block before:w-2 before:h-2 before:bg-accent  
               before:absolute  before:top-1/2
               before:-translate-y-1/2  before:left-0 "
                >
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <Button className="mt-10">Записатися на консультацію</Button>
          </div>
          <div className="flex  gap-y-4 flex-col sm:flex-row sm:gap-x-4 sm:gap-y-0 ">
            <div className="relative w-[260px] h-[348px]   sm:w-[164px] sm:h-[218px] md:w-[352px]  md:h-[470px] lg:w-[216px] lg:h-[288px] xl:w-[280px] xl:h-[374px] overflow-hidden">
              <Image
                src="/images/studio-owner-ligth.webp"
                alt="studio owner"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="relative w-[260px] h-[348px]   sm:w-[164px] sm:h-[218px] md:w-[352px]  md:h-[470px] lg:w-[216px] lg:h-[288px] xl:w-[280px] xl:h-[374px]  overflow-hidden sm:mt-4">
              <Image
                src="/images/hair.webp"
                alt="Description of the image"
                fill
                className="object-cover scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 bg-primary"></section>
      <Footer />
    </>
  );
}
