"use client";

import Image from "next/image";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import ImageWrapper from "@components/common/ImageWrapper";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { useState, useRef } from "react";
import {
  useScrollAnimation,
  getAnimationClasses,
} from "@/hooks/useScrollAnimation";

const SendReceive = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  const leftImageAnimation = useScrollAnimation();
  const centerVideoAnimation = useScrollAnimation();
  const desktopVideoAnimation = useScrollAnimation();
  const rightImageAnimation = useScrollAnimation();

  const videoSources = [
    "/videos/send-money.mp4",
    "/videos/request-money.mp4",
    "/videos/remittance.mp4",
  ];

  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videoSources.length;
    setCurrentVideoIndex(nextIndex);
  };

  return (
    <div className="relative flex h-full flex-col items-center justify-between gap-6 md:flex-row lg:gap-12">
      <div className="mb-12 w-full lg:mb-0 lg:self-end xl:w-2/5">
        <div className="space-y-2 lg:mb-12 lg:space-y-4 xl:mb-16">
          <Heading>
            Quick <br /> Send
          </Heading>
          <Paragraph className="text-left">
            Send money instantly to anyone in your contacts. No delays, no
            hassles. Just quick, secure transfers right at your fingertips.
          </Paragraph>
        </div>
        <div
          ref={leftImageAnimation.ref}
          className={getAnimationClasses(
            "hidden md:block",
            "fade-in-left-large duration-1000 ease-out",
            leftImageAnimation.isVisible,
          )}
        >
          <Image
            src="/images/send.png"
            alt="Woman sending money"
            width={400}
            height={530}
          />
        </div>
      </div>
      <div
        ref={centerVideoAnimation.ref}
        className={getAnimationClasses(
          "flex w-full justify-center xl:w-1/5",
          "animate-on-scroll",
          centerVideoAnimation.isVisible,
        )}
      >
        {/* Mobile version with ImageWrapper */}
        <div className="lg:hidden">
          <ImageWrapper
            gradientWidth={"md"}
            centered
            imagePosition={{ top: -20 }}
          >
            <PhoneWrapper>
              <video
                key={`mobile-${currentVideoIndex}`}
                ref={mobileVideoRef}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="h-full w-full object-cover"
              >
                <source
                  src={videoSources[currentVideoIndex]}
                  type="video/mp4"
                />
              </video>
            </PhoneWrapper>
          </ImageWrapper>
        </div>

        {/* Desktop version without ImageWrapper */}
        <div
          ref={desktopVideoAnimation.ref}
          className={getAnimationClasses(
            "hidden lg:block",
            "slide-scale-up duration-1200 ease-custom delay-200",
            desktopVideoAnimation.isVisible,
          )}
        >
          <PhoneWrapper>
            <video
              key={`desktop-${currentVideoIndex}`}
              ref={desktopVideoRef}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="h-full w-full object-cover"
            >
              <source src={videoSources[currentVideoIndex]} type="video/mp4" />
            </video>
          </PhoneWrapper>
        </div>
      </div>
      <div className="flex w-full flex-col items-end self-start xl:w-2/5">
        <div
          ref={rightImageAnimation.ref}
          className={getAnimationClasses(
            "hidden md:block",
            "fade-in-right-large duration-1000 ease-out",
            rightImageAnimation.isVisible,
          )}
        >
          <Image
            src="/images/receive.png"
            alt="Man receiving money"
            width={400}
            height={530}
          />
        </div>

        <div className="space-y-2 lg:mt-12 lg:space-y-4 xl:mt-16">
          <Heading className="text-right">
            Quick <br /> Request
          </Heading>
          <Paragraph className="text-right">
            Easily request money from friends or groups. Send a quick request
            through Telegram, and get paid back without the awkward reminders
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default SendReceive;
