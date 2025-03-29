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
      <div className="xxl:px-0 h-screen space-y-24 overflow-y-auto overflow-x-hidden max-2xl:lg:snap-y max-2xl:lg:snap-mandatory max-2xl:lg:space-y-0 2xl:space-y-60">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="mt-[64px] max-2xl:lg:h-[calc(100vh-64px)] max-2xl:lg:snap-end max-2xl:lg:snap-always">
            <Landing />
          </div>
          <div className="container mx-auto lg:mt-[64px] max-2xl:lg:h-[calc(100vh-64px)] max-2xl:lg:snap-end max-2xl:lg:snap-always">
            <SendReceive />
          </div>
          <div className="container mx-auto lg:mt-[64px] max-2xl:lg:h-[calc(100vh-64px)] max-2xl:lg:snap-end max-2xl:lg:snap-always">
            <SplitBills />
          </div>
          <div className="container mx-auto lg:mt-[64px] max-2xl:lg:h-[calc(100vh-64px)] max-2xl:lg:snap-end max-2xl:lg:snap-always">
            <Global />
          </div>
          <div className="container mx-auto lg:mt-[64px] max-2xl:lg:h-[calc(100vh-64px)] max-2xl:lg:snap-end max-2xl:lg:snap-always">
            <Shamo />
          </div>
          <div className="container mx-auto lg:mt-[64px] max-2xl:lg:h-[calc(100vh-64px)] max-2xl:lg:snap-end max-2xl:lg:snap-always">
            <Sharing />
          </div>
        </div>
      </div>
    </>
  );
}
