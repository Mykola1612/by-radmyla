export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div className="flex flex-col gap-y-4 justify-center items-center text-center container-custom ">
        <p className="text-accent uppercase tracking-widest">
          Зв'язатися з нами
        </p>
        <h2 className="font-accent italic font-light  text-background  text-3xl  md:text-4xl lg:text-5xl ">
          Контакти{" "}
        </h2>
      </div>
      <div className="mt-16 md:mt-24 container-custom">
        <ul className="flex flex-col gap-y-8 text-xl">
          <li className="flex gap-x-5">
            <div className=" border border-borderLink w-12 h-12 flex justify-center items-center flex-shrink-0">
              <svg className="w-5 h-5">
                <use href="/assets/sprite.svg#icon-locate" />
              </svg>
            </div>

            <div>
              <h3 className="text-background">Адреса</h3>
              <p className="text-grayCostom">
                Ul .Wojska Polskiego 33 16-300 Augustów
              </p>
            </div>
          </li>
          <li className="flex gap-x-5">
            <div className=" border border-borderLink w-12 h-12 flex justify-center items-center flex-shrink-0">
              <svg className="w-5 h-5">
                <use href="/assets/sprite.svg#icon-phone" />
              </svg>
            </div>

            <div>
              <h3 className="text-background">Телефон</h3>
              <p className="text-grayCostom font-accent ">+380 50 123 45 67</p>
            </div>
          </li>
          <li className="flex gap-x-5">
            <div className=" border border-borderLink w-12 h-12 flex justify-center items-center flex-shrink-0">
              <svg className="w-5 h-5 stroke-accent">
                <use href="/assets/sprite.svg#icon-email" />
              </svg>
            </div>

            <div>
              <h3 className="text-background">Email</h3>
              <p className="text-grayCostom font-accent">rsalonpl@gmail.com</p>
            </div>
          </li>
          <li className="flex gap-x-5">
            <div className=" border border-borderLink w-12 h-12 flex justify-center items-center flex-shrink-0  ">
              <svg className="w-5 h-5">
                <use href="/assets/sprite.svg#icon-clock" />
              </svg>
            </div>

            <div>
              <h3 className="text-background">Графік роботи</h3>
              <p className="text-grayCostom">Пн – Сб: 10:00 – 20:00</p>
              <p className="text-grayCostom">Неділя: за попереднім записом</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
