import { Logo } from "../../brand/Logo";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="w-full h-16 sticky top-0 z-50 flex justify-center bg-primary">
      <div
        className="container-custom h-16
 flex items-center justify-between"
      >
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}
