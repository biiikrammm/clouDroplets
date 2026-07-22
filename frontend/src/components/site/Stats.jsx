import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 250, suffix: "+", label: "Projects Complete" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 16, suffix: "", label: "Business Partners" },
  { value: 40, suffix: "+", label: "IT Consultants" },
];

const Counter = ({ value, suffix, start }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    let cancelled = false;
    const startTime = performance.now();
    const dur = 1600;
    const step = (now) => {
      if (cancelled) return;
      const p = Math.min((now - startTime) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setN(value);
      }
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [start, value]);

  return (
    <span className="font-serif text-6xl sm:text-7xl lg:text-8xl !text-cream tabular-nums">
      {n}
      <span className="text-teal">{suffix}</span>
    </span>
  );
};

export const Stats = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} data-testid="stats-section" className="bg-ink py-14 md:py-20">
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
              <Counter value={s.value} suffix={s.suffix} start={inView} />
              <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-cream/50">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
