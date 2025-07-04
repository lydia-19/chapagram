import Image from "next/image";
import Paragraph from "@components/ui/Paragraph";
import { EXTERNAL_LINKS } from "@/config/constants";

const CustomersSupport = () => {
  return (
    <div className="max-w-[200px] rounded-2xl bg-cardBg lg:max-w-card">
      <div className="mx-auto flex h-full w-full flex-col justify-between gap-2 px-4 py-2 lg:w-3/4 lg:px-0">
        <Paragraph className="flex items-center text-left text-xs font-normal !leading-[100%] !text-black lg:!text-lg">
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
              className="flex w-14 justify-center rounded-2xl bg-blue-300 text-xs text-black lg:text-sm"
            >
              {EXTERNAL_LINKS.CUSTOMER_SUPPORT_NUMBER}
            </a>
            <p className="text-xs lg:text-sm">Book a Call</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersSupport;
