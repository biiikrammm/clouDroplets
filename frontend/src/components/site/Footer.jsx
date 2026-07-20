import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { MaskLineScroll, Magnetic } from "./motion";

const COLUMNS = [
  {
    title: "Navigate",
    links: [
      { label: "Manifesto", href: "#manifesto" },
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
      { label: "Partners", href: "#partners" },
      { label: "Offices", href: "#offices" },
      { label: "Terms & Conditions", to: "/terms" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Cloud Computing", href: "#services" },
      { label: "Cyber Security", href: "#services" },
      { label: "InfoSec Governance", href: "#services" },
      { label: "Managed NOC & SOC", href: "#solutions" },
    ],
  },
];

const OFFICES = [
  { city: "Noida", meta: "28.60°N — HQ", line: "Tech Zone-4, Greater Noida West, UP 201318" },
  { city: "Bangalore", meta: "12.96°N — South", line: "Richmond Rd, Langford Gardens, Bengaluru 560025" },
];


export const Footer = () => (
  <footer data-testid="site-footer" className="relative bg-cream overflow-hidden border-t border-copper/20">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 pt-24 md:pt-32">
      {/* Top: statement + CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20 md:pb-28 items-end">
        <div className="lg:col-span-8">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-8">
            — Start the conversation
          </p>
          <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
            <MaskLineScroll>Secure by design,</MaskLineScroll>
            <MaskLineScroll delay={0.1} className="italic text-teal">trusted for growth.</MaskLineScroll>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <Magnetic className="inline-block">
            <a
              href="#contact"
              data-testid="footer-cta"
              className="group inline-flex items-center gap-4 rounded-full bg-ink text-cream pl-8 pr-3 py-3 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-teal transition-colors duration-400"
            >
              Free Consultation
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-400 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Middle: identity + columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-12 pb-20 border-t border-copper/15 pt-16">
        <div className="col-span-2 lg:col-span-4">
          <img src="/assets/logo.png" alt="clouDroplets" className="h-11 w-auto mb-6" />
          <p className="max-w-xs text-ink/55 leading-relaxed text-[15px]">
            Modern Cloud &amp; Security solutions. We protect data integrity, optimize cloud
            infrastructure, and drive compliance &amp; migration.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-6">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link
                      to={l.to}
                      data-testid="footer-nav-terms"
                      className="link-underline inline-flex items-center gap-1.5 font-medium text-copper hover:text-copper-dark transition-colors duration-300 text-[15px]"
                    >
                      {l.label} <ArrowUpRight size={14} />
                    </Link>
                  ) : (
                    <a href={l.href} className="link-underline text-ink/70 hover:text-ink transition-colors duration-300 text-[15px]">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 lg:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-6">Offices</p>
          <div className="space-y-6">
            {OFFICES.map((o) => (
              <div key={o.city} className="border-l border-teal/40 pl-4">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-serif text-2xl text-ink">{o.city}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink/40">{o.meta}</span>
                </div>
                <p className="mt-1 text-[13px] text-ink/50 leading-snug">{o.line}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 font-mono text-[13px] text-ink/70">
            <a href="tel:+919911159883" className="link-underline block">+91 99111 59883</a>
            <a href="mailto:connect-us@cloudroplets.io" className="link-underline block break-all">connect-us@cloudroplets.io</a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-copper/15 py-8 font-mono text-[11px] tracking-[0.15em] uppercase text-ink/40">
        <span>© {new Date().getFullYear()} clouDroplets.IO Pvt. Ltd. — All rights reserved</span>
        <div className="flex items-center gap-6">
          <Link to="/terms" data-testid="footer-terms-link" className="link-underline text-ink/60 hover:text-ink transition-colors duration-300">
            Terms &amp; Conditions
          </Link>
          <a href="#top" data-testid="footer-back-to-top" className="group flex items-center gap-2 text-ink/60 hover:text-ink transition-colors duration-300">
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-copper/25 group-hover:-translate-y-1 transition-transform duration-300">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
