export const Button = ({ className, type = "button", children }) => {
  return (
    <button
      type={type}
      className={`px-6 py-3 bg-accent text-background  ${className} cursor-pointer hover:text-primary/70 transition-colors duration-300`}
    >
      {children}
    </button>
  );
};
