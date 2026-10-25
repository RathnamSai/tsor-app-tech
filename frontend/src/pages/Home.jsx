import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import Marquee from "@/components/Marquee";
import { Reveal, MaskLine, SectionHead } from "@/components/Reveal";
import { SERVICES, INDUSTRIES, IMAGES } from "@/data/siteData";

const STATS = [
  { value: "11", label: "Service practices" },
  { value: "09", label: "Industries served" },
  { value: "24×7", label: "Managed operations" },
  { value: "40+", label: "Enterprise engagements" },
];

const MARQUEE_ITEMS = [
  "AI & Analytics",
  "Digital Transformation",
  "Cloud Architecture",
  "Next-Gen Supply Chain",
  "CX Modernization",
  "Managed Operations",
  "Precision Staffing",
  "Applied R&D",
];

const PILLARS = [
  {
    title: "Enterprise Intelligence",
    copy: "Decision systems wired into real workflows — data platforms, applied ML, and analytics that operators actually use.",
    image: IMAGES.heroTech,
    tag: "AI / DATA",
    span: "md:col-span-2",
  },
  {
    title: "High-Scale Infrastructure",
    copy: "Cloud and power estates engineered for uptime, density, and cost discipline.",
    image: IMAGES.serverRack,
    tag: "CLOUD",
    span: "",
  },
  {
    title: "Precision Staffing",
    copy: "Vetted engineers and delivery leaders embedded at the speed of your roadmap.",
    image: null,
    tag: "TALENT",
    span: "",
  },
  {
    title: "R&D Innovation",
    copy: "An applied lab for AI, robotics, and the systems that will run the next decade of industry.",
    image: IMAGES.roboticsArm,
    tag: "LAB",
    span: "md:col-span-2",
  },
];

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
        <HeroCanvas className="absolute inset-0 h-full w-full" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-40 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-mono text-xs font-medium uppercase tracking-[0.32em] text-amber-400"
            data-testid="hero-eyebrow"
          >
            TSOR Technologies — Enterprise Engineering
          </motion.p>

          <h1
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            data-testid="hero-headline"
          >
            <MaskLine delay={0.25}>We engineer the</MaskLine>
            <MaskLine delay={0.38}>
              <span className="text-gradient-amber">systems</span> ambitious
            </MaskLine>
            <MaskLine delay={0.51}>enterprises run on.</MaskLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            data-testid="hero-subcopy"
          >
            From supply chain to applied AI, TSOR designs, builds, and operates the technology core
            of modern industry — across nine sectors, around the clock.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/what-we-do"
              data-testid="hero-cta-explore"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_10px_36px_rgba(245,158,11,0.35)]"
            >
              Explore What We Do
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-cta-contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-amber-500/50 hover:text-amber-400"
            >
              Start a Conversation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
            data-testid="hero-stats"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-slate-50 sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={MARQUEE_ITEMS} />

      {/* BENTO PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32" data-testid="pillars-section">
        <SectionHead
          eyebrow="Why TSOR"
          title="Four pillars. One engineering standard."
          copy="Everything we deliver — from a data platform to a contact center — is held to the same bar: precise, operable, and built to last."
          testid="pillars-head"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={p.span}>
              <article
                data-testid={`pillar-card-${i}`}
                className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_12px_30px_rgba(245,158,11,0.12)]"
              >
                {p.image ? (
                  <>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-500 group-hover:scale-105 group-hover:opacity-55"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 grid-pattern opacity-70" />
                )}
                <div className="relative p-7">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
                    {p.tag}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-slate-50 sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-slate-400">{p.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES INDEX */}
      <section className="border-t border-white/10 bg-surface/40" data-testid="services-preview-section">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="What We Do"
              title="Eleven practices. Full-lifecycle capability."
              testid="services-preview-head"
            />
            <Reveal delay={0.15}>
              <Link
                to="/what-we-do"
                data-testid="services-preview-all-link"
                className="group inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber-400 transition-colors hover:text-amber-300"
              >
                View all capabilities
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12">
            {SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={Math.min(i * 0.04, 0.3)} y={16}>
                <Link
                  to={`/what-we-do#service-${s.num}`}
                  data-testid={`service-row-${s.num}`}
                  className="group flex items-center gap-5 border-t border-white/10 py-5 transition-colors duration-300 last:border-b hover:bg-white/[0.03] sm:gap-8 sm:px-4"
                >
                  <span className="font-mono text-xs text-slate-500 transition-colors group-hover:text-amber-400">
                    {s.num}
                  </span>
                  <span className="flex-1 font-display text-lg font-bold tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-slate-50 sm:text-xl">
                    {s.title}
                  </span>
                  <span className="hidden max-w-xs text-right text-xs leading-relaxed text-slate-500 lg:block">
                    {s.tags.join(" · ")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32" data-testid="industries-strip-section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Industries"
            title="Fluent in nine sectors."
            copy="Domain depth is not a slide in a deck — it is the difference between software that ships and software that works."
            testid="industries-strip-head"
          />
          <Reveal delay={0.15}>
            <Link
              to="/industries"
              data-testid="industries-strip-all-link"
              className="group inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber-400 transition-colors hover:text-amber-300"
            >
              Explore industries
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={Math.min(i * 0.05, 0.35)} y={18}>
              <Link
                to={`/industries#industry-${i}`}
                data-testid={`industry-chip-${i}`}
                className="group flex h-full items-center gap-3.5 rounded-xl border border-white/10 bg-surface/60 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40"
              >
                <ind.icon className="h-5 w-5 shrink-0 text-amber-500" />
                <span className="text-sm font-semibold text-slate-300 transition-colors group-hover:text-slate-50">
                  {ind.title}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden border-t border-white/10" data-testid="home-cta-section">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-32">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.32em] text-amber-400">
              Next Engagement
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Have a system to build? <span className="text-gradient-amber">Let's architect it.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              data-testid="home-cta-button"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-ink transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_10px_36px_rgba(245,158,11,0.4)]"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
