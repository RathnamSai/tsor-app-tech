export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 8H34V14H23V34H17V14H6V8Z" fill="#E84A33" />
    <path d="M23 20L34 31V34H29L18 23V20H23Z" fill="#F5A623" />
    <circle cx="20" cy="20" r="2" fill="#6BB8E8" />
  </svg>
);

export const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-2.5 text-slate-50">
    <LogoMark className={compact ? "h-8 w-8" : "h-9 w-9"} />
    <span className="flex flex-col leading-none">
      <span className="font-display text-xl font-extrabold tracking-tight">
        <span className="text-[#E84A33]">T</span>
        <span className="text-[#F5A623]">S</span>
        <span className="text-[#6BB8E8]">O</span>
        <span className="text-[#3B78D8]">R</span>
      </span>
      <span className="font-mono text-[9px] font-medium uppercase tracking-[0.32em] text-amber-400">
        Technologies
      </span>
    </span>
  </span>
);
