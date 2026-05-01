import { EducationImages } from "./EducationImages";
import { EducationInfoContainer } from "./EducationInfoContainer";

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-foreground">
      <div className="container-custom flex  flex-col  gap-20 justify-center items-center lg:flex-row">
        <EducationInfoContainer />
        <EducationImages />
      </div>
    </section>
  );
};
