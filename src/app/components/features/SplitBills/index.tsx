import Heading from "@components/ui/Heading";
import ImageWrapper from "@components/common/ImageWrapper";
import Paragraph from "@components/ui/Paragraph";
import Image from "next/image";
import { APP_CONFIG } from "@/config/constants";
import { motion } from "framer-motion";

const SplitBills = () => {
  return (
    <div className="mt-20 grid h-full grid-cols-8 gap-8 lg:gap-0">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="col-span-12 space-y-4 lg:col-span-4 lg:max-w-[400px] 2xl:max-w-[500px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <Heading className="mt-5 text-4xl lg:text-7xl xl:mt-16 2xl:text-8xl">
            Split Bills,
            <br /> Share Easy
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <Paragraph>
            Divide bills effortlessly with {APP_CONFIG.name}. <br /> Split costs
            among friends in seconds, ensuring everyone pays their fair share,
            right within your bot.
          </Paragraph>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="col-span-12 flex items-end justify-center lg:col-span-4"
      >
        <ImageWrapper gradientWidth={"lg"} imagePosition={{ top: 0, left: -9 }}>
          <Image
            src="/images/split-bills.png"
            alt="Split Bills"
            width={570}
            height={600}
          />
        </ImageWrapper>
      </motion.div>
    </div>
  );
};

export default SplitBills;
