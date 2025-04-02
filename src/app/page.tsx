"use client";

import Navbar from "@components/common/Navbar";
import Landing from "@components/features/Landing";
import Global from "@components/features/Global";
import SendReceive from "@components/features/SendReceive";
import SplitBills from "@components/features/SplitBills";
import Shamo from "@components/features/Shamo";
import Sharing from "@components/features/Sharing";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="xxl:px-0 overflow-y-auto overflow-x-hidden lg:mt-[64px] lg:h-[calc(100vh-64px)] lg:snap-y lg:snap-mandatory">
        <div className="container mx-auto h-full space-y-24 px-4 lg:space-y-0 lg:px-12 2xl:space-y-60">
          <div className="h-full overflow-hidden lg:snap-end lg:snap-always">
            <Landing />
          </div>
          <div className="h-full overflow-hidden lg:snap-end lg:snap-always">
            <SendReceive />
          </div>
          <div className="h-full overflow-hidden lg:snap-end lg:snap-always">
            <SplitBills />
          </div>
          <div className="h-full overflow-hidden lg:snap-end lg:snap-always">
            <Global />
          </div>
          <div className="h-full overflow-hidden lg:snap-end lg:snap-always">
            <Shamo />
          </div>
          <div className="h-full overflow-hidden lg:snap-end lg:snap-always">
            <Sharing />
          </div>
        </div>
      </div>
    </>
  );
}
