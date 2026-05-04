import { Button } from "@/components/ui/Button";
import { EducationInfoList } from "./EducationInfoList";

export const EducationInfoContainer = () => {
  return (
    <div className="max-w-[544]">
      <p className="tracking-widest text-accent uppercase">Для майстрів</p>
      <h2
        className="mt-4 font-accent text-3xl font-light text-background italic md:text-4xl
          lg:text-5xl"
      >
        Навчання та майстер-класи
      </h2>
      <ul className="mt-8 flex max-w-[544] flex-col gap-y-6 text-grayCostom">
        <li>
          <p>
            Передаємо свій досвід та техніки преміального нарощування волосся майстрам, які прагнуть
            вийти на новий рівень.
          </p>
        </li>
        <li>
          <p>
            Індивідуальний підхід до кожної учениці, практика на моделях, та підтримка після
            завершення курсу.
          </p>
        </li>
      </ul>
      <EducationInfoList />
      <Button
        className="active:text-primery/80 focus-visible::text-primary/80 mt-10 uppercase
          [@media(hover:hover)_and_(pointer:fine)]:hover:bg-accentHover
          [@media(hover:hover)_and_(pointer:fine)]:hover:text-primary/80
          focus-visible:bg-accentHover focus-visible:ring-offset-foreground active:bg-accentHover"
      >
        Записатися на консультацію
      </Button>
    </div>
  );
};
