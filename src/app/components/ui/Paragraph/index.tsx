const Paragraph = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-xs font-medium text-gray xl:text-lg ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
