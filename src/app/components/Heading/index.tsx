import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({
  children,
  size = "lg",
  className = "",
  as: Component = "h1",
}: HeadingProps) => {
  const sizeClasses = {
    xl: "text-heading-xl",
    lg: "text-heading-lg",
    md: "text-heading-md",
    sm: "text-heading-sm",
    xs: "text-heading-xs",
    xxs: "text-heading-xxs",
  };

  return (
    <Component
      className={`${sizeClasses[size]} ${className} text-gradient font-bold`}
    >
      {children}
    </Component>
  );
};

export default Heading;
