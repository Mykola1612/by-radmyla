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
      className={`block sm:px-10 py-5  text-center text-[14] bg-accent text-background outline-none  focus-visible:ring-2  focus-visible:ring-offset-2 focus-visible:ring-background   focus-visible:ring-offset-foreground  focus-visible:duration-0 ${className} cursor-pointer hover:text-primary/70 focus:text-primary/70  transition-colors duration-300`}
    >
      {children}
    </button>
  );
};
