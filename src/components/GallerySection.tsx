import { useScrollAnimation } from "./useScrollAnimation";
import CrownIcon from "./CrownIcon";

const items = [
  { label: "Royal Biryani", tall: true },
  { label: "The Dining Hall", tall: true },
  { label: "Private Chamber", wide: true },
  { label: "Chef's Special" },
  { label: "Kebab Platter" },
  { label: "Royal Desserts" },
];

const GallerySection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="gallery" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 fade-up">
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            <span className="ornamental-heading">Inside the Palace</span>
          </h2>
        </div>
        <p className="text-center font-heading text-sm text-primary mb-12 fade-up">
          Where ambiance meets artistry
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`fade-up group relative flex flex-col items-center justify-center bg-royal-cream rounded-sm border border-transparent hover:border-primary transition-all duration-300 hover:scale-[1.02] ${
                item.tall ? "row-span-2 min-h-[280px] md:min-h-[360px]" : item.wide ? "col-span-2 md:col-span-1 min-h-[160px]" : "min-h-[160px]"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <CrownIcon className="w-8 h-8 text-primary/30 mb-3 group-hover:text-primary/60 transition-colors" />
              <span className="font-heading text-xs text-muted-foreground tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 fade-up">
          📸 Photos coming soon. Visit us at Garuda Gateway, Tirupati.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
