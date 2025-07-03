"use client";

import Image from "next/image";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import ImageWrapper from "@components/common/ImageWrapper";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { motion } from "framer-motion";

const SendReceive = () => {
  return (
    <div className="relative flex h-full flex-col items-center justify-between gap-6 md:flex-row lg:gap-12">
      <div className="mb-12 w-full lg:mb-0 lg:self-end xl:w-2/5">
        <div className="space-y-2 lg:mb-12 lg:space-y-4 xl:mb-16">
          <Heading>
            Quick <br /> Send
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
          className="hidden md:block"
        >
          <Image
            src="/images/send.png"
            alt="Woman sending money"
            width={400}
            height={530}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.4 }}
        className="flex w-full justify-center xl:w-1/5"
      >
        {/* Mobile version with ImageWrapper */}
        <div className="lg:hidden">
          <ImageWrapper
            gradientWidth={"md"}
            centered
            imagePosition={{ top: -20 }}
          >
            <PhoneWrapper>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/send-receive.mp4" type="video/mp4" />
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
              <source src="/videos/send-receive.mp4" type="video/mp4" />
            </video>
          </PhoneWrapper>
        </motion.div>
      </motion.div>
      <div className="flex w-full flex-col items-end self-start xl:w-2/5">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:block"
        >
          <Image
            src="/images/receive.png"
            alt="Man receiving money"
            width={400}
            height={530}
          />
        </motion.div>

        <div className="space-y-2 lg:mt-12 lg:space-y-4 xl:mt-16">
          <Heading className="text-right">
            Quick <br /> Request
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
