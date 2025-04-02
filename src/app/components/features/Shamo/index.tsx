import Heading from "@components/ui/Heading";
import ImageWrapper from "@components/common/ImageWrapper";
import Paragraph from "@components/ui/Paragraph";
import PhoneWrapper from "@components/common/PhoneWrapper";
import { GetStartedButton } from "@components/common/GetStartedButton";
import { motion } from "framer-motion";

const Shamo = () => {
  return (
    <div className="flex h-full flex-col items-start gap-12 lg:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 space-y-6 self-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Heading className="text-4xl !leading-none lg:text-6xl 2xl:text-8xl">
            Shamo!
            <br />
            Play with Pals,
            <br /> Spin for cash{" "}
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Paragraph className="font-medium">
            Experience the thrill of chance with Shamo. Spin the wheel, win
            money. It&apos;s a party in your pocket, with fun as the focus!
          </Paragraph>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <GetStartedButton className="hidden lg:flex" />
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
        <ImageWrapper imagePosition={{ top: 50 }} centered>
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
    </div>
  );
};

export default Shamo;
