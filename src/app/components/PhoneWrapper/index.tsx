import React, { ReactNode } from "react";

interface PhoneWrapperProps {
  children: ReactNode;
  className?: string;
}

const PhoneWrapper = ({ children, className = "" }: PhoneWrapperProps) => {
  return (
    <div className={`w-phoneSm xl:w-phoneLg relative ${className}`}>
      {/* Phone frame */}
      <div className="rounded-phoneSm xl:rounded-phoneLg bg-phone-frame p-phone relative shadow-xl">
        {/* Dynamic Island */}
        <div className="h-island w-islandSm xl:w-islandLg rounded-b-island bg-phone-frame absolute left-1/2 top-0 z-50 -translate-x-1/2">
          {/* Camera cutout */}
          <div className="top-cameraTop h-camera w-camera -translate-x-cameraOffset bg-phone-camera ring-phone-ring absolute left-1/2 rounded-full ring-[2px]" />
        </div>

        {/* Screen container */}
        <div className="h-phoneSm xl:h-phoneLg rounded-screenSm xl:rounded-screenLg relative w-full overflow-hidden bg-white">
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneWrapper;
