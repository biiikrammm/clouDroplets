import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MaskLine, Magnetic, EASE } from "./motion";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const rotDisk = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] pt-[70px] overflow-hidden"
    >
      {/* floating parallax disk / 3D moment */}
      <motion.div
        style={{ rotate: rotDisk }}
        className="pointer-events-none absolute -right-40 top-24 h-[520px] w-[520px] rounded-full border border-teal/30"
      >
        <div className="absolute inset-8 rounded-full border border-copper/20" />
        <div className="absolute inset-20 rounded-full border border-teal/20" />
        <div className="absolute inset-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper" />
      </motion.div>

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-16 lg:pt-10">
        {/* left: kinetic type */}
        <motion.div style={{ y: yText }} className="lg:col-span-7 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-copper mb-8 flex items-center gap-3"
          >
            <span className="inline-block h-px w-10 bg-copper" />
            Cloud &amp; Security Solutions — India
          </motion.p>

          <h1 className="font-serif font-light tracking-tighter leading-[0.92] text-ink text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
            <MaskLine delay={0.25}>Protecting</MaskLine>
            <MaskLine delay={0.38} className="italic text-teal">your cloud,</MaskLine>
            <MaskLine delay={0.51}>investing in</MaskLine>
            <MaskLine delay={0.64} className="text-copper">your future.</MaskLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: EASE }}
            className="mt-9 max-w-lg text-base sm:text-lg text-ink/60 leading-relaxed"
          >
            clouDroplets is a Cloud &amp; Cyber Security consultancy that helps enterprises
            migrate, secure and optimise their infrastructure across AWS, Azure, Google Cloud
            and Oracle Cloud. From advisory and architecture to 24/7 managed operations, we
            safeguard your data and accelerate technological advancement — with security
            engineered at the core.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.8 }}
            className="mt-10 flex items-center gap-6"
          >
            <Magnetic>
              <a
                href="#contact"
                data-testid="hero-cta-explore"
                className="inline-flex items-center gap-3 rounded-full bg-ink text-cream px-8 py-4 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-teal transition-colors duration-400"
              >
                Talk to a Cloud Expert
              </a>
            </Magnetic>
            <a
              href="#services"
              data-testid="hero-cta-contact"
              className="link-underline font-mono text-[11px] tracking-[0.2em] uppercase text-ink/70"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        {/* right: real product photography, clipped frame + spotlight */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.3, ease: EASE, delay: 0.7 }}
            className="spotlight relative h-[420px] sm:h-[520px] lg:h-[640px] overflow-hidden border border-copper/20"
          >
            <motion.img
              style={{ y: yImg, scale: scaleImg }}
              src="/assets/cloudsecurity1.jpg"
              alt="Cloud security operations"
              className="img-editorial h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-cream mix-blend-difference">
              <span>Fig. 01 — Secure Cloud</span>
              <span>28.5°N</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
};
