import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ProjectTile,
  MaroonPoster,
  MintBottle,
  AmberFlyer,
  NavyBrand,
  PinkEditorial,
  ForestHoney,
} from "@/components/ProjectTile";

export const Route = createFileRoute("/")({
  component: Index,
});

const EMAIL = "okielahenry05@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=Inquiry%20%E2%80%94%20Okiela`;

const services = [
  { n: "01", title: "Posters", body: "Editorial posters and series for galleries, events and music.", dot: "bg-maroon" },
  { n: "02", title: "Labels", body: "Bottle and jar labels with a focus on craft and small runs.", dot: "bg-mint" },
  { n: "03", title: "Flyers", body: "Print and digital flyers for workshops, launches and parties.", dot: "bg-amber" },
  { n: "04", title: "Branding", body: "Wordmarks and full identity systems for small studios and shops.", dot: "bg-navy" },
];

const PALETTE = [
  { bg: "bg-maroon", color: "var(--maroon)" },
  { bg: "bg-amber", color: "var(--amber)" },
  { bg: "bg-mint", color: "var(--mint)" },
  { bg: "bg-navy", color: "var(--navy)" },
  { bg: "bg-pink", color: "var(--pink)" },
  { bg: "bg-forest", color: "var(--forest)" },
  { bg: "bg-accent-sun", color: "var(--accent-sun)" },
];

