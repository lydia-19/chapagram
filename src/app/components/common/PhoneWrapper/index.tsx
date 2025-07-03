import React, { ReactNode } from "react";

interface PhoneWrapperProps {
  children: ReactNode;
  className?: string;
}

const PhoneWrapper = ({ children, className = "" }: PhoneWrapperProps) => {
  return (
    <div
      className={`relative w-phoneSm lg:w-[200px] xl:w-phoneLg ${className}`}
    >
      {/* Phone frame */}
      <div className="relative rounded-phoneSm bg-phone-frame p-phone shadow-xl xl:rounded-phoneLg">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-0 z-40 h-island w-islandSm -translate-x-1/2 rounded-b-island bg-phone-frame xl:w-islandLg">
          {/* Camera cutout */}
          <div className="absolute left-1/2 top-cameraTop h-camera w-camera -translate-x-cameraOffset rounded-full bg-phone-camera ring-[2px] ring-phone-ring" />
        </div>

        {/* Screen container */}
        <div className="relative h-phoneSm w-full overflow-hidden rounded-screenSm lg:h-[415px] xl:h-phoneLg xl:rounded-screenLg">
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneWrapper;
