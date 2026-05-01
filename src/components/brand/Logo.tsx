import Link from "next/link";

export function Logo() {
  return (
    <Link href="#" className="flex items-center cursor-pointer ">
      <svg className="w-14 h-14 -mr-2">
        <use
          href="/assets/sprite.svg#icon-logo"
          className="translate-x-[-20%]"
        />
      </svg>
      <div className="flex">
        <p className="text-background text-2xl">R</p>
        <p className="text-accent text-2xl">Salon</p>
      </div>
    </Link>
  );
}
