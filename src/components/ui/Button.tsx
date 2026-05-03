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
      className={`block cursor-pointer bg-accent px-3 py-5 text-center text-[14] text-background
        transition-colors duration-300 outline-none focus-visible:ring-2
        focus-visible:ring-accentHover focus-visible:ring-offset-2 focus-visible:duration-0 xs:px-10
        ${className}`}
    >
      {children}
    </button>
  );
};
