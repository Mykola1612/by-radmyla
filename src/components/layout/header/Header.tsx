"use client";
import { useState } from "react";
import { Logo } from "../../brand/Logo";
import { NavBar } from "../NavBar";

const navItems = [
  { label: "Нарощування волосся", href: "#hair" },
  { label: "Hair Systems", href: "#systems" },
  { label: "Засновниця", href: "#founder" },
  { label: "Навчання", href: "#education" },
  { label: "Контакти", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <header className="w-full h-16 sticky top-0 z-50 flex justify-center bg-primary">
      <div
        className="relative container-custom h-16
 flex items-center justify-between"
      >
        <Logo className="px-1" />
        <NavBar
          navItems={navItems}
          className="hidden lg:flex flex-row gap-x-4  "
          classNamePadding="px-4"
        />

        <button
          type="button"
          className="p-0 border-none line-height-0 bg-transparent lg:hidden"
          onClick={openMenu}
        >
          <svg className="stroke-background" width="28" height="28">
            <use href="/assets/sprite.svg#icon-menu_burger"></use>
          </svg>
        </button>
      </div>

      <div
        className={`fixed h-full w-full rounded-b-lg z-20 pointer-events-auto lg:hidden transition-transform duration-500 ${isOpen ? "translate-x-0 " : "translate-x-full"} `}
      >
        <div className="  w-full sm:w-4/7 bg-[rgb(20,19,19)] h-full p-4 z-50 absolute right-0 ">
          <button
            type="button"
            aria-label="close menu"
            className="p-0 border-none line-height-0 bg-transparent absolute top-6 right-6"
            onClick={closeMenu}
          >
            <svg className="stroke-background" width="28" height="28">
              <use href="/assets/sprite.svg#icon-x-close"></use>
            </svg>
          </button>

          <Logo className="px-1 sm:hidden mt-20" />
          <div className="mt-6 flex flex-col gap-y-16 sm:mt-20">
            <NavBar
              navItems={navItems}
              className="flex flex-col gap-y-4"
              classNamePadding="px-4"
              onClick={closeMenu}
            />
            <div className="px-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
