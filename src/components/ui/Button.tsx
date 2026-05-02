export const Button = ({
  className,
  type = "button",
  children,
}: {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}) => {
  return (
    <button
      type={type}
      className={`block px-3 xs:px-10 py-5  text-center text-[14] bg-accent text-background outline-none focus-visible:ring-accentHover   focus-visible:ring-2  focus-visible:ring-offset-2    focus-visible:duration-0  cursor-pointer  transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
