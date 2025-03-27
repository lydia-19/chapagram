import React from "react";
import Image from "next/image";
import { GetStartedButton } from "../GetStartedButton";
import { APP_CONFIG } from "@/config/constants";

const Navbar = () => {
  return (
    <nav className="z-[9999] bg-white pb-4 pt-4">
      <div className="mx-auto flex w-full max-w-xs items-center justify-between md:max-w-xl lg:max-w-7xl">
        <div className="relative h-logoSm w-logoSm xl:h-logoMd xl:w-logoMd">
          <Image
            src="/images/logo.svg"
            alt={APP_CONFIG.name}
            width={140}
            height={32}
            priority
            className="object-contain"
          />
        </div>

        <GetStartedButton />
      </div>
    </nav>
  );
};

export default Navbar;
