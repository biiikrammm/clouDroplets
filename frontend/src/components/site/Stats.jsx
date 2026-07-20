import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 250, suffix: "+", label: "Projects Complete" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 16, suffix: "", label: "Business Partners" },
  { value: 40, suffix: "+", label: "IT Consultants" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const rafRef = useRef(0);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      setN(value);
    };
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
      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-teal mb-16">
        — Solutions for security that empower you
      </p>
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
