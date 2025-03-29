import Image from "next/image";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import ImageWrapper from "@components/common/ImageWrapper";
import PhoneWrapper from "@components/common/PhoneWrapper";

const SendReceive = () => {
  return (
    <div className="relative flex h-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-6">
      <div className="w-full translate-y-6 lg:w-[38%]">
        <div className="space-y-8 lg:mb-12">
          <Heading className="text-4xl lg:text-7xl">Quick Send</Heading>
          <Paragraph className="text-left">
            Send money instantly to anyone in your contacts. No delays, no
            hassles. Just quick, secure transfers right at your fingertips.
          </Paragraph>
        </div>
        <ImageWrapper
          gradientWidth={"sm"}
          imagePosition={{ top: -50, left: 50 }}
          className="hidden lg:block"
        >
          <Image
            src="/images/woman-sending.png"
            alt="Woman sending money"
            width={220}
            height={80}
            className={`object-contain transition-all duration-1000`}
          />
        </ImageWrapper>
      </div>
      <div className="flex w-full justify-center lg:w-[24%]">
        {/* Mobile version with ImageWrapper */}
        <div className="lg:hidden">
          <ImageWrapper
            gradientWidth={"md"}
            centered
            imagePosition={{ top: 50 }}
          >
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

        {/* Desktop version without ImageWrapper */}
        <div className="hidden lg:block">
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
        </div>
      </div>
      <div className="flex w-full -translate-y-6 flex-col items-end lg:w-[38%]">
        <ImageWrapper
          gradientWidth={"sm"}
          imagePosition={{ top: 20, right: -50 }}
          className="hidden lg:block"
        >
          <Image
            src="/images/man-receiving.png"
            alt="Man receiving money"
            width={220}
            height={80}
            className={`object-contain text-right transition-all duration-1000`}
          />
        </ImageWrapper>

        <div className="mt-16 space-y-6 text-right xl:mt-8">
          <Heading className="text-4xl lg:text-7xl">Quick Request</Heading>
          <Paragraph>
            Easily request money from friends or groups. Send a quick request
            through Telegram, and get paid back without the awkward reminders
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default SendReceive;
