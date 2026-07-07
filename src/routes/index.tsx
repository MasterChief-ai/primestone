import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-exterior.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import amenityPool from "@/assets/amenity-pool.jpg";
import sitePlan from "@/assets/site-plan.jpg";
import exteriorDusk from "@/assets/exterior-dusk.jpg";

export const Route = createFileRoute("/")({ component: LandingPage });

const WHATSAPP = "+2348111320054";
const PHONE_DISPLAY = "+234 811 132 005 4";

const GALLERY = [
  { src: hero, caption: "Facade · Lekki Phase 1" },
  { src: interiorLiving, caption: "Open-plan living · 3-bed" },
  { src: interiorBedroom, caption: "Master suite" },
  { src: amenityPool, caption: "Rooftop pool deck" },
  { src: exteriorDusk, caption: "West-facing elevation at dusk" },
  { src: sitePlan, caption: "Site plan" },
];

const AMENITIES = [
  { title: "24/7 backup power", note: "Dual inverter + generator, no downtime" },
  { title: "Borehole + treatment", note: "On-site water plant, softened supply" },
  { title: "Manned security", note: "24/7 guards, CCTV, controlled access" },
  { title: "Rooftop pool", note: "Infinity edge with lagoon views" },
  { title: "Residents' gym", note: "Fully equipped, ground floor" },
  { title: "Covered parking", note: "2 bays per unit, EV-ready wiring" },
  { title: "Two passenger lifts", note: "Plus dedicated service lift" },
  { title: "Landscaped courtyard", note: "Private gardens between blocks" },
];