function Index() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const accent = activeIdx !== null ? PALETTE[activeIdx].color : "var(--accent-tomato)";

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ───── Nav ───── */}
      <header className="hairline-b sticky top-0 z-30 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-10">
          <a href="#top" className="text-sm tracking-tight">
            okiela.
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href={MAILTO}
            className="hairline rounded-[8px] px-3.5 py-2 text-xs transition-opacity hover:opacity-70"
          >
            Available
          </a>
        </div>
        {/* mobile-only nav row */}
        <nav className="hairline-t mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 text-xs text-muted-foreground md:hidden">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
      </header>

      {/* ───── Hero ───── */}
      <section id="top" className="hairline-b relative overflow-hidden">
        <div
          className="pointer-events-none absolute right-40 top-40 hidden h-3 w-3 rounded-full transition-colors duration-300 lg:block"
          style={{ backgroundColor: accent }}
        />
        <div className="pointer-events-none absolute left-[42%] top-24 hidden h-2 w-2 rounded-full bg-forest lg:block" />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
              style={{ backgroundColor: accent }}
            />
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]">
              Multidisciplinary creative · Kingston, JA
            </p>
          </div>
          <div className="mt-4 flex flex-col items-end gap-2 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:gap-10">
            <h1 className="order-2 self-stretch text-left font-sketch text-[26vw] leading-[0.9] sm:order-1 sm:shrink-0 sm:self-auto sm:text-[180px] lg:text-[220px]">
              okiela
              <span className="transition-colors duration-300" style={{ color: accent }}>
                .
              </span>
            </h1>
            <div
              className="relative order-1 h-[34vw] w-[34vw] max-h-[160px] max-w-[160px] shrink-0 sm:order-2 sm:ml-auto sm:h-[200px] sm:w-[200px] sm:max-h-none sm:max-w-none lg:h-[260px] lg:w-[260px]"
              style={{ animation: "lily-sway 9s ease-in-out infinite" }}
              aria-hidden
            >
              <img
                src="/waterlilly.png"
                alt=""
                className="h-full w-full object-cover"
                style={{
                  animation: "lily-breathe 7s ease-in-out infinite",
                  WebkitMaskImage:
                    "radial-gradient(circle at 50% 55%, black 30%, rgba(0,0,0,0.55) 48%, transparent 70%)",
                  maskImage:
                    "radial-gradient(circle at 50% 55%, black 30%, rgba(0,0,0,0.55) 48%, transparent 70%)",
                  mixBlendMode: "multiply",
                  filter: "saturate(0.92) contrast(1.02)",
                }}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md font-serif text-xl leading-snug text-foreground sm:text-2xl lg:text-[28px]">
              Quiet, considered design — <span className="text-accent-tomato">posters</span>,{" "}
              <span className="text-forest">labels</span>,{" "}
              <span className="text-navy">flyers</span> and{" "}
              <span className="text-pink-ink">identity systems</span> made one piece at a time.
            </p>
            <div className="flex gap-3">
              <a
                href="#work"
                className="hairline rounded-[10px] bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-85"
              >
                View work
              </a>
              <a
                href={MAILTO}
                className="hairline rounded-[10px] px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                Start a project
              </a>
            </div>
          </div>

          {/* swatch row */}
          <div className="mt-16 hairline-t pt-6 flex items-center justify-between">
            <p className="font-sketch text-lg text-muted-foreground">
              working palette
            </p>
            <div className="-mr-2 flex items-center gap-1 sm:gap-2">
              {PALETTE.map((p, i) => {
                const active = activeIdx === i;
                return (
                  <button
                    key={p.bg}
                    type="button"
                    onClick={() => setActiveIdx(active ? null : i)}
                    aria-label={`Use palette swatch ${i + 1} as accent`}
                    aria-pressed={active}
                    className="grid h-9 w-9 cursor-pointer place-items-center rounded-full sm:h-7 sm:w-7"
                  >
                    <span
                      className={`block h-5 w-5 rounded-full sm:h-4 sm:w-4 ${p.bg} ${active ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}`}
                      style={{
                        animation: "swatch-wave 2.4s ease-in-out infinite",
                        animationDelay: `${i * 0.14}s`,
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Services ───── */}
      <section id="services" className="hairline-b">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <p className="font-sketch text-2xl text-foreground lg:text-3xl">
              services
            </p>
            <p className="font-sketch text-lg text-muted-foreground">
              four things, done well
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.n}
                className="hairline group flex flex-col gap-8 rounded-[10px] bg-card p-6 transition-colors hover:bg-secondary lg:p-7"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground tabular-nums">
                    {s.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Selected work ───── */}
      <section id="work" className="hairline-b">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-12 flex items-baseline justify-between">
            <p className="font-sketch text-2xl text-foreground lg:text-3xl">
              selected work
            </p>
            <p className="font-sketch text-lg text-muted-foreground">
              2023 — 2026
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
            <ProjectTile palette="maroon" name="Nights in motion" category="Poster series" year="2026">
              <MaroonPoster />
            </ProjectTile>
            <ProjectTile palette="mint" name="Slow brew co." category="Bottle label" year="2025">
              <MintBottle />
            </ProjectTile>
            <ProjectTile palette="amber" name="Hands & paper" category="Workshop flyer" year="2025">
              <AmberFlyer />
            </ProjectTile>
            <ProjectTile palette="navy" name="Atelier Mar" category="Brand identity" year="2025">
              <NavyBrand />
            </ProjectTile>
            <ProjectTile palette="pink" name="On softness" category="Editorial poster" year="2024">
              <PinkEditorial />
            </ProjectTile>
            <ProjectTile palette="forest" name="Wild bloom" category="Honey jar label" year="2024">
              <ForestHoney />
            </ProjectTile>
          </div>
        </div>
      </section>

      {/* ───── About ───── */}
      <section
        id="about"
        className="hairline-b relative overflow-hidden bg-background text-foreground"
      >
        {/* graph-paper grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 95%)",
          }}
        />
        {/* paper grain noise */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(var(--foreground) 0.6px, transparent 0.6px)",
            backgroundSize: "4px 4px",
          }}
        />
        {/* hand-drawn building blocks */}
        <BuildingBlocks />

        {/* small color study — replaces solid blob */}
        <div className="pointer-events-none absolute bottom-10 left-8 hidden flex-col gap-2 lg:flex">
          <span className="font-sketch text-sm text-muted-foreground">color study</span>
          <div className="grid grid-cols-3 gap-1.5">
            {["bg-maroon", "bg-amber", "bg-mint", "bg-navy", "bg-pink", "bg-forest"].map((c, i) => (
              <span
                key={c}
                className={`h-5 w-5 rounded-[3px] ${c}`}
                style={{
                  animation: "swatch-wave 3s ease-in-out infinite",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-10 top-12 h-3 w-3 rounded-full bg-accent-tomato" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-tomato" />
            <p className="font-sketch text-2xl text-foreground lg:text-3xl">about</p>
          </div>
          <blockquote className="mt-10 max-w-4xl font-serif text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            “I move between{" "}
            <span className="relative inline-block">
              posters
              <SketchUnderline color="var(--accent-tomato)" />
            </span>,{" "}
            <span className="relative inline-block">
              type
              <SketchUnderline color="var(--forest)" />
            </span>{" "}
            and{" "}
            <span className="relative inline-block">
              identity
              <SketchUnderline color="var(--navy)" />
            </span>{" "}
            because every craft teaches you to see something the others can't — and the best ideas refuse to live in just one shape.”
          </blockquote>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
            {[
              { n: "148", l: "sketches this year", color: "var(--accent-tomato)", icon: "pencil" as const },
              { n: "9", l: "sketchbooks filled", color: "var(--forest)", icon: "book" as const },
              { n: "∞", l: "ideas in rotation", color: "var(--navy)", icon: "spark" as const },
            ].map((s) => (
              <div key={s.l} className="relative">
                <div className="flex items-baseline gap-3">
                  <div className="font-serif text-6xl tabular-nums lg:text-7xl">{s.n}</div>
                  <StatIcon type={s.icon} color={s.color} />
                </div>
                <SketchUnderline color={s.color} />
                <div className="mt-5 font-sketch text-lg text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer id="contact">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="font-sketch text-2xl text-muted-foreground lg:text-3xl">
            start a project
          </p>
          <a
            href={MAILTO}
            className="mt-8 block break-words font-serif text-3xl tracking-tight transition-opacity hover:opacity-60 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {EMAIL}
          </a>

          <div className="mt-12 flex items-center gap-2 font-sketch text-base text-muted-foreground">
            <span>made with</span>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              aria-hidden
              style={{ animation: "lily-breathe 1.6s ease-in-out infinite" }}
            >
              <path
                d="M8 12.5 C8 12.5 1.5 8.5 1.5 4.6 C1.5 2.6 3 1.2 4.6 1.2 C6 1.2 7.2 1.9 8 3 C8.8 1.9 10 1.2 11.4 1.2 C13 1.2 14.5 2.6 14.5 4.6 C14.5 8.5 8 12.5 8 12.5 Z"
                fill="var(--accent-tomato)"
              />
            </svg>
            <span>in Kingston, JA</span>
          </div>

          <div className="mt-8 hairline-t pt-8 flex flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Okiela. All small things, carefully.</p>
            <div className="flex gap-8">
              <a href="#" className="transition-colors hover:text-foreground">Instagram</a>
              <a href="#" className="transition-colors hover:text-foreground">Are.na</a>
              <a href="#" className="transition-colors hover:text-foreground">Read.cv</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StatIcon({ type, color }: { type: "pencil" | "book" | "spark"; color: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 32 32",
    fill: "none" as const,
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (type === "pencil") {
    return (
      <svg
        {...common}
        aria-hidden
        style={{ animation: "block-drift 3.6s ease-in-out infinite", ["--rot" as string]: "-12deg" }}
      >
        <path d="M5 27 L9 23 L24 8 L27 11 L12 26 Z" />
        <path d="M9 23 L12 26" />
        <path d="M22 6 L26 10" />
      </svg>
    );
  }
  if (type === "book") {
    return (
      <svg
        {...common}
        aria-hidden
        style={{ animation: "block-drift 4s ease-in-out infinite 0.4s", ["--rot" as string]: "6deg" }}
      >
        <path d="M6 7 L16 5 L26 7 L26 26 L16 24 L6 26 Z" />
        <path d="M16 5 L16 24" />
        <path d="M9 11 L13 10.4 M9 15 L13 14.4 M19 10.4 L23 11 M19 14.4 L23 15" opacity="0.6" />
      </svg>
    );
  }
  // spark
  return (
    <svg
      {...common}
      aria-hidden
      style={{ animation: "block-spin-slow 18s linear infinite" }}
    >
      <path d="M16 4 L18 14 L28 16 L18 18 L16 28 L14 18 L4 16 L14 14 Z" fill={color} stroke="none" opacity="0.9" />
    </svg>
  );
}

function BuildingBlocks() {
  return (
    <>
      {/* outlined square with ledger lines — top left */}
      <svg
        className="pointer-events-none absolute left-[6%] top-16 hidden lg:block"
        width="84"
        height="84"
        viewBox="0 0 84 84"
        style={{ ["--rot" as string]: "-6deg", animation: "block-drift 9s ease-in-out infinite" }}
        aria-hidden
      >
        <path
          d="M8 10 L74 6 L78 76 L12 80 Z"
          fill="none"
          stroke="var(--forest)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="320"
          style={{ ["--len" as string]: "320", animation: "block-draw 2.4s ease-out 0.1s both" }}
        />
        <path
          d="M20 24 L62 22 M22 38 L60 36 M24 52 L58 50 M26 66 L56 64"
          fill="none"
          stroke="var(--forest)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {/* dotted circle — middle */}
      <svg
        className="pointer-events-none absolute left-[42%] top-10 hidden lg:block"
        width="62"
        height="62"
        viewBox="0 0 62 62"
        style={{ animation: "block-spin-slow 28s linear infinite" }}
        aria-hidden
      >
        <circle
          cx="31"
          cy="31"
          r="24"
          fill="none"
          stroke="var(--accent-tomato)"
          strokeWidth="1.8"
          strokeDasharray="3 5"
        />
      </svg>

      {/* hand-drawn triangle — right side */}
      <svg
        className="pointer-events-none absolute right-[10%] top-32 hidden md:block"
        width="92"
        height="92"
        viewBox="0 0 92 92"
        style={{ ["--rot" as string]: "8deg", animation: "block-drift 11s ease-in-out infinite 0.6s" }}
        aria-hidden
      >
        <path
          d="M46 8 L82 78 L10 82 Z"
          fill="none"
          stroke="var(--navy)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="260"
          style={{ ["--len" as string]: "260", animation: "block-draw 2.6s ease-out 0.4s both" }}
        />
      </svg>

      {/* small filled brick — left lower */}
      <svg
        className="pointer-events-none absolute left-[15%] bottom-32 hidden lg:block"
        width="70"
        height="46"
        viewBox="0 0 70 46"
        style={{ ["--rot" as string]: "-4deg", animation: "block-drift 7s ease-in-out infinite 0.3s" }}
        aria-hidden
      >
        <rect x="3" y="3" width="64" height="40" rx="2" fill="var(--accent-sun)" opacity="0.7" />
        <rect
          x="3"
          y="3"
          width="64"
          height="40"
          rx="2"
          fill="none"
          stroke="var(--maroon)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeDasharray="220"
          style={{ ["--len" as string]: "220", animation: "block-draw 2.2s ease-out 0.7s both" }}
        />
      </svg>

      {/* arc / measurement curve — right lower */}
      <svg
        className="pointer-events-none absolute right-[22%] bottom-16 hidden lg:block"
        width="100"
        height="60"
        viewBox="0 0 100 60"
        aria-hidden
      >
        <path
          d="M6 50 Q50 -6 94 50"
          fill="none"
          stroke="var(--maroon)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="2 6"
          opacity="0.85"
        />
        <circle cx="6" cy="50" r="2.6" fill="var(--maroon)" />
        <circle cx="94" cy="50" r="2.6" fill="var(--maroon)" />
      </svg>

      {/* small cross stitch — center upper */}
      <svg
        className="pointer-events-none absolute left-[28%] top-40 hidden md:block"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        aria-hidden
        style={{ animation: "block-drift 5s ease-in-out infinite" }}
      >
        <path
          d="M4 11 L18 11 M11 4 L11 18"
          stroke="var(--pink-ink)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      {/* arrow annotation — pointing to blockquote area */}
      <svg
        className="pointer-events-none absolute right-[6%] top-[40%] hidden lg:block"
        width="60"
        height="80"
        viewBox="0 0 60 80"
        aria-hidden
      >
        <path
          d="M50 8 Q42 30 30 44 Q18 56 12 70"
          fill="none"
          stroke="var(--accent-tomato)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="180"
          style={{ ["--len" as string]: "180", animation: "block-draw 2.4s ease-out 1s both" }}
        />
        <path
          d="M12 70 L8 60 M12 70 L20 64"
          fill="none"
          stroke="var(--accent-tomato)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

function SketchUnderline({ color = "var(--accent-tomato)" }: { color?: string }) {
  return (
    <svg
      className="absolute -bottom-1 left-0 w-full"
      height="8"
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M1 4 Q15 1 30 4 T60 4 T99 4"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="200"
        style={{ ["--len" as string]: "200", animation: "block-draw 1.6s ease-out 0.3s both" }}
      />
    </svg>
  );
}
