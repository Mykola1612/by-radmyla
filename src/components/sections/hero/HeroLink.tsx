"use client";

import Link from "next/link";

export const HeroLink = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const elem = document.getElementById("hair");

    if (elem) {
      e.preventDefault();
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 64;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link
      href="/#hair"
      className="block bg-accent px-6 py-3 tracking-wider text-background uppercase
        transition-colors outline-none [@media(hover:hover)_and_(pointer:fine)]:hover:bg-accentHover
        [@media(hover:hover)_and_(pointer:fine)]:hover:text-primary/80 focus-visible:bg-accentHover
        focus-visible:text-primary/80 focus-visible:ring-2 focus-visible:ring-accentHover
        focus-visible:ring-offset-2 focus-visible:ring-offset-foreground focus-visible:duration-0
        active:bg-accentHover active:text-primary/80"
      onClick={(e) => handleScroll(e)}
    >
      Дізнатися Більше
    </Link>
  );
};
