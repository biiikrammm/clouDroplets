import { Reveal, MaskLineScroll } from "./motion";

const CHAPTERS = [
  {
    no: "01",
    title: "Vision",
    body: "Empowering our clients to adapt quickly and with greater insight to evolving market conditions — through integrated Cloud & Security solutions that significantly enhance their business. Our goal is to make clouDroplets the preferred option for our clients' ongoing business needs.",
    img: "/assets/ser2.jpg",
  },
  {
    no: "02",
    title: "Mission",
    body: "Creating a technological bridge that facilitates business success for both aspiring entrepreneurs and established corporations. By fostering collaboration and providing comprehensive Cloud & Security solutions, we contribute to a positive business ecosystem.",
    img: "/assets/ser5.jpg",
  },
  {
    no: "03",
    title: "Principle",
    body: "Complete security solutions, customized to meet your specific requirements. We protect your digital assets and your business by putting an emphasis on innovation, deep expertise and long-term partnership.",
    img: "/assets/serhero.jpg",
  },
];

export const Manifesto = () => (
  <section id="manifesto" data-testid="manifesto-section" className="py-14 md:py-20">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="mb-10 md:mb-14 max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-6">
          — The Manifesto
        </p>
        <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
          <MaskLineScroll>What we stand</MaskLineScroll>
          <MaskLineScroll delay={0.1} className="italic text-teal">for.</MaskLineScroll>
        </h2>
      </div>

      <div className="space-y-px">
        {CHAPTERS.map((c, i) => (
          <div
            key={c.no}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-t border-copper/20 py-7 md:py-9 items-start"
          >
            <div className="lg:col-span-2">
              <span className="font-mono text-teal text-lg tracking-widest">({c.no})</span>
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <h3 className="font-serif text-4xl sm:text-5xl text-ink mb-4">{c.title}</h3>
                <p className="text-ink/60 text-lg leading-relaxed max-w-md">{c.body}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <div className="relative aspect-[16/10] overflow-hidden border border-copper/15 group">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="img-editorial h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
