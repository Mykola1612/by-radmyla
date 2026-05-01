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
      className={`px-6 py-3 w-full sm:w-[350px] bg-accent text-background outline-none  focus-visible:ring-2  focus-visible:ring-offset-2 focus-visible:ring-background   focus-visible:ring-offset-foreground  focus-visible:duration-0 ${className} cursor-pointer hover:text-primary/70 focus:text-primary/70  transition-colors duration-300`}
    >
      {children}
    </button>
  );
};
