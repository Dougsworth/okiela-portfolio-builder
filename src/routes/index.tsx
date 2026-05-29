import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ProjectTile,
  DualityPoster,
  AureacoveLabel,
  CreativeSpaceFlyer,
  GraphicStudio,
  BBPasteries,
  FieldNotes,
  tilePaletteBg,
  tilePaletteInk,
  type Palette,
} from "@/components/ProjectTile";
import type { ComponentType } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const EMAIL = "okielahenry05@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=Inquiry%20%E2%80%94%20Okiela`;

// ─── Profile & contact ───────────────────────────────────────────────
// Edit these in one place. Leave a field as "" and its link is hidden.
const PROFILE = {
  name: "Okiela Henry",
  title: "Creative Director · Designer · Multidisciplinary Creative",
  location: "Kingston, Jamaica",
  email: EMAIL,
  phone: "876-507-9093",
  linkedin: "", // full URL, e.g. "https://www.linkedin.com/in/okielahenry"
  instagram: "", // full URL, e.g. "https://instagram.com/aureacove"
  portfolio: "", // live site URL, e.g. "https://okiela.com"
};

// CV is shared on request rather than published — opens a pre-filled email.
const CV_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "CV / résumé request — Okiela Henry",
)}&body=${encodeURIComponent(
  "Hi Okiela,\n\nI came across your portfolio and would love to see your CV / résumé.\n\n",
)}`;

// Built into ordered footer / résumé links; only non-empty entries render.
const LINKS: { label: string; href: string; display: string }[] = [
  PROFILE.email && { label: "Email", href: MAILTO, display: PROFILE.email },
  PROFILE.phone && { label: "Phone", href: `tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`, display: PROFILE.phone },
  PROFILE.linkedin && { label: "LinkedIn", href: PROFILE.linkedin, display: "LinkedIn" },
  PROFILE.instagram && { label: "Instagram", href: PROFILE.instagram, display: "Instagram" },
  PROFILE.portfolio && { label: "Portfolio", href: PROFILE.portfolio, display: PROFILE.portfolio.replace(/^https?:\/\//, "") },
].filter(Boolean) as { label: string; href: string; display: string }[];

const services = [
  {
    n: "01",
    title: "Brand identity",
    body: "Wordmarks, logos and identity systems for studios, brands and teams.",
    deliverables: ["Logo", "Wordmark", "Brand sheet"],
    dot: "bg-navy",
  },
  {
    n: "02",
    title: "Photography",
    body: "Product, portrait, event and botanical photography — natural light, edited and delivered.",
    deliverables: ["Product", "Portrait", "Event"],
    dot: "bg-forest",
  },
  {
    n: "03",
    title: "Social & print",
    body: "Posters, flyers, menus and social posts. Built in Canva, Adobe Express and InDesign.",
    deliverables: ["Posters", "Social posts", "Menus"],
    dot: "bg-maroon",
  },
  {
    n: "04",
    title: "Aureacove jewellery",
    body: "Custom handmade pieces and small-batch collections for shops, weddings and personal gifts.",
    deliverables: ["Custom", "Collections", "Wholesale"],
    dot: "bg-mint",
  },
];

const availableFor = [
  "Brand identity",
  "Logo design",
  "Photography",
  "Social content",
  "Hand-lettering",
  "Aureacove commissions",
];


type Project = {
  no: string;
  palette: Palette;
  name: string;
  category: string;
  year: string;
  period: string;
  role: string;
  tagline: string;
  body: string[];
  deliverables: string[];
  tools: string[];
  cta: string;
  Tile: ComponentType;
  images?: string[];
};

const U = (id: string, w = 900, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

const projects: Project[] = [
  {
    no: "001",
    palette: "maroon",
    name: "The duality of an optimist",
    category: "Personal manifesto",
    year: "2026",
    period: "2024 — ongoing",
    role: "Concept, art direction, copywriting",
    tagline:
      "A personal manifesto exploring the optimist's two minds — quiet curiosity and loud belief — built from posters, short writing and photographic studies.",
    body: [
      "Duality began as a sketchbook habit — a way of holding two truths at once: science and superstition, work and play, the river and the deadline.",
      "The series collects posters, manifestos and photo-essays gathered on walks through Kingston and the Blue Mountains. Some pieces are sold as small prints; others stay in the book.",
    ],
    deliverables: ["Poster series", "Manifesto text", "Editorial type", "Photo essays"],
    tools: ["InDesign", "Photoshop", "Hand-lettering"],
    cta: "Commission a personal series →",
    Tile: DualityPoster,
    images: [
      "/photos/photo-1.jpeg",
      "/photos/photo-3.jpeg",
      "/photos/photo-8.jpeg",
      "/photos/photo-9.jpeg",
    ],
  },
  {
    no: "002",
    palette: "mint",
    name: "Aureacove",
    category: "Jewellery & craft studio",
    year: "2023 — now",
    period: "Founded 2023",
    role: "Founder, designer, photographer, social",
    tagline:
      "A handmade jewellery and crafts label — sea-glass, waxed cord and small-batch beadwork, made one piece at a time in Kingston.",
    body: [
      "Aureacove started as a summer experiment with sea-glass and waxed cord. It's now a small label of one-of-one and small-batch pieces — bracelets, anklets, pendants and gifts.",
      "Every piece is made by hand, photographed in natural light and shipped with a handwritten note. Custom orders and small wholesale runs welcome for boutiques, weddings and gift drops.",
    ],
    deliverables: ["Brand identity", "Product design", "Wholesale collections", "Custom commissions"],
    tools: ["Hand fabrication", "Beadwork", "Wire", "Macrame"],
    cta: "Order a custom piece →",
    Tile: AureacoveLabel,
    images: [
      U("1599643477877-530eb83abc8e"),
      U("1611652022419-a9419f74343d"),
      U("1605100804763-247f67b3557e"),
      U("1543294001-f7cd5d7fb516"),
    ],
  },
  {
    no: "003",
    palette: "amber",
    name: "Creative Space",
    category: "Art tutoring · ages 3–12",
    year: "2023",
    period: "Summer 2023",
    role: "Art tutor & programme designer",
    tagline:
      "A summer of teaching children pottery, painting, sewing, beadwork and yard games — the work belonged to them.",
    body: [
      "Over a summer at Creative Space I taught children across a range of crafts: pottery, painting (oil and watercolour), drawing, sewing, beaded jewellery and collage.",
      "When we weren't making, we were outside dancing, singing and inventing yard games. The aim was always the same — let the work be theirs, and meet each child where they are.",
    ],
    deliverables: ["Weekly lesson plans", "Materials sourcing", "Day-of facilitation"],
    tools: ["Clay", "Oil & watercolour", "Beads", "Patience"],
    cta: "Run a workshop with me →",
    Tile: CreativeSpaceFlyer,
    images: [
      "/photos/cs-2.jpeg",
      "/photos/cs-3.jpeg",
      "/photos/cs-1.jpeg",
      "/photos/cs-4.jpeg",
    ],
  },
  {
    no: "004",
    palette: "navy",
    name: "Mark making",
    category: "Logos & identity systems",
    year: "2024 — 2025",
    period: "Ongoing studio practice",
    role: "Graphic designer, art director",
    tagline:
      "Wordmarks, logo systems and one-page brand sheets for studios, brands and teams — identities made carefully.",
    body: [
      "Identity work for Aurea Cove, Ethereal Motif, Herblunts, Eternal Fair Angel and others — each made with the same care.",
      "Each system starts with a conversation and a sketchbook. Most clients leave with a wordmark, a small palette, a one-page brand sheet and a handful of flexible asset templates they can run with on their own.",
    ],
    deliverables: ["Logos", "Wordmarks", "Brand sheets", "Packaging concepts"],
    tools: ["Canva", "Adobe Express", "Hand-lettering"],
    cta: "Commission an identity →",
    Tile: GraphicStudio,
    images: [
      "/photos/ma-relaxant.jpeg",
      "/photos/ma-immune.jpeg",
      "/photos/vlo-libido.jpeg",
      "/photos/ma-uterine.jpeg",
      "/photos/vlo-rmony.jpeg",
      "/photos/vlo-memory.jpeg",
    ],
  },
  {
    no: "005",
    palette: "pink",
    name: "B & B Pasteries",
    category: "Family bakery · decorator",
    year: "2018 — 2021",
    period: "Three years (school holidays + weekends)",
    role: "Decorator, packager, inventory",
    tagline:
      "Three years of decorating cakes, packing orders and keeping the cupboards counted at my dad's bakery — the small disciplines that run through everything I make.",
    body: [
      "B&B was my dad's bakery, and where I learned the small disciplines that run through everything I make: care for the order, care for the customer, care for the count.",
      "Three years of decorating birthday cakes, packing dozens of cupcakes for orders, and keeping the cupboards stocked. Quiet hands-on apprenticeship in a working family business.",
    ],
    deliverables: ["Cake decoration", "Order packaging", "Inventory tracking"],
    tools: ["Piping bags", "Royal icing", "Brown paper & string"],
    cta: "Decorate a small order →",
    Tile: BBPasteries,
    images: [
      "/photos/bb-1.jpeg",
      "/photos/bb-2.jpeg",
      "/photos/bb-3.jpeg",
    ],
  },
  {
    no: "006",
    palette: "forest",
    name: "Field notes",
    category: "Botanical photography",
    year: "Ongoing",
    period: "Open archive",
    role: "Photographer",
    tagline:
      "An open archive of small things — leaves after rain, light through a stream, mountains at first light, the bird who keeps coming back.",
    body: [
      "An open archive of small things — leaves after rain, light through a stream, mountains at first light, the garden bird who keeps coming back.",
      "Photos are taken on hikes, beach trips and quiet mornings, usually with whichever camera is in my pocket. The full set lives in the Photography section above; selected prints are available on request.",
    ],
    deliverables: ["Field photographs", "Stock imagery", "Open-edition prints"],
    tools: ["iPhone", "Natural light", "Slow looking"],
    cta: "Commission a shoot →",
    Tile: FieldNotes,
    images: [
      "/photos/photo-2.jpeg",
      "/photos/photo-4.jpeg",
      "/photos/photo-5.jpeg",
      "/photos/photo-6.jpeg",
    ],
  },
];

const photographs: { caption: string; src: string; tint: string }[] = [
  { caption: "Beach at golden hour", src: "/photos/photo-1.jpeg", tint: "var(--accent-tomato)" },
  { caption: "Sunlit river, noon", src: "/photos/photo-2.jpeg", tint: "var(--accent-sky)" },
  { caption: "Tents on the hilltop", src: "/photos/photo-3.jpeg", tint: "var(--forest)" },
  { caption: "Dayflower, after rain", src: "/photos/photo-4.jpeg", tint: "var(--mint)" },
  { caption: "Hidden cove falls", src: "/photos/photo-5.jpeg", tint: "var(--forest-ink)" },
  { caption: "Hills at first light", src: "/photos/photo-6.jpeg", tint: "var(--accent-sky)" },
  { caption: "Pizza Vybz, late night", src: "/photos/photo-7.jpeg", tint: "var(--maroon-ink)" },
  { caption: "Campsite from above", src: "/photos/photo-8.jpeg", tint: "var(--forest)" },
  { caption: "Sea grape & turquoise", src: "/photos/photo-9.jpeg", tint: "var(--accent-sky)" },
];

const experience = [
  { year: "2025 — now", role: "BSc, Biological Science", at: "University of the West Indies, Mona" },
  { year: "2025 — 2026", role: "Server · Mixologist · Creative Director", at: "Trini Yaad · Dub Bar · Dubwise Café" },
  { year: "2025", role: "Graphic Designer · Receptionist", at: "Armbands Plus · Earth Retail" },
  { year: "2024", role: "Sales Agent", at: "Hinduja Global Solutions" },
  { year: "2023", role: "Art Tutor", at: "Creative Space" },
  { year: "2022", role: "Inventory Manager", at: "Little Tokyo" },
  { year: "2022 — 2024", role: "CAPE — Biology, Chemistry, Caribbean Civ.", at: "Pre-University School" },
  { year: "2018 — 2021", role: "Decorator · Inventory Manager", at: "B & B Pasteries" },
  { year: "2017 — 2022", role: "9 CSEC · 2 City & Guilds", at: "Kingston Technical High School" },
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

function useKingstonTime() {
  const [t, setT] = useState(() => formatTime());
  useEffect(() => {
    const id = setInterval(() => setT(formatTime()), 30_000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function formatTime() {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "America/Jamaica",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return "—";
  }
}

function Index() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const accent = activeIdx !== null ? PALETTE[activeIdx].color : "var(--accent-tomato)";
  const time = useKingstonTime();

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const closeLightbox = () => setLightboxIdx(null);
  const nextPhoto = () =>
    setLightboxIdx((i) => (i === null ? null : (i + 1) % photographs.length));
  const prevPhoto = () =>
    setLightboxIdx((i) => (i === null ? null : (i - 1 + photographs.length) % photographs.length));

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextPhoto();
      else if (e.key === "ArrowLeft") prevPhoto();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIdx]);

  const [projectIdx, setProjectIdx] = useState<number | null>(null);
  const closeProject = () => setProjectIdx(null);
  const nextProject = () =>
    setProjectIdx((i) => (i === null ? null : (i + 1) % projects.length));
  const prevProject = () =>
    setProjectIdx((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));

  useEffect(() => {
    if (projectIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
      else if (e.key === "ArrowRight") nextProject();
      else if (e.key === "ArrowLeft") prevProject();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [projectIdx]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ───── Nav ───── */}
      <header className="hairline-b sticky top-0 z-30 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-10">
          <a href="#top" className="flex items-baseline gap-1.5 text-sm tracking-tight">
            <span>okiela</span>
            <span className="text-muted-foreground">+ co</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#photography" className="transition-colors hover:text-foreground">Photography</a>
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#experience" className="transition-colors hover:text-foreground">CV</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 text-[11px] tabular-nums text-muted-foreground sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              KIN {time}
            </span>
            <a
              href={CV_MAILTO}
              className="hairline hidden items-center gap-1.5 rounded-[8px] px-3.5 py-2 text-xs transition-opacity hover:opacity-70 sm:inline-flex"
            >
              <MailIcon />
              Request CV
            </a>
            <a
              href={MAILTO}
              className="hairline rounded-[8px] bg-foreground px-3.5 py-2 text-xs text-background transition-opacity hover:opacity-85"
            >
              Get in touch
            </a>
          </div>
        </div>
        <nav className="hairline-t mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-x-auto px-5 py-3 text-xs text-muted-foreground md:hidden">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#photography" className="transition-colors hover:text-foreground">Photo</a>
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#experience" className="transition-colors hover:text-foreground">CV</a>
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

        {/* mobile/tablet accent glow — tracks the selected palette swatch */}
        <div
          className="pointer-events-none absolute -top-20 right-[-25%] h-[380px] w-[380px] rounded-full opacity-40 blur-3xl transition-colors duration-500 lg:hidden"
          style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-10 left-[-20%] h-[300px] w-[300px] rounded-full bg-forest/15 blur-3xl lg:hidden"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
          {/* sania-style top row: small wordmark + meta */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
                style={{ backgroundColor: accent }}
              />
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]">
                Okiela Henry · Creative Director · Designer · Multidisciplinary Creative · Kingston, JA
              </p>
            </div>
            <Compass />
          </div>

          {/* main display: "The Duality Of An Optimist" — directly from PDF cover */}
          <h1 className="mt-10 max-w-5xl font-serif text-[11vw] leading-[0.95] tracking-tight sm:text-[64px] md:text-[76px] lg:text-[96px]">
            The duality of an<span className="whitespace-nowrap"><GlobeO accent={accent} />ptimist</span><span style={{ color: accent }}>.</span>
          </h1>

          {/* two-column intro — okiela. sketch wordmark + right column copy */}
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-between lg:gap-10">
              <HeroProof />
              <h2 className="mt-10 font-serif text-[20vw] leading-[0.9] tracking-tight sm:text-[120px] lg:mt-0 lg:text-[160px]">
                Okiela
                <span className="transition-colors duration-300" style={{ color: accent }}>
                  .
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className="max-w-md font-serif text-xl leading-snug text-foreground sm:text-2xl">
                <span className="text-navy">Brand identity</span>,{" "}
                <span className="text-forest">photography</span> and handmade{" "}
                <span className="text-pink-ink">Aureacove jewellery</span> for brands, studios and personal projects.
              </p>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Based in Kingston, Jamaica — open to full-time roles, internships and freelance commissions.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {availableFor.map((tag) => (
                  <span
                    key={tag}
                    className="hairline rounded-full bg-card px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={MAILTO}
                  className="hairline flex items-center justify-center rounded-[12px] bg-foreground px-5 py-3.5 text-sm font-medium text-background shadow-sm transition-opacity hover:opacity-85 sm:rounded-[10px] sm:py-3"
                >
                  Get in touch
                </a>
                <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-3">
                  <a
                    href={CV_MAILTO}
                    className="hairline inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-3.5 text-sm transition-colors hover:bg-foreground hover:text-background sm:rounded-[10px] sm:py-3"
                  >
                    <MailIcon />
                    Request CV
                  </a>
                  <a
                    href="#work"
                    className="hairline inline-flex items-center justify-center rounded-[12px] px-5 py-3.5 text-sm transition-colors hover:bg-foreground hover:text-background sm:rounded-[10px] sm:py-3"
                  >
                    View work
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* lily — tucked into the lower-right edge */}
          <div className="pointer-events-none absolute -right-6 bottom-24 hidden h-[140px] w-[140px] opacity-70 lg:bottom-28 lg:block xl:h-[170px] xl:w-[170px]">
            <div
              className="h-full w-full"
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
                  filter: "saturate(0.85) contrast(1.02)",
                }}
              />
            </div>
          </div>

          {/* swatch row */}
          <div className="mt-20 hairline-t pt-6 flex items-center justify-between">
            <p className="font-sketch text-lg text-muted-foreground">working palette</p>
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

      {/* ───── About ───── */}
      <section
        id="about"
        className="hairline-b relative overflow-hidden bg-background text-foreground"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
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
        <BuildingBlocks />

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

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-tomato" />
            <p className="font-sketch text-2xl text-foreground lg:text-3xl">about</p>
          </div>
          <blockquote className="mt-12 max-w-4xl font-serif text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            “A journey of a{" "}
            <span className="relative inline-block">
              thousand miles
              <SketchUnderline color="var(--accent-tomato)" />
            </span>{" "}
            begins with{" "}
            <span className="relative inline-block">
              one step
              <SketchUnderline color="var(--forest)" />
            </span>
            .”
          </blockquote>

          <div className="mt-12 grid max-w-4xl grid-cols-1 gap-8 text-base leading-relaxed text-muted-foreground sm:grid-cols-2 lg:text-lg">
            <p>
              Hi, I'm Okiela Henry — a designer, photographer and jewellery maker based in Kingston, Jamaica. I work across brand identity, photography and small-batch craft, helping studios, shops and personal projects find a clear, considered look.
            </p>
            <p>
              Founder of <span className="text-foreground">Aureacove</span>, a handmade jewellery and crafts label. Currently reading for a BSc in Biological Science at the University of the West Indies, Mona — a science streak that quietly shapes how I see things.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
            {[
              { n: "2023", l: "Aureacove est.", color: "var(--accent-tomato)", icon: "pencil" as const },
              { n: "nuff", l: "client projects shipped", color: "var(--forest)", icon: "book" as const },
              { n: "BSc", l: "biological science, UWI Mona", color: "var(--navy)", icon: "stethoscope" as const },
            ].map((s) => (
              <div key={s.l} className="relative">
                <div className="flex items-baseline gap-3">
                  <div className="font-serif text-5xl tabular-nums lg:text-6xl">{s.n}</div>
                  <StatIcon type={s.icon} color={s.color} />
                </div>
                <SketchUnderline color={s.color} />
                <div className="mt-5 font-sketch text-lg text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Marquee — quiet brand strip ───── */}
      <section className="hairline-b overflow-hidden bg-card">
        <div className="flex animate-[marquee_44s_linear_infinite] whitespace-nowrap py-5 font-serif text-xl text-foreground sm:text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0 items-center gap-6 pl-6 sm:gap-8 sm:pl-8">
              <span className="opacity-80">Brand identity</span>
              <Dot />
              <span className="opacity-80">Photography</span>
              <Dot />
              <span className="opacity-80">Aureacove jewellery</span>
              <Dot />
              <span className="opacity-80">Social &amp; print</span>
              <Dot />
              <span className="opacity-80">Hand-lettering</span>
              <Dot />
              <span className="opacity-80">Botanic field notes</span>
              <Dot />
            </span>
          ))}
        </div>
      </section>

      {/* ───── Services — hireable, named, scannable ───── */}
      <section id="services" className="hairline-b">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mb-6 flex items-baseline justify-between gap-3">
            <p className="flex items-center gap-3 font-sketch text-2xl text-foreground lg:text-3xl">
              <SketchSparkle color="var(--accent-sun)" />
              services
            </p>
            <p className="font-sketch text-lg text-muted-foreground">things you can hire me to make</p>
          </div>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Four focused offerings — each available as a one-off piece or an ongoing package. Briefs from brands, studios, restaurants, weddings and personal projects all welcome.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {services.map((s) => (
              <div
                key={s.n}
                className="hairline group flex flex-col rounded-[10px] bg-card p-6 transition-colors hover:bg-secondary lg:p-7"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground tabular-nums">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="hairline rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <a
                  href={`${MAILTO}%20%E2%80%94%20${encodeURIComponent(s.title)}`}
                  className="hairline-t mt-6 inline-flex items-center justify-between pt-4 text-sm text-foreground transition-opacity hover:opacity-60"
                >
                  <span>Request a quote</span>
                  <ArrowRight />
                </a>
              </div>
            ))}
          </div>

          <div className="hairline mt-10 flex flex-col gap-5 rounded-[10px] bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:p-8">
            <div>
              <p className="font-serif text-2xl leading-tight">Not sure which one fits?</p>
              <p className="mt-2 text-sm text-muted-foreground">Send a few sentences and I'll suggest a shape and a price.</p>
            </div>
            <a
              href={MAILTO}
              className="hairline inline-flex shrink-0 items-center gap-2 rounded-[10px] bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-85"
            >
              Start a brief
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ───── Photography ───── */}
      <section id="photography" className="hairline-b">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mb-6 flex items-baseline justify-between gap-3">
            <p className="flex items-center gap-3 font-sketch text-2xl text-foreground lg:text-3xl">
              <SketchCamera color="var(--navy)" />
              photography
            </p>
            <p className="font-sketch text-lg text-muted-foreground">a slow walk through the island</p>
          </div>

          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Field photography from hikes, beaches and small things — gathered between Blue Mountain mornings, Hellshire bonfires and the garden behind the studio. <span className="font-sketch text-foreground/80">↗ click any photo</span>
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {photographs.map((p, i) => (
              <figure key={p.src} className="group">
                <button
                  type="button"
                  onClick={() => setLightboxIdx(i)}
                  className="hairline relative block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-[10px] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                  style={{ backgroundColor: p.tint }}
                  aria-label={`Open ${p.caption}`}
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-background/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em] text-foreground/80 tabular-nums backdrop-blur-sm">
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
                <figcaption className="mt-3 flex items-baseline justify-between gap-2 text-sm">
                  <span className="min-w-0 text-foreground">{p.caption}</span>
                  <span className="shrink-0 text-muted-foreground">JA</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Selected work ───── */}
      <section id="work" className="hairline-b">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mb-14 flex items-baseline justify-between gap-3">
            <p className="flex items-center gap-3 font-sketch text-2xl text-foreground lg:text-3xl">
              <SketchFlower color="var(--accent-tomato)" />
              selected work
            </p>
            <p className="font-sketch text-lg text-muted-foreground">2018 — 2026</p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
            {projects.map((p, i) => (
              <ProjectTile
                key={p.no}
                palette={p.palette}
                name={p.name}
                category={p.category}
                year={p.year}
                onClick={() => setProjectIdx(i)}
              >
                <p.Tile />
              </ProjectTile>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Experience ───── */}
      <section id="experience" className="hairline-b">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mb-14 flex items-baseline justify-between gap-3">
            <p className="flex items-center gap-3 font-sketch text-2xl text-foreground lg:text-3xl">
              <SketchPencil color="var(--maroon)" />
              experience &amp; study
            </p>
            <a
              href={CV_MAILTO}
              className="hairline inline-flex shrink-0 items-center gap-2 rounded-[10px] px-4 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
            >
              <MailIcon />
              Request full CV
            </a>
          </div>

          <ol className="grid grid-cols-1">
            {experience.map((e, i) => (
              <li
                key={e.role + e.year}
                className={`group grid grid-cols-12 items-baseline gap-4 py-5 transition-colors hover:bg-secondary/60 sm:gap-6 ${
                  i === 0 ? "hairline-t hairline-b" : "hairline-b"
                }`}
              >
                <span className="col-span-12 text-[11px] uppercase tracking-[0.22em] text-muted-foreground tabular-nums sm:col-span-3">
                  {e.year}
                </span>
                <span className="col-span-12 font-serif text-2xl leading-tight sm:col-span-5 sm:text-[26px]">
                  {e.role}
                </span>
                <span className="col-span-12 text-sm text-muted-foreground sm:col-span-4 sm:text-right">
                  {e.at}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { k: "9", v: "CSEC passes" },
              { k: "5", v: "CAPE passes" },
              { k: "2", v: "City & Guilds" },
            ].map((s) => (
              <div key={s.v} className="hairline rounded-[10px] bg-card p-5">
                <div className="font-serif text-4xl tabular-nums lg:text-5xl">{s.k}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Footer — sania-style "let's work together" ───── */}
      <footer id="contact" className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <p className="font-sketch text-2xl text-muted-foreground lg:text-3xl">
            let's work together
          </p>
          <h3 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Have a brief, a brand, or a beautiful idea you'd like brought to paper?
          </h3>

          <a
            href={MAILTO}
            className="mt-10 inline-flex items-center gap-3 font-serif text-2xl tracking-tight transition-opacity hover:opacity-60 sm:text-3xl lg:text-4xl"
          >
            <span>Get in touch</span>
            <ArrowRight />
          </a>

          <div className="mt-6 flex flex-col gap-2 text-base text-muted-foreground lg:text-lg">
            <a
              href={MAILTO}
              className="break-words transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
            {PROFILE.phone && (
              <a
                href={`tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`}
                className="transition-colors hover:text-foreground"
              >
                {PROFILE.phone}
              </a>
            )}
            <span>{PROFILE.location}</span>
          </div>

          <a
            href={CV_MAILTO}
            className="hairline mt-8 inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            <MailIcon />
            Request CV
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
            <span>in Kingston, JA · {time}</span>
          </div>

          <div className="mt-10 hairline-t pt-8 flex flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Okiela Henry. A multidisciplinary practice.</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="transition-colors hover:text-foreground"
                  {...(l.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ───── Lightbox ───── */}
      {lightboxIdx !== null && (
        <Lightbox
          idx={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
          onJump={setLightboxIdx}
        />
      )}

      {/* ───── Project modal ───── */}
      {projectIdx !== null && (
        <ProjectModal
          project={projects[projectIdx]}
          onClose={closeProject}
          onPrev={prevProject}
          onNext={nextProject}
        />
      )}
    </main>
  );
}

function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const Tile = project.Tile;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-foreground/85 backdrop-blur-sm"
      style={{ animation: "fade-in 240ms ease-out" }}
    >
      <div className="flex min-h-full items-start justify-center p-2 sm:p-6 lg:p-10">
        <article
          onClick={stop}
          className="relative w-full max-w-5xl overflow-hidden rounded-[14px] bg-background text-foreground shadow-2xl"
          style={{ animation: "lightbox-zoom 360ms cubic-bezier(0.2,0.7,0.2,1)" }}
        >
          {/* Top bar */}
          <div className="hairline-b sticky top-0 z-10 flex items-center justify-between gap-2 bg-background/95 px-4 py-3 backdrop-blur-md sm:px-7">
            <div className="flex min-w-0 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground tabular-nums sm:gap-2.5">
              <span className={`h-2 w-2 shrink-0 rounded-full ${tilePaletteBg[project.palette]}`} />
              <span className="shrink-0">No. {project.no}</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span className="truncate hidden sm:inline">{project.category}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous project"
                className="hairline inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden>
                  <path d="M13 4 L6 10 L13 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next project"
                className="hairline inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden>
                  <path d="M7 4 L14 10 L7 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project"
                className="hairline ml-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden>
                  <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-5 py-8 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
            <p className="font-sketch text-base text-muted-foreground sm:text-lg">{project.year}</p>
            <h1 className="mt-3 font-serif text-3xl leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-3xl font-serif text-lg leading-snug text-foreground/85 sm:mt-6 sm:text-2xl">
              {project.tagline}
            </p>

            {/* Hero visual — tile presented inside a stage at its natural 3:4 */}
            <div className="mt-10 flex items-center justify-center rounded-[12px] bg-secondary p-6 sm:mt-12 sm:p-10 lg:p-16">
              <div
                className={`relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-[8px] shadow-xl sm:max-w-xs lg:max-w-sm ${tilePaletteBg[project.palette]} ${tilePaletteInk[project.palette]}`}
              >
                <Tile />
              </div>
            </div>

            {/* Two-column: meta + body */}
            <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
              <aside className="space-y-8 lg:col-span-4">
                <MetaRow label="Role" value={project.role} />
                <MetaRow label="Period" value={project.period} />
                <MetaRow label="Deliverables" values={project.deliverables} />
                <MetaRow label="Tools" values={project.tools} />
              </aside>
              <div className="space-y-5 lg:col-span-8">
                {project.body.map((para) => (
                  <p key={para} className="font-serif text-lg leading-relaxed text-foreground/90 sm:text-xl">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mt-14 sm:mt-16">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Selected imagery
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground tabular-nums">
                    {String(project.images.length).padStart(2, "0")} images
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
                  {project.images.map((src, i) => (
                    <figure
                      key={src}
                      className="hairline group relative aspect-[3/4] overflow-hidden rounded-[10px] bg-card"
                    >
                      <img
                        src={src}
                        alt={`${project.name} reference ${i + 1}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:p-4"
                        onError={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      />
                      <span className="absolute right-2 top-2 rounded-full bg-background/85 px-2 py-0.5 text-[9px] uppercase tracking-[0.22em] text-foreground/70 tabular-nums backdrop-blur-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="hairline-t mt-14 grid grid-cols-1 gap-6 pt-10 sm:mt-16 sm:grid-cols-12 sm:items-end">
              <div className="sm:col-span-8">
                <p className="font-sketch text-lg text-muted-foreground sm:text-xl">Want something like this?</p>
                <h3 className="mt-3 font-serif text-xl leading-tight sm:text-3xl">
                  Send a brief and I'll suggest a shape and a price.
                </h3>
              </div>
              <a
                href={`${MAILTO}%20%E2%80%94%20${encodeURIComponent(project.name)}`}
                className="hairline inline-flex w-full items-center justify-between gap-3 rounded-[10px] bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-85 sm:col-span-4 sm:w-auto"
              >
                <span>{project.cta}</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

function MetaRow({ label, value, values }: { label: string; value?: string; values?: string[] }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
      {value && <p className="mt-2 font-serif text-lg leading-snug">{value}</p>}
      {values && (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {values.map((v) => (
            <li
              key={v}
              className="hairline rounded-full px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {v}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Lightbox({
  idx,
  onClose,
  onPrev,
  onNext,
  onJump,
}: {
  idx: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
}) {
  const photo = photographs[idx];
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 py-6 sm:px-8"
      style={{
        background: "color-mix(in oklch, var(--foreground) 90%, transparent)",
        backdropFilter: "blur(8px)",
        animation: "fade-in 220ms ease-out",
      }}
    >
      {/* close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/15 text-background backdrop-blur-md transition-colors hover:bg-background/25 sm:right-6 sm:top-6"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden>
          <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {/* prev */}
      <button
        type="button"
        onClick={(e) => {
          stop(e);
          onPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/15 text-background backdrop-blur-md transition-colors hover:bg-background/25 sm:left-6"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
          <path d="M13 4 L6 10 L13 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>

      {/* next */}
      <button
        type="button"
        onClick={(e) => {
          stop(e);
          onNext();
        }}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/15 text-background backdrop-blur-md transition-colors hover:bg-background/25 sm:right-6"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
          <path d="M7 4 L14 10 L7 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>

      {/* main photo */}
      <div
        onClick={stop}
        className="flex max-h-[58vh] w-full max-w-5xl items-center justify-center sm:max-h-[72vh]"
      >
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.caption}
          className="max-h-[58vh] w-auto max-w-full rounded-[10px] object-contain shadow-2xl sm:max-h-[72vh]"
          style={{ animation: "lightbox-zoom 320ms cubic-bezier(0.2,0.7,0.2,1)" }}
        />
      </div>

      {/* caption + counter */}
      <div
        onClick={stop}
        className="mt-4 flex flex-col items-center gap-1 text-background sm:mt-6 sm:flex-row sm:gap-4"
      >
        <span className="font-serif text-xl sm:text-2xl">{photo.caption}</span>
        <span className="text-xs uppercase tracking-[0.22em] opacity-70 tabular-nums">
          {String(idx + 1).padStart(2, "0")} / {String(photographs.length).padStart(2, "0")} · JA
        </span>
      </div>

      {/* thumbnail strip */}
      <div
        onClick={stop}
        className="mt-4 flex max-w-full gap-2 overflow-x-auto px-2 pb-2 sm:mt-6"
      >
        {photographs.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => onJump(i)}
            aria-label={`Show ${p.caption}`}
            className={`hairline h-14 w-10 shrink-0 overflow-hidden rounded-[4px] transition-opacity ${
              i === idx ? "opacity-100 ring-2 ring-background" : "opacity-50 hover:opacity-90"
            }`}
            style={{ backgroundColor: p.tint }}
          >
            <img src={p.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Small bits ─────────── */

function Dot() {
  return <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-tomato" />;
}

function ArrowRight() {
  return (
    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" aria-hidden>
      <path
        d="M2 10 L32 10 M24 3 L32 10 L24 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2.5 4.5 L8 8.5 L13.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Globe as the capital "O" in "Optimist" — black & white, axial-tilted, static */
function GlobeO({ accent: _accent }: { accent: string }) {
  return (
    <span
      className="inline-block"
      style={{
        width: "0.96em",
        height: "0.96em",
        verticalAlign: "-0.1em",
        marginLeft: "0.22em",
        marginRight: "0.04em",
      }}
      aria-hidden
    >
      <span
        className="block h-full w-full"
        style={{ transform: "rotate(-14deg)" }}
      >
        <svg viewBox="0 0 511.266 511.266" className="h-full w-full select-none">
          <circle
            cx="255.616"
            cy="255.633"
            r="253"
            fill="var(--background)"
            stroke="var(--foreground)"
            strokeWidth="3"
          />
          {/* equator + meridian for globe feel */}
          <ellipse cx="255.616" cy="255.633" rx="253" ry="80" fill="none" stroke="var(--foreground)" strokeOpacity="0.45" strokeWidth="1.5" />
          <ellipse cx="255.616" cy="255.633" rx="80" ry="253" fill="none" stroke="var(--foreground)" strokeOpacity="0.45" strokeWidth="1.5" />
          {/* continents from globe.svg */}
          <path
            d="M131.392 470.129c-.048.096-.112.16-.16.256.384.096.752.224 1.136.304l-.976-.56zM115.312 109.857l-.512-1.04c4.272-.64 4.56-3.648 7.808-4.752 3.696-1.216 2.432.112 6.064 0 2.944-.128 4.736 2.016 8.096.448-.816 1.44-2.144 2.432-3.472 3.408-2.768 1.968-5.6 3.984-8.896 4.752-3.296.752-7.168-.048-9.088-2.816z"
            fill="var(--foreground)"
          />
          <path
            d="M166.448 337.697c-.064 2.256-1.392 4.224-2.544 6.128-5.136 8.384-8.256 18.096-8.944 27.936-.688 9.424-.272 21.04-8.48 25.68-4.688 2.608-11.28 2.144-14.4 6.544-.976 1.328-1.44 3.008-1.904 4.576-2.016 7.344-4.048 14.688-6.064 22.032a318.362 318.362 0 0 1-7.856-.8c3.072.976 5.2 5.136 3.36 7.984-2.944-1.552-6.816.288-8.448 3.248-1.552 2.944-1.328 6.528-.464 9.776 2.672 9.6 10.88 17.344 20.544 19.648-1.68 3.184-6.816 1.792-9.952-.336-22.384-15.136-39.28-38.192-46.992-64.096-2.72-9.136-4.464-18.848-9.792-26.704-4.448-6.64-11.168-11.504-15.616-18.144-6.24-9.536-7.408-21.904-14.64-30.624-4.048-4.976-10.304-11.088-6.72-16.416 1.44-2.192 4.512-4.272 3.296-6.592-.4-.752-1.216-1.216-1.856-1.856-2.432-2.608-.752-6.704.464-10.064 2.016-5.84 2.016-12.08 1.152-18.32-6.08-5.44-10.88-12.192-13.888-19.776-1.792-4.624-4.176-10.4-9.136-10.464-1.28-3.584-2.608-7.168-3.888-10.752-.464 1.28-1.728 2.08-3.12 2.256C4.4 179.985 28.016 126.833 64.768 85.649c.816-.352 1.616-.816 2.432-1.28 8.72-5.088 15.664-12.72 24.096-18.272 1.728-1.152 3.696-2.256 5.84-2.032 2.08.176 4.048 2.304 3.296 4.272-.288.816-.976 1.456-1.68 1.968A178.313 178.313 0 0 1 66.56 92.129c-1.376.688-2.832 1.504-3.456 2.896-1.168 2.368.8 5.312 3.296 6.176 2.48.864 5.264.352 7.808-.224-2.144 3.056-2.784 7.168-1.68 10.752 2.368.224 3.12-3.008 3.824-5.264 2.88-8.96 17.168-12.608 16.24-22.048 3.872 2.016 7.808-2.496 10.176-6.192 2.368-3.76 7.632-7.456 10.528-4.16.16 1.84.384 3.696.56 5.552 5.088-1.28 10.24-2.608 15.328-3.888-2.896 2.032-3.872 6.368-2.208 9.488 1.68 3.12 5.84 4.688 9.136 3.408-.048 2.72-2.48 4.8-4.688 6.416-5.6 4.224-11.616 8.56-18.144 10.64l1.504 3.12c-.16.064-.336.128-.512.128-4.16.4-8.56-2.592-13.008-2.016-2.72.352-6.064.352-7.632 3.12-.224.352-1.2 5.2-.512 4.8 2.432-1.392 4.848-2.784 7.232-4.16.736 1.968.912 4.16.512 6.304 2.944-.288 6.016.336 8.624 1.904-2.72 6.304-9.712 10.528-16.592 10-.064-2.08-.176-4.16-.24-6.24-5.664-.464-10.288 4.4-13.12 9.264-2.88 4.912-5.072 10.528-9.824 13.648-2.88 1.968-6.416 2.72-9.536 4.336-3.056 1.68-5.888 4.864-5.248 8.272.288 1.616 1.328 3.12 1.28 4.8-.176 3.12-3.808 4.576-6.24 6.592-4.16 3.472-5.2 9.84-9.648 12.896-3.232 2.256-7.52 2.208-11.28 3.36-3.76 1.152-7.52 4.912-6 8.56-1.856.64-4.112-.752-4.288-2.72-6.64 13.072-11.024 27.296-12.816 41.872 3.296 2.304 6.64-2.96 7.28-6.944.688-3.984 4.16-9.2 7.392-6.832-.752 5.728-1.504 11.392-2.24 17.12-.176 1.104-.288 2.256.24 3.232.64 1.216 2.016 1.728 3.072 2.592 2.944 2.544 2.544 7.056 2.72 10.928.176 4.736 1.744 9.36 4.224 13.408-.24-.816-.4-1.616-.576-2.432 4.512.576 9.2-.88 12.608-3.888 1.792-1.616 3.296-3.696 5.552-4.512 2.32-.864 4.864-.24 7.232.4 7.344 2.016 15.152 4.272 20.064 10.048 2.48 2.944 4.048 6.656 7.008 9.072 6.704 5.664 18.048 3.168 24.176 9.472 4.912 5.088 4 13.296 2.672 20.288-3.36-1.84-7.856 2.784-5.888 6.08 1.792-1.968 3.872-4.048 6.48-4.048 2.656-.064 4.976 3.584 3.008 5.264 4.624-5.904 15.952-3.472 17.744 3.872 6.48.464 13.008.912 19.488 1.44-1.248 9.504 18.656 10.064 18.256 19.616zM127.04 70.193c-2.496 1.232-5.936-.16-6.864-2.784-.944-2.624.832-5.872 3.552-6.496 1.712-.4 4.096-.208 4.624-1.888.16-.512.064-1.072.064-1.6-.064-3.168 2.768-5.792 5.824-6.592 3.056-.784 6.288-.176 9.392.432a11.651 11.651 0 0 1 .896 7.424c-2.128.096-4.256.176-6.384.272.192 3.536-.16 7.984-3.44 9.296-2.944 1.168-6.784-1.008-9.232.976M160.176 34.881c5.808-2.784 10.72-7.168 16.448-10.112 9.856-5.056 21.36-5.504 32.432-5.856l75.6-2.352c-5.84 3.2-11.68 6.416-17.536 9.616-4.768 2.624-10.192 5.312-15.424 3.824-.112 4.208 3.712 8.112 7.936 8.08-10.352 6.4-24.72-.144-35.648 5.232-4.576 2.256-8.272 6.512-13.312 7.312-2.912.464-5.936-.32-8.832.32-4.848 1.056-7.904 5.648-11.488 9.072-4.128 3.952-10.192 6.656-15.584 4.768-5.392-1.888-8.208-9.904-3.888-13.648 2.128-1.84 5.168-2.144 7.68-3.44 2.512-1.28 4.496-4.72 2.608-6.816-.816-.912-2.16-1.264-2.912-2.24-.816-1.056-.736-2.56-1.408-3.712-2.56-4.496-9.68 1.552-14.528-.256M236.704 56.145c3.408-.784 6.368-2.8 9.552-4.272s6.976-2.336 10.096-.784c.928 2.32-1.744 4.432-4.096 5.264a28.648 28.648 0 0 1-14.128 1.232M442.736 81.569a8.137 8.137 0 0 1-2.896-.176c-4.336-.928-7.632-4.272-11.344-6.704-8.56-5.664-20.24-6.4-29.488-1.776 2.192-3.184 3.296-7.12 3.056-10.992l-1.328.464c-15.152-8.784-32.912-17.904-49.44-12-3.824 1.392-7.28 3.472-11.152 4.8-4.112 1.44-8.672 2.032-12.192 4.576-3.584 2.544-5.488 8.16-2.416 11.216 2.608 2.608 6.768 1.904 10.416 2.256 3.584.352 7.696 3.92 5.728 6.992-15.84 7.408-31.728 14.88-47.568 22.352 7.28 2.368 12.096 10.624 10.528 18.144-5.328.928-10.464-2.304-15.84-2.656-7.808-.4-15.264 6.48-15.424 14.288-.224 7.808 6.944 15.024 14.752 14.912 5.84-.064 11.568-3.584 17.232-2.096.224-5.328 3.872-9.84 7.616-13.648 7.28-7.296 17.68-13.888 27.408-10.304 3.184 1.152 5.904 3.296 8.56 5.424 5.84 4.624 11.68 9.296 17.536 13.984 1.856-1.904 3.696-3.824 5.552-5.664 3.184 3.36 6.368 6.704 9.6 10.112 1.616-1.104 3.296-2.144 4.912-3.248 1.152 3.008 2.368 5.952 3.536 8.96.464-3.296.864-6.528 1.264-9.776 3.824.112 7.872.224 11.328-1.504 3.472-1.68 6.016-5.84 4.56-9.424-.752-1.904-2.544-3.408-2.896-5.44-.752-4.048 5.024-6.816 8.784-4.976 3.696 1.792 5.552 6.016 7.12 9.888.864-3.936 1.664-7.808 2.544-11.744a92.891 92.891 0 0 0 15.312 26.208c-11.856-2.256-24.352-.96-35.44 3.6 3.536 4.976 9.6 7.92 15.68 7.68 2.72-.064 5.728-.688 7.808 1.04 1.568 1.328 1.968 3.472 2.256 5.44.928 5.552 1.856 11.04 2.72 16.528-6.256-5.136-15.264-4.56-23.424-4.72-8.16-.224-17.696-2.48-20.704-10.048-3.232 3.648-4.672 8.848-3.744 13.712-8.448-2.016-18.16-5.248-20.592-13.584-6.592 2.432-14.8-1.776-16.592-8.544-.64-2.368-.816-5.264-2.896-6.528-1.264-.752-2.896-.64-4.4-.464-12.544 1.456-25.04 2.848-37.52 4.304-6.816.816-13.872 1.632-19.888 4.976-6.016 3.296-10.8 9.776-10.112 16.608-11.504 6.832-21.264 16.72-27.856 28.352-2.08 3.584-3.872 7.696-3.056 11.744.576 3.12 2.656 5.776 3.296 8.848 1.104 5.264-1.904 10.352-3.168 15.552-3.584 14.8 7.648 28.736 18.064 39.936 4.912 5.2 10.592 10.864 17.76 11.152 4.448.176 8.672-1.792 12.832-3.424 11.904-4.688 24.864-6.832 37.632-6.32-2.896 2.256.112 7.168 3.712 7.92 3.584.752 7.456-.416 10.928.8 7.92 2.832 6.832 14.448 3.248 22.032 1.792-.352 3.648-.704 5.488-1.04a947.307 947.307 0 0 1-2.944 7.568c10.864 1.376 14.976 15.664 12.448 26.352-2.48 10.704-8.832 20.528-9.008 31.52-.048 6.016 1.792 11.856 3.648 17.568 4.64 14.512 9.264 29.024 13.904 43.584 12.96 1.552 20.4-14.928 32.432-20.08 4.512-1.968 9.824-2.368 13.36-5.728 3.408-3.232 2.304-10.816-2.08-10.816 5.952-.64 11.04-6.08 11.216-12.096.064-1.68-.176-3.36.048-5.024.4-2.368 1.904-4.448 3.344-6.48 9.184-13.184 15.136-28.288 21.088-43.2 1.552-4 3.12-7.92 4.672-11.92 5.888-14.864 11.728-29.664 17.616-44.528 2.304-5.84 4.624-11.616 6.928-17.472-3.184 5.264-11.504 4.576-16.256.64-4.8-3.92-7.296-9.888-11.056-14.8-3.184-4.224-7.472-7.968-8.976-13.12-.864-2.944-.704-6.128-1.216-9.2-1.168-6.656-5.552-12.192-8.56-18.208s-4.576-13.808-.352-19.088c12.16 21.216 23.216 43.056 33.216 65.44 1.104-3.472 3.648-6.48 6.88-8.16 2.368-1.28 5.024-1.792 7.52-2.832 6.592-2.896 11.152-9.888 11.152-17.056-.064-7.168-4.624-14.16-11.28-16.992-3.296-1.392-7.056-1.84-10.176-3.76-3.12-1.84-5.376-6.064-3.408-9.136 1.84-2.896 6.304-2.832 9.36-1.216 3.072 1.68 5.328 4.512 8.208 6.416 2.08 1.392 4.512 2.304 6.768 3.584 12.208 6.992 15.216 22.896 17.776 36.768 1.392 7.456 2.96 14.864 4.816 22.144.064-1.568.048-3.184.048-4.736-.064-67.232-26.064-128.336-68.528-173.936zm23.408 84c-1.68-.112-3.232-1.216-4.576-2.256-2.192-1.728-4.4-3.76-5.04-6.48-.752-3.232.8-6.944-.928-9.824-.816-1.392-2.256-2.256-3.472-3.232-3.184-2.544-5.504-6.192-6.368-10.112-.752-3.472.336-8.096 3.872-8.672 1.68-.288 3.52.64 4.272 2.192l-2.368 1.28c3.984.464 5.84 6.48 2.784 9.072-.4.4-.928.752-.928 1.328 0 .352.224.688.528.928 2.48 2.72 6.192 3.696 9.424 5.424 3.232 1.68 6.416 4.8 5.904 8.384-1.04.4-2.016.752-3.056 1.152-1.104 1.104-.224 3.072.928 4.16s2.656 2.192 2.72 3.808c0 1.744-1.968 2.96-3.696 2.848zM467.808 343.457l-4.176 2.96c1.456 5.12-1.456 11.12-6.4 13.12-2.608 1.056-6.08 1.52-6.96 4.192-.736 2.272 1.024 4.576 1.264 6.944.384 3.936-3.296 6.88-5.952 9.808s-4.064 8.432-.528 10.192c.816.416 1.76.496 2.672.576 3.84.336 8.048.448 11.184-1.792 8.992-6.416.448-23.824 9.328-30.416 1.264-.928 2.848-1.6 3.536-3.008 2.096-4.144-5.632-8.256-3.968-12.576z"
            fill="var(--foreground)"
          />
        </svg>
      </span>
    </span>
  );
}

/* Compass — small ornament from PDF page 1 */
function Compass() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      aria-hidden
      className="hidden text-muted-foreground sm:block"
      style={{ animation: "block-spin-slow 60s linear infinite" }}
    >
      <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 3" />
      <path d="M32 6 L34 30 L58 32 L34 34 L32 58 L30 34 L6 32 L30 30 Z" fill="currentColor" opacity="0.7" />
      <circle cx="32" cy="32" r="2" fill="var(--accent-tomato)" />
      <text x="32" y="11" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.7">N</text>
      <text x="56" y="34" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.7">E</text>
      <text x="32" y="58" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.7">S</text>
      <text x="8" y="34" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.7">W</text>
    </svg>
  );
}

function StatIcon({ type, color }: { type: "pencil" | "book" | "stethoscope"; color: string }) {
  const common = {
    width: 36,
    height: 36,
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
  // stethoscope — clinical / veterinary mark
  return (
    <svg
      {...common}
      aria-hidden
      style={{ animation: "block-drift 5s ease-in-out infinite", ["--rot" as string]: "-6deg" }}
    >
      {/* binaural tubing */}
      <path d="M9 6 C8.2 13 12 15 13 15.6 C14 15 17.8 13 17 6" />
      {/* earpiece tips */}
      <circle cx="9" cy="5.6" r="1.4" fill={color} stroke="none" />
      <circle cx="17" cy="5.6" r="1.4" fill={color} stroke="none" />
      {/* tube down to the chestpiece */}
      <path d="M13 15.6 C13 21.5 15.5 24.5 19 24.5" />
      {/* chestpiece */}
      <circle cx="22.4" cy="24" r="3.6" />
      <circle cx="22.4" cy="24" r="1.2" fill={color} stroke="none" />
    </svg>
  );
}

function BuildingBlocks() {
  return (
    <>
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

function HeroProof() {
  const reveal = (delay: number) => ({
    animation: "fade-up 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both",
    animationDelay: `${delay}s`,
  });
  return (
    <div className="max-w-md">
      {/* positioning line — what the work is about, in her own words */}
      <p
        className="font-serif text-2xl leading-snug text-foreground/85 sm:text-3xl lg:text-4xl"
        style={reveal(0.1)}
      >
        Craft with a
        <br />
        <span className="relative inline-block text-accent-tomato">
          commercial edge.
          <SketchUnderline color="var(--accent-tomato)" />
        </span>
      </p>

      {/* availability — the thing a hiring manager is scanning for */}
      <div
        className="hairline mt-7 inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5"
        style={reveal(0.4)}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
        </span>
        <span className="text-xs text-muted-foreground">
          Open to roles &amp; commissions
        </span>
      </div>
    </div>
  );
}

function SketchSparkle({ color = "var(--accent-sun)", size = 22 }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      style={{ animation: "block-spin-slow 22s linear infinite" }}
    >
      <path
        d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z"
        fill={color}
        opacity="0.9"
      />
    </svg>
  );
}

function SketchCamera({ color = "var(--navy)" }: { color?: string }) {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 32 26"
      aria-hidden
      style={{ ["--rot" as string]: "-6deg", animation: "block-drift 6s ease-in-out infinite" }}
    >
      <path
        d="M3 8 L9 8 L11 4 L21 4 L23 8 L29 8 L29 23 L3 23 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="16" cy="15" r="5" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx="16" cy="15" r="1.8" fill={color} />
      <rect x="22" y="9.4" width="3" height="1.5" rx="0.6" fill={color} />
    </svg>
  );
}

function SketchFlower({ color = "var(--accent-tomato)" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden
      style={{ animation: "block-spin-slow 28s linear infinite" }}
    >
      <circle cx="12" cy="5.5" r="3" fill={color} opacity="0.85" />
      <circle cx="18.5" cy="12" r="3" fill={color} opacity="0.85" />
      <circle cx="12" cy="18.5" r="3" fill={color} opacity="0.85" />
      <circle cx="5.5" cy="12" r="3" fill={color} opacity="0.85" />
      <circle cx="12" cy="12" r="2.4" fill="var(--accent-sun)" />
    </svg>
  );
}

function SketchPencil({ color = "var(--maroon)" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden
      style={{ ["--rot" as string]: "-14deg", animation: "block-drift 5s ease-in-out infinite" }}
    >
      <path
        d="M3 21 L6 18 L17 7 L20 10 L9 21 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M16 6 L19 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 21 L6 18" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
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
