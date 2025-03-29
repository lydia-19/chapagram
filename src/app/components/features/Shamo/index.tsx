import Heading from "@components/ui/Heading";
import ImageWrapper from "@components/common/ImageWrapper";
import Paragraph from "@components/ui/Paragraph";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { GetStartedButton } from "@components/common/GetStartedButton";

const Shamo = () => {
  return (
    <div className="flex h-full flex-col items-start gap-12 lg:flex-row">
      <div className="flex-1 space-y-6 self-center">
        <Heading className="text-4xl !leading-none lg:text-6xl">
          Shamo!
          <br />
          Play with Pals,
          <br /> Spin for cash{" "}
        </Heading>
        <Paragraph className="font-medium">
          Experience the thrill of chance with Shamo. Spin the wheel, win money.
          It&apos;s a party in your pocket, with fun as the focus!
        </Paragraph>
        <GetStartedButton className="hidden lg:flex" />
      </div>
      <div className="flex-1">
        <ImageWrapper imagePosition={{ top: 50 }} centered>
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
    </div>
  );
};

export default Shamo;
