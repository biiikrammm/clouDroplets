import { Reveal, MaskLineScroll } from "./motion";

const TRACKS = [
  { id: "T-01", title: "Cloud Security Architect / Design", desc: "Safe cloud environments built with strong, layered defenses to guard your data and workloads." },
  { id: "T-02", title: "Security Tools Implementation", desc: "Putting cloud security tooling into practice to ensure continuous, verifiable data protection." },
  { id: "T-03", title: "Operation / Support", desc: "Monitoring, threat detection and incident response guaranteed across your cloud estate." },
  { id: "T-04", title: "Network Security Integration", desc: "Robust network security architecture — design & implementation defending resources end to end." },
  { id: "T-05", title: "Managed NOC & SOC", desc: "Network & Security Operations Centers for round-the-clock cyber vigilance and rapid response." },
  { id: "T-06", title: "Secure OT / IoT Solutions", desc: "Edge computing for data privacy, MFA, and strong encryption (TLS, AES) across connected assets." },
];

export const SolutionTracks = () => (
  <section id="solutions" data-testid="solutions-section" className="py-14 md:py-20">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
          <MaskLineScroll>Solution</MaskLineScroll>
          <MaskLineScroll delay={0.1} className="italic text-copper">tracks.</MaskLineScroll>
        </h2>
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 max-w-xs">
          Multi-vendor, end-to-end delivery — from architecture to 24/7 operations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-copper/20">
        {TRACKS.map((t, i) => (
          <Reveal key={t.id} delay={(i % 3) * 0.08}>
            <div className="group relative border-r border-b border-copper/20 p-8 md:p-10 h-full min-h-[240px] flex flex-col justify-between overflow-hidden transition-colors duration-500 hover:bg-ink">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-teal">{t.id}</span>
                <span className="font-mono text-xs text-ink/30 group-hover:text-cream/40 transition-colors duration-500">
                  /0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-ink group-hover:text-cream transition-colors duration-500 mb-3 leading-tight">
                  {t.title}
                </h3>
                <p className="text-sm text-ink/55 group-hover:text-cream/60 transition-colors duration-500 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
