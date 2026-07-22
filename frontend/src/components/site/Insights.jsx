import { ArrowUpRight } from "lucide-react";
import { Reveal, MaskLineScroll } from "./motion";

// Article titles reused from the previous clouDroplets website.
const ARTICLES = [
  {
    date: "29 Mar 2024",
    category: "Security",
    title: "A Whole Handbook of Security Best Practices",
    excerpt: "A practical guide to the controls, habits and architecture decisions that keep cloud environments defensible against evolving threats.",
    img: "/assets/sernew11.jpg",
  },
  {
    date: "13 Feb 2024",
    category: "Cloud",
    title: "Recognizing Cloud Security Fundamentals",
    excerpt: "Understanding the shared-responsibility model, identity, encryption and monitoring — the foundations every cloud programme should stand on.",
    img: "/assets/sernew13.jpeg",
  },
  {
    date: "June 2023",
    category: "Strategy",
    title: "Current Business Trends, Obstacles, and Solutions",
    excerpt: "How enterprises are navigating scale, cost and security pressures — and the solutions helping them turn obstacles into advantage.",
    img: "/assets/sernew15.jpg",
  },
];

export const Insights = () => (
  <section id="insights" data-testid="insights-section" className="py-24 md:py-36">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-6">— Insights &amp; ideas</p>
          <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
            <MaskLineScroll>Knowledge from</MaskLineScroll>
            <MaskLineScroll delay={0.1} className="italic text-teal">our practice.</MaskLineScroll>
          </h2>
        </div>
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 max-w-xs">
          Preview — full articles coming soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.1}>
            <article className="group cursor-pointer" data-testid={`insight-card-${i}`}>
              <div className="relative aspect-[4/3] overflow-hidden border border-copper/15 mb-6">
                <img
                  src={a.img}
                  alt={a.title}
                  className="img-editorial h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase text-ink">
                  {a.category}
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-ink/40">{a.date}</span>
                <ArrowUpRight className="text-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={18} />
              </div>
              <h3 className="font-serif text-2xl text-ink leading-tight mb-3 group-hover:text-copper transition-colors duration-300">
                {a.title}
              </h3>
              <p className="text-[14px] text-ink/55 leading-relaxed">{a.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
