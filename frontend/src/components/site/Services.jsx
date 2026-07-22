import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { MaskLineScroll, EASE } from "./motion";

const SERVICES = [
  {
    no: "01",
    title: "Cloud Computing",
    img: "/assets/ser1.jpg",
    overview:
      "We help enterprises adopt cloud computing the right way — on-demand access to compute, storage and platform resources across SaaS, PaaS and IaaS models. From advisory through to fully managed operations, our engineers design landing zones and workloads on AWS, Microsoft Azure, Google Cloud Platform and Oracle Cloud Infrastructure so you scale without over-investing in on-premises infrastructure.",
    challenge:
      "Fragmented environments, unpredictable spend and migrations that stall are the challenges most organisations face when moving to cloud.",
    items: [
      "Cloud Advisory & Strategy",
      "Cloud Migration",
      "Cloud Managed Services",
      "Multi-Cloud & Hybrid Cloud Management",
      "System Operations & Solution Architecture",
      "Cloud Cost Optimization",
      "HA & Disaster Recovery",
    ],
    tech: ["AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud (OCI)", "VMware"],
    outcome:
      "Lower IT expenditure, stronger performance, and infrastructure that grows in step with the business.",
  },
  {
    no: "02",
    title: "Cyber Security",
    img: "/assets/sernew3.jpg",
    overview:
      "Our multi-vendor cloud security practice designs, implements and operates the controls that protect data, applications and infrastructure from cyberattack. Cloud Security Architects establish encryption, intrusion detection and access controls purpose-built for cloud environments, while our operations teams provide continuous monitoring, threat detection and incident response backed by leading platform-native and third-party tooling.",
    challenge:
      "Expanding attack surfaces, identity sprawl and always-on threats demand defence that is layered, monitored and continuously improved.",
    items: [
      "App Security (WAF / DDoS)",
      "Content Delivery Network (CDN)",
      "Identity & Access Management — PAM, SSO, MFA",
      "Encryption — SSL, Data-in-Rest, DLP & Classifier",
      "SIEM / XDR — Security Incident & Event Management",
      "Threat Analytics & 24/7 Monitoring",
    ],
    tech: ["Palo Alto Networks", "Check Point", "Fortinet", "CrowdStrike", "Splunk", "CyberArk", "Akamai"],
    outcome:
      "Confidentiality, integrity and availability of cloud-hosted resources — with proactive defence and up-to-date threat intelligence.",
  },
  {
    no: "03",
    title: "InfoSec Governance",
    img: "/assets/sernew7.jpg",
    overview:
      "Governance, risk and control services align your security posture with recognised regulatory standards. We run posture assessments and vulnerability testing (VA/PT), close gaps across network, application, database, administrative and physical controls, and prepare organisations for frameworks such as GDPR, HIPAA and PCI DSS. Regular audits and continuous monitoring reduce the risk of breaches and the legal exposure that follows.",
    challenge:
      "Meeting evolving compliance obligations while proving control effectiveness to auditors, customers and regulators.",
    items: [
      "Security Posture Assessment",
      "Application / Web Security",
      "Network Security",
      "Cloud Security Readiness / Gap Analysis",
      "Vulnerability Assessment — VA / PT",
      "Risk, Controls & Compliance Audit",
    ],
    tech: ["GDPR", "HIPAA", "PCI DSS", "SOC 2", "ISO 27001"],
    outcome:
      "Demonstrable compliance, reduced risk exposure, and increased trust from clients and stakeholders.",
  },
];

export const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" data-testid="services-section" className="bg-sand py-24 md:py-36 border-y border-copper/15">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-6">
              — Exclusive Services
            </p>
            <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
              <MaskLineScroll>Securing your cloud,</MaskLineScroll>
              <MaskLineScroll delay={0.1} className="italic text-teal">empowering your future.</MaskLineScroll>
            </h2>
          </div>
          <div className="lg:col-span-4 text-ink/55 text-base leading-relaxed">
            Complete, multi-vendor Cloud &amp; Security solutions — customized to your
            requirements and built on deep engineering expertise.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* accordion */}
          <div className="lg:col-span-7">
            {SERVICES.map((s, i) => {
              const open = active === i;
              return (
                <div key={s.no} className="border-t border-copper/20 last:border-b">
                  <button
                    data-testid={`service-toggle-${i}`}
                    onClick={() => setActive(i)}
                    className="w-full flex items-center justify-between py-7 text-left group"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-sm text-teal">{s.no}</span>
                      <span
                        className={`font-serif text-3xl sm:text-5xl transition-colors duration-400 ${
                          open ? "text-copper" : "text-ink group-hover:text-ink/60"
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>
                    <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.4 }}>
                      <Plus className={open ? "text-copper" : "text-ink/40"} size={26} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-12">
                          <p className="text-ink/70 text-[15px] leading-relaxed max-w-xl mb-5">
                            {s.overview}
                          </p>
                          <p className="text-ink/55 text-[14px] leading-relaxed max-w-xl mb-7 border-l border-copper/40 pl-4">
                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-copper block mb-1">The challenge</span>
                            {s.challenge}
                          </p>

                          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-3">Capabilities</p>
                          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-7">
                            {s.items.map((it) => (
                              <li key={it} className="flex items-start gap-3 text-ink/65">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                                <span className="text-[15px] leading-snug">{it}</span>
                              </li>
                            ))}
                          </ul>

                          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-3">Technologies</p>
                          <div className="flex flex-wrap gap-2 mb-7">
                            {s.tech.map((t) => (
                              <span key={t} className="rounded-full border border-copper/25 px-3 py-1 font-mono text-[11px] tracking-wide text-ink/60">
                                {t}
                              </span>
                            ))}
                          </div>

                          <p className="text-ink/70 text-[15px] leading-relaxed max-w-xl">
                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-copper block mb-1">Business outcome</span>
                            {s.outcome}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* sticky image */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 relative aspect-[3/4] overflow-hidden border border-copper/20 spotlight">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={SERVICES[active].img}
                  alt={SERVICES[active].title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="img-editorial absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-cream mix-blend-difference">
                {SERVICES[active].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
