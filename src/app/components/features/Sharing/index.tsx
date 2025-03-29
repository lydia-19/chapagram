import Heading from "@components/ui/Heading";
import Image from "next/image";
import PhoneWrapper from "@components/common/PhoneWrapper";
import ShareIcon from "@icons/share.svg";
import { EXTERNAL_LINKS } from "@/config/constants";
import Button from "@components/ui/Button";

const Sharing = () => {
  return (
    <div className="flex h-full flex-col items-center justify-evenly px-4">
      <Heading
        as="h3"
        className="mb-16 text-center text-2xl font-semibold !leading-snug lg:mb-8 lg:text-5xl"
      >
        Share the bot, and earn rewards for every friend you bring on board.
      </Heading>
      <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-10">
        <div className="relative col-span-3 hidden lg:block">
          <Image
            src="/images/woman-sharing.png"
            alt="Share with friends"
            width={270}
            height={586}
            className="object-contain"
          />
          <button className="absolute bottom-1 right-9 flex aspect-square w-16 items-center justify-center rounded-full bg-blue-5 hover:bg-blue-5/90 xl:w-roundBtnSm 2xl:bottom-0 2xl:right-8 2xl:w-roundBtnLg">
            <a
              href={EXTERNAL_LINKS.TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShareIcon />
            </a>
          </button>
        </div>

        <div className="col-span-4">
          <div className="gradient-xs aspect-square h-[450px] rounded-cardSm bg-gradient-to-r from-blue-1 to-blue-2 lg:h-full lg:w-full">
            <div className="flex h-full items-center justify-center">
              <PhoneWrapper className="xl:scale-85 transform lg:scale-75">
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
            </div>
          </div>
          <div className="mt-8 w-full lg:hidden">
            <Button
              className="w-full"
              rightIcon={<ShareIcon className="h-4 w-4" />}
            >
              Share
            </Button>
          </div>
        </div>

        <div className="relative col-span-3 hidden lg:block">
          <Image
            src="/images/man-sharing.png"
            alt="Share with friends"
            width={270}
            height={586}
            className="object-contain"
          />
          <button className="absolute bottom-1 right-9 flex aspect-square w-16 items-center justify-center rounded-full bg-blue-5 hover:bg-blue-5/90 xl:w-roundBtnSm 2xl:bottom-0 2xl:right-8 2xl:w-roundBtnLg">
            <a
              href={EXTERNAL_LINKS.TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShareIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sharing;
