const navItems = [
  { label: "Нарощування волосся", href: "#hair" },
  { label: "Hair Systems", href: "#systems" },
  { label: "Засновниця", href: "#founder" },
  { label: "Навчання", href: "#education" },
  { label: "Контакти", href: "#contact" },
];

export function NavBar() {
  return (
    <nav>
      <ul className="text-background flex gap-x-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
