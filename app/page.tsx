import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Ecosystem from "@/components/Ecosystem";
import AIInAction from "@/components/AIInAction";
import HowItWorks from "@/components/HowItWorks";
import PracticalWork from "@/components/PracticalWork";
import SignalFeed from "@/components/SignalFeed";
import HNFeed from "@/components/HNFeed";
import DevToFeed from "@/components/DevToFeed";
import Integrations from "@/components/Integrations";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Ecosystem />
        <AIInAction />
        <HowItWorks />
        <PracticalWork />
        <SignalFeed />
        <HNFeed />
        <DevToFeed />
        <Integrations />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
