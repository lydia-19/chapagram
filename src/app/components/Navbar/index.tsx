import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button";
import ArrowRight from "@icons/arrow-right.svg";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <Link
        href="/"
        className="h-logoSm w-logoSm md:h-logoMd md:w-logoMd relative"
      >
        <Image
          src="/images/logo.svg"
          alt="Chapagram Logo"
          fill
          priority
          className="object-contain"
        />
      </Link>

      <Button rightIcon={<ArrowRight />}>Get started</Button>
    </nav>
  );
};

export default Navbar;
