import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const STATS = [
  { value: 250, suffix: "+", label: "Projects Complete" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 16, suffix: "", label: "Business Partners" },
  { value: 40, suffix: "+", label: "IT Consultants" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-6xl sm:text-7xl lg:text-8xl text-ink tabular-nums">
      {n}
      <span className="text-teal">{suffix}</span>
    </span>
  );
};

export const Stats = () => (
  <section data-testid="stats-section" className="bg-ink py-24 md:py-32">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="mb-16 max-w-2xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-teal mb-6">
          — Solutions for security that empower you
        </p>
        <p className="font-serif text-2xl sm:text-3xl text-cream/90 leading-snug">
          Our specialty is complete security solutions, customized to meet your specific
          requirements — protecting your digital assets and your business through innovation
          and expertise.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="border-t border-cream/20 pt-6"
          >
            <div className="text-cream">
              <CounterWrap value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-cream/50">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// wrapper to keep counter text cream on dark bg
const CounterWrap = ({ value, suffix }) => (
  <div className="[&>span]:!text-cream">
    <Counter value={value} suffix={suffix} />
  </div>
);
