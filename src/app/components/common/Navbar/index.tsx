import React from "react";
import Image from "next/image";
import { GetStartedButton } from "../GetStartedButton";
import { APP_CONFIG } from "@/config/constants";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-[9999] w-full bg-white py-2">
      <div className="xxl:px-0 container mx-auto flex items-center justify-between px-4 lg:px-12">
        <div className="relative h-logoSm w-logoSm xl:h-logoMd xl:w-logoMd">
          <Image
            src="/images/logo.svg"
            alt={APP_CONFIG.name}
            fill
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
