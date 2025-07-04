import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import Image from "next/image";
import { APP_CONFIG } from "@/config/constants";
import {
  useScrollAnimation,
  getAnimationClasses,
} from "@/hooks/useScrollAnimation";

const SplitBills = () => {
  const containerAnimation = useScrollAnimation();
  const titleAnimation = useScrollAnimation();
  const paragraphAnimation = useScrollAnimation();
  const imageAnimation = useScrollAnimation();

  return (
    <div className="mt-20 flex h-full flex-col gap-8 md:flex-row md:gap-0">
      <div
        ref={containerAnimation.ref}
        className={getAnimationClasses(
          "mr-4 basis-full space-y-4 md:basis-2/5",
          "fade-in-left duration-1200 ease-out",
          containerAnimation.isVisible,
        )}
      >
        <div
          ref={titleAnimation.ref}
          className={getAnimationClasses(
            "",
            "fade-in-up delay-300 duration-1000 ease-out",
            titleAnimation.isVisible,
          )}
        >
          <Heading className="mt-5 xl:mt-16">
            Split Bills,
            <br /> Share Easy
          </Heading>
        </div>
        <div
          ref={paragraphAnimation.ref}
          className={getAnimationClasses(
            "",
            "fade-in-up delay-500 duration-1000 ease-out",
            paragraphAnimation.isVisible,
          )}
        >
          <Paragraph>
            Divide bills effortlessly with {APP_CONFIG.name}. <br /> Split costs
            among friends in seconds, ensuring everyone pays their fair share,
            right within your bot.
          </Paragraph>
        </div>
      </div>
      <div
        ref={imageAnimation.ref}
        className={getAnimationClasses(
          "flex basis-full items-end justify-end md:basis-3/5",
          "scale-in-small duration-1800 ease-smooth",
          imageAnimation.isVisible,
        )}
      >
        <div className="relative">
          <Image
            src="/images/split-bill.png"
            alt="Split Bills"
            width={600}
            height={530}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitBills;
