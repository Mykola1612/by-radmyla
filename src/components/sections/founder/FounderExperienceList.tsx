export const FounderExpeerienceList = () => {
  return (
    <ul
      className="mt-16 flex flex-col justify-between gap-y-6 border-t border-accent/40 pt-16 text-sm
        text-accent uppercase italic sm:flex-row sm:gap-x-8 sm:gap-y-0"
    >
      <li>
        <p className="font-accent text-3xl lg:text-4xl">20+</p>
        <p className="text-[14px]">Років досвіду</p>
      </li>
      <li>
        <p className="font-accent text-3xl lg:text-4xl">1000+</p>
        <p className="text-[14px]">Задоволених клієнтів</p>
      </li>
      <li>
        <p className="font-accent text-3xl lg:text-4xl">100%</p>
        <p className="text-[14px]">Натуральність</p>
      </li>
    </ul>
  );
};
