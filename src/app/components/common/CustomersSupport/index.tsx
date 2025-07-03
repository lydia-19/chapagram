import Image from "next/image";
import Paragraph from "@components/ui/Paragraph";
import { EXTERNAL_LINKS } from "@/config/constants";

const CustomersSupport = () => {
  return (
    <div className="max-h-card max-w-card rounded-2xl bg-cardBg">
      <div className="mx-auto flex h-full w-3/4 flex-col justify-between py-2">
        <Paragraph className="flex items-center text-left font-normal !leading-[100%] !text-black lg:!text-lg">
          Any confusion, we have the best customer supports
        </Paragraph>

        <div className="flex justify-between">
          <Image
            src="/images/customer-support.png"
            width={99}
            height={99}
            alt="Customer support"
          />
          <div className="flex flex-col items-center justify-end">
            <a
              href={`tel:${EXTERNAL_LINKS.CUSTOMER_SUPPORT_NUMBER}`}
              className="flex w-14 justify-center rounded-2xl bg-blue-7 text-black"
            >
              {EXTERNAL_LINKS.CUSTOMER_SUPPORT_NUMBER}
            </a>
            <p>Book a Call</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersSupport;
