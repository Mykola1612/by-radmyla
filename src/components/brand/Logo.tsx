"use client";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link
      href="/"
      onClick={(e) => handleScroll(e)}
      className={`group flex items-center cursor-pointer focus-visible:ring-accentHover   transition-colors outline-none  focus-visible:ring-2   focus-visible:duration-0 ${className}`}
    >
      <svg className="w-14 h-14 -mr-2">
        <use
          href="/assets/sprite.svg#icon-logo"
          className="translate-x-[-20%]"
        />
      </svg>
      <div className="flex">
        <p className="text-background text-2xl">R</p>
        <p className="text-accent text-2xl group-hover:text-background  group-focus-visible:text-background  group-focus-visible:duration-0 transition-colors duration-300">
          Salon
        </p>
      </div>
    </Link>
  );
}