const UNITS = [
  {
    name: "2-Bedroom",
    size: "≈ 120 sqm",
    beds: "2 bed · 2 bath",
    from: "₦185,000,000",
    highlight: "12 units",
  },
  {
    name: "3-Bedroom",
    size: "≈ 165 sqm",
    beds: "3 bed · 3 bath + study",
    from: "₦265,000,000",
    highlight: "8 units",
  },
  {
    name: "Penthouse",
    size: "≈ 210 sqm",
    beds: "4 bed · 4 bath + terrace",
    from: "₦450,000,000",
    highlight: "Only 2",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The payment structure made this doable for us without touching the business. Handover milestones have been documented from day one.",
    name: "A. Okafor",
    role: "3-bed reservation, Phase 1",
  },
  {
    quote:
      "I've bought off-plan in Lekki before. The escrow arrangement and monthly build reports are the difference here.",
    name: "T. Balogun",
    role: "Investor · 2 units",
  },
  {
    quote:
      "Clear pricing, no shifting numbers after signing. Service charge was disclosed upfront — that told me everything.",
    name: "N. Adeyemi",
    role: "Penthouse reservation",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ScarcityStrip />
      <Gallery />
      <Amenities />
      <Units />
      <PaymentPlan />
      <Trust />
      <Testimonials />
      <LeadForm />
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--emerald)]/10 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="PrimeStone Developments" width={40} height={40} className="h-9 w-auto" />
          <span className="hidden font-serif text-lg text-[color:var(--emerald)] sm:inline">
            Primestone
          </span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${WHATSAPP}`}
            aria-label="Call sales"
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--emerald)]/30 text-[color:var(--emerald)] transition hover:bg-[color:var(--emerald-soft)]"
          >
            <PhoneIcon />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp sales"
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--emerald)]/30 text-[color:var(--emerald)] transition hover:bg-[color:var(--emerald-soft)]"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Exterior render of The Oak Residences, Lekki Phase 1 · Artist's Impression"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.04_155/0.85)] via-[oklch(0.2_0.04_155/0.35)] to-[oklch(0.2_0.04_155/0.4)]" />
        <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/90 backdrop-blur">
          Artist's Impression
        </div>

        <div className="container-page relative flex h-full flex-col justify-end pb-10 sm:pb-16">
          <p className="eyebrow text-white/80">The Oak Residences · Lekki Phase 1</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[2.25rem] leading-[1.05] text-white sm:text-6xl">
            Own a boutique home in Lekki Phase 1 —{" "}
            <span className="italic text-[color:var(--bronze)]">before</span> the postcode reprices it.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            From <strong className="text-white">₦185M</strong> · 2 &amp; 3-bed and 2 penthouses · Handover Q1 2028
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#reserve" className="btn-bronze hover:btn-bronze-hover">
              Reserve a Unit
              <ArrowIcon />
            </a>
            <a
              href="#units"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See units &amp; pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Scarcity strip ---------- */
function ScarcityStrip() {
  return (
    <div className="bg-[color:var(--bronze)] text-[color:var(--bronze-foreground)]">
      <div className="container-page grid grid-cols-1 gap-2 py-3 text-sm sm:grid-cols-3 sm:text-[13px]">
        <div className="flex items-center gap-2">
          <PulseDot />
          <span><strong>14 of 22</strong> units remaining</span>
        </div>
        <div className="flex items-center gap-2 sm:justify-center">
          <span className="opacity-80">Phase 1 pricing</span>
          <span>·</span>
          <strong>from ₦185M</strong>
        </div>
        <div className="flex items-center gap-2 sm:justify-end">
          <span className="opacity-80">Ends</span>
          <strong>31 July 2026</strong>
          <span className="opacity-80">(price tier moves +7%)</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Renders</p>
            <h2 className="mt-2 text-3xl sm:text-4xl text-[color:var(--emerald)]">
              A closer look
            </h2>
            <span className="divider-emerald mt-4" />
          </div>
          <p className="text-xs uppercase tracking-widest text-[color:var(--emerald)]/60">
            All images: Artist's Impression
          </p>
        </div>

        <div className="mt-8 -mx-5 overflow-x-auto pb-4 sm:mx-0">
          <div className="flex gap-4 px-5 sm:grid sm:grid-cols-3 sm:px-0">
            {GALLERY.map((g, i) => (
              <figure
                key={i}
                className="group relative min-w-[85%] shrink-0 overflow-hidden rounded-xl border border-[color:var(--emerald)]/10 bg-card shadow-[0_10px_30px_-20px_oklch(0.28_0.05_155/0.5)] sm:min-w-0"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  width={1600}
                  height={1120}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <figcaption className="flex items-center justify-between border-t border-[color:var(--emerald)]/10 bg-background px-4 py-3 text-sm">
                  <span className="text-[color:var(--emerald)]">{g.caption}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[color:var(--emerald)]/50">
                    Impression
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Amenities ---------- */
function Amenities() {
  return (
    <section className="border-y border-[color:var(--emerald)]/10 bg-[color:var(--emerald-soft)] py-16 sm:py-24">
      <div className="container-page">
        <p className="eyebrow">Features &amp; amenities</p>
        <h2 className="mt-2 max-w-xl text-3xl sm:text-4xl text-[color:var(--emerald)]">
          Built for Lagos. No shortcuts.
        </h2>
        <span className="divider-emerald mt-4" />

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-[color:var(--emerald)]/10 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((a) => (
            <div key={a.title} className="bg-background p-5">
              <h3 className="font-serif text-lg text-[color:var(--emerald)]">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Units ---------- */
function Units() {
  return (
    <section id="units" className="py-16 sm:py-24">
      <div className="container-page">
        <p className="eyebrow">Floor plans &amp; pricing</p>
        <h2 className="mt-2 text-3xl sm:text-4xl text-[color:var(--emerald)]">Three configurations</h2>
        <span className="divider-emerald mt-4" />
        <p className="mt-4 max-w-xl text-muted-foreground">
          Prices are Phase 1 pricing. Service charge is disclosed upfront:
          <strong className="text-[color:var(--emerald)]"> ₦2M–₦3.5M / year</strong> (band by unit type,
          reviewed annually).
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {UNITS.map((u) => (
            <article
              key={u.name}
              className="flex flex-col rounded-2xl border border-[color:var(--emerald)]/15 bg-card p-6 shadow-[0_10px_40px_-30px_oklch(0.28_0.05_155/0.7)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_oklch(0.28_0.05_155/0.6)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[color:var(--emerald)]">{u.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{u.beds}</p>
                </div>
                <span className="rounded-full border border-[color:var(--emerald)]/25 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[color:var(--emerald)]">
                  {u.highlight}
                </span>
              </div>

              <div className="mt-6 border-y border-dashed border-[color:var(--emerald)]/20 py-4">
                <p className="text-xs uppercase tracking-widest text-[color:var(--emerald)]/60">
                  Interior area
                </p>
                <p className="mt-1 font-serif text-xl text-[color:var(--emerald)]">{u.size}</p>
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-widest text-[color:var(--emerald)]/60">From</p>
                <p className="mt-1 font-serif text-3xl text-[color:var(--emerald)]">{u.from}</p>
              </div>

              <a
                href="#reserve"
                className="btn-bronze hover:btn-bronze-hover mt-6 w-full"
              >
                Reserve this Unit
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Payment plan ---------- */
function PaymentPlan() {
  const steps = [
    {
      pct: "30%",
      title: "On reservation",
      desc: "Deposit paid into escrow. Allocation locked to unit + floor. Full receipt + subscription pack issued.",
    },
    {
      pct: "40%",
      title: "Months 1 – 12",
      desc: "Structured monthly installments through construction. Milestone reports every 60 days.",
    },
    {
      pct: "30%",
      title: "Months 13 – 18",
      desc: "Final draws tied to fit-out and snagging. Balance clears before keys.",
    },
    {
      pct: "Keys",
      title: "Handover · Q1 2028",
      desc: "Title documents transferred. Move-in ready with amenities live.",
    },
  ];
  return (
    <section className="border-y border-[color:var(--emerald)]/10 bg-[color:var(--emerald-soft)] py-16 sm:py-24">
      <div className="container-page">
        <p className="eyebrow">Payment structure</p>
        <h2 className="mt-2 text-3xl sm:text-4xl text-[color:var(--emerald)]">
          30% down. 18 months to keys.
        </h2>
        <span className="divider-emerald mt-4" />
        <p className="mt-4 max-w-xl text-muted-foreground">
          Standard off-plan terms for this market — spread through construction, no balloon
          payments at the end.
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={i}
              className="relative rounded-xl border border-[color:var(--emerald)]/15 bg-background p-5"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl text-[color:var(--emerald)]">{s.pct}</span>
                <span className="text-[10px] uppercase tracking-widest text-[color:var(--emerald)]/50">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-lg text-[color:var(--emerald)]">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#reserve" className="btn-bronze hover:btn-bronze-hover">
            Lock in Phase 1 pricing
            <ArrowIcon />
          </a>
          <p className="text-sm text-muted-foreground">
            Phase 2 pricing goes live 1 April 2026.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
function Trust() {
  const rows = [
    { k: "Developer", v: "PrimeStone Developments Ltd" },
    { k: "RC Number", v: "RC 1487XXX" },
    { k: "Completed projects", v: "6 developments in Lagos since 2014" },
    { k: "Escrow partner", v: "Funds held in escrow with Sterling Trustees Ltd" },
    { k: "Legal counsel", v: "Perchstone & Graeys · title verified" },
    { k: "Regulatory", v: "REDAN member · LASRERA-registered project" },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <p className="eyebrow">Credibility &amp; compliance</p>
        <h2 className="mt-2 max-w-2xl text-3xl sm:text-4xl text-[color:var(--emerald)]">
          The boring, important part.
        </h2>
        <span className="divider-emerald mt-4" />

        <dl className="mt-10 divide-y divide-[color:var(--emerald)]/10 rounded-xl border border-[color:var(--emerald)]/15">
          {rows.map((r) => (
            <div
              key={r.k}
              className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-6"
            >
              <dt className="text-xs uppercase tracking-widest text-[color:var(--emerald)]/60">
                {r.k}
              </dt>
              <dd className="text-[color:var(--emerald)]">{r.v}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-xs text-muted-foreground">
          Full subscription pack, escrow terms, and title documents are shared during reservation
          due diligence.
        </p>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <section className="bg-[color:var(--emerald)] py-16 text-[color:var(--bronze-foreground)] sm:py-24">
      <div className="container-page">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
          What buyers say
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl text-white sm:text-4xl">Reservations, not renders.</h2>
        <span className="mt-4 block h-px w-12 bg-white/40" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="font-serif text-lg leading-relaxed text-white">"{t.quote}"</p>
              <footer className="mt-5 border-t border-white/10 pt-4 text-sm">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-white/60">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Lead form (Zapier webhook) ---------- */
function LeadForm() {
  const [webhook, setWebhook] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", interest: "3-Bedroom", email: "", budget: "", location: "", message: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!webhook) {
      setStatus("error");
      return;
    }
    // simple client-side validation
    if (form.name.trim().length < 2 || form.phone.trim().length < 7) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await fetch(webhook, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          project: "The Oak Residences",
          submitted_at: new Date().toISOString(),
          source: typeof window !== "undefined" ? window.location.origin : "",
        }),
      });
      setStatus("sent");
      setForm({ name: "", phone: "", interest: "3-Bedroom", email: "", budget: "", location: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="reserve" className="py-16 sm:py-24">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Reserve a unit</p>
          <h2 className="mt-2 text-3xl sm:text-4xl text-[color:var(--emerald)]">
            Get a callback within one business day with full pricing and floor plans.
          </h2>
          <span className="divider-emerald mt-4" />
          <p className="mt-4 max-w-md text-muted-foreground">
            One of our sales team will call you back with the current price sheet, floor plans,
            escrow terms, and payment schedule tailored to your chosen unit.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-[color:var(--emerald)]">
            <li className="flex items-center gap-2"><CheckIcon /> No obligation · Phase 1 pricing held for 72 hours after call</li>
            <li className="flex items-center gap-2"><CheckIcon /> Escrow-backed reservation, refundable per subscription terms</li>
            <li className="flex items-center gap-2"><CheckIcon /> Speak directly with the developer, not an agent chain</li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-[color:var(--emerald)]/15 bg-card p-6 shadow-[0_20px_60px_-40px_oklch(0.28_0.05_155/0.6)] sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4">
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--emerald)]/70">
                Full name
              </span>
              <input
                type="text"
                required
                maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[color:var(--emerald)]/20 bg-background px-4 py-3 text-[color:var(--emerald)] outline-none transition focus:border-[color:var(--bronze)] focus:ring-2 focus:ring-[color:var(--bronze)]/30"
                placeholder="e.g. Chinelo Okafor"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--emerald)]/70">
                WhatsApp phone
              </span>
              <input
                type="tel"
                required
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[color:var(--emerald)]/20 bg-background px-4 py-3 text-[color:var(--emerald)] outline-none transition focus:border-[color:var(--bronze)] focus:ring-2 focus:ring-[color:var(--bronze)]/30"
                placeholder="+234 …"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--emerald)]/70">
                Email Address
              </span>
              <input
                type="email"
                required
                maxLength={35}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[color:var(--emerald)]/20 bg-background px-4 py-3 text-[color:var(--emerald)] outline-none transition focus:border-[color:var(--bronze)] focus:ring-2 focus:ring-[color:var(--bronze)]/30"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--emerald)]/70">
                Budget
              </span>
              <input
                type="budget"
                required
                maxLength={20}
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[color:var(--emerald)]/20 bg-background px-4 py-3 text-[color:var(--emerald)] outline-none transition focus:border-[color:var(--bronze)] focus:ring-2 focus:ring-[color:var(--bronze)]/30"
                placeholder="Approximate budget in ₦"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--emerald)]/70">
                Preferred Location
              </span>
              <input
                type="location"
                required
                maxLength={20}
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[color:var(--emerald)]/20 bg-background px-4 py-3 text-[color:var(--emerald)] outline-none transition focus:border-[color:var(--bronze)] focus:ring-2 focus:ring-[color:var(--bronze)]/30"
                placeholder="e.g. Lekki Phase 1, Banana Island"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--emerald)]/70">
                Message / Questions 
              </span>
              <input
                type="message"
                required
                maxLength={20}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[color:var(--emerald)]/20 bg-background px-4 py-3 text-[color:var(--emerald)] outline-none transition focus:border-[color:var(--bronze)] focus:ring-2 focus:ring-[color:var(--bronze)]/30"
                placeholder="preferred message or questions"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--emerald)]/70">
                Unit of interest
              </span>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[color:var(--emerald)]/20 bg-background px-4 py-3 text-[color:var(--emerald)] outline-none transition focus:border-[color:var(--bronze)] focus:ring-2 focus:ring-[color:var(--bronze)]/30"
              >
                <option>2-Bedroom · from ₦185M</option>
                <option>3-Bedroom · from ₦265M</option>
                <option>Penthouse · from ₦450M</option>
              </select>
            </label>

            <details className="text-xs text-muted-foreground">
              <summary className="cursor-pointer select-none text-[color:var(--emerald)]/70">
                Demo settings · Zapier webhook URL
              </summary>
              <input
                type="url"
                value={webhook}
                onChange={(e) => setWebhook(e.target.value)}
                placeholder="https://hooks.zapier.com/hooks/catch/…"
                className="mt-2 w-full rounded-lg border border-[color:var(--emerald)]/20 bg-background px-3 py-2 text-xs text-[color:var(--emerald)] outline-none"
              />
              <p className="mt-2">
                Uses a <strong>Webhooks by Zapier</strong> catch hook (instant trigger). Submissions
                are sent with <code>mode: "no-cors"</code>, so confirm delivery in your Zap history.
              </p>
            </details>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-bronze hover:btn-bronze-hover mt-2 w-full disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : "Request callback"}
              <ArrowIcon />
            </button>

            {status === "sent" && (
              <p className="text-sm text-[color:var(--emerald)]">
                ✓ Received. Our team will call within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Please check your details and Zapier webhook URL, then try again.
              </p>
            )}

            <p className="text-[11px] leading-relaxed text-muted-foreground">
              By submitting you agree to be contacted about The Oak Residences. We don't share your
              details.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-[color:var(--emerald)]/10 bg-background py-10">
      <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={36} height={36} className="h-8 w-auto" />
            <div>
              <p className="font-serif text-lg text-[color:var(--emerald)]">
                PrimeStone Developments
              </p>
              <p className="text-xs text-muted-foreground">
                14B Admiralty Way, Lekki Phase 1, Lagos · {PHONE_DISPLAY}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:justify-end">
          <a href={`tel:${WHATSAPP}`} className="btn-outline-emerald">
            <PhoneIcon /> Call
          </a>
          <a
            href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-emerald"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </div>
      <div className="container-page mt-6 border-t border-[color:var(--emerald)]/10 pt-6 text-center text-xs text-muted-foreground">
        <p className="mt-2">© {new Date().getFullYear()} PrimeStone Developments.</p>
      </div>
    </footer>
  );
}

/* ---------- Icons ---------- */
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.71 1.46h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.41-8.45zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.23-.38a9.9 9.9 0 1 1 8.4 4.65zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.13 8.13 0 0 1-2.4-1.48 8.97 8.97 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
  );
}
function PulseDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"></span>
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
    </span>
  );
}
