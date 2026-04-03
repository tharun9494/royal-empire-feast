import { useScrollAnimation } from "./useScrollAnimation";
import { MapPin, Phone, Clock, Car } from "lucide-react";

const LocationSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="find-us" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            <span className="ornamental-heading">Visit the Empire</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info card */}
          <div className="fade-up bg-card p-8 rounded-sm border border-primary/20 space-y-5">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-foreground leading-relaxed">
                Garuda Gateway Commercial Complex, Checkpost, Upparapalli Road, Tummalagunta,
                Tirupati, Andhra Pradesh 517502
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="tel:07997997099" className="font-body text-sm text-foreground hover:text-primary transition-colors">
                079979 97099
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="font-body text-sm text-foreground">Open daily until 11 PM</p>
            </div>
            <div className="flex gap-3 items-center">
              <Car className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="font-body text-sm text-muted-foreground">Usually up to 45 min wait on busy nights</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="https://www.google.com/maps/place/Nawabz+Empire+Fine+Dine+Restaurant/@13.6050099,79.3952445,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xs tracking-widest uppercase px-6 py-3 border border-primary text-primary rounded-sm hover:bg-primary hover:text-foreground transition text-center"
              >
                Get Directions
              </a>
              <a
                href="tel:07997997099"
                className="btn-shimmer font-heading text-xs tracking-widest uppercase px-6 py-3 bg-primary text-foreground rounded-sm text-center"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="fade-up rounded-sm overflow-hidden min-h-[300px] lg:min-h-0">
            <iframe
              title="Nawabz Empire Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.1!2d79.3952445!3d13.6050099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM2JzE4LjAiTiA3OcKwMjMnNDIuOSJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
