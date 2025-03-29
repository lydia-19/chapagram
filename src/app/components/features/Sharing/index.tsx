import Heading from "@components/ui/Heading";
import Image from "next/image";
import PhoneWrapper from "@components/common/PhoneWrapper";
import ShareIcon from "@icons/share.svg";
import { EXTERNAL_LINKS } from "@/config/constants";

const Sharing = () => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center space-y-24 px-4">
      <Heading
        as="h3"
        className="text-center text-2xl font-semibold lg:text-5xl"
      >
        Share the bot, and earn rewards for every friend you bring on board.
      </Heading>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-10">
        <div className="relative col-span-3 hidden lg:block">
          <Image
            src="/images/woman-sharing.png"
            alt="Share with friends"
            width={370}
            height={586}
            className="object-contain"
          />
          <button className="bg-blue-5 xl:w-roundBtnSm 2xl:w-roundBtnLg hover:bg-blue-5/90 absolute bottom-1 right-0 flex aspect-square w-16 items-center justify-center rounded-full 2xl:right-5">
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
          <div
            className="h-[450px] w-[300px] rounded-cardSm bg-gradient-to-r from-blue-1 to-blue-2 lg:h-full lg:w-full"
            style={{
              aspectRatio: "1",
            }}
          >
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
        </div>

        <div className="relative col-span-3 hidden lg:block">
          <Image
            src="/images/man-sharing.png"
            alt="Share with friends"
            width={370}
            height={586}
            className="object-contain"
          />
          <button className="bg-blue-5 xl:w-roundBtnSm 2xl:w-roundBtnLg hover:bg-blue-5/90 absolute bottom-1 right-0 flex aspect-square w-16 items-center justify-center rounded-full 2xl:right-5">
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
