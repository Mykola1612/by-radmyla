import { FounderExpeerienceList } from "./FounderExperienceList";
import { FounderInfoList } from "./FounderInfoList";

export const FounderInfoContainer = () => {
  return (
    <div className="max-w-[544]">
      <p className="tracking-widest text-accent uppercase">Засновниця студії</p>
      <h2 className="mt-4 font-accent text-3xl font-light italic md:text-4xl lg:text-5xl">
        Radmyla - Мистецтво краси
      </h2>
      <FounderInfoList />
      <FounderExpeerienceList />
    </div>
  );
};
