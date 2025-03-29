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
    <div className="xxl:px-0 container mx-auto px-4 lg:px-12">
      <Navbar />
      <div className="mt-20 space-y-20 lg:space-y-48 xl:mt-36">
        <section>
          <Landing />
        </section>
        <section>
          <SendReceive />
        </section>
        <section>
          <SplitBills />
        </section>
        <section>
          <Global />
        </section>
        <section>
          <Shamo />
        </section>
        <section>
          <Sharing />
        </section>
      </div>
    </div>
  );
}
