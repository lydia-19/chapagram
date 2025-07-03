"use client";

import React from "react";
import Customers from "@/app/components/common/CustomersSupport";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import ImageWrapper from "@components/common/ImageWrapper";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { GetStartedButton } from "@components/common/GetStartedButton";
import { APP_CONFIG } from "@/config/constants";
import TestimonyCarousel from "@/app/components/common/TestimonyCarousel";

const testimonies = [
  {
    image: "/images/testimony-avatar-1.png",
    title: "Chapagram User",
    description: "This is the best product I have ever use",
  },
  {
    image: "/images/testimony-avatar-2.png",
    title: "Chapagram User",
    description: "Everything is easy to use and flexible transactions",
  },
  {
    image: "/images/testimony-avatar-1.png",
    title: "Chapagram User",
    description: "I loved it!",
  },
];

const Landing = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="mx-auto flex flex-col items-center justify-center space-y-4 lg:space-y-8">
        <Heading as="h1" className="text-center">
          One Telegram bot <br /> total payment <br /> freedom
        </Heading>
        <Paragraph className="w-full text-center !font-normal xl:text-2xl">
          Experience the synergy of seamlessly combined payment tools. <br />
          {APP_CONFIG.name} brings all your transaction needs together in one
          intuitive bot.
        </Paragraph>
        <GetStartedButton className="hidden lg:flex lg:max-w-max" />
      </div>

      <div className="relative mt-6 flex flex-col items-center justify-center lg:mt-24">
        <div>
          <ImageWrapper centered imagePosition={{ top: -20 }}>
            <PhoneWrapper>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
              </video>
            </PhoneWrapper>
          </ImageWrapper>
        </div>

        <div className="absolute top-1/2 hidden -translate-y-1/2 lg:left-[14%] lg:block xl:left-[5%] 2xl:left-[12%]">
          <TestimonyCarousel testimonies={testimonies} />
        </div>
        <div className="top-4/5 absolute right-0 hidden md:block lg:-top-10 lg:right-3 xl:-top-0 xl:right-[5%] 2xl:right-[14%]">
          <Customers />
        </div>
      </div>
    </div>
  );
};

export default Landing;
