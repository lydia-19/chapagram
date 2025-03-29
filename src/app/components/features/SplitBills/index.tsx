import Heading from "@components/ui/Heading";
import ImageWrapper from "@components/common/ImageWrapper";
import Paragraph from "@components/ui/Paragraph";
import Image from "next/image";
import { APP_CONFIG } from "@/config/constants";

const SplitBills = () => {
  return (
    <div className="grid grid-cols-8 gap-8 lg:gap-0">
      <div className="col-span-12 space-y-4 lg:col-span-4 lg:max-w-[500px]">
        <Heading className="text-4xl lg:text-8xl">
          Split Bills,
          <br /> Share Easy
        </Heading>
        <Paragraph>
          Divide bills effortlessly with {APP_CONFIG.name}. <br /> Split costs
          among friends in seconds, ensuring everyone pays their fair share,
          right within your bot.
        </Paragraph>
      </div>
      <div className="col-span-12 flex justify-center lg:col-span-4 lg:translate-y-20">
        <ImageWrapper gradientWidth={"lg"} imagePosition={{ top: 0, left: -9 }}>
          <Image
            src="/images/split-bills.png"
            alt="Split Bills"
            width={500}
            height={535}
          />
        </ImageWrapper>
      </div>
    </div>
  );
};

export default SplitBills;
