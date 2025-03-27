import Image from "next/image";
import Paragraph from "@components/ui/Paragraph";

interface CustomersProps {
  userCount?: string;
}

const Customers = ({ userCount = "" }: CustomersProps) => {
  return (
    <div className="rounded-card relative h-card min-w-card">
      <div className="absolute inset-0 rounded-cardLg bg-gradient-to-r from-blue-1 to-blue-2 p-cardBorder">
        <div className="h-full w-full rounded-cardMd bg-white">
          <div className="flex h-full flex-col items-center gap-2 py-3">
            <Image
              src="/images/hand-shaking.png"
              width={60}
              height={63}
              alt="Hand shaking"
            />
            <div className="flex flex-col items-center">
              <Paragraph className="flex items-center text-center font-semibold">
                <span className="text-gradient text-paragraph-lg mr-3">
                  {userCount}
                </span>
                <span className="mx-2 inline-block h-dividerHeight w-dividerWidth bg-gradient-to-r from-blue-1 to-blue-2" />
                <span className="text-gradient text-left text-lg">
                  <span>Satisfied</span> <br />
                  <span>Users</span>
                </span>
              </Paragraph>
            </div>
            <div>
              <Image
                src="/images/users.png"
                width={140}
                height={39}
                alt="Customers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
