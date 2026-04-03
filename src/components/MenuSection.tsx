import { useScrollAnimation } from "./useScrollAnimation";

const categories = [
  { icon: "🍛", name: "Dum Biryani", desc: "Signature royal style", ayc: true },
  { icon: "🥩", name: "Mutton Specialties", desc: "Rich & slow-cooked", ayc: true },
  { icon: "🍗", name: "Chicken Delicacies", desc: "Grilled & curried", ayc: true },
  { icon: "🌱", name: "Vegetarian Kingdom", desc: "Fresh & flavorful", ayc: true },
  { icon: "🔥", name: "Kebabs & Starters", desc: "Straight from the tandoor", ayc: false },
  { icon: "🍮", name: "Royal Desserts", desc: "Sweet endings fit for a Nawab", ayc: true },
  { icon: "🥤", name: "Beverages", desc: "Lassi, juices & more", ayc: false },
  { icon: "🎉", name: "Private Dining Menu", desc: "Curated for special occasions", ayc: false },
];

const MenuSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="menu" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 fade-up">
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            <span className="ornamental-heading">The Royal Spread</span>
          </h2>
        </div>
        <p className="text-center font-heading text-sm text-primary mb-12 fade-up">
          Crafted Fresh. Served with Pride.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {categories.map((c, i) => (
            <div
              key={c.name}
              className="fade-up relative bg-card p-6 rounded-sm border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {c.ayc && (
                <span className="absolute top-3 right-3 font-heading text-[9px] tracking-widest uppercase bg-primary/15 text-primary px-2 py-0.5 rounded-sm">
                  All You Can Eat
                </span>
              )}
              <div className="text-2xl mb-2">{c.icon}</div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{c.name}</h3>
              <p className="font-body text-xs text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 fade-up">
          * Menu subject to seasonal availability. All dishes prepared fresh daily with no preservatives.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
