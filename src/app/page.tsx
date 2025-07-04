"use client";

import Navbar from "@components/common/Navbar";
import Landing from "@components/features/Landing";
import Global from "@components/features/Global";
import SendReceive from "@components/features/SendReceive";
import SplitBills from "@components/features/SplitBills";
import Shamo from "@components/features/Shamo";
import Sharing from "@components/features/Sharing";
import FAQ from "./components/features/FAQ";
import Footer from "./components/features/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20 h-full space-y-12 px-4 md:px-12 lg:space-y-24">
        <Landing />
        <SendReceive />
        <SplitBills />
        <Shamo />
        <Global />
        <Sharing />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
