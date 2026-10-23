import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, MaskLine, SectionHead } from "@/components/Reveal";
import { INDUSTRIES } from "@/data/siteData";

const METRICS = [
  { value: "38%", label: "Supply-chain cost reduction for a global manufacturer" },
  { value: "99.98%", label: "Uptime across a managed cloud & power estate" },
  { value: "4.2M", label: "Daily transactions on a communications platform we run" },
  { value: "11 wks", label: "Concept to production for an applied-ML triage system" },
];

export default function Industries() {
  return (
    <div data-testid="industries-page">
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-40">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-mono text-xs font-medium uppercase tracking-[0.32em] text-amber-400"
            data-testid="industries-eyebrow"
          >
            Industries
          </motion.p>
          <h1
            className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            data-testid="industries-headline"
          >
            <MaskLine delay={0.25}>Nine sectors.</MaskLine>
            <MaskLine delay={0.38}>
              <span className="text-gradient-amber">Native fluency.</span>
            </MaskLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            data-testid="industries-subcopy"
          >
            Regulation, physics, and economics differ by industry. Our teams carry that context into
            every architecture decision.
          </motion.p>
        </div>
      </section>

      {/* GRID */}
      <section className="border-t border-white/10" data-testid="industries-grid-section">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.title} delay={Math.min(i * 0.05, 0.35)} y={18}>
                <article
                  id={`industry-${i}`}
                  data-testid={`industry-card-${i}`}
                  className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_12px_30px_rgba(245,158,11,0.12)]"
                >
                  {ind.image ? (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        loading="lazy"
                        className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    </div>
                  ) : (
                    <div className="grid-pattern flex h-44 items-center justify-center border-b border-white/10">
                      <ind.icon className="h-12 w-12 text-amber-500/80 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-lg font-bold tracking-tight text-slate-50 sm:text-xl">
                        {ind.title}
                      </h2>
                      <ind.icon className="h-5 w-5 shrink-0 text-slate-600 transition-colors group-hover:text-amber-400" />
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{ind.blurb}</p>
                    <Link
                      to="/contact"
                      data-testid={`industry-cta-${i}`}
                      className="group/link mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400 transition-colors hover:text-amber-300"
                    >
                      Discuss this sector
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-t border-white/10 bg-surface/40" data-testid="metrics-section">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHead
            eyebrow="Proof, Not Promises"
            title="Outcomes we are measured on."
            testid="metrics-head"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.value} delay={i * 0.08}>
                <div
                  data-testid={`metric-card-${i}`}
                  className="h-full rounded-2xl border border-white/10 bg-ink p-7"
                >
                  <p className="font-display text-3xl font-extrabold tracking-tight text-gradient-amber sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-8 sm:flex-row sm:items-center sm:p-10">
              <p className="max-w-xl font-display text-xl font-bold leading-snug text-slate-50 sm:text-2xl">
                Your sector has its own physics. Let's engineer for it.
              </p>
              <Link
                to="/contact"
                data-testid="industries-cta-button"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_10px_36px_rgba(245,158,11,0.35)]"
              >
                Talk to an Engineer
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
