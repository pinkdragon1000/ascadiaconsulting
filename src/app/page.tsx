import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Ascadia Consulting",
  description: "This is the Home Page for Ascadia Consulting.",
};

export default function HomePage() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Pricing />
    </>
  );
}
