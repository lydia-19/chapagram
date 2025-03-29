import Image from "next/image";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import ImageWrapper from "@components/common/ImageWrapper";
import PhoneWrapper from "@components/common/PhoneWrapper";

const SendReceive = () => {
  return (
    <div className="relative flex h-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-6">
      <div className="w-full self-end lg:w-[38%]">
        <div className="space-y-4 lg:mb-12">
          <Heading className="text-4xl lg:text-6xl">Quick Send</Heading>
          <Paragraph className="text-left">
            Send money instantly to anyone in your contacts. No delays, no
            hassles. Just quick, secure transfers right at your fingertips.
          </Paragraph>
        </div>
        <ImageWrapper
          gradientWidth={"sm"}
          imagePosition={{ top: "100%", left: 50 }}
          className="hidden lg:block"
        >
          <Image
            src="/images/woman-sending.png"
            alt="Woman sending money"
            width={180}
            height={360}
            className="object-contain"
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
      <div className="flex w-full flex-col items-end lg:w-[38%]">
        <ImageWrapper
          gradientWidth={"sm"}
          imagePosition={{ top: 20, right: -50 }}
          className="hidden lg:block"
        >
          <Image
            src="/images/man-receiving.png"
            alt="Man receiving money"
            width={200}
            height={310}
            className="object-contain text-right"
          />
        </ImageWrapper>

        <div className="mt-16 space-y-4 text-right xl:mt-8">
          <Heading className="text-4xl lg:text-6xl">Quick Request</Heading>
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
