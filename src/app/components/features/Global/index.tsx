import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import { motion } from "framer-motion";
import Image from "next/image";

const Global = () => {
  return (
    <div className="h-full lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-12 w-full xl:mb-16"
      >
        <Heading className="text-center">Send Money Globally</Heading>
      </motion.div>
      <div className="mb-12 flex h-full flex-col flex-wrap justify-between gap-5 md:mb-0 md:flex-row md:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-1/3 md:max-w-[400px]"
        >
          <Paragraph className="text-paragraph-md mb-2 font-semibold uppercase !text-black 2xl:text-xl">
            Seamless Global Transfers
          </Paragraph>
          <Paragraph>
            No borders, no limits—send money to anyone, anywhere. Whether
            you&apos;re supporting family or paying international partners, our
            secure system ensures your funds arrive fast.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-1/3 md:max-w-[400px] md:text-right"
        >
          <Paragraph className="text-paragraph-md mb-2 font-semibold uppercase !text-black 2xl:text-xl">
            Fast, Secure, and Affordable
          </Paragraph>
          <Paragraph>
            Say goodbye to high fees and long wait times. Our smart transfer
            system delivers money globally in seconds, keeping your transactions
            smooth and hassle-free.
          </Paragraph>
        </motion.div>
      </div>
      <div className="relative flex justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/half-globe.png"
            alt="Global"
            width={1000}
            height={1000}
          />
          <div className="pointer-events-none absolute -bottom-5 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent blur-md" />
        </motion.div>
      </div>
    </div>
  );
};

export default Global;
