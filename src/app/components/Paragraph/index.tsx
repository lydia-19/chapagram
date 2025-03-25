const Paragraph = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-base font-medium text-gray ${className}`}>{children}</p>
  );
};

export default Paragraph;
