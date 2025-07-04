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
    <Component
      className={`text-gradient text-3xl font-bold uppercase md:text-4xl lg:text-5xl xl:text-6xl xl:leading-none ${className}`}
    >
      {children}
    </Component>
  );
};

export default Heading;
