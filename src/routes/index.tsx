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

const services = [
  { n: "01", title: "Posters", body: "Editorial posters and series for galleries, events and music.", dot: "bg-maroon" },
  { n: "02", title: "Labels", body: "Bottle and jar labels with a focus on craft and small runs.", dot: "bg-mint" },
  { n: "03", title: "Flyers", body: "Print and digital flyers for workshops, launches and parties.", dot: "bg-amber" },
  { n: "04", title: "Branding", body: "Wordmarks and full identity systems for small studios and shops.", dot: "bg-navy" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ───── Nav ───── */}
      <header className="hairline-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
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
            href="#contact"
            className="hairline rounded-[8px] px-3.5 py-1.5 text-xs transition-opacity hover:opacity-70"
          >
            Available
          </a>
        </div>
      </header>

      {/* ───── Hero ───── */}
      <section id="top" className="hairline-b relative overflow-hidden">
        <div className="pointer-events-none absolute right-40 top-40 hidden h-3 w-3 rounded-full bg-accent-tomato lg:block" />
        <div className="pointer-events-none absolute left-[42%] top-24 hidden h-2 w-2 rounded-full bg-forest lg:block" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-tomato" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Multidisciplinary creative · Kingston, JA
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3 sm:gap-6 lg:gap-10">
            <h1 className="font-sketch shrink-0 text-[22vw] leading-[0.9] sm:text-[180px] lg:text-[220px]">
              okiela<span className="text-accent-tomato">.</span>
            </h1>
            <div
              className="relative h-[32vw] w-[32vw] max-h-[300px] max-w-[300px] shrink-0 sm:h-[200px] sm:w-[200px] lg:h-[260px] lg:w-[260px]"
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
          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md font-serif text-2xl leading-snug text-foreground lg:text-[28px]">
              Quiet, considered design — <span className="text-accent-tomato">posters</span>,{" "}
              <span className="text-forest">labels</span>,{" "}
              <span className="text-navy">flyers</span> and{" "}
              <span className="text-pink-ink">identity systems</span> made one piece at a time.
            </p>
            <div className="flex gap-3">
              <a
                href="#work"
                className="hairline rounded-[10px] bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-85"
              >
                View work
              </a>
              <a
                href="#contact"
                className="hairline rounded-[10px] px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
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
            <div className="flex items-center gap-2">
              {["bg-maroon", "bg-amber", "bg-mint", "bg-navy", "bg-pink", "bg-forest", "bg-accent-sun"].map((c) => (
                <span key={c} className={`h-4 w-4 rounded-full ${c}`} />
              ))}
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
      <section id="about" className="hairline-b relative overflow-hidden bg-accent-sun text-maroon-ink">
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-tomato opacity-90" />
        <div className="pointer-events-none absolute right-10 top-12 h-3 w-3 rounded-full bg-forest" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-maroon-ink" />
            <p className="font-sketch text-2xl opacity-80 lg:text-3xl">about</p>
          </div>
          <blockquote className="mt-10 max-w-4xl font-serif text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            “I make small, careful things — labels you want to keep, posters you want to frame,
            wordmarks that feel like they were always there.”
          </blockquote>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] sm:grid-cols-3">
            {[
              { n: "84", l: "Projects shipped" },
              { n: "07", l: "Years designing" },
              { n: "42", l: "Happy clients" },
            ].map((s) => (
              <div key={s.l} className="hairline rounded-[10px] bg-background p-6 lg:p-8">
                <div className="font-serif text-5xl tabular-nums lg:text-6xl">{s.n}</div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
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
            href="mailto:hello@okiela.studio"
            className="mt-8 block font-serif text-5xl tracking-tight transition-opacity hover:opacity-60 sm:text-6xl lg:text-7xl"
          >
            hello@okiela.studio
          </a>

          <div className="mt-16 hairline-t pt-8 flex flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Okiela. Kingston, Jamaica.</p>
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

