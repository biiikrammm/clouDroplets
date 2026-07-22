import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Magnetic, EASE } from "./motion";

const NAV = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Partners", href: "#partners" },
  { label: "Offices", href: "#offices" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        data-testid="site-header"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-[100] transition-[background-color,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? "bg-cream/70 backdrop-blur-xl border-b border-copper/15"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 h-[70px] flex items-center justify-between">
          <a href="#top" data-testid="logo-home" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="clouDroplets" className="h-9 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-testid={`nav-${n.label.toLowerCase()}`}
                className="link-underline font-mono text-[11px] tracking-[0.22em] uppercase text-ink/70 hover:text-ink transition-colors duration-300"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#contact"
                data-testid="header-cta"
                className="inline-flex items-center rounded-full bg-ink text-cream px-6 py-2.5 font-mono text-[11px] tracking-[0.18em] uppercase hover:bg-teal transition-colors duration-400"
              >
                Get in Touch
              </a>
            </Magnetic>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-ink"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-cream md:hidden flex flex-col justify-center px-8 gap-6"
          >
            {NAV.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="font-serif text-5xl text-ink"
              >
                {n.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 font-mono text-xs tracking-[0.2em] uppercase text-copper"
            >
              Get in Touch →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
