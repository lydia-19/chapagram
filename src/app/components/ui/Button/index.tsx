import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  rightIcon?: ReactNode;
  variant?: "primary";
}

const Button = ({
  children,
  rightIcon,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-button px-4 py-2 text-xs font-medium transition-colors duration-200  xl:px-6 xl:py-3 xl:text-base";

  const variantStyles = {
    primary:
      "bg-blue-default text-white shadow-button hover:bg-blue-default/90",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
