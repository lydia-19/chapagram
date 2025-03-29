import { FC } from "react";
import Button from "@components/ui/Button";
import ArrowRight from "@icons/arrow-right.svg";
import { EXTERNAL_LINKS } from "@/config/constants";

interface GetStartedButtonProps {
  className?: string;
  href?: string;
}

export const GetStartedButton: FC<GetStartedButtonProps> = ({
  className = "",
  href = EXTERNAL_LINKS.TELEGRAM_BOT,
}) => {
  return (
    <Button
      className={`${className} flex items-center`}
      rightIcon={<ArrowRight />}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        Get started
      </a>
    </Button>
  );
};

export default GetStartedButton;
