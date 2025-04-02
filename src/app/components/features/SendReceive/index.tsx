import Image from "next/image";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import ImageWrapper from "@components/common/ImageWrapper";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { motion } from "framer-motion";

const SendReceive = () => {
  return (
    <div className="relative flex h-full flex-col items-center justify-between gap-6 lg:flex-row lg:gap-12">
      <div className="w-full self-end lg:w-[38%]">
        <div className="space-y-2 lg:mb-12 lg:space-y-4">
          <Heading className="text-4xl xl:text-6xl 2xl:text-8xl">
            Quick Send
          </Heading>
          <Paragraph className="text-left">
            Send money instantly to anyone in your contacts. No delays, no
            hassles. Just quick, secure transfers right at your fingertips.
          </Paragraph>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.4 }}
        className="flex w-full justify-center lg:w-[24%]"
      >
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
        <motion.div
          initial={{ y: 100, scale: 0.9 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{
            duration: 1.2,
            ease: [0.12, 0.23, 0.5, 1],
            delay: 0.2,
          }}
          className="hidden lg:block"
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
        </motion.div>
      </motion.div>
      <div className="flex w-full flex-col items-end self-start lg:w-[38%]">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
        </motion.div>

        <div className="mt-16 space-y-4 text-right lg:mt-12">
          <Heading className="text-4xl xl:text-6xl 2xl:text-8xl">
            Quick Request
          </Heading>
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
