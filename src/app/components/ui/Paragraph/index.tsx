const Paragraph = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`text-sm font-medium text-gray-default xl:text-2xl ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
