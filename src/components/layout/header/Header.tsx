"use client";
import { useEffect, useState } from "react";
import { Logo } from "../../brand/Logo";
import { NavBar } from "../NavBar";
import { FocusTrap } from "focus-trap-react";

const navItems = [
  { label: "Нарощування волосся", href: "/#hair" },
  { label: "Hair Systems", href: "/#systems" },
  { label: "Засновниця", href: "/#founder" },
  { label: "Навчання", href: "/#education" },
  { label: "Контакти", href: "/#contact" },
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
    <header className="sticky top-0 z-50 flex h-16 w-full justify-center bg-primary">
      <div className="relative container-custom flex h-16 items-center justify-between">
        <Logo className="px-1" />
        <NavBar
          navItems={navItems}
          className="hidden flex-row gap-x-4 lg:flex"
          classNamePadding="px-4"
        />

        <button
          type="button"
          className="group line-height-0 cursor-pointer border-none bg-transparent p-0
            transition-colors outline-none
            [@media(hover:hover)_and_(pointer:fine)]:hover:border-accentHover
            focus-visible:border-accentHover focus-visible:ring-1 focus-visible:ring-accentHover
            focus-visible:ring-offset-2 focus-visible:ring-offset-foreground
            focus-visible:duration-0 active:border-accentHover lg:hidden"
          onClick={openMenu}
          aria-expanded={isOpen}
        >
          <svg
            className="transsition-colors pointer-events-none stroke-background duration-300
              group-hover:stroke-accentHover group-focus-visible:stroke-accentHover
              group-focus-visible:duration-0 group-active:stroke-accentHover"
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
            className={`fixed z-[100] h-full w-full rounded-b-lg transition-all duration-500
            lg:hidden ${isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"} `}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeMenu();
              }
            }}
          >
            <div
              className="absolute right-0 z-50 h-full w-full bg-[rgb(20,19,19)] p-4 select-text
                sm:w-4/7"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="close menu"
                className="group line-height-0 absolute top-6 right-6 cursor-pointer border-none
                  bg-transparent p-0 transition-colors outline-none
                  [@media(hover:hover)_and_(pointer:fine)]:hover:border-accentHover
                  focus-visible:border-accentHover focus-visible:ring-1
                  focus-visible:ring-accentHover focus-visible:ring-offset-2
                  focus-visible:ring-offset-foreground focus-visible:duration-0
                  active:border-accentHover lg:hidden"
                onClick={closeMenu}
              >
                <svg
                  className="transsition-colors pointer-events-none stroke-background duration-300
                    [@media(hover:hover)_and_(pointer:fine)]:group-hover:stroke-accentHover
                    group-focus-visible:stroke-accentHover group-focus-visible:duration-0
                    group-active:stroke-accentHover"
                  width="28"
                  height="28"
                >
                  <use href="/assets/sprite.svg#icon-x-close"></use>
                </svg>
              </button>

              <Logo className="mt-20 px-1 sm:hidden" onClick={closeMenu} />
              <div className="mt-6 flex flex-col gap-y-16 sm:mt-20">
                <NavBar
                  navItems={navItems}
                  className="flex flex-col gap-y-4"
                  classNamePadding="px-4"
                  onClick={closeMenu}
                />
                <div className="px-4">
                  <p className="text-background">Слідкуйте за нами</p>
                  <div className="mt-6 flex gap-x-4">
                    <a
                      href="https://www.instagram.com/rsalon.beautystudio?igsh=ZjJmdnMyNnF4b2F6"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="group flex h-12 w-12 items-center justify-center border
                        border-borderLink transition-colors outline-none
                        [@media(hover:hover)_and_(pointer:fine)]:hover:border-accentHover
                        focus:border-accentHover focus-visible:ring-1 focus-visible:ring-accentHover
                        focus-visible:ring-offset-2 focus-visible:ring-offset-foreground
                        focus-visible:duration-0 active:border-accentHover"
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
                      href="#"
                      className="group flex h-12 w-12 items-center justify-center border
                        border-borderLink transition-colors outline-none
                        [@media(hover:hover)_and_(pointer:fine)]:hover:border-accentHover
                        focus:border-accentHover focus-visible:ring-1 focus-visible:ring-accentHover
                        focus-visible:ring-offset-2 focus-visible:ring-offset-foreground
                        focus-visible:duration-0 active:border-accentHover"
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
