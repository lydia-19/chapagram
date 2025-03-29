import React from "react";
import Customers from "@components/common/Customers";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import ImageWrapper from "@components/common/ImageWrapper";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { GetStartedButton } from "@components/common/GetStartedButton";
import { APP_CONFIG } from "@/config/constants";

const Landing = () => {
  return (
    <div className="grid h-full grid-cols-12 gap-8 pt-9 lg:gap-0">
      <div className="relative z-10 col-span-12 lg:col-span-5">
        <div className="flex flex-col justify-center space-y-8">
          <Heading as="h1" className="text-4xl lg:text-6xl">
            One Bot <br /> Total Payment <br /> Freedom
          </Heading>
          <Paragraph className="w-full lg:max-w-72 xl:max-w-96">
            Experience the synergy of seamlessly combined payment tools.{" "}
            {APP_CONFIG.name} brings all your transaction needs together in one
            intuitive bot.
          </Paragraph>
          <GetStartedButton className="hidden lg:flex lg:max-w-max" />
        </div>
      </div>
      <div className="col-span-12 flex justify-between lg:col-span-7">
        <div className="relative col-span-12 flex w-full justify-center lg:-ml-8 lg:w-[calc(100%*4/7)] lg:justify-center xl:w-[calc(100%*5/7)]">
          <ImageWrapper centered imagePosition={{ top: 50 }}>
            <PhoneWrapper>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/vid-1.mp4" type="video/mp4" />
              </video>
            </PhoneWrapper>
          </ImageWrapper>
        </div>
        <div className="relative col-span-12 hidden lg:block lg:w-[calc(100%*3/7)] xl:w-[calc(100%*2/7)]">
          <div className="absolute right-0 top-[55%] h-full">
            <Customers userCount="10K+" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
