import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Reveal, MaskLine, SectionHead } from "@/components/Reveal";
import { SERVICES } from "@/data/siteData";

const CONTACT_EMAIL = "support@tsortechnologies.com";
const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "";
const TURNSTILE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY || "";

let turnstileReady;
function waitForTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!turnstileReady) {
    turnstileReady = new Promise((resolve, reject) => {
      const deadline = Date.now() + 10000;
      const poll = () => {
        if (window.turnstile) return resolve(window.turnstile);
        if (Date.now() > deadline) return reject(new Error("Turnstile did not load"));
        window.setTimeout(poll, 50);
      };
      poll();
    });
  }
  return turnstileReady;
}

const INTERESTS = [
  ...SERVICES.map((s) => s.title),
  "Products — Early Access",
  "Training — Waitlist",
  "R & D Partnership",
  "Careers",
  "General Enquiry",
];

const initialForm = { name: "", email: "", company: "", interest: "General Enquiry", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useState("");
  const [widgetFailed, setWidgetFailed] = useState(false);
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    if (!TURNSTILE_KEY) return undefined;
    let cancelled = false;
    waitForTurnstile()
      .then((turnstile) => {
        if (cancelled || widgetIdRef.current !== null || !turnstileRef.current) return;
        widgetIdRef.current = turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_KEY,
          theme: "dark",
          callback: (t) => setToken(t),
          "expired-callback": () => setToken(""),
          "error-callback": () => {
            setToken("");
            setWidgetFailed(true);
          },
        });
      })
      .catch(() => setWidgetFailed(true));
    return () => {
      cancelled = true;
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const resetTurnstile = () => {
    setToken("");
    if (widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  const buildMailto = () => {
    const subject = `Website Enquiry — ${form.interest} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      `Interested in: ${form.interest}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setStatus("sent");
      window.location.href = buildMailto();
      return;
    }
    if (TURNSTILE_KEY && !widgetFailed && !token) {
      setStatus("error");
      setErrorMsg("Please complete the verification check before sending.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_KEY);
      fd.append("subject", `Website Enquiry — ${form.interest} — ${form.name}`);
      fd.append("from_name", "TSOR Technologies Website");
      fd.append("replyto", form.email);
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("company", form.company);
      fd.append("interest", form.interest);
      fd.append("message", form.message);
      fd.append("botcheck", "");
      fd.append("cf-turnstile-response", token);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || result.success !== true) {
        throw new Error(result.message || "The message could not be sent.");
      }
      setStatus("sent");
      resetTurnstile();
    } catch (err) {
      setStatus("error");
      resetTurnstile();
      setErrorMsg(
        typeof err.message === "string"
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
    }
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-colors duration-200 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20";

  return (
    <div data-testid="contact-page">
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-40">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-mono text-xs font-medium uppercase tracking-[0.32em] text-amber-400"
            data-testid="contact-eyebrow"
          >
            Contact
          </motion.p>
          <h1
            className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            data-testid="contact-headline"
          >
            <MaskLine delay={0.25}>Talk to the people</MaskLine>
            <MaskLine delay={0.38}>
              who'll <span className="text-gradient-amber">build it.</span>
            </MaskLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            data-testid="contact-subcopy"
          >
            No sales layer, no handoffs. Your enquiry goes straight to an engineer who has shipped
            the thing you are asking about.
          </motion.p>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="border-t border-white/10" data-testid="contact-main-section">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:py-32">
          {/* FORM */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-surface/60 p-7 sm:p-10">
              {status === "sent" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center" data-testid="contact-form-success">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                  <h2 className="mt-6 font-display text-2xl font-bold text-slate-50">
                    {WEB3FORMS_KEY ? "Message sent." : "Your email draft is ready."}
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                    {WEB3FORMS_KEY ? (
                      <>
                        Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — your enquiry has
                        landed in our inbox. An engineer will come back to you within one business
                        day. For anything urgent, email us directly.
                      </>
                    ) : (
                      <>
                        Your mail app should have opened with everything filled in — just press
                        send. If it didn't open, write to us directly at{" "}
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="font-semibold text-amber-400 transition-colors hover:text-amber-300"
                        >
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </>
                    )}
                  </p>
                  <button
                    data-testid="contact-form-reset"
                    onClick={() => {
                      setForm(initialForm);
                      setStatus("idle");
                    }}
                    className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-amber-500/50 hover:text-amber-400"
                  >
                    Write another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} data-testid="contact-form">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
                    Project Enquiry
                  </p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold text-slate-400">
                        Full name *
                      </label>
                      <input
                        id="contact-name"
                        data-testid="contact-input-name"
                        required
                        minLength={2}
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Ada Lovelace"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold text-slate-400">
                        Work email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        data-testid="contact-input-email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder="ada@company.com"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="mb-2 block text-xs font-semibold text-slate-400">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        data-testid="contact-input-company"
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Analytical Engines Inc."
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-interest" className="mb-2 block text-xs font-semibold text-slate-400">
                        I'm interested in
                      </label>
                      <select
                        id="contact-interest"
                        data-testid="contact-input-interest"
                        value={form.interest}
                        onChange={set("interest")}
                        className={`${inputCls} appearance-none`}
                      >
                        {INTERESTS.map((i) => (
                          <option key={i} value={i} className="bg-ink">
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-slate-400">
                        What are you building? *
                      </label>
                      <textarea
                        id="contact-message"
                        data-testid="contact-input-message"
                        required
                        minLength={10}
                        rows={5}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Tell us about the system, the constraint, and the deadline…"
                        className={`${inputCls} resize-y`}
                      />
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  />

                  {TURNSTILE_KEY && !widgetFailed && (
                    <div
                      ref={turnstileRef}
                      className="mt-6"
                      data-testid="turnstile-widget"
                      aria-label="Spam protection"
                    />
                  )}

                  {status === "error" && (
                    <div
                      data-testid="contact-form-error"
                      className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        {errorMsg} You can also{" "}
                        <a href={buildMailto()} className="font-semibold underline">
                          email us directly
                        </a>
                        .
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    data-testid="contact-form-submit"
                    disabled={status === "sending" || Boolean(TURNSTILE_KEY && !widgetFailed && !token)}
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-ink transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_10px_36px_rgba(245,158,11,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        Sending
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-xs text-slate-500">
                    {WEB3FORMS_KEY
                      ? "Delivered straight to our inbox — nothing is stored on this site."
                      : "Opens your email app with the message pre-filled — nothing is stored on our servers."}
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* DETAILS */}
          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-7" data-testid="contact-details-card">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">
                  Direct Lines
                </p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <div>
                      <p className="font-semibold text-slate-200">Email</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        data-testid="contact-email-link"
                        className="text-slate-400 transition-colors hover:text-amber-400"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-7" data-testid="contact-response-note">
                <SectionHead
                  eyebrow="Response Time"
                  title="One business day."
                  copy="Every enquiry is read by an engineer, not a bot. Expect a substantive reply, not an autoresponder."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
