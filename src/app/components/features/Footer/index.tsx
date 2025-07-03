import FacebookIcon from "@icons/Facebook.svg";
import InstagramIcon from "@icons/Instagram.svg";
import LinkedinIcon from "@icons/Linkedin.svg";
import TiktokIcon from "@icons/Tiktok.svg";
import YoutubeIcon from "@icons/Youtube.svg";
import Image from "next/image";
import { APP_CONFIG } from "@/config/constants";
import GetStartedButton from "@components/common/GetStartedButton";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";

const socialLinks = [
  {
    href: "https://www.facebook.com/Chapa.eth",
    label: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    href: "https://www.instagram.com/chapa.et",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "https://et.linkedin.com/company/chapa-financial-technologies",
    label: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  {
    href: "https://www.tiktok.com/@chapa_et",
    label: "TikTok",
    icon: <TiktokIcon />,
  },
  {
    href: "https://www.youtube.com/@chapa_et",
    label: "YouTube",
    icon: <YoutubeIcon />,
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 overflow-x-hidden">
      <div className="container mx-auto">
        <div className="relative mx-0 flex flex-col gap-10 bg-blue-10 px-6 py-4 md:mx-6 md:flex-row md:gap-0 md:rounded-2xl xl:mx-0 2xl:py-10">
          <div className="relative order-2 -mb-4 flex flex-1 items-end justify-center md:order-1 2xl:-mb-10">
            <Image
              src="/images/footer-phone.png"
              alt="Chapagram"
              width={450}
              height={450}
            />
          </div>
          <div className="order-1 flex flex-1 flex-col items-center justify-center gap-6 md:order-2 md:items-start xl:py-10">
            <Heading className="text-center md:text-left">
              Manage <br />
              Your Money <br /> on the Go
            </Heading>
            <Paragraph className="text-center md:text-left">
              Open your telegram, start using chapagram and take control of your
              finances — anytime, anywhere.
            </Paragraph>
            <GetStartedButton className="w-fit" />
          </div>
        </div>
      </div>
      <div className="-mt-[20%] flex flex-col justify-end bg-blue-9 pt-[22%] text-white md:rounded-t-2xl 2xl:-mt-[10%] 2xl:pt-[12%]">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col flex-wrap items-start justify-between gap-8 px-6 md:flex-row xl:px-0">
            {/* Divider */}
            <div className="mx-auto my-6 hidden w-[98%] items-center md:flex">
              <div className="h-2 w-2 rounded-full bg-gray-3"></div>
              <div className="w-full border-t border-gray-3"></div>
              <div className="h-2 w-2 rounded-full bg-gray-3"></div>
            </div>
            <div className="mt-5 md:mt-0">
              <div className="relative mb-8 h-logoSm w-logoSm lg:h-logoMd lg:w-logoMd">
                <Image
                  src="/images/logo-white.svg"
                  alt={`${APP_CONFIG.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <Paragraph className="mb-2 font-normal text-white lg:max-w-64 lg:text-3xl">
                Keep up with the latest
              </Paragraph>
            </div>
            <div>
              <div className="mb-6 font-semibold">Help</div>
              <ul className="m-0 list-none p-0 leading-8">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white no-underline opacity-80 hover:underline lg:text-base"
                  >
                    Customer support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white no-underline opacity-80 hover:underline lg:text-base"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white no-underline opacity-80 hover:underline lg:text-base"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-8 pb-20 pt-3 md:pb-3">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 px-4 md:justify-between">
            <div className="text-center text-sm text-white lg:text-left">
              © {new Date().getFullYear()} Copyright
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center opacity-80 transition-opacity hover:opacity-100"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col justify-stretch bg-blue-15 px-6 py-3 md:hidden">
          <GetStartedButton variant="sticky" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
