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
  head: () => ({
    meta: [
      { title: "Okiela — Graphic designer, Kingston" },
      {
        name: "description",
        content:
          "Okiela is a graphic designer based in Kingston, Jamaica, working on posters, labels, flyers and brand identity.",
      },
      { property: "og:title", content: "Okiela — Graphic designer, Kingston" },
      {
        property: "og:description",
        content: "Posters, labels, flyers and brand identity, made quietly in Kingston, JA.",
      },
    ],
  }),
});

const services = [
  { n: "01", title: "Posters", body: "Editorial posters and series for galleries, events and music." },
  { n: "02", title: "Labels", body: "Bottle and jar labels with a focus on craft and small runs." },
  { n: "03", title: "Flyers", body: "Print and digital flyers for workshops, launches and parties." },
  { n: "04", title: "Branding", body: "Wordmarks and full identity systems for small studios and shops." },
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
      <section id="top" className="hairline-b">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Graphic designer · Kingston, JA
          </p>
          <h1 className="mt-8 text-[18vw] leading-[0.85] tracking-[-0.04em] sm:text-[140px] lg:text-[180px]">
            okiela.
          </h1>
          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md font-serif text-2xl leading-snug text-foreground lg:text-[28px]">
              Quiet, considered design — posters, labels, flyers and identity systems made one piece at a time.
            </p>
            <div className="flex gap-3">
              <a
                href="#work"
                className="hairline rounded-[10px] px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
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
        </div>
      </section>

      {/* ───── Services ───── */}
      <section id="services" className="hairline-b">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Services
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Four things, done well
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.n}
                className="hairline flex flex-col gap-8 rounded-[10px] bg-card p-6 lg:p-7"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground tabular-nums">
                  {s.n}
                </span>
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
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Selected work
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
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
      <section id="about" className="hairline-b bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            About
          </p>
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
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Start a project
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
