import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus, FlaskConical, GraduationCap, Package } from "lucide-react";
import { Reveal, MaskLine, SectionHead } from "@/components/Reveal";
import { SERVICES, IMAGES } from "@/data/siteData";

const RND_AREAS = [
  "Applied generative AI for operations",
  "Robotics fleet orchestration",
  "Edge inference on industrial hardware",
  "Energy-aware compute scheduling",
];

export default function WhatWeDo() {
  const [open, setOpen] = useState("01");

  return (
    <div data-testid="what-we-do-page">
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
            data-testid="what-eyebrow"
          >
            What We Do
          </motion.p>
          <h1
            className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            data-testid="what-headline"
          >
            <MaskLine delay={0.25}>Capability across</MaskLine>
            <MaskLine delay={0.38}>
              the <span className="text-gradient-amber">full lifecycle.</span>
            </MaskLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            data-testid="what-subcopy"
          >
            Strategy, build, run, and the R&D that feeds all three. Ten service practices, one
            engineering standard, zero handoffs lost in translation.
          </motion.p>
        </div>
      </section>

      {/* SERVICES DIRECTORY */}
      <section id="services" className="scroll-mt-28 border-t border-white/10" data-testid="services-directory">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHead
            eyebrow="Services"
            title="Ten practices, on the record."
            copy="Expand any practice to see how we frame the work. Every engagement is scoped, staffed, and measured against outcomes."
            testid="services-directory-head"
          />

          <div className="mt-12 space-y-3">
            {SERVICES.map((s, i) => {
              const isOpen = open === s.num;
              return (
                <Reveal key={s.num} delay={Math.min(i * 0.03, 0.25)} y={14}>
                  <div
                    id={`service-${s.num}`}
                    data-testid={`service-card-${s.num}`}
                    className={`scroll-mt-32 overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen ? "border-amber-500/40 bg-surface" : "border-white/10 bg-surface/50"
                    }`}
                  >
                    <button
                      data-testid={`service-toggle-${s.num}`}
                      onClick={() => setOpen(isOpen ? null : s.num)}
                      className="flex w-full items-center gap-5 px-6 py-5 text-left sm:gap-7 sm:px-8"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-mono text-xs transition-colors ${
                          isOpen ? "text-amber-400" : "text-slate-500"
                        }`}
                      >
                        {s.num}
                      </span>
                      <s.icon
                        className={`hidden h-5 w-5 shrink-0 transition-colors sm:block ${
                          isOpen ? "text-amber-400" : "text-slate-500"
                        }`}
                      />
                      <span className="flex-1 font-display text-base font-bold tracking-tight text-slate-100 sm:text-xl">
                        {s.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen ? "border-amber-500/50 text-amber-400" : "border-white/15 text-slate-400"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="px-6 pb-7 sm:px-8 sm:pl-[104px]">
                            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                              {s.blurb}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {s.tags.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-white/10 bg-ink px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS + TRAINING */}
      <section className="border-t border-white/10 bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <Reveal>
            <article
              id="products"
              data-testid="products-card"
              className="scroll-mt-32 flex h-full flex-col rounded-2xl border border-white/10 bg-ink p-8 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <Package className="h-7 w-7 text-amber-500" />
                <span
                  data-testid="products-badge"
                  className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400"
                >
                  Coming Soon
                </span>
              </div>
              <h2 className="mt-8 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                Products
              </h2>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                TSOR Enterprise AI Engine
              </p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">
                Our first productised platform is in the lab: an operations-intelligence engine that
                turns enterprise data exhaust into decisions. Early-access partners are onboarded
                through our R&D programme.
              </p>
              <Link
                to="/contact"
                data-testid="products-notify-link"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                Request early access
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article
              id="training"
              data-testid="training-card"
              className="scroll-mt-32 flex h-full flex-col rounded-2xl border border-white/10 bg-ink p-8 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <GraduationCap className="h-7 w-7 text-cyan-400" />
                <span
                  data-testid="training-badge"
                  className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-amber-400"
                >
                  Coming Soon
                </span>
              </div>
              <h2 className="mt-8 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                Training
              </h2>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                TSOR Tech Academy
              </p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">
                Practitioner-led upskilling for engineering and operations teams — cloud, data, AI,
                and delivery discipline, taught by the people who run these systems for clients.
              </p>
              <Link
                to="/contact"
                data-testid="training-notify-link"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* R&D */}
      <section id="rnd" className="scroll-mt-28 border-t border-white/10" data-testid="rnd-section">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <SectionHead
              eyebrow="R & D"
              title="The lab keeps us honest."
              copy="A standing research practice stress-tests what we sell — so client work is built on proven technique, not slideware."
              testid="rnd-head"
            />
            <Reveal delay={0.2}>
              <ul className="mt-9 space-y-3.5">
                {RND_AREAS.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                    <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={IMAGES.roboticsArm}
                alt="TSOR R&D robotics lab"
                loading="lazy"
                className="h-[340px] w-full object-cover sm:h-[440px]"
                data-testid="rnd-image"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
