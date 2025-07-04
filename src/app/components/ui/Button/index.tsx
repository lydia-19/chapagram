import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary";
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center text-xs md:text-sm font-semibold transition-all ease-in-out duration-500 xl:text-xl transform hover:shadow-xl hover:shadow-blue-500/25 active:scale-95 active:translate-y-0";

  const variantStyles = {
    primary:
      "bg-blue-btn text-white hover:bg-blue-btn/90 border hover:border-transparent",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
