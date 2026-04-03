import { useScrollAnimation } from "./useScrollAnimation";

import biryani from "@/assets/biryani.png";
import haleem from "@/assets/haleem.png";
import chickenStarter from "@/assets/chicken-starter.png";
import diningHall1 from "@/assets/dining-hall-1.png";
import privateDining from "@/assets/private-dining.png";
import rooftop from "@/assets/rooftop.png";
import diningHall2 from "@/assets/dining-hall-2.png";
import exterior from "@/assets/exterior.png";
import noodles from "@/assets/noodles.png";

const items = [
  { label: "Royal Biryani", src: biryani, tall: true },
  { label: "The Dining Hall", src: diningHall1, tall: true },
  { label: "Rooftop Lounge", src: rooftop, wide: true },
  { label: "Chef's Special", src: haleem },
  { label: "Chicken Starter", src: chickenStarter },
  { label: "Private Chamber", src: privateDining },
  { label: "The Interior", src: diningHall2, wide: true },
  { label: "The Empire", src: exterior },
  { label: "Noodle Platter", src: noodles },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`fade-up group relative overflow-hidden rounded-sm border border-transparent hover:border-primary transition-all duration-300 hover:scale-[1.02] ${
                item.tall
                  ? "row-span-2 min-h-[280px] md:min-h-[360px]"
                  : item.wide
                  ? "col-span-2 md:col-span-1 min-h-[160px] md:min-h-[200px]"
                  : "min-h-[160px] md:min-h-[200px]"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-royal-brown/30 group-hover:bg-royal-brown/50 transition-colors" />
              <span className="absolute bottom-3 left-3 font-heading text-xs text-royal-ivory tracking-wide drop-shadow-lg">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
