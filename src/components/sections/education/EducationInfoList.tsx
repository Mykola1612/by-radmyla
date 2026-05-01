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

export const EducationInfoList = () => {
  return (
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
  );
};
