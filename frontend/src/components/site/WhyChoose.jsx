import { ShieldCheck, Layers, Network, Cloud, Cpu, Users, TrendingUp, Handshake } from "lucide-react";
import { Reveal, MaskLineScroll } from "./motion";

const REASONS = [
  {
    icon: Layers,
    title: "End-to-End Cloud & Security Expertise",
    body: "From advisory and architecture through migration, operations and 24/7 support, clouDroplets delivers the full lifecycle in one place. Our solutions are designed to be end-to-end, so responsibility never falls between vendors and your environment stays coherent from strategy to steady-state.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Architecture",
    body: "Security is engineered in at the core, not bolted on afterwards. Every design incorporates encryption, identity controls, intrusion detection and monitoring purpose-built for cloud, protecting the confidentiality, integrity and availability of your most valuable assets.",
  },
  {
    icon: Network,
    title: "Vendor-Neutral, Multi-Vendor Consulting",
    body: "As alliance partners to global industry leaders, we recommend what is right for your business rather than a single product line. Our multi-vendor approach guarantees varied product availability and smooth integration across a broad portfolio of platforms.",
  },
  {
    icon: Cloud,
    title: "Multi-Cloud & Hybrid Strategy",
    body: "We help you operate confidently across AWS, Azure, Google Cloud and Oracle Cloud — as well as hybrid estates that mix cloud and on-premises. Workloads are placed where they perform best, with consistent governance and cost control throughout.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge, Interoperable Technology",
    body: "Our practice is built on cutting-edge, interoperable and reliable technology that enhances your business processes. We integrate best-of-breed tooling so systems work together cleanly and evolve with your needs instead of locking you in.",
  },
  {
    icon: Users,
    title: "Experienced, Accountable People",
    body: "Industry veterans and creative thinkers work as one empowered, accountable team. You get seasoned engineers who take ownership of outcomes and collaborate closely with your people at every stage of delivery.",
  },
  {
    icon: TrendingUp,
    title: "Value for Money — Low TCO, High ROI",
    body: "We deliver quality on time and on budget, with a relentless focus on low total cost of ownership and high return on investment. Solutions are engineered to be scalable, so the value compounds as your organisation grows.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership & Support",
    body: "Our commitment is long term. Through loyalty to customers and an enhanced service portfolio, we aim to be the preferred, ongoing technology partner our clients rely on — not a one-off supplier.",
  },
];

export const WhyChoose = () => (
  <section id="why" data-testid="why-choose-section" className="py-24 md:py-36">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-6">— Why clouDroplets</p>
          <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
            <MaskLineScroll>A partner built</MaskLineScroll>
            <MaskLineScroll delay={0.1} className="italic text-teal">for the enterprise.</MaskLineScroll>
          </h2>
        </div>
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 max-w-xs">
          What sets our Cloud &amp; Security consultancy apart.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-copper/20">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={(i % 4) * 0.06}>
            <div className="group h-full border-r border-b border-copper/20 p-6 sm:p-7 lg:p-9 transition-colors duration-500 hover:bg-cream">
              <r.icon className="text-teal mb-5 sm:mb-6" size={26} strokeWidth={1.4} />
              <h3 className="font-serif text-xl sm:text-2xl text-ink mb-3 leading-tight">{r.title}</h3>
              <p className="text-[13px] sm:text-[14px] text-ink/55 leading-relaxed">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
