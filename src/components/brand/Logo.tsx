"use client";
import Link from "next/link";

export function Logo({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const isMobile = window.innerWidth < 390;
      window.scrollTo({
        top: 0,
        behavior: isMobile ? "auto" : "smooth",
      });
    }
    if (onClick) onClick();
  };

  return (
    <Link
      href="/"
      onClick={(e) => handleScroll(e)}
      className={`group flex cursor-pointer items-center transition-colors outline-none
        focus-visible:ring-2 focus-visible:ring-accentHover focus-visible:duration-0 ${className}`}
    >
      <svg className="-mr-2 h-14 w-14">
        <use href="/assets/sprite.svg#icon-logo" className="translate-x-[-20%]" />
      </svg>
      <div className="flex">
        <p className="text-2xl text-background">R</p>
        <p
          className="text-2xl text-accent transition-colors duration-300
            [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-background
            group-focus-visible:text-background group-focus-visible:duration-0
            group-active:text-background"
        >
          Salon
        </p>
      </div>
    </Link>
  );
}
