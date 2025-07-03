const Paragraph = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`text-sm font-medium text-gray-default lg:text-xl xl:text-2xl ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
