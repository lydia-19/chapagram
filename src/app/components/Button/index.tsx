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
    "inline-flex items-center justify-center rounded-button px-6 py-3 text-lg font-medium transition-colors duration-200 gap-2 min-w-button";

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
