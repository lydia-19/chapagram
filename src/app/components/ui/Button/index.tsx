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
    "inline-flex items-center justify-center px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-border ease-in duration-200 xl:px-6 xl:text-base";

  const variantStyles = {
    primary: "bg-blue-btn text-white hover:border-blue-btn",
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
