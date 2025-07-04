"use client";
import Heading from "@components/ui/Heading";
import ImageWrapper from "@components/common/ImageWrapper";
import Paragraph from "@components/ui/Paragraph";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { GetStartedButton } from "@components/common/GetStartedButton";
import {
  useScrollAnimation,
  getAnimationClasses,
} from "@/hooks/useScrollAnimation";

const Shamo = () => {
  const containerAnimation = useScrollAnimation();
  const titleAnimation = useScrollAnimation();
  const paragraphAnimation = useScrollAnimation();
  const buttonAnimation = useScrollAnimation();
  const videoAnimation = useScrollAnimation();

  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12 md:pt-32">
      <div
        ref={containerAnimation.ref}
        className={getAnimationClasses(
          "flex-2 mb-12 space-y-5 self-center md:space-y-10",
          "fade-in-up duration-1000 ease-out",
          containerAnimation.isVisible,
        )}
      >
        <div
          ref={titleAnimation.ref}
          className={getAnimationClasses(
            "",
            "fade-in-up delay-200 duration-1000 ease-out",
            titleAnimation.isVisible,
          )}
        >
          <Heading className="text-center md:text-left">
            Shamo!
            <br />
            Play with Pals, Spin for cash
          </Heading>
        </div>
        <div
          ref={paragraphAnimation.ref}
          className={getAnimationClasses(
            "",
            "fade-in-up delay-400 duration-1000 ease-out",
            paragraphAnimation.isVisible,
          )}
        >
          <Paragraph className="text-center font-medium md:text-left">
            Experience the thrill of chance with Shamo. Spin the wheel, win
            money. It&apos;s a party in your pocket, with fun as the focus!
          </Paragraph>
        </div>
        <div
          ref={buttonAnimation.ref}
          className={getAnimationClasses(
            "flex justify-center md:justify-start",
            "fade-in-up delay-600 duration-1000 ease-out",
            buttonAnimation.isVisible,
          )}
        >
          <GetStartedButton />
        </div>
      </div>
      <div
        ref={videoAnimation.ref}
        className={getAnimationClasses(
          "flex-1 self-center",
          "bounce-in",
          videoAnimation.isVisible,
        )}
      >
        <ImageWrapper imagePosition={{ top: -20 }} centered>
          <PhoneWrapper>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/videos/shamo.mp4" type="video/mp4" />
            </video>
          </PhoneWrapper>
        </ImageWrapper>
      </div>
    </div>
  );
};

export default Shamo;
