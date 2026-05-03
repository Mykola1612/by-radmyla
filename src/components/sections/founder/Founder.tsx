import { FounderFoto } from "./FounderFoto";
import { FounderInfoContainer } from "./FounderInfoContainer";

export const Founder = () => {
  return (
    <section id="founder" className="py-24 md:py-32">
      <div
        className="container-custom flex flex-1 flex-col items-center justify-center gap-y-12
          lg:flex-row lg:gap-x-20 lg:gap-y-0"
      >
        <FounderFoto />
        <FounderInfoContainer />
      </div>
    </section>
  );
};
