import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SERVICES, INDUSTRIES } from "@/data/siteData";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Architecting next-generation enterprise systems and digital futures — engineering-led,
              outcome-obsessed.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
              EST. MMXXVI — ENGINEERED TO LAST
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Who We Are", to: "/who-we-are" },
                { label: "What We Do", to: "/what-we-do" },
                { label: "Industries", to: "/industries" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.num}>
                  <Link
                    to={`/what-we-do#service-${s.num}`}
                    data-testid={`footer-service-${s.num}`}
                    className="text-sm text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/what-we-do"
                  data-testid="footer-service-all"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-300 transition-colors hover:text-amber-400"
                >
                  All capabilities <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <a href="mailto:info@tsortechnologies.com" data-testid="footer-email" className="transition-colors hover:text-amber-400">
                  info@tsortechnologies.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <a href="tel:+15125550148" data-testid="footer-phone" className="transition-colors hover:text-amber-400">
                  +1 (512) 555-0148
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span data-testid="footer-address">
                  600 Congress Ave, Austin, TX 78701
                </span>
              </li>
            </ul>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
              {INDUSTRIES.length} INDUSTRIES · {SERVICES.length} PRACTICES
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © 2026 TSOR Technologies. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
            Designed &amp; engineered with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
