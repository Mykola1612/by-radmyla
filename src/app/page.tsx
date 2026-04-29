import { Header } from "@/components/layout/header/Header";
import Image from "next/image";

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
      <section
        id="education"
        className="h-screen bg-foreground px-32"
      ></section>
    </div>
  );
}
