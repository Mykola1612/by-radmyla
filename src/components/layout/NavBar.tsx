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
  return (
    <nav>
      <ul className={`text-background flex flex-col  ${className}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`py-[5px] hover:text-accent  focus:text-accent  transition-colors duration-300 outline-none  focus-visible:ring-2  focus-visible:ring-offset-2 focus-visible:ring-accent   focus-visible:ring-offset-foreground  focus-visible:duration-0 ${classNamePadding}`}
              onClick={onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
