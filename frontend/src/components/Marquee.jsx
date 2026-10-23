export default function Marquee({ items, testid = "editorial-marquee" }) {
  const row = [...items, ...items];
  return (
    <div
      data-testid={testid}
      className="overflow-hidden border-y border-white/10 bg-surface/50 py-5"
    >
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 font-display text-lg font-bold uppercase tracking-wide text-slate-500 sm:text-xl"
          >
            {item}
            <span className="text-sm text-amber-500" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
