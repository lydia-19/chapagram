interface ImageWrapperProps {
  children: React.ReactNode;
  gradientWidth?: number | "xs" | "sm" | "md" | "lg";
  imagePosition?: {
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
  };
  centered?: boolean;
  rounded?: boolean;
  className?: string;
}

const ImageWrapper = ({
  children,
  gradientWidth = "md",
  imagePosition = { top: 0, left: 0 },
  centered = false,
  className = "",
  rounded = true,
}: ImageWrapperProps) => {
  return (
    <div
      className={`gradient-xs relative lg:gradient-${gradientWidth} ${className}`}
    >
      <div
        className={`${rounded ? "rounded-full" : ""} bg-gradient absolute aspect-square w-full`}
      />
      <div
        className={`relative top-16 ${centered ? "flex justify-center" : ""}`}
        style={{
          ...imagePosition,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ImageWrapper;
