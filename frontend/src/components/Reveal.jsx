import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.75, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const SectionHead = ({ eyebrow, title, copy, testid }) => (
  <div className="max-w-3xl" data-testid={testid}>
    <Reveal>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-amber-400">
        {eyebrow}
      </p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
    </Reveal>
    {copy ? (
      <Reveal delay={0.16}>
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{copy}</p>
      </Reveal>
    ) : null}
  </div>
);
