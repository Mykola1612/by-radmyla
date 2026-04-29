export function Logo() {
  return (
    <div className="flex items-center gap-x-1">
      <svg className="w-14 h-14">
        <use href="/assets/sprite.svg#icon-logo" />
      </svg>
      <div className="flex">
        <p className="text-background">R</p>
        <p className="text-accent">Salon</p>
      </div>
    </div>
  );
}
