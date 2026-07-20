const LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Partners", href: "#partners" },
  { label: "Offices", href: "#offices" },
];

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-cream pt-20 pb-10 border-t border-copper/20">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
        <div className="lg:col-span-5">
          <img src="/assets/logo.png" alt="clouDroplets" className="h-12 w-auto mb-6" />
          <p className="max-w-sm text-ink/55 leading-relaxed">
            Modern Cloud &amp; Security solutions from clouDroplets. We protect data
            integrity, optimize cloud infrastructure, and drive compliance & migration.
          </p>
        </div>
        <div className="lg:col-span-3 lg:col-start-8">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-6">Navigate</p>
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline text-ink/70 hover:text-ink transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-6">Reach</p>
          <ul className="space-y-3 text-ink/70">
            <li><a href="tel:+919911159883" className="link-underline">+91 99111 59883</a></li>
            <li><a href="mailto:connect-us@cloudroplets.io" className="link-underline break-all">connect-us@cloudroplets.io</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-copper/15 pt-8 font-mono text-[11px] tracking-[0.15em] uppercase text-ink/40">
        <span>© {new Date().getFullYear()} clouDroplets.IO Pvt. Ltd.</span>
        <span>Cloud · Security · Governance</span>
      </div>
    </div>
  </footer>
);
