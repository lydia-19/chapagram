import Image from "next/image";
import Paragraph from "@components/Paragraph";

interface CustomersProps {
  userCount?: string;
}

const Customers = ({ userCount = "" }: CustomersProps) => {
  return (
    <div className="h-card min-w-card rounded-card relative bg-white">
      <div className="from-blue-1 to-blue-2 rounded-cardLg p-cardBorder absolute inset-0 bg-gradient-to-r">
        <div className="rounded-cardMd h-full w-full bg-white">
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
                <span className="from-blue-1 to-blue-2 h-dividerHeight w-dividerWidth mx-2 inline-block bg-gradient-to-r" />
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
