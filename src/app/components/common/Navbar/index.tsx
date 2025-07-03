import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GetStartedButton } from "../GetStartedButton";
import { APP_CONFIG } from "@/config/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full bg-white py-2 transition-shadow ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-12">
        <div className="relative h-logoSm w-logoSm xl:h-logoMd xl:w-logoMd">
          <Image
            src="/images/logo.svg"
            alt={`${APP_CONFIG.name} Logo`}
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
