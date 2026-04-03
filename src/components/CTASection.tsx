import CrownIcon from "./CrownIcon";

const CTASection = () => (
  <section className="relative py-20 md:py-28 bg-royal-brown mughal-pattern overflow-hidden">
    <div className="relative z-10 container mx-auto px-4 text-center">
      <CrownIcon className="w-10 h-10 text-primary mx-auto mb-6" />
      <h2 className="font-display text-2xl md:text-4xl text-royal-ivory mb-4">
        Step Into the Kingdom Tonight.
      </h2>
      <p className="font-body text-sm md:text-base text-royal-cream/80 max-w-xl mx-auto mb-8">
        Fresh food. Royal ambiance. A feast with no preservatives and no shortcuts — just pure perfection.
      </p>
      <a
        href="tel:07997997099"
        className="btn-shimmer inline-flex items-center gap-2 font-heading text-xs tracking-widest uppercase px-10 py-4 bg-primary text-foreground rounded-sm hover:brightness-110 transition"
      >
        Call Now — 079979 97099
      </a>
      <p className="font-body text-xs text-royal-cream/60 mt-6">
        Open Daily · Until 11:00 PM · Fine Dine & All You Can Eat
      </p>
    </div>
  </section>
);

export default CTASection;
