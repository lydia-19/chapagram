import React from "react";
import Customers from "@components/common/Customers";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import ImageWrapper from "@components/common/ImageWrapper";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { GetStartedButton } from "@components/common/GetStartedButton";
import { APP_CONFIG } from "@/config/constants";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="grid h-full grid-cols-12 gap-8 pt-4 lg:gap-0 lg:pt-9">
      <div className="relative z-10 col-span-12 lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-4 lg:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <Heading as="h1" className="text-4xl xl:text-6xl 2xl:text-8xl">
              One Bot <br /> Total Payment <br /> Freedom
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <Paragraph className="w-full lg:max-w-72 xl:max-w-96">
              Experience the synergy of seamlessly combined payment tools.{" "}
              {APP_CONFIG.name} brings all your transaction needs together in
              one intuitive bot.
            </Paragraph>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <GetStartedButton className="hidden lg:flex lg:max-w-max" />
          </motion.div>
        </motion.div>
      </div>
      <div className="col-span-12 flex justify-between lg:col-span-7">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.4 }}
          className="relative col-span-12 flex w-full justify-center lg:-ml-8 lg:w-[calc(100%*4/7)] lg:justify-center xl:w-[calc(100%*5/7)]"
        >
          <motion.div
            initial={{ y: 100, scale: 0.9 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{
              duration: 1.2,
              ease: [0.12, 0.23, 0.5, 1],
              delay: 0.2,
            }}
          >
            <ImageWrapper centered imagePosition={{ top: 50 }}>
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
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="relative col-span-12 hidden lg:block lg:w-[calc(100%*3/7)] xl:w-[calc(100%*2/7)]"
        >
          <div className="absolute right-0 top-[55%] h-full 2xl:bottom-[0%]">
            <Customers userCount="10K+" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
