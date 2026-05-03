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
      className="block py-3 px-6 bg-accent text-background tracking-wider uppercase  focus-visible:ring-accentHover focus-visible:ring-offset-foreground  hover:bg-accentHover focus-visible::bg-accentHover hover:text-primary/80 focus-visible:text-primary/80 transition-colors outline-none  focus-visible:ring-2  focus-visible:ring-offset-2    focus-visible:duration-0"
      onClick={(e) => handleScroll(e)}
    >
      Дізнатися Більше
    </Link>
  );
};
