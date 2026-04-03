import { useScrollAnimation } from "./useScrollAnimation";

const highlights = [
  { icon: "👑", title: "Fine Dine Experience", desc: "Regal ambiance for unforgettable meals" },
  { icon: "🌿", title: "No Preservatives — Ever", desc: "Fresh ingredients, every single day" },
  { icon: "🍛", title: "All You Can Eat", desc: "Unlimited feast, unlimited joy" },
  { icon: "🚪", title: "Private Dining Room", desc: "Exclusive space for special occasions" },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-accent" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            <span className="ornamental-heading">The Empire's Story</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-16 fade-up">
          <blockquote className="relative bg-card p-8 md:p-10 rounded-sm border-l-4 border-primary font-heading text-sm md:text-base italic text-muted-foreground leading-relaxed">
            <span className="absolute -top-4 left-6 text-5xl text-primary/20 font-display">"</span>
            Welcome to Nawabz Empire, where every meal is a masterpiece, crafted with the freshest
            ingredients and a passion for purity — no preservatives, no shortcuts, just perfection. From
            our kitchen to your plate, we blend tradition with taste, ensuring every bite is an
            unforgettable experience. Step into a kingdom of flavor, where quality reigns supreme, and let
            your senses be swept away in a feast fit for royalty!
          </blockquote>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="fade-up bg-background p-6 rounded-sm border-t-2 border-primary text-center hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-3">{h.icon}</div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
