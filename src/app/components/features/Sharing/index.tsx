"use client";

import Heading from "@components/ui/Heading";
import Image from "next/image";
import PhoneWrapper from "@components/common/PhoneWrapper";
import ShareIcon from "@icons/share.svg";
import { EXTERNAL_LINKS } from "@/config/constants";
import Button from "@components/ui/Button";
import {
  useScrollAnimation,
  getAnimationClasses,
} from "@/hooks/useScrollAnimation";

const Sharing = () => {
  const titleAnimation = useScrollAnimation();
  const leftImageAnimation = useScrollAnimation();
  const centerVideoAnimation = useScrollAnimation();
  const rightImageAnimation = useScrollAnimation();

  return (
    <div className="flex h-full flex-col items-center justify-evenly px-4">
      <div
        ref={titleAnimation.ref}
        className={getAnimationClasses(
          "",
          "fade-in-up duration-1200 ease-smooth",
          titleAnimation.isVisible,
        )}
      >
        <Heading className="my-12 text-center">
          Share the bot, and earn rewards for every friend you bring on board
        </Heading>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
        <div
          ref={leftImageAnimation.ref}
          className={getAnimationClasses(
            "relative col-span-4 hidden md:block",
            "fade-in-left duration-1500 ease-smooth",
            leftImageAnimation.isVisible,
          )}
        >
          <Image
            src="/images/share-left.png"
            alt="Share with friends"
            width={424}
            height={586}
          />
          <Button className="absolute bottom-1 right-3 flex aspect-square w-12 items-center justify-center rounded-full bg-blue-btn hover:bg-blue-btn/90 max-xl:md:right-2 lg:w-16 xl:w-roundBtnSm 2xl:bottom-0 2xl:w-roundBtnLg">
            <a
              href={EXTERNAL_LINKS.TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShareIcon
                className="lg:h-10 lg:w-10 2xl:h-12 2xl:w-12"
                aria-label="Share on Telegram"
              />
            </a>
          </Button>
        </div>

        <div
          ref={centerVideoAnimation.ref}
          className={getAnimationClasses(
            "md:col-span-4",
            "fade-in-up scale-in-small duration-1800 ease-smooth delay-300",
            centerVideoAnimation.isVisible,
          )}
        >
          <div className="gradient-xs h-cardLg rounded-cardSm bg-gradient-to-br from-blue-gradient1 to-blue-gradient2 md:h-cardMd md:w-full lg:h-cardSm xl:h-full">
            <div className="flex h-full items-center justify-center">
              <PhoneWrapper className="xl:scale-85 transform md:scale-75 lg:scale-90">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/referral.mp4" type="video/mp4" />
                </video>
              </PhoneWrapper>
            </div>
          </div>
        </div>

        <div
          ref={rightImageAnimation.ref}
          className={getAnimationClasses(
            "relative col-span-4 hidden md:block",
            "fade-in-right duration-1500 ease-smooth",
            rightImageAnimation.isVisible,
          )}
        >
          <Image
            src="/images/share-right.png"
            alt="Share with friends"
            width={424}
            height={586}
          />
          <Button className="absolute bottom-1 right-3 flex aspect-square w-12 items-center justify-center rounded-full bg-blue-btn hover:bg-blue-btn/90 max-xl:md:right-2 lg:w-16 xl:w-roundBtnSm 2xl:bottom-0 2xl:w-roundBtnLg">
            <a
              href={EXTERNAL_LINKS.TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShareIcon
                className="lg:h-10 lg:w-10 2xl:h-12 2xl:w-12"
                aria-label="Share on Telegram"
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sharing;
