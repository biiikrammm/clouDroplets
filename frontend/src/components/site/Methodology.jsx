import { Reveal, MaskLineScroll } from "./motion";

const STAGES = [
  {
    no: "01",
    title: "Discovery",
    body: "We begin by researching deeply into what you want to build — defining your audience, business drivers and success criteria so every subsequent decision is grounded in real requirements.",
  },
  {
    no: "02",
    title: "Assessment",
    body: "A structured review of your current estate: security posture, cloud readiness and gap analysis across network, application, database, administrative and physical controls.",
  },
  {
    no: "03",
    title: "Architecture Design",
    body: "Our architects design secure, scalable cloud environments — landing zones, identity, encryption and network segmentation engineered for resilience and interoperability.",
  },
  {
    no: "04",
    title: "Implementation",
    body: "We put the design into practice, deploying platform-native and best-of-breed security tooling with automated monitoring and alerting for timely intervention.",
  },
  {
    no: "05",
    title: "Migration",
    body: "Workloads and data are moved to cloud with minimal disruption, preserving integrity and availability while modernising along the way.",
  },
  {
    no: "06",
    title: "Optimization",
    body: "Continuous cost optimization and performance tuning keep total cost of ownership low and return on investment high as usage evolves.",
  },
  {
    no: "07",
    title: "Managed Support",
    body: "Ongoing operations, threat detection and incident response through managed NOC & SOC services keep your infrastructure secure and resilient around the clock.",
  },
];

export const Methodology = () => (
  <section id="methodology" data-testid="methodology-section" className="bg-ink py-24 md:py-36">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="mb-16 md:mb-24 max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-teal mb-6">— How we deliver</p>
        <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-cream">
          <MaskLineScroll>Our enterprise</MaskLineScroll>
          <MaskLineScroll delay={0.1} className="italic text-teal">delivery methodology.</MaskLineScroll>
        </h2>
        <p className="mt-8 text-cream/50 text-lg leading-relaxed">
          A proven, repeatable path from first conversation to long-term operations — designed to
          deliver quality on time and on budget.
        </p>
      </div>

      <div className="border-t border-cream/15">
        {STAGES.map((s, i) => (
          <Reveal key={s.no} delay={(i % 2) * 0.05}>
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 border-b border-cream/15 py-8 md:py-10 items-baseline transition-colors duration-500 hover:bg-cream/[0.03]">
              <div className="lg:col-span-2 font-mono text-teal text-sm tracking-widest">{s.no}</div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-3xl md:text-4xl text-cream">{s.title}</h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-cream/55 text-[15px] leading-relaxed">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
