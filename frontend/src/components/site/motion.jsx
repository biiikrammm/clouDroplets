import { useRef, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

// Masked line-by-line reveal for headings
export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className="line-mask">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

// Scroll-triggered mask reveal (for headings below the fold)
export const MaskLineScroll = ({ children, delay = 0, className = "" }) => (
  <span className="line-mask">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      whileInView={{ y: "0%" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

// Generic fade-up reveal
export const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div" }) => {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </M>
  );
};

// Magnetic wrapper for CTAs
export const Magnetic = ({ children, className = "", strength = 0.4 }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
    });
  };
  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 16, mass: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export { EASE };
