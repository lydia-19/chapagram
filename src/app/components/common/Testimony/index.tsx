import Image from "next/image";

interface TestimonyProps {
  image: string;
  title: string;
  description: string;
}

const Testimony = ({ image, title, description }: TestimonyProps) => {
  return (
    <div className="bg-blue-testimonyBg w-[300px] rounded-[22px] p-[6px]">
      <div className="rounded-[14px] bg-blue-100 p-[6px]">
        <div className="rounded-xl bg-white p-0.5">
          <div className="rounded-[14px] bg-blue-100 p-[6px]">
            <div className="mx-auto flex max-w-xl items-center rounded-full bg-white p-1">
              <div className="mr-2 flex-shrink-0">
                <Image
                  src={image}
                  alt="User avatar"
                  width={50}
                  height={50}
                  className="bg-blue-avatarBg rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-gray-400">{title}</span>
                <span className="text-xs font-medium leading-none text-gray-800">
                  {description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
