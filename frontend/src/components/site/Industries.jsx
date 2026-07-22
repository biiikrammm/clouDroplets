import { HeartPulse, GraduationCap, ShoppingBag, Factory, Landmark, Banknote } from "lucide-react";
import { Reveal, MaskLineScroll } from "./motion";

const INDUSTRIES = [
  {
    icon: HeartPulse,
    name: "Healthcare",
    challenge: "Protecting patient data and meeting strict privacy obligations while modernising legacy systems.",
    approach: "Encrypted cloud environments, strong identity controls and HIPAA-aligned governance with continuous monitoring.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    challenge: "Delivering reliable digital learning at scale across distributed campuses and remote users.",
    approach: "Scalable cloud infrastructure, secure access management and cost-optimised platforms that flex with demand.",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    challenge: "Handling seasonal traffic spikes and safeguarding customer and payment data.",
    approach: "Elastic multi-cloud architectures, CDN and WAF/DDoS protection, and PCI DSS-aligned controls.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    challenge: "Securing connected OT/IoT estates while integrating cloud analytics into operations.",
    approach: "Edge computing for data privacy, strong encryption (TLS, AES) and SIEM-based threat analytics.",
  },
  {
    icon: Landmark,
    name: "Government",
    challenge: "Meeting rigorous compliance and sovereignty requirements for sensitive workloads.",
    approach: "Governance-led architecture, vulnerability assessment (VA/PT) and audit-ready control frameworks.",
  },
  {
    icon: Banknote,
    name: "Financial Services",
    challenge: "Defending high-value targets against evolving threats while satisfying regulators.",
    approach: "Zero-trust identity, privileged access management, encryption and 24/7 managed SOC monitoring.",
  },
];

export const Industries = () => (
  <section id="industries" data-testid="industries-section" className="py-24 md:py-36">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="mb-16 md:mb-20 max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-6">— Industries we support</p>
        <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
          <MaskLineScroll>Cloud &amp; security,</MaskLineScroll>
          <MaskLineScroll delay={0.1} className="italic text-teal">tuned to your sector.</MaskLineScroll>
        </h2>
        <p className="mt-8 text-ink/55 text-lg leading-relaxed">
          Every industry carries distinct risk, compliance and scale demands. Our Cloud &amp; Security
          capabilities adapt to the priorities that matter most in your world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.name} delay={(i % 3) * 0.07}>
            <div className="group h-full border border-copper/20 p-8 transition-colors duration-500 hover:bg-sand">
              <ind.icon className="text-copper mb-6" size={26} strokeWidth={1.4} />
              <h3 className="font-serif text-3xl text-ink mb-5">{ind.name}</h3>
              <p className="text-[13px] text-ink/60 leading-relaxed mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-copper block mb-1">Challenge</span>
                {ind.challenge}
              </p>
              <p className="text-[13px] text-ink/60 leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal block mb-1">Our approach</span>
                {ind.approach}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
