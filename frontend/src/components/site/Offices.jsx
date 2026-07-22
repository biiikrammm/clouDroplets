import { Reveal, MaskLineScroll } from "./motion";

const OFFICES = [
  {
    city: "Noida",
    tag: "HQ / North",
    coords: "28.60°N, 77.42°E",
    address: "B1503, CP-GH-05A, Tech Zone-4, Greater Noida West, UP — 201318",
    img: "https://images.pexels.com/photos/17460303/pexels-photo-17460303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    city: "Bangalore",
    tag: "South",
    coords: "12.96°N, 77.60°E",
    address: "Workie Condor Mirage, 101/1, Richmond Rd, Langford Gardens, Bengaluru, Karnataka — 560025",
    img: "https://images.pexels.com/photos/10752001/pexels-photo-10752001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const Offices = () => (
  <section id="offices" data-testid="offices-section" className="py-14 md:py-20">
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
      <div className="mb-8 md:mb-12">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper mb-6">— Where we are</p>
        <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
          <MaskLineScroll>Two cities,</MaskLineScroll>
          <MaskLineScroll delay={0.1} className="italic text-teal">one mission.</MaskLineScroll>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {OFFICES.map((o, i) => (
          <Reveal key={o.city} delay={i * 0.12}>
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-copper/15 mb-8">
                <img
                  src={o.img}
                  alt={o.city}
                  className="img-editorial h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-cream mix-blend-difference">
                  {o.coords}
                </div>
              </div>
              <div className="flex items-baseline justify-between border-t border-copper/20 pt-6">
                <h3 className="font-serif text-4xl sm:text-5xl text-ink">{o.city}</h3>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper">{o.tag}</span>
              </div>
              <p className="mt-4 text-ink/55 leading-relaxed max-w-md">{o.address}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
