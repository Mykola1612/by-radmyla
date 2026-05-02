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
          <Logo className="focus-visible:ring-offset-foreground focus-visible:ring-offset-4" />
          <p className="text-grayCostom mt-6">
            Преміальна студія нарощування волосся та індивідуальних систем
            заміщення.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-background">Послуги</p>
          <NavBar navItems={navItems} className="mt-6  gap-y-1.5" />
        </div>
        <div className="flex-1">
          <p className="text-background">Слідкуйте за нами</p>
          <div className="flex gap-x-4 mt-6">
            <a
              href="https://www.instagram.com/rsalon.beautystudio?igsh=ZjJmdnMyNnF4b2F6"
              target="_blank"
              rel="
          nooper noreferrer nofollow"
              className="group border border-borderLink w-12 h-12 flex justify-center items-center  focus-visible:ring-accentHover focus-visible:ring-offset-foreground  hover:border-accentHover focus:border-accentHover transition-colors outline-none  focus-visible:ring-1  focus-visible:ring-offset-2      focus-visible:duration-0 "
            >
              <svg className="w-5 h-5 stroke-grayCostom group-hover:stroke-accentHover group-focus:stroke-accentHover transsition-colors duration-300 pointer-events-none group-focus-visible:duration-0">
                <use href="/assets/sprite.svg#icon-instagram"></use>
              </svg>
            </a>
            <a
              href=""
              className="group border border-borderLink w-12 h-12 flex justify-center items-center  focus-visible:ring-accentHover focus-visible:ring-offset-foreground  hover:border-accentHover focus:border-accentHover transition-colors outline-none  focus-visible:ring-1  focus-visible:ring-offset-2    focus-visible:duration-0 "
            >
              <svg className="w-5 h-5 stroke-grayCostom group-hover:stroke-accentHover group-focus:stroke-accentHover transsition-colors duration-300 pointer-events-none group-focus-visible:duration-0">
                <use href="/assets/sprite.svg#icon-telegram"></use>
              </svg>
            </a>
            <a
              href="mailto:rsalonpl@gmail.com"
              className="group border border-borderLink w-12 h-12 flex justify-center items-center  focus-visible:ring-accentHover focus-visible:ring-offset-foreground  hover:border-accentHover focus:border-accentHover transition-colors outline-none  focus-visible:ring-1  focus-visible:ring-offset-2   focus-visible:duration-0 "
            >
              <svg className="w-5 h-5 stroke-grayCostom group-hover:stroke-accentHover group-focus:stroke-accentHover transsition-colors duration-300 pointer-events-none group-focus-visible:duration-0">
                <use href="/assets/sprite.svg#icon-email"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container-custom">
        <div
          className="text-grayCostom mt-12 border-t border-accent/40 pt-8 flex flex-col gap-y-4 items-center
         justify-center text-center md:flex-row md:justify-between md:gap-y-0"
        >
          <p> © 2026 RSalon. Всі права захищені.</p>
          <p>Преміум послуги краси у Августові</p>
        </div>
      </div>
    </footer>
  );
};
