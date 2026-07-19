import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Philosophy from "@/components/landing/Philosophy";
import Features from "@/components/landing/Features";
import FocusPreview from "@/components/landing/FocusPreview";
import InspirationSection from "@/components/landing/InspirationSection";
import Sanctuary from "@/components/landing/Sanctuary";
import GrowthLoop from "@/components/landing/GrowthLoop";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <Hero />
      <Philosophy />
      <Features />
      <FocusPreview />
      <InspirationSection />
      <Sanctuary />
      <GrowthLoop />
      <FinalCTA />
      <Footer />
    </main>
  );
}