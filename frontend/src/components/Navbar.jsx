import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV, SERVICES, INDUSTRIES } from "@/data/siteData";

const linkCls = (isActive) =>
  `flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
    isActive ? "text-amber-400" : "text-slate-300 hover:text-slate-50"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [location.pathname, location.hash]);

  const close = () => setOpen(null);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobile
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" data-testid="nav-logo" aria-label="TSOR Technologies home" onClick={close}>
          <Logo />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpen(item.dropdown)}
                onMouseLeave={close}
              >
                <NavLink
                  to={item.path}
                  data-testid={item.testid}
                  className={({ isActive }) => linkCls(isActive)}
                >
                  {item.name}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      open === item.dropdown ? "rotate-180" : ""
                    }`}
                  />
                </NavLink>

                <AnimatePresence>
                  {open === item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute top-full pt-3 ${
                        item.dropdown === "what" ? "left-1/2 -translate-x-1/2" : "left-0"
                      }`}
                    >
                      {item.dropdown === "who" && (
                        <div
                          data-testid="dropdown-who-we-are"
                          className="w-64 rounded-xl border border-white/10 bg-surface/95 p-2 shadow-2xl backdrop-blur-xl"
                        >
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              data-testid={sub.testid}
                              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-amber-400"
                            >
                              {sub.label}
                              <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                            </Link>
                          ))}
                        </div>
                      )}

                      {item.dropdown === "industries" && (
                        <div
                          data-testid="dropdown-industries"
                          className="w-72 rounded-xl border border-white/10 bg-surface/95 p-2 shadow-2xl backdrop-blur-xl"
                        >
                          {INDUSTRIES.map((ind, i) => (
                            <Link
                              key={ind.title}
                              to={`/industries#industry-${i}`}
                              data-testid={`nav-sub-industry-${i}`}
                              className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-amber-400"
                            >
                              {ind.title}
                              <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                            </Link>
                          ))}
                        </div>
                      )}

                      {item.dropdown === "what" && (
                        <div
                          data-testid="mega-menu-what-we-do"
                          className="grid w-[min(880px,92vw)] grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-surface/95 p-7 shadow-2xl backdrop-blur-xl"
                        >
                          <div className="col-span-2">
                            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
                              Services
                            </p>
                            <div className="mt-3 grid grid-cols-2 gap-x-4">
                              {SERVICES.map((s) => (
                                <Link
                                  key={s.num}
                                  to={`/what-we-do#service-${s.num}`}
                                  data-testid={`nav-sub-service-${s.num}`}
                                  className="group flex items-baseline gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-white/5"
                                >
                                  <span className="font-mono text-[10px] text-slate-500">
                                    {s.num}
                                  </span>
                                  <span className="text-[13px] font-medium leading-snug text-slate-300 transition-colors group-hover:text-amber-400">
                                    {s.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-5 border-l border-white/10 pl-6">
                            {[
                              { label: "Products", note: "Coming Soon", to: "/what-we-do#products", tid: "nav-sub-products" },
                              { label: "Training", note: "Coming Soon", to: "/what-we-do#training", tid: "nav-sub-training" },
                              { label: "R & D", note: "Applied AI & Robotics Lab", to: "/what-we-do#rnd", tid: "nav-sub-rnd" },
                            ].map((g) => (
                              <Link
                                key={g.label}
                                to={g.to}
                                data-testid={g.tid}
                                className="group block rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5"
                              >
                                <span className="block text-sm font-semibold text-slate-200 transition-colors group-hover:text-amber-400">
                                  {g.label}
                                </span>
                                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                  {g.note}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                data-testid={item.testid}
                className={({ isActive }) => linkCls(isActive)}
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            data-testid="nav-cta-start-project"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-bold text-ink transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_8px_28px_rgba(245,158,11,0.35)]"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
          onClick={() => setMobile((v) => !v)}
          aria-label={mobile ? "Close menu" : "Open menu"}
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
            data-testid="nav-mobile-panel"
          >
            <div className="max-h-[calc(100vh-76px)] space-y-1 overflow-y-auto px-5 py-4">
              <Link to="/" data-testid="nav-mobile-home" className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-200 hover:bg-white/5">
                Home
              </Link>

              {[
                {
                  key: "who",
                  label: "Who We Are",
                  items: [
                    { label: "About Us", to: "/who-we-are" },
                    { label: "Join Us / Careers", to: "/who-we-are#careers" },
                  ],
                },
                {
                  key: "what",
                  label: "What We Do",
                  items: [
                    ...SERVICES.map((s) => ({ label: s.title, to: `/what-we-do#service-${s.num}` })),
                    { label: "Products — Coming Soon", to: "/what-we-do#products" },
                    { label: "Training — Coming Soon", to: "/what-we-do#training" },
                    { label: "R & D", to: "/what-we-do#rnd" },
                  ],
                },
                {
                  key: "industries",
                  label: "Industries",
                  items: INDUSTRIES.map((ind, i) => ({
                    label: ind.title,
                    to: `/industries#industry-${i}`,
                  })),
                },
              ].map((group) => (
                <div key={group.key} className="rounded-lg">
                  <button
                    data-testid={`nav-mobile-group-${group.key}`}
                    onClick={() => setMobileGroup((g) => (g === group.key ? null : group.key))}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-slate-200 hover:bg-white/5"
                  >
                    {group.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileGroup === group.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileGroup === group.key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-0.5 border-l border-white/10 py-1 pl-4">
                          {group.items.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              data-testid={`nav-mobile-sub-${sub.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                              className="block rounded-md px-3 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-amber-400"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/contact"
                data-testid="nav-mobile-contact"
                className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-200 hover:bg-white/5"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                data-testid="nav-mobile-cta"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3.5 text-sm font-bold text-ink"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
