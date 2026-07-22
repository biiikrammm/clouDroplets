import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MaskLineScroll } from "./motion";

const FAQS = [
  {
    q: "Which cloud platforms do you support?",
    a: "We work across the major hyperscalers — Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform and Oracle Cloud Infrastructure (OCI) — as well as VMware-based and hybrid environments. Because we are vendor-neutral, we recommend the platform mix that best fits your workloads and budget.",
  },
  {
    q: "Do you provide managed services?",
    a: "Yes. Beyond design and implementation we offer cloud managed services and managed security operations, including monitoring, threat detection and incident response through managed NOC (Network Operations Center) and SOC (Security Operations Center) capabilities.",
  },
  {
    q: "Can you migrate our existing infrastructure to the cloud?",
    a: "We handle end-to-end cloud migration — assessing your current estate, designing the target architecture, and moving workloads and data with minimal disruption while preserving integrity and availability.",
  },
  {
    q: "How long does a migration typically take?",
    a: "Timelines depend on the size and complexity of your environment. We start every engagement with discovery and assessment so we can give you a realistic, phased plan rather than a one-size-fits-all estimate. [Typical timelines to be confirmed per engagement.]",
  },
  {
    q: "What does your security-first approach involve?",
    a: "Security is engineered into the architecture from the outset — encryption (SSL, data-at-rest), identity and access management (PAM, SSO, MFA), application security (WAF/DDoS), and SIEM/XDR-based threat analytics, all continuously monitored.",
  },
  {
    q: "How do you help with compliance and audits?",
    a: "Our governance, risk and control services align your posture with standards such as GDPR, HIPAA and PCI DSS, and prepare you for certifications like SOC 2 and ISO 27001. We run posture assessments, vulnerability testing (VA/PT) and regular audits to evidence control effectiveness.",
  },
  {
    q: "Do you support multi-cloud and hybrid environments?",
    a: "Yes. We design and manage multi-cloud and hybrid cloud estates, placing workloads where they perform best while maintaining consistent governance, security and cost control across all of them.",
  },
  {
    q: "How do you manage cloud costs?",
    a: "Cloud cost optimization is a core part of our managed services. We continuously tune resources and architecture to keep total cost of ownership low and return on investment high as your usage evolves.",
  },
  {
    q: "Can you secure OT/IoT and edge environments?",
    a: "We deliver secure OT/IoT solutions using multi-factor authentication, cloud storage with analytics, edge computing for data privacy, and strong encryption (TLS, AES), backed by SIEM threat analytics and monitoring.",
  },
  {
    q: "How do we get started?",
    a: "The first step is a conversation. Reach out to our solutions team and we will arrange a discovery session and, where useful, a cloud or security assessment to map out the right path for your organisation.",
  },
];

export const FAQ = () => (
  <section id="faq" data-testid="faq-section" className="bg-sand py-14 md:py-20 border-y border-copper/15">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-6">— FAQ</p>
        <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl text-ink">
          <MaskLineScroll>Questions,</MaskLineScroll>
          <MaskLineScroll delay={0.1} className="italic text-teal">answered.</MaskLineScroll>
        </h2>
        <p className="mt-8 text-ink/55 leading-relaxed max-w-xs">
          The essentials on how we work. Can&apos;t find what you need? Talk to our solutions team.
        </p>
      </div>

      <div className="lg:col-span-8">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="border-b border-copper/20"
            >
              <AccordionTrigger className="py-6 hover:no-underline font-serif text-xl sm:text-2xl text-ink [&[data-state=open]]:text-copper text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/60 text-[15px] leading-relaxed max-w-2xl pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
