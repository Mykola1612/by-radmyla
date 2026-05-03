import { Button } from "@/components/ui/Button";
import { EducationInfoList } from "./EducationInfoList";

export const EducationInfoContainer = () => {
  return (
    <div className="max-w-[544]">
      <p className="text-accent uppercase tracking-widest">Для майстрів</p>
      <h2
        className="mt-4 font-accent italic font-light text-background text-3xl md:text-4xl
          lg:text-5xl"
      >
        Навчання та майстер-класи
      </h2>
      <ul className="flex flex-col gap-y-6 mt-8 max-w-[544] text-grayCostom">
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
        className="mt-10 uppercase focus-visible:ring-offset-foreground hover:bg-accentHover
          focus-visible::bg-accentHover hover:text-primary/80 focus-visible::text-primary/80"
      >
        Записатися на консультацію
      </Button>
    </div>
  );
};
