import { FounderExpeerienceList } from "./FounderExperienceList";
import { FounderInfoList } from "./FounderInfoList";

export const FounderInfoContainer = () => {
  return (
    <div className="max-w-[544]">
      <p className="text-accent uppercase tracking-widest">Засновниця студії</p>
      <h2 className="mt-4 font-accent italic  font-light text-3xl  md:text-4xl lg:text-5xl">
        Radmyla - Мистецтво краси
      </h2>
      <FounderInfoList />
      <FounderExpeerienceList />
    </div>
  );
};
