import "@/App.css";
import { Toaster } from "sonner";
import useLenis from "@/hooks/useLenis";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Manifesto } from "@/components/site/Manifesto";
import { Services } from "@/components/site/Services";
import { SolutionTracks } from "@/components/site/SolutionTracks";
import { Stats } from "@/components/site/Stats";
import { TechPartners } from "@/components/site/TechPartners";
import { Offices } from "@/components/site/Offices";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

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
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <SolutionTracks />
        <Stats />
        <TechPartners />
        <Offices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
