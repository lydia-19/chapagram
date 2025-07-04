import { FC } from "react";
import Button from "@components/ui/Button";
import { EXTERNAL_LINKS } from "@/config/constants";

interface GetStartedButtonProps {
  className?: string;
  href?: string;
  variant?: "default" | "sticky";
}

export const GetStartedButton: FC<GetStartedButtonProps> = ({
  className = "",
  href = EXTERNAL_LINKS.TELEGRAM_BOT,
  variant = "default",
}) => {
  return (
    <Button
      className={`flex items-center border-4 border-primary/90 px-3 py-1 md:px-10 md:py-3 xl:px-10 ${className} ${variant === "sticky" ? "rounded-xl" : "rounded-button"}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        Get started
      </a>
    </Button>
  );
};

export default GetStartedButton;
