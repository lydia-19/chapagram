import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import Image from "next/image";
import { APP_CONFIG } from "@/config/constants";
import { motion } from "framer-motion";

const SplitBills = () => {
  return (
    <div className="mt-20 flex h-full flex-col gap-8 md:flex-row md:gap-0">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="mr-4 basis-full space-y-4 md:basis-2/5"
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
          <Heading className="mt-5 xl:mt-16">
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
        className="flex basis-full items-end justify-center md:basis-3/5"
      >
        <div className="relative">
          <Image
            src="/images/split-bill.png"
            alt="Split Bills"
            width={700}
            height={530}
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SplitBills;
