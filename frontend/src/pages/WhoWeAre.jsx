import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, DraftingCompass, Hammer, Gauge } from "lucide-react";
import { Reveal, MaskLine, SectionHead } from "@/components/Reveal";
import { IMAGES } from "@/data/siteData";

const PRINCIPLES = [
  {
    num: "01",
    icon: Compass,
    title: "Discover",
    copy: "We start in the operation, not the boardroom — mapping how work actually flows before a single line is drawn.",
  },
  {
    num: "02",
    icon: DraftingCompass,
    title: "Architect",
    copy: "Systems are designed for the load they will carry in five years, with interfaces that assume change.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Build",
    copy: "Senior engineers ship in tight, verifiable increments — quality engineered in, not tested on.",
  },
  {
    num: "04",
    icon: Gauge,
    title: "Operate",
    copy: "We stay accountable after go-live: monitoring, optimisation, and 24×7 run discipline.",
  },
];

const LEADERSHIP = [
  { initials: "AR", name: "Arjun Rao", role: "Founder & Chief Executive", focus: "Enterprise strategy, delivery accountability" },
  { initials: "MK", name: "Maya Keller", role: "Chief Technology Officer", focus: "Cloud architecture, applied AI" },
  { initials: "DO", name: "David Osei", role: "Head of Engineering", focus: "Product engineering, quality systems" },
];

const CULTURE = [
  "Engineering-led, always",
  "Small senior teams, real ownership",
  "Write it down, measure it",
  "Operate what you build",
];

const PERKS = [
  "Deep-work friendly, remote-first setup",
  "Annual learning & certification budget",
  "Rotation across practices and industries",
  "Health cover for you and your family",
];

export default function WhoWeAre() {
  return (
    <div data-testid="who-we-are-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-40">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-mono text-xs font-medium uppercase tracking-[0.32em] text-amber-400"
            data-testid="who-eyebrow"
          >
            Who We Are
          </motion.p>
          <h1
            className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            data-testid="who-headline"
          >
            <MaskLine delay={0.25}>An engineering firm</MaskLine>
            <MaskLine delay={0.38}>
              with a <span className="text-gradient-amber">consulting habit.</span>
            </MaskLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            data-testid="who-subcopy"
          >
            TSOR Technologies is a technology and business solutions company — helping organizations
            navigate complex business and technology challenges with innovative solutions, industry
            expertise, and technology-driven strategies.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative mx-auto max-w-7xl px-5 lg:px-8"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={IMAGES.team}
              alt="TSOR engineering team collaborating"
              className="h-[320px] w-full object-cover sm:h-[420px]"
              data-testid="who-hero-image"
            />
          </div>
        </motion.div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="scroll-mt-28 border-t border-white/10 bg-surface/40" data-testid="about-section">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1.5fr] lg:px-8 lg:py-32">
          <SectionHead
            eyebrow="About Us"
            title="Technology and business solutions, under one roof."
            testid="about-head"
          />
          <div className="space-y-6">
            <Reveal>
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg" data-testid="about-intro">
                TSOR Technologies is a technology and business solutions company specializing in
                Artificial Intelligence (AI), Digital Transformation, Consulting, Supply Chain &amp;
                Sourcing, Staffing Solutions, Managed IT Services &amp; Support, and Product
                Development &amp; Engineering.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-base leading-relaxed text-slate-400">
                We help organizations navigate complex business and technology challenges by
                combining innovative solutions, industry expertise, and technology-driven
                strategies.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-base leading-relaxed text-slate-400">
                From transforming business processes and implementing AI solutions to optimizing
                supply chains, providing skilled talent, managing IT environments, and developing
                innovative products, we deliver solutions designed to improve efficiency, agility,
                and long-term growth.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="border-l-2 border-amber-500 pl-5 font-display text-lg font-bold leading-snug text-slate-100 sm:text-xl" data-testid="about-mission">
                At TSOR Technologies, we turn ideas and challenges into practical solutions that
                drive business success.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32" data-testid="method-section">
        <SectionHead
          eyebrow="The TSOR Method"
          title="Four moves. No theatre."
          copy="Every engagement runs the same disciplined loop — whether it is a two-week architecture review or a multi-year transformation."
          testid="method-head"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <article
                data-testid={`principle-card-${p.num}`}
                className="group h-full rounded-2xl border border-white/10 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40"
              >
                <div className="flex items-center justify-between">
                  <p.icon className="h-6 w-6 text-amber-500" />
                  <span className="font-mono text-xs text-slate-600">{p.num}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-slate-50">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{p.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-t border-white/10 bg-surface/40" data-testid="leadership-section">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHead
            eyebrow="Leadership"
            title="Operators, not figureheads."
            copy="The people who scope your engagement are the people accountable for delivering it."
            testid="leadership-head"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {LEADERSHIP.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <article
                  data-testid={`leader-card-${i}`}
                  className="group h-full rounded-2xl border border-white/10 bg-ink p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 font-display text-lg font-bold text-amber-400">
                    {l.initials}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-slate-50">{l.name}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-amber-400">
                    {l.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{l.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section
        id="careers"
        className="scroll-mt-28 border-t border-white/10"
        data-testid="careers-section"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <SectionHead
              eyebrow="Join Us / Careers"
              title="Do the best engineering of your career."
              copy="We hire people who want to own outcomes, not tickets. If you like hard problems across nine industries — and a team that writes things down — you will like it here."
              testid="careers-head"
            />
            <Reveal delay={0.2}>
              <Link
                to="/contact"
                data-testid="careers-cta"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_10px_36px_rgba(245,158,11,0.35)]"
              >
                Introduce Yourself
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Open roles are shared directly with our talent pool
              </p>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-7" data-testid="culture-card">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
                  How we work
                </p>
                <ul className="mt-5 space-y-3">
                  {CULTURE.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-7" data-testid="perks-card">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
                  What you get
                </p>
                <ul className="mt-5 space-y-3">
                  {PERKS.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
