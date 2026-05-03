import { EducationImages } from "./EducationImages";
import { EducationInfoContainer } from "./EducationInfoContainer";

export const Education = () => {
  return (
    <section id="education" className="bg-foreground py-24 md:py-32">
      <div className="container-custom flex flex-col items-center justify-center gap-20 lg:flex-row">
        <EducationInfoContainer />
        <EducationImages />
      </div>
    </section>
  );
};
