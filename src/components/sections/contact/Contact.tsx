export const Contact = () => {
  return (
    <section id="contact" className="bg-primary py-24 md:py-32">
      <div
        className="container-custom flex flex-col items-center justify-center gap-y-4 text-center"
      >
        <p className="tracking-widest text-accent uppercase">Зв'язатися з нами</p>
        <h2
          className="font-accent text-3xl font-light text-background italic md:text-4xl lg:text-5xl"
        >
          Контакти{" "}
        </h2>
      </div>
      <div className="container-custom mt-16 md:mt-24">
        <ul className="flex flex-col gap-y-8 text-xl">
          <li className="flex gap-x-5">
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center border
                border-borderLink"
            >
              <svg className="h-5 w-5">
                <use href="/assets/sprite.svg#icon-locate" />
              </svg>
            </div>

            <div>
              <h3 className="text-background">Адреса</h3>
              <p className="text-grayCostom">Ul .Wojska Polskiego 33 16-300 Augustów</p>
            </div>
          </li>
          <li className="flex gap-x-5">
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center border
                border-borderLink"
            >
              <svg className="h-5 w-5">
                <use href="/assets/sprite.svg#icon-phone" />
              </svg>
            </div>

            <div>
              <h3 className="text-background">Телефон</h3>
              <p className="font-accent text-grayCostom">+380 50 123 45 67</p>
            </div>
          </li>
          <li className="flex gap-x-5">
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center border
                border-borderLink"
            >
              <svg className="h-5 w-5 stroke-accent">
                <use href="/assets/sprite.svg#icon-email" />
              </svg>
            </div>

            <div>
              <h3 className="text-background">Email</h3>
              <p className="font-accent text-grayCostom">rsalonpl@gmail.com</p>
            </div>
          </li>
          <li className="flex gap-x-5">
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center border
                border-borderLink"
            >
              <svg className="h-5 w-5">
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
