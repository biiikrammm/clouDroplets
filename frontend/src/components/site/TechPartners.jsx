import { MaskLineScroll } from "./motion";

const LOGOS = [
  "aws.png", "azure.png", "oracle.png", "vmware.png", "forcepoint.png",
  "splunk.png", "akamai.png", "cyberark.png", "crowdstrike.png",
  "checkpoint.png", "cisco.png", "paloalto.jpeg", "fortinet.png",
  "zscaler.png", "f5.png", "symantec.png",
];

export const TechPartners = () => {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section id="partners" data-testid="partners-section" className="bg-sand py-24 md:py-32 border-y border-copper/15 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl text-ink">
          <MaskLineScroll>Technology</MaskLineScroll>
          <MaskLineScroll delay={0.1} className="italic text-teal">alliances.</MaskLineScroll>
        </h2>
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 max-w-sm">
          Global industry leaders. Long-term commitment. An enhanced service portfolio.
        </p>
      </div>

      <div className="marquee-mask">
        <div className="flex w-max animate-marquee-fast items-center">
          {loop.map((l, i) => (
            <div
              key={i}
              className="mx-6 flex h-24 w-40 shrink-0 items-center justify-center grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-500"
            >
              <img src={`/assets/${l}`} alt="partner" className="max-h-14 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
