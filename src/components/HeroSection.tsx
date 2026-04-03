import CrownIcon from "./CrownIcon";
import { ChevronDown } from "lucide-react";

const ratings = [
  { platform: "Google", rating: "4.8★", count: "1211" },
  { platform: "Swiggy", rating: "4.4★" },
  { platform: "Zomato", rating: "4.3★" },
  { platform: "Justdial", rating: "4.7★" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center mughal-pattern overflow-hidden">
    {/* Mughal arch decoration */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[500px] h-[420px] md:h-[560px] pointer-events-none">
      <svg viewBox="0 0 500 560" fill="none" className="w-full h-full opacity-20">
        <path
          d="M50 560V250C50 140 130 50 250 50C370 50 450 140 450 250V560"
          stroke="hsl(40, 72%, 47%)"
          strokeWidth="1.5"
        />
        <path
          d="M70 560V260C70 155 145 70 250 70C355 70 430 155 430 260V560"
          stroke="hsl(40, 72%, 47%)"
          strokeWidth="0.8"
        />
      </svg>
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
      <div className="flex justify-center mb-4">
        <CrownIcon className="w-8 h-8 text-primary" />
      </div>

      <p className="font-heading text-[10px] md:text-xs tracking-[0.3em] text-secondary uppercase mb-6">
        Fine Dine · Tirupati's Finest · Est. 2024
      </p>

      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
        A Kingdom of Flavor.
      </h1>

      <p className="font-heading text-base md:text-lg text-primary tracking-wide mb-4">
        Where Every Meal is a Royal Masterpiece.
      </p>

      <p className="font-body text-text-body text-sm md:text-base max-w-lg mx-auto mb-8">
        No preservatives. No shortcuts. Just perfection — from our kitchen to your plate.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        <button
          onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-shimmer font-heading text-xs tracking-widest uppercase px-8 py-3 bg-primary text-foreground rounded-sm hover:brightness-110 transition"
        >
          Explore the Menu
        </button>
        <a
          href="tel:07997997099"
          className="font-heading text-xs tracking-widest uppercase px-8 py-3 border border-secondary text-secondary rounded-sm hover:bg-secondary hover:text-secondary-foreground transition"
        >
          Call Now
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-xs font-body">
        {ratings.map((r, i) => (
          <span key={r.platform} className="flex items-center gap-1 text-muted-foreground">
            {i > 0 && <span className="hidden md:inline text-primary/30 mr-2">|</span>}
            <span className="text-primary">⭐</span>
            <span className="font-semibold">{r.platform}</span> {r.rating}
            {r.count && <span className="text-muted-foreground/60">({r.count})</span>}
          </span>
        ))}
      </div>
    </div>

    {/* Scroll indicator */}
    <button
      onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce-down"
    >
      <ChevronDown size={28} />
    </button>
  </section>
);

export default HeroSection;
