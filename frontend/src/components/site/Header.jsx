import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Menu, X, ChevronDown, ArrowUpRight, Building2, Compass, Sparkles, Route, Phone,
  ShieldCheck, Wrench, Activity, Network, Radar, Cpu, Cloud, Shield, FileCheck,
  Database, Server, Handshake, HeartPulse, GraduationCap, ShoppingBag, Factory,
  Landmark, Banknote, Newspaper, HelpCircle, BookOpen, FileText,
} from "lucide-react";
import { Magnetic, EASE } from "./motion";

const MENUS = [
  {
    id: "corporate",
    label: "Corporate",
    primary: "#manifesto",
    tagline: "The people, purpose and process behind clouDroplets.",
    items: [
      { icon: Building2, title: "Company Overview", desc: "Our vision, mission and guiding principle.", href: "#manifesto" },
      { icon: Compass, title: "Mission & Vision", desc: "The purpose that drives everything we do.", href: "#manifesto" },
      { icon: Sparkles, title: "Why clouDroplets", desc: "What sets our Cloud & Security consultancy apart.", href: "#why" },
      { icon: Route, title: "Delivery Methodology", desc: "From discovery to managed support, end to end.", href: "#methodology" },
      { icon: Phone, title: "Contact", desc: "Talk to our solutions team.", href: "#contact" },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    primary: "#solutions",
    tagline: "Multi-vendor, end-to-end delivery — architecture to 24/7 operations.",
    items: [
      { icon: ShieldCheck, title: "Cloud Security Architecture", desc: "Safe cloud environments with layered defences.", href: "#solutions" },
      { icon: Wrench, title: "Security Tools Implementation", desc: "Continuous, verifiable data protection.", href: "#solutions" },
      { icon: Activity, title: "Operations / Support", desc: "Monitoring, threat detection and incident response.", href: "#solutions" },
      { icon: Network, title: "Network Security", desc: "Defence-in-depth network architecture.", href: "#solutions" },
      { icon: Radar, title: "Managed NOC & SOC", desc: "24/7 cyber vigilance and rapid response.", href: "#solutions" },
      { icon: Cpu, title: "Secure OT / IoT", desc: "Edge, MFA and strong encryption for connected assets.", href: "#solutions" },
    ],
  },
  {
    id: "services",
    label: "Services",
    primary: "#services",
    tagline: "Complete Cloud & Security services, customized to you.",
    items: [
      { icon: Cloud, title: "Cloud Computing", desc: "On-demand compute, storage & platform across AWS, Azure, GCP & Oracle.", href: "#services" },
      { icon: Shield, title: "Cyber Security", desc: "Multi-vendor defence for data, apps and infrastructure.", href: "#services" },
      { icon: FileCheck, title: "InfoSec Governance", desc: "Risk, controls and compliance — GDPR, HIPAA, PCI DSS.", href: "#services" },
    ],
  },
  {
    id: "technologies",
    label: "Technologies",
    primary: "#partners",
    tagline: "Built on the platforms enterprises trust.",
    items: [
      { icon: Cloud, title: "AWS", desc: "Landing zones and workloads on Amazon Web Services.", href: "#partners" },
      { icon: Cloud, title: "Microsoft Azure", desc: "Enterprise cloud engineered on Azure.", href: "#partners" },
      { icon: Cloud, title: "Google Cloud", desc: "Scalable, resilient workloads on GCP.", href: "#partners" },
      { icon: Database, title: "Oracle Cloud", desc: "Mission-critical workloads on OCI.", href: "#partners" },
      { icon: Server, title: "VMware", desc: "Virtualisation and hybrid infrastructure.", href: "#partners" },
      { icon: Handshake, title: "Alliances & Certifications", desc: "Long-term partnerships with global industry leaders.", href: "#partners" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    primary: "#industries",
    tagline: "Cloud & security, tuned to your sector.",
    items: [
      { icon: HeartPulse, title: "Healthcare", desc: "Protecting patient data and privacy at scale.", href: "#industries" },
      { icon: GraduationCap, title: "Education", desc: "Reliable, secure digital learning platforms.", href: "#industries" },
      { icon: ShoppingBag, title: "Retail", desc: "Elastic scale and payment-grade security.", href: "#industries" },
      { icon: Factory, title: "Manufacturing", desc: "Securing connected OT/IoT estates.", href: "#industries" },
      { icon: Landmark, title: "Government", desc: "Compliance and sovereignty for sensitive workloads.", href: "#industries" },
      { icon: Banknote, title: "Financial Services", desc: "Zero-trust defence for high-value targets.", href: "#industries" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    primary: "#insights",
    tagline: "Guidance and answers for your cloud journey.",
    items: [
      { icon: Newspaper, title: "Insights", desc: "Knowledge and ideas from our practice.", href: "#insights" },
      { icon: HelpCircle, title: "FAQ", desc: "Answers to the questions we hear most.", href: "#faq" },
      { icon: BookOpen, title: "Case Studies", desc: "Coming soon.", href: "#insights" },
      { icon: FileText, title: "Terms & Conditions", desc: "Our terms of service.", to: "/terms" },
    ],
  },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile
  const [active, setActive] = useState(null); // desktop mega
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setActive(null);
    };
    window.addEventListener("scroll", onScroll);
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Hide the floating WhatsApp button while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const openMenu = (id) => {
    clearTimeout(closeTimer.current);
    setActive(id);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 120);
  };

  const goTo = (href) => {
    setActive(null);
    setOpen(false);
    if (href && href.startsWith("#") && window.__lenis) {
      const el = document.querySelector(href);
      if (el) window.__lenis.scrollTo(el, { offset: -70 });
    }
  };

  const activeMenu = MENUS.find((m) => m.id === active);

  return (
    <>
      <motion.header
        data-testid="site-header"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        onMouseLeave={scheduleClose}
        className={`fixed top-0 inset-x-0 z-[100] transition-[background-color,backdrop-filter,border-color] duration-500 ${
          scrolled || active
            ? "bg-cream/80 backdrop-blur-xl border-b border-copper/15"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 h-[70px] flex items-center justify-between">
          <a href="#top" data-testid="logo-home" onClick={() => goTo("#top")} className="flex items-center gap-3 shrink-0">
            <img src="/assets/logo.png" alt="clouDroplets" className="h-9 w-auto" />
          </a>

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" onMouseEnter={() => clearTimeout(closeTimer.current)}>
            {MENUS.map((m) => (
              <button
                key={m.id}
                data-testid={`nav-${m.id}`}
                onMouseEnter={() => openMenu(m.id)}
                onClick={() => goTo(m.primary)}
                className={`link-underline flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                  active === m.id ? "text-copper" : "text-ink/70 hover:text-ink"
                }`}
              >
                {m.label}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${active === m.id ? "rotate-180 text-copper" : ""}`}
                />
              </button>
            ))}
            <a
              href="#contact"
              data-testid="nav-contact"
              onClick={() => goTo("#contact")}
              onMouseEnter={() => openMenu(null)}
              className="link-underline font-mono text-[11px] tracking-[0.18em] uppercase text-ink/70 hover:text-ink transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:block shrink-0">
            <Magnetic>
              <a
                href="#contact"
                data-testid="header-cta"
                onClick={() => goTo("#contact")}
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase hover:bg-teal transition-colors duration-400"
              >
                Get in Touch
              </a>
            </Magnetic>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-ink"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* desktop mega panel */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key={activeMenu.id}
              data-testid={`mega-${activeMenu.id}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
              onMouseEnter={() => clearTimeout(closeTimer.current)}
              className="hidden lg:block absolute inset-x-0 top-[70px] bg-cream/95 backdrop-blur-xl border-b border-copper/15 shadow-[0_24px_60px_-24px_rgba(18,18,18,0.25)]"
            >
              <div className="mx-auto max-w-[1500px] px-5 sm:px-8 py-10 grid grid-cols-12 gap-10">
                <div className="col-span-3 border-r border-copper/15 pr-8">
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-4">— {activeMenu.label}</p>
                  <p className="font-serif text-2xl leading-tight text-ink mb-6">{activeMenu.tagline}</p>
                  <a
                    href={activeMenu.primary}
                    onClick={() => goTo(activeMenu.primary)}
                    className="link-underline inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-teal"
                  >
                    View section <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-2">
                  {activeMenu.items.map((it) => {
                    const inner = (
                      <>
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-copper/20 text-teal group-hover:bg-teal group-hover:text-cream transition-colors duration-300">
                          <it.icon size={17} strokeWidth={1.5} />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-serif text-lg text-ink group-hover:text-copper transition-colors duration-300 leading-tight">
                            {it.title}
                          </span>
                          <span className="block text-[12.5px] text-ink/55 leading-snug mt-0.5">{it.desc}</span>
                        </span>
                      </>
                    );
                    const cls = "group flex items-start gap-4 rounded-lg p-3 hover:bg-sand/70 transition-colors duration-300";
                    return it.to ? (
                      <Link key={it.title} to={it.to} data-testid={`mega-item-${activeMenu.id}`} onClick={() => goTo(null)} className={cls}>
                        {inner}
                      </Link>
                    ) : (
                      <a key={it.title} href={it.href} data-testid={`mega-item-${activeMenu.id}`} onClick={() => goTo(it.href)} className={cls}>
                        {inner}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-cream lg:hidden overflow-y-auto pt-[70px]"
          >
            <div className="px-6 py-6">
              {MENUS.map((m, i) => {
                const isOpen = mobileExpanded === m.id;
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="border-b border-copper/15"
                  >
                    <button
                      data-testid={`mobile-nav-${m.id}`}
                      onClick={() => setMobileExpanded(isOpen ? null : m.id)}
                      className="w-full flex items-center justify-between py-4"
                    >
                      <span className="font-serif text-3xl text-ink">{m.label}</span>
                      <ChevronDown size={22} className={`text-copper transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden pb-3"
                        >
                          {m.items.map((it) =>
                            it.to ? (
                              <li key={it.title}>
                                <Link to={it.to} onClick={() => goTo(null)} className="flex items-center gap-3 py-2.5 text-ink/70">
                                  <it.icon size={16} className="text-teal shrink-0" />
                                  <span className="text-[15px]">{it.title}</span>
                                </Link>
                              </li>
                            ) : (
                              <li key={it.title}>
                                <a href={it.href} onClick={() => goTo(it.href)} className="flex items-center gap-3 py-2.5 text-ink/70">
                                  <it.icon size={16} className="text-teal shrink-0" />
                                  <span className="text-[15px]">{it.title}</span>
                                </a>
                              </li>
                            )
                          )}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              <a
                href="#contact"
                onClick={() => goTo("#contact")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] uppercase"
              >
                Get in Touch <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
