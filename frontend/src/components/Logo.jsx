export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 8H34V14H23V34H17V14H6V8Z" fill="currentColor" />
    <path d="M23 20L34 31V34H29L18 23V20H23Z" fill="#F59E0B" />
    <circle cx="20" cy="20" r="2" fill="#38BDF8" />
  </svg>
);

export const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-2.5 text-slate-50">
    <LogoMark className={compact ? "h-8 w-8" : "h-9 w-9"} />
    <span className="flex flex-col leading-none">
      <span className="font-display text-xl font-extrabold tracking-tight">TSOR</span>
      <span className="font-mono text-[9px] font-medium uppercase tracking-[0.32em] text-amber-400">
        Technologies
      </span>
    </span>
  </span>
);
