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
      className={`px-6 py-3 w-full sm:w-[350px] bg-accent text-background  ${className} cursor-pointer hover:text-primary/70 transition-colors duration-300`}
    >
      {children}
    </button>
  );
};
