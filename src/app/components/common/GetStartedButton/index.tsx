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
      className={`flex items-center border-4 border-[#7FA4C9]/90 ${className} ${variant === "sticky" ? "rounded-xl" : "rounded-button"}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        Get started
      </a>
    </Button>
  );
};

export default GetStartedButton;
