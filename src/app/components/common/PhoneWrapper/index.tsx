import React, { ReactNode } from "react";

interface PhoneWrapperProps {
  children: ReactNode;
  className?: string;
}

const PhoneWrapper = ({ children, className = "" }: PhoneWrapperProps) => {
  return (
    <div
      className={`relative w-phoneSm lg:w-phoneMd xl:w-phoneLg ${className}`}
    >
      {/* Phone frame */}
      <div className="relative rounded-phoneSm bg-phone-frame p-phone shadow-xl xl:rounded-phoneLg">
        {/* Screen container */}
        <div className="relative h-phoneSm w-full overflow-hidden rounded-screenSm lg:h-phoneMd xl:h-phoneLg xl:rounded-screenLg">
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneWrapper;
