import { motion } from "framer-motion";

export const Marquee = () => {
  const words = [
    "Cloud Advisory",
    "Zero Trust",
    "Cyber Resilience",
    "Data Sovereignty",
    "SIEM / XDR",
    "Encryption",
    "Migration",
    "Governance",
  ];
  const loop = [...words, ...words];
  return (
    <section
      data-testid="marquee-section"
      className="border-y border-copper/15 bg-sand py-8 overflow-hidden marquee-mask"
    >
      <div className="flex w-max animate-marquee-slow whitespace-nowrap">
        {loop.map((w, i) => (
          <div key={i} className="flex items-center">
            <span className="font-serif italic text-4xl sm:text-6xl lg:text-7xl text-ink/85 px-8">
              {w}
            </span>
            <span className="h-3 w-3 rounded-full bg-copper/70" />
          </div>
        ))}
      </div>
    </section>
  );
};
