import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import Image from "next/image";
import {
  useScrollAnimation,
  getAnimationClasses,
} from "@/hooks/useScrollAnimation";

const Global = () => {
  const titleAnimation = useScrollAnimation();
  const leftAnimation = useScrollAnimation();
  const rightAnimation = useScrollAnimation();
  const imageAnimation = useScrollAnimation();

  return (
    <div className="h-full lg:pt-24">
      <div
        ref={titleAnimation.ref}
        className={getAnimationClasses(
          "mb-12 w-full xl:mb-16",
          "fade-in-up duration-1000",
          titleAnimation.isVisible,
        )}
      >
        <Heading className="text-center">Send Money Globally</Heading>
      </div>
      <div className="mb-12 flex h-full flex-col flex-wrap justify-between gap-5 md:mb-0 md:flex-row md:gap-0">
        <div
          ref={leftAnimation.ref}
          className={getAnimationClasses(
            "w-full md:w-1/3 md:max-w-content",
            "fade-in-left delay-300 duration-1000",
            leftAnimation.isVisible,
          )}
        >
          <Paragraph className="text-paragraph-md mb-2 font-semibold uppercase !text-black 2xl:text-xl">
            Seamless Global Transfers
          </Paragraph>
          <Paragraph>
            No borders, no limits—send money to anyone, anywhere. Whether
            you&apos;re supporting family or paying international partners, our
            secure system ensures your funds arrive fast.
          </Paragraph>
        </div>

        <div
          ref={rightAnimation.ref}
          className={getAnimationClasses(
            "w-full md:w-1/3 md:max-w-content md:text-right",
            "fade-in-right delay-300 duration-1000",
            rightAnimation.isVisible,
          )}
        >
          <Paragraph className="text-paragraph-md mb-2 font-semibold uppercase !text-black 2xl:text-xl">
            Fast, Secure, and Affordable
          </Paragraph>
          <Paragraph>
            Say goodbye to high fees and long wait times. Our smart transfer
            system delivers money globally in seconds, keeping your transactions
            smooth and hassle-free.
          </Paragraph>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div
          ref={imageAnimation.ref}
          className={getAnimationClasses(
            "",
            "scale-in duration-1500 ease-out",
            imageAnimation.isVisible,
          )}
        >
          <Image
            src="/images/half-globe.png"
            alt="Global"
            width={1000}
            height={1000}
          />
          <div className="pointer-events-none absolute -bottom-5 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent blur-md" />
        </div>
      </div>
    </div>
  );
};

export default Global;
