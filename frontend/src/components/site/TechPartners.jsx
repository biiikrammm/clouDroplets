import { MaskLineScroll, Reveal } from "./motion";

const LOGOS = [
  "aws.png", "azure.png", "oracle.png", "vmware.png", "forcepoint.png",
  "splunk.png", "akamai.png", "cyberark.png", "crowdstrike.png",
  "checkpoint.png", "cisco.png", "paloalto.jpeg", "fortinet.png",
  "zscaler.png", "f5.png", "symantec.png",
];

const CATEGORIES = [
  {
    title: "Hyperscale Cloud",
    vendors: "AWS · Azure · Oracle Cloud · VMware",
    body: "The platforms we design, build and migrate workloads on. We use them to give clients elastic scale, resilience and pay-as-you-grow economics without heavy on-premises investment.",
  },
  {
    title: "Network & Perimeter Security",
    vendors: "Cisco · Palo Alto · Fortinet · Check Point · F5",
    body: "Firewalls, segmentation and secure connectivity. These alliances let us architect layered, defence-in-depth networks that keep resources and data protected from attack.",
  },
  {
    title: "Threat Detection & Analytics",
    vendors: "Splunk · CrowdStrike · Forcepoint · Symantec",
    body: "SIEM/XDR, endpoint protection and data-loss prevention. We deploy these to deliver continuous monitoring, faster detection and confident incident response for our clients.",
  },
  {
    title: "Identity & Secure Edge",
    vendors: "CyberArk · Akamai · Zscaler",
    body: "Privileged access, CDN/WAF and zero-trust edge. These partners help us enforce least-privilege access and protect applications and users wherever they connect from.",
  },
];

export const TechPartners = () => {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section id="partners" data-testid="partners-section" className="bg-sand py-14 md:py-20 border-y border-copper/15 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl text-ink">
          <MaskLineScroll>Technology</MaskLineScroll>
          <MaskLineScroll delay={0.1} className="italic text-teal">alliances.</MaskLineScroll>
        </h2>
        <p className="text-ink/55 text-base leading-relaxed max-w-md">
          We partner with global industry leaders through long-term commitments — giving clients
          varied product availability, smooth integration and an enhanced service portfolio.
        </p>
      </div>

      <div className="marquee-mask mb-8 md:mb-12">
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

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) * 0.06}>
            <div className="h-full border-t-2 border-teal/60 bg-cream/60 p-7">
              <h3 className="font-serif text-2xl text-ink mb-2 leading-tight">{c.title}</h3>
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-copper mb-4">{c.vendors}</p>
              <p className="text-[14px] text-ink/60 leading-relaxed">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
