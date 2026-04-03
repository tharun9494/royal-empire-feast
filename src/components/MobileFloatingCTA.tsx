import CrownIcon from "./CrownIcon";

const MobileFloatingCTA = () => (
  <a
    href="tel:07997997099"
    className="md:hidden fixed bottom-0 left-0 right-0 z-50 btn-shimmer flex items-center justify-center gap-2 bg-primary text-foreground font-heading text-xs tracking-widest uppercase py-3.5"
  >
    <CrownIcon className="w-4 h-4" />
    Call Now
  </a>
);

export default MobileFloatingCTA;
