import Link from "next/link";

export function NavBar({
  navItems,
  className = "",
}: {
  navItems: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <nav>
      <ul className={`text-background flex flex-col ${className}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
