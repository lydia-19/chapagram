"use client";

import Heading from "@components/ui/Heading";
import Image from "next/image";
import PhoneWrapper from "@components/common/PhoneWrapper";
import ShareIcon from "@icons/share.svg";
import { EXTERNAL_LINKS } from "@/config/constants";
import Button from "@components/ui/Button";
import { motion } from "framer-motion";

const Sharing = () => {
  return (
    <div className="flex h-full flex-col items-center justify-evenly px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Heading className="my-12 text-center">
          Share the bot, and earn rewards for every friend you bring on board
        </Heading>
      </motion.div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative col-span-4 hidden md:block"
        >
          <Image
            src="/images/share-left.png"
            alt="Share with friends"
            width={424}
            height={586}
          />
          <Button className="bg-blue-btn hover:bg-blue-btn/90 absolute bottom-1 right-3 flex aspect-square w-12 items-center justify-center rounded-full max-xl:md:right-2 lg:w-16 xl:w-roundBtnSm 2xl:bottom-0 2xl:w-roundBtnLg">
            <a
              href={EXTERNAL_LINKS.TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShareIcon
                className="lg:h-10 lg:w-10 2xl:h-12 2xl:w-12"
                aria-label="Share on Telegram"
              />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="md:col-span-4"
        >
          <div className="gradient-xs from-blue-gradient1 to-blue-gradient2 h-cardLg md:h-cardMd lg:h-cardSm rounded-cardSm bg-gradient-to-br md:w-full xl:h-full">
            <div className="flex h-full items-center justify-center">
              <PhoneWrapper className="xl:scale-85 transform md:scale-75 lg:scale-90">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/referral.mp4" type="video/mp4" />
                </video>
              </PhoneWrapper>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative col-span-4 hidden md:block"
        >
          <Image
            src="/images/share-right.png"
            alt="Share with friends"
            width={424}
            height={586}
          />
          <Button className="bg-blue-btn hover:bg-blue-btn/90 absolute bottom-1 right-3 flex aspect-square w-12 items-center justify-center rounded-full max-xl:md:right-2 lg:w-16 xl:w-roundBtnSm 2xl:bottom-0 2xl:w-roundBtnLg">
            <a
              href={EXTERNAL_LINKS.TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShareIcon
                className="lg:h-10 lg:w-10 2xl:h-12 2xl:w-12"
                aria-label="Share on Telegram"
              />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sharing;
