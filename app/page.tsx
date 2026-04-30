import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AIInAction from "@/components/AIInAction";
import HowItWorks from "@/components/HowItWorks";
import PracticalWork from "@/components/PracticalWork";
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
        <AIInAction />
        <HowItWorks />
        <PracticalWork />
        <Integrations />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
