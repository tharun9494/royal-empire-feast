import { useState, useEffect } from "react";
import CrownIcon from "./CrownIcon";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Menu", "Gallery", "Reviews", "Find Us"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-2">
          <CrownIcon className="w-5 h-5 text-primary" />
          <span className="font-heading text-sm md:text-base font-semibold text-foreground tracking-wide">
            Nawabz Empire
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-heading text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {l}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("Find Us")}
            className="hidden md:inline-flex btn-shimmer font-heading text-xs tracking-widest uppercase px-5 py-2 border border-primary text-primary hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors rounded-sm"
          >
            Book a Table
          </button>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-royal-brown text-royal-ivory">
          <div className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="font-heading text-sm tracking-widest uppercase text-left text-royal-cream hover:text-primary transition-colors"
              >
                {l}
              </button>
            ))}
            <a
              href="tel:07997997099"
              className="mt-2 btn-shimmer inline-flex justify-center font-heading text-xs tracking-widest uppercase px-5 py-3 bg-primary text-foreground rounded-sm"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
