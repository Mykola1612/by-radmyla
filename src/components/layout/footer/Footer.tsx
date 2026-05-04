import { Logo } from "@/components/brand/Logo";
import { NavBar } from "../NavBar";

const navItems = [
  { label: "Нарощування волосся", href: "#hair" },
  { label: "Hair Systems", href: "#systems" },
  { label: "Навчання", href: "#education" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-foreground py-16">
      <div className="container-custom flex flex-col gap-y-12 md:flex-row md:gap-x-12 md:gap-y-0">
        <div className="flex-1">
          <Logo className="focus-visible:ring-offset-4 focus-visible:ring-offset-foreground" />
          <p className="mt-6 text-grayCostom">
            Преміальна студія нарощування волосся та індивідуальних систем заміщення.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-background">Послуги</p>
          <NavBar navItems={navItems} className="mt-6 gap-y-1.5" />
        </div>

        <div className="flex-1">
          <p className="text-background">Слідкуйте за нами</p>
          <div className="mt-6 flex gap-x-4">
            <a
              href="https://www.instagram.com/rsalon.beautystudio?igsh=ZjJmdnMyNnF4b2F6"
              target="_blank"
              rel="
          nooper noreferrer nofollow"
              className="group focus-visible:border-accentHover flex h-12 w-12 items-center
                justify-center border border-borderLink transition-colors outline-none
                [@media(hover:hover)_and_(pointer:fine)]:hover:border-accentHover
                focus-visible:ring-1 focus-visible:ring-accentHover focus-visible:ring-offset-2
                focus-visible:ring-offset-foreground focus-visible:duration-0
                active:border-accentHover"
            >
              <svg
                className="transsition-colors pointer-events-none h-5 w-5 stroke-grayCostom
                  duration-300
                  [@media(hover:hover)_and_(pointer:fine)]:group-hover:stroke-accentHover
                  group-focus:stroke-accentHover group-focus-visible:duration-0
                  group-active:stroke-accentHover"
              >
                <use href="/assets/sprite.svg#icon-instagram"></use>
              </svg>
            </a>
            <a
              href=""
              className="group focus-visible:border-accentHover flex h-12 w-12 items-center
                justify-center border border-borderLink transition-colors outline-none
                [@media(hover:hover)_and_(pointer:fine)]:hover:border-accentHover
                focus-visible:ring-1 focus-visible:ring-accentHover focus-visible:ring-offset-2
                focus-visible:ring-offset-foreground focus-visible:duration-0
                active:border-accentHover"
            >
              <svg
                className="transsition-colors pointer-events-none h-5 w-5 stroke-grayCostom
                  duration-300
                  [@media(hover:hover)_and_(pointer:fine)]:group-hover:stroke-accentHover
                  group-focus:stroke-accentHover group-focus-visible:duration-0
                  group-active:stroke-accentHover"
              >
                <use href="/assets/sprite.svg#icon-telegram"></use>
              </svg>
            </a>
            <a
              href="mailto:rsalonpl@gmail.com"
              className="group focus-visible:border-accentHover flex h-12 w-12 items-center
                justify-center border border-borderLink transition-colors outline-none
                [@media(hover:hover)_and_(pointer:fine)]:hover:border-accentHover
                focus-visible:ring-1 focus-visible:ring-accentHover focus-visible:ring-offset-2
                focus-visible:ring-offset-foreground focus-visible:duration-0
                active:border-accentHover"
            >
              <svg
                className="transsition-colors pointer-events-none h-5 w-5 stroke-grayCostom
                  duration-300
                  [@media(hover:hover)_and_(pointer:fine)]:group-hover:stroke-accentHover
                  group-focus:stroke-accentHover group-focus-visible:duration-0
                  group-active:stroke-accentHover"
              >
                <use href="/assets/sprite.svg#icon-email"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container-custom">
        <div
          className="mt-12 flex flex-col items-center justify-center gap-y-4 border-t
            border-accent/40 pt-8 text-center text-grayCostom md:flex-row md:justify-between
            md:gap-y-0"
        >
          <p> © 2026 RSalon. Всі права захищені.</p>
          <p>Преміум послуги краси у Августові</p>
        </div>
      </div>
    </footer>
  );
};
