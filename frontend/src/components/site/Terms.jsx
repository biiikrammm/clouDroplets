import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "./motion";

const SECTIONS = [
  {
    no: "01",
    title: "Acceptance of Terms",
    body: "These Terms of Service (\"Terms\") govern your use of the services provided by clouDroplets.io Pvt. Ltd. (\"clouDroplets,\" \"we,\" \"us,\" or \"our\"). By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.",
  },
  {
    no: "02",
    title: "Use of Services",
    body: "You must be at least 18 years old to use our services. By using our services, you represent that you are of legal age to form a binding contract.",
  },
  {
    no: "03",
    title: "Account Registration",
    body: "Some of our services may require account registration. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
  },
  {
    no: "04",
    title: "User Conduct",
    body: "You agree to use our services in compliance with all applicable laws and regulations. You are solely responsible for your conduct and any content — including text, images, videos, or other materials — that you upload, share, or display while using our services. You must not engage in any activity that interferes with or disrupts our services or networks.",
  },
  {
    no: "05",
    title: "Intellectual Property",
    body: "All content and materials available on our website or through our services — including text, graphics, logos, images, software, and trademarks — are the property of clouDroplets or its licensors and are protected by intellectual property laws. You may not use, modify, reproduce, distribute, or exploit any of our content without our prior written consent.",
  },
  {
    no: "06",
    title: "Disclaimer of Warranties",
    body: "Our services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied. We do not warrant that our services will be error-free, secure, or uninterrupted.",
  },
  {
    no: "07",
    title: "Limitation of Liability",
    body: "clouDroplets shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits — arising from your use of our services or any content available through our services.",
  },
  {
    no: "08",
    title: "Indemnification",
    body: "You agree to indemnify, defend, and hold harmless clouDroplets and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our services or violation of these Terms.",
  },
  {
    no: "09",
    title: "Changes to Terms",
    body: "We reserve the right to update or modify these Terms at any time. Any changes will be effective immediately upon posting the revised Terms on our website. Your continued use of our services after any such changes constitutes your acceptance of the revised Terms.",
  },
  {
    no: "10",
    title: "Contact Us",
    body: "If you have any questions or concerns about these Terms of Service, please contact us at connect-us@cloudroplets.io.",
  },
];

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* header */}
      <header className="fixed top-0 inset-x-0 z-[100] bg-cream/70 backdrop-blur-xl border-b border-copper/15">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 h-[70px] flex items-center justify-between">
          <Link to="/" data-testid="terms-logo-home" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="clouDroplets" className="h-9 w-auto" />
          </Link>
          <Link
            to="/"
            data-testid="terms-back-home"
            className="link-underline inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-ink/70 hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={15} /> Back to home
          </Link>
        </div>
      </header>

      {/* hero */}
      <section className="pt-[70px]">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 pt-20 md:pt-28 pb-16 border-b border-copper/15">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-8">— Legal</p>
          <h1 className="font-serif font-light tracking-tighter leading-[0.95] text-6xl sm:text-7xl lg:text-8xl text-ink">
            Terms &amp; <span className="italic text-teal">Conditions</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink/55 text-lg leading-relaxed">
            Please read these terms carefully before using clouDroplets.io services. Your access
            constitutes agreement to the conditions set out below.
          </p>
        </div>
      </section>

      {/* sections */}
      <section className="mx-auto max-w-[1500px] px-5 sm:px-8 pb-28">
        {SECTIONS.map((s) => (
          <Reveal key={s.no}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-b border-copper/15 py-12 md:py-16 items-start">
              <div className="lg:col-span-2">
                <span className="font-mono text-teal text-lg tracking-widest">({s.no})</span>
              </div>
              <div className="lg:col-span-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-ink">{s.title}</h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-ink/60 text-lg leading-relaxed">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* bottom bar */}
      <div className="border-t border-copper/20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] tracking-[0.15em] uppercase text-ink/40">
          <span>© {new Date().getFullYear()} clouDroplets.IO Pvt. Ltd.</span>
          <Link to="/" className="link-underline text-ink/60 hover:text-ink transition-colors">Return home</Link>
        </div>
      </div>
    </div>
  );
};
