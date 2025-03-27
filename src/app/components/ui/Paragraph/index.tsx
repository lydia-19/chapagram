const Paragraph = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-sm font-medium text-gray lg:text-base ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
