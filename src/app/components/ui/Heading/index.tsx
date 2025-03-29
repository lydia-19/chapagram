import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const Heading = ({
  children,
  className = "",
  as: Component = "h2",
}: HeadingProps) => {
  return (
    <Component className={`text-gradient font-bold ${className}`}>
      {children}
    </Component>
  );
};

export default Heading;
