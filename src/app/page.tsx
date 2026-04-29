import { Header } from "@/components/layout/header/Header";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
    <div>
      <Header />
      <section className="flex flex-1 max-w-[1232] mx-auto gap-x-20 py-32 justify-center items-center">
        <Image
          src="/images/studio-owner.webp"
          alt="Description of the image"
          width={576}
          height={720}
        />
        <div className="max-w-[544]">
          <p className="text-accent uppercase tracking-widest">
            Засновниця студії
          </p>
          <h2 className="mt-4 font-accent italic text-5xl font-light">
            Radmyla - Мистецтво краси
          </h2>
          <ul className="flex flex-col gap-y-6 mt-8 max-w-[544] text-info ">
            <li>
              <p>
                Понад <b className="text-primary">20 років досвіду </b> у сфері
                преміального нарощування волосся та створення індивідуальних
                систем заміщення.
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
                <b className="text-primary">преміальні матеріали</b> та техніки,
                що пройшли міжнародну сертифікацію.
              </p>
            </li>
          </ul>
          <ul className="pt-16 mt-16 border-t border-accent/40 flex justify-between gap-x-6  text-accent italic text-sm uppercase">
            <li>
              <p className="text-4xl  font-accent ">20+</p>
              <p>Років досвіду</p>
            </li>
            <li>
              <p className="text-4xl  font-accent ">1000+</p>
              <p>Задоволених клієнтів</p>
            </li>
            <li>
              <p className="text-4xl  font-accent ">100%</p>
              <p>Натуральність</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="education" className="py-32 bg-foreground">
        <div className="max-w-[1232]  flex flex-1 gap-x-20 justify-center items-center mx-auto">
          <div className="max-w-[544]">
            <p className="text-accent uppercase tracking-widest">
              Для майстрів
            </p>
            <h2 className="mt-4 font-accent italic text-5xl font-light text-background">
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
          <div className="flex items-start gap-x-4">
            <div className="relative w-[280px] h-[374px] overflow-hidden">
              <Image
                src="/images/studio-owner-ligth.webp"
                alt="studio owner"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="relative w-[280px] h-[374px] overflow-hidden mt-4">
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
    </div>
  );
}
