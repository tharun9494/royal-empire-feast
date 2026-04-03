import CrownIcon from "./CrownIcon";
import { Instagram, Facebook, Youtube } from "lucide-react";

const links = ["Home", "About", "Menu", "Gallery", "Reviews", "Find Us"];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-royal-brown">
      <div className="gold-divider" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CrownIcon className="w-5 h-5 text-primary" />
              <span className="font-heading text-sm text-primary font-semibold">
                Nawabz Empire Fine Dine Restaurant
              </span>
            </div>
            <p className="font-body text-xs text-royal-cream/60 mb-4">
              A Kingdom of Flavor. A Feast Fit for Royalty.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-royal-cream/50 hover:text-primary transition-colors"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="font-heading text-[10px] tracking-widest uppercase text-royal-cream/70 hover:text-primary transition-colors"
              >
                {l}
              </button>
            ))}
          </div>

          {/* Address */}
          <div className="text-right">
            <p className="font-body text-xs text-royal-cream/60 leading-relaxed">
              Garuda Gateway Commercial Complex,<br />
              Checkpost, Upparapalli Road,<br />
              Tirupati, AP 517502
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10 py-4">
        <p className="text-center font-body text-[10px] text-royal-cream/40">
          © 2025 Nawabz Empire Fine Dine Restaurant · Garuda Gateway, Tirupati, AP 517502
        </p>
      </div>
    </footer>
  );
};

export default Footer;
