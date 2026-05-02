"use client";
import { useEffect, useState } from "react";
import { Logo } from "../../brand/Logo";
import { NavBar } from "../NavBar";
import { FocusTrap } from "focus-trap-react";

const navItems = [
  { label: "Нарощування волосся", href: "#hair" },
  { label: "Hair Systems", href: "#systems" },
  { label: "Засновниця", href: "#founder" },
  { label: "Навчання", href: "#education" },
  { label: "Контакти", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const openMenu = () => {
    setIsMounted(true);
    setTimeout(() => {
      setIsOpen(true);
      document.body.classList.add("overflow-hidden", "select-none");
    }, 10);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
    window.getSelection()?.removeAllRanges();
    setTimeout(() => {
      setIsMounted(false);
      document.body.classList.remove("select-none");
    }, 500);
  };

  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMounted]);

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
          className="group p-0 border-none line-height-0 bg-transparent lg:hidden   focus-visible:ring-accentHover focus-visible:ring-offset-foreground  hover:border-accentHover focus:border-accentHover transition-colors outline-none  focus-visible:ring-1  focus-visible:ring-offset-2      focus-visible:duration-0 "
          onClick={openMenu}
          aria-expanded={isOpen}
        >
          <svg
            className="stroke-background  group-hover:stroke-accentHover group-focus:stroke-accentHover transsition-colors duration-300 pointer-events-none group-focus-visible:duration-0"
            width="28"
            height="28"
          >
            <use href="/assets/sprite.svg#icon-menu_burger"></use>
          </svg>
        </button>
      </div>

      {isMounted && (
        <FocusTrap>
          <div
            className={`fixed  h-full w-full rounded-b-lg z-[100] lg:hidden transition-all duration-500 ${isOpen ? "translate-x-0  " : "translate-x-full pointer-events-none"} `}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeMenu();
              }
            }}
          >
            <div
              className="  w-full sm:w-4/7 bg-[rgb(20,19,19)] h-full p-4 z-50 absolute right-0 select-text"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="close menu"
                className="absolute top-6 right-6 group p-0 border-none line-height-0 bg-transparent lg:hidden   focus-visible:ring-accentHover focus-visible:ring-offset-foreground  hover:border-accentHover focus:border-accentHover transition-colors outline-none  focus-visible:ring-1  focus-visible:ring-offset-2      focus-visible:duration-0 "
                onClick={closeMenu}
              >
                <svg
                  className="stroke-background  group-hover:stroke-accentHover group-focus:stroke-accentHover transsition-colors duration-300 pointer-events-none group-focus-visible:duration-0"
                  width="28"
                  height="28"
                >
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
                <div className="px-4 ">
                  <p className="text-background">Слідкуйте за нами</p>
                  <div className="flex gap-x-4 mt-6">
                    <a
                      href="https://www.instagram.com/rsalon.beautystudio?igsh=ZjJmdnMyNnF4b2F6"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="group border border-borderLink w-12 h-12 flex justify-center items-center  focus-visible:ring-accentHover focus-visible:ring-offset-foreground  hover:border-accentHover focus:border-accentHover transition-colors outline-none  focus-visible:ring-1  focus-visible:ring-offset-2      focus-visible:duration-0 "
                    >
                      <svg className="w-5 h-5 stroke-grayCostom group-hover:stroke-accentHover group-focus:stroke-accentHover transsition-colors duration-300 pointer-events-none group-focus-visible:duration-0">
                        <use href="/assets/sprite.svg#icon-instagram"></use>
                      </svg>
                    </a>
                    <a
                      href="#"
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
        </FocusTrap>
      )}
    </header>
  );
}
