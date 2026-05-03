"use client";
import Link from "next/link";

export function NavBar({
  navItems,
  className = "",
  classNamePadding = "",
  onClick,
}: {
  navItems: { label: string; href: string }[];
  className?: string;
  classNamePadding?: string;
  onClick?: () => void;
}) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const elem = document.getElementById(targetId);

      if (elem) {
        e.preventDefault();

        const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 64;

        const isMobile = window.innerWidth < 390;

        window.scrollTo({
          top: offsetTop,
          behavior: isMobile ? "auto" : "smooth",
        });

        if (onClick) onClick();
      }
    }
  };

  return (
    <nav aria-label="Navigation">
      <ul className={`flex flex-col text-background ${className}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`py-[5px] transition-colors duration-300 outline-none hover:text-accent
              focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent
              focus-visible:ring-offset-2 focus-visible:ring-offset-foreground
              focus-visible:duration-0 active:text-accent ${classNamePadding}`}
              onClick={(e) => handleScroll(e, item.href)}
              scroll={false}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
