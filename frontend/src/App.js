import "@/App.css";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLenis from "@/hooks/useLenis";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Manifesto } from "@/components/site/Manifesto";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Services } from "@/components/site/Services";
import { Methodology } from "@/components/site/Methodology";
import { SolutionTracks } from "@/components/site/SolutionTracks";
import { Industries } from "@/components/site/Industries";
import { Stats } from "@/components/site/Stats";
import { TechPartners } from "@/components/site/TechPartners";
import { Insights } from "@/components/site/Insights";
import { FAQ } from "@/components/site/FAQ";
import { Offices } from "@/components/site/Offices";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Terms } from "@/components/site/Terms";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Marquee />
      <Manifesto />
      <WhyChoose />
      <Services />
      <Methodology />
      <SolutionTracks />
      <Industries />
      <Stats />
      <TechPartners />
      <Insights />
      <FAQ />
      <Offices />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  useLenis();
  return (
    <div className="App grain bg-cream text-ink antialiased">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#121212",
            color: "#FDF8F5",
            border: "1px solid rgba(47,173,160,0.4)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </div>
  );
}

export default App;
