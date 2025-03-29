import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import RotatingGlobe from "@components/common/RotatingGlobe";

const Global = () => {
  return (
    <div className="h-full lg:pt-24">
      <div className="mb-16 w-full">
        <Heading className="text-center text-4xl lg:text-7xl">
          Send Money Globally
        </Heading>
      </div>
      <div className="flex h-full flex-col flex-wrap justify-between lg:flex-row">
        <div className="w-full lg:mt-20 lg:w-1/3 lg:max-w-[400px]">
          <Paragraph className="mb-2 text-paragraph-md font-semibold !text-black">
            Seamless Global Transfers
          </Paragraph>
          <Paragraph>
            No borders, no limits—send money to anyone, anywhere. Whether
            you&apos;re supporting family or paying international partners, our
            secure system ensures your funds arrive fast.
          </Paragraph>
        </div>
        <div className="w-full lg:w-1/3">
          <RotatingGlobe />
        </div>
        <div className="w-full text-right lg:mt-20 lg:w-1/3 lg:max-w-[400px]">
          <Paragraph className="mb-2 text-paragraph-md font-semibold !text-black">
            Fast, Secure, and Affordable
          </Paragraph>
          <Paragraph>
            Say goodbye to high fees and long wait times. Our smart transfer
            system delivers money globally in seconds, keeping your transactions
            smooth and hassle-free.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Global;
