import { useScrollAnimation } from "./useScrollAnimation";

const pillars = [
  { icon: "🏆", title: "4.8★ Google Rating", desc: "Tirupati's highest-rated fine dine" },
  { icon: "🌿", title: "Zero Preservatives", desc: "Fresh ingredients, every single day" },
  { icon: "👨‍👩‍👧‍👦", title: "Family & Private Dining", desc: "For every occasion, big or small" },
  { icon: "⏰", title: "Open Till 11 PM", desc: "Fine dining at your convenience" },
];

const WhySection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-accent" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            <span className="ornamental-heading">Why Choose the Empire?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="fade-up bg-card p-8 rounded-sm border-b-2 border-secondary text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
