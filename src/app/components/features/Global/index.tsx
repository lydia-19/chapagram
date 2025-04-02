import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import RotatingGlobe from "@components/common/RotatingGlobe";
import { motion } from "framer-motion";

const Global = () => {
  return (
    <div className="h-full lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-16 w-full"
      >
        <Heading className="text-center text-4xl lg:text-7xl 2xl:text-8xl">
          Send Money Globally
        </Heading>
      </motion.div>
      <div className="flex h-full flex-col flex-wrap justify-between lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:mt-20 lg:w-1/3 lg:max-w-[400px]"
        >
          <Paragraph className="text-paragraph-md mb-2 font-semibold !text-black 2xl:text-xl">
            Seamless Global Transfers
          </Paragraph>
          <Paragraph>
            No borders, no limits—send money to anyone, anywhere. Whether
            you&apos;re supporting family or paying international partners, our
            secure system ensures your funds arrive fast.
          </Paragraph>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full lg:w-1/3"
        >
          <RotatingGlobe />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full text-right lg:mt-20 lg:w-1/3 lg:max-w-[400px]"
        >
          <Paragraph className="text-paragraph-md mb-2 font-semibold !text-black 2xl:text-xl">
            Fast, Secure, and Affordable
          </Paragraph>
          <Paragraph>
            Say goodbye to high fees and long wait times. Our smart transfer
            system delivers money globally in seconds, keeping your transactions
            smooth and hassle-free.
          </Paragraph>
        </motion.div>
      </div>
    </div>
  );
};

export default Global;
