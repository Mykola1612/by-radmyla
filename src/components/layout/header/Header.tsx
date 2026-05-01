import { Logo } from "../../brand/Logo";
import { NavBar } from "./NavBar";

const navItems = [
  { label: "Нарощування волосся", href: "#hair" },
  { label: "Hair Systems", href: "#systems" },
  { label: "Засновниця", href: "#founder" },
  { label: "Навчання", href: "#education" },
  { label: "Контакти", href: "#contact" },
];

export function Header() {
  return (
    <header className="w-full h-16 sticky top-0 z-50 flex justify-center bg-primary">
      <div
        className="container-custom h-16
 flex items-center justify-between"
      >
        <Logo />
        <NavBar navItems={navItems} className="flex-row gap-x-8" />
      </div>
    </header>
  );
}
