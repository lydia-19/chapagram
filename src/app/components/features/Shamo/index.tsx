"use client";
import Heading from "@components/ui/Heading";
import ImageWrapper from "@components/common/ImageWrapper";
import Paragraph from "@components/ui/Paragraph";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { GetStartedButton } from "@components/common/GetStartedButton";
import { motion } from "framer-motion";

const Shamo = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-2 mb-12 space-y-5 self-center md:space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Heading className="text-center md:text-left">
            Shamo!
            <br />
            Play with Pals, Spin for cash
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Paragraph className="text-center font-medium md:text-left">
            Experience the thrill of chance with Shamo. Spin the wheel, win
            money. It&apos;s a party in your pocket, with fun as the focus!
          </Paragraph>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <GetStartedButton />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease: [0.68, -0.6, 0.32, 1.6],
        }}
        className="flex-1 self-center"
      >
        <ImageWrapper imagePosition={{ top: -20 }} centered>
          <PhoneWrapper>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/videos/shamo.mp4" type="video/mp4" />
            </video>
          </PhoneWrapper>
        </ImageWrapper>
      </motion.div>
    </div>
  );
};

export default Shamo;
