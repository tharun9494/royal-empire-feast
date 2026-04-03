import { useScrollAnimation } from "./useScrollAnimation";

const reviews = [
  { text: "Food quality, service, ambience, staff are very good.", author: "Google Reviewer" },
  { text: "Hygienic food with yummy tasty with variety of menu.", author: "Google Reviewer" },
  { text: "Ordered chicken dum biryani and chicken lollipop — absolutely amazing!", author: "Google Reviewer" },
];

const platforms = [
  { name: "Google", rating: "4.8★", count: "1211 reviews" },
  { name: "Swiggy", rating: "4.4★", count: "262 ratings" },
  { name: "Zomato", rating: "4.3★", count: "862 reviews" },
  { name: "Justdial", rating: "4.7★", count: "907 votes" },
];

const ReviewsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="reviews" className="py-20 md:py-28 bg-accent" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            <span className="ornamental-heading">Royal Praise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="fade-up relative bg-background p-6 md:p-8 rounded-sm"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="absolute -top-2 left-5 text-5xl text-primary/15 font-display">"</span>
              <p className="font-body text-sm text-foreground leading-relaxed mb-4 mt-4">
                {r.text}
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-secondary text-sm">★</span>
                ))}
              </div>
              <p className="font-heading text-xs text-muted-foreground">— {r.author}</p>
            </div>
          ))}
        </div>

        {/* Platform ratings */}
        <div className="fade-up flex flex-wrap justify-center gap-6 md:gap-10 py-6 px-4 bg-card rounded-sm max-w-3xl mx-auto mb-6">
          {platforms.map((p) => (
            <div key={p.name} className="text-center">
              <p className="font-heading text-sm font-semibold text-foreground">{p.name}</p>
              <p className="text-primary font-bold text-lg">{p.rating}</p>
              <p className="text-xs text-muted-foreground">{p.count}</p>
            </div>
          ))}
        </div>

        {/* Currently busy */}
        <div className="fade-up flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Live: Currently Busy — Usually up to 45 min wait
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
