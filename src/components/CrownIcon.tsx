const CrownIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M2 20h20v2H2v-2zm1-7l4.5 3.5L12 9l4.5 7.5L21 13l-2 7H5l-2-7z" />
    <circle cx="4" cy="12" r="1.5" />
    <circle cx="12" cy="6" r="1.5" />
    <circle cx="20" cy="12" r="1.5" />
  </svg>
);

export default CrownIcon;
