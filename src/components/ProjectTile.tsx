import type { ReactNode } from "react";

export type Palette = "maroon" | "mint" | "amber" | "navy" | "pink" | "forest";

export const tilePaletteBg: Record<Palette, string> = {
  maroon: "bg-maroon",
  mint: "bg-mint",
  amber: "bg-amber",
  navy: "bg-navy",
  pink: "bg-pink",
  forest: "bg-forest",
};

export const tilePaletteInk: Record<Palette, string> = {
  maroon: "text-maroon-ink",
  mint: "text-mint-ink",
  amber: "text-amber-ink",
  navy: "text-navy-ink",
  pink: "text-pink-ink",
  forest: "text-forest-ink",
};

interface Props {
  palette: Palette;
  name: string;
  category: string;
  year: string;
  children: ReactNode;
  onClick?: () => void;
}

export function ProjectTile({ palette, name, category, year, children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full cursor-pointer text-left focus:outline-none"
    >
      <div
        className={`relative aspect-[3/4] overflow-hidden rounded-[10px] ${tilePaletteBg[palette]} ${tilePaletteInk[palette]} transition-transform duration-500 ease-out group-hover:scale-[1.01] group-focus-visible:ring-2 group-focus-visible:ring-foreground`}
      >
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90">
          {children}
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-sm text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
        <p className="text-sm text-muted-foreground tabular-nums">{year}</p>
      </div>
    </button>
  );
}

/* ─────────── Individual designs ─────────── */

export function DualityPoster() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <div className="flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">No. 001</span>
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">MMXXVI</span>
      </div>
      <div className="-mx-1">
        <h3 className="font-serif text-[40px] leading-[0.92] tracking-tight">
          The duality
          <br />
          of an{" "}
          <span className="relative inline-block">
            optimist
            <svg
              className="absolute -bottom-1.5 left-0 w-full"
              height="6"
              viewBox="0 0 100 6"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M1 3 Q22 0 44 3 T99 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
          <br />
          <span className="opacity-70">— a manifesto.</span>
        </h3>
      </div>
      <div className="hairline-t pt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] opacity-70">
        <span>Kingston</span>
        <span>Personal series</span>
      </div>
    </div>
  );
}

export function AureacoveLabel() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="relative h-[78%] w-[58%]">
        {/* hangtag silhouette */}
        <div className="absolute inset-x-0 top-0 mx-auto h-3 w-3 rounded-full border border-current opacity-80" />
        <div className="absolute inset-x-0 top-4 mx-auto h-[12%] w-[3%] bg-current opacity-60" />
        <div className="absolute inset-x-0 top-[16%] h-[84%] rounded-[6px] bg-current opacity-90" />
        {/* label */}
        <div className="absolute inset-x-3 top-[24%] bottom-3 flex flex-col items-center justify-between rounded-[3px] bg-mint p-4 text-center text-mint-ink">
          <span className="text-[8px] uppercase tracking-[0.24em] opacity-70">Aureacove</span>
          <div>
            <div className="font-serif text-[32px] leading-none">AC</div>
            <div className="mt-2 text-[8px] uppercase tracking-[0.22em] opacity-70">Hand · Made</div>
          </div>
          <span className="text-[8px] uppercase tracking-[0.22em] opacity-70">est. 2023</span>
        </div>
      </div>
    </div>
  );
}

export function CreativeSpaceFlyer() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Creative space</p>
        <h3 className="mt-3 font-serif text-[38px] leading-[0.95]">
          Pottery,
          <br />
          paint &amp;
          <br />
          play.
        </h3>
      </div>
      <div className="space-y-1.5 text-[11px] leading-relaxed">
        <div className="hairline-t pt-2 flex justify-between">
          <span className="opacity-70">Ages</span>
          <span>3 — 12</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Forms</span>
          <span>Clay · Oil · Bead</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Summer</span>
          <span>2023</span>
        </div>
      </div>
    </div>
  );
}

export function GraphicStudio() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-current opacity-90" />
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Mark making</span>
      </div>
      <div>
        <div className="font-serif text-[56px] leading-none">OH.</div>
        <p className="mt-3 text-[11px] leading-relaxed opacity-80 max-w-[80%]">
          Wordmarks and small identity systems for studios, shops and quiet brands.
        </p>
      </div>
      <div className="hairline-t pt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] opacity-70">
        <span>Identity</span>
        <span>Set 03 / 05</span>
      </div>
    </div>
  );
}

export function BBPasteries() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">B &amp; B Pasteries · 2018 — 2021</p>
      <div>
        <h3 className="font-serif text-[40px] leading-[0.95]">
          Decorating
          <br />
          cakes,
          <br />
          counting
          <br />
          tins.
        </h3>
      </div>
      <div className="hairline-t pt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] opacity-70">
        <span>Family bakery</span>
        <span>No. 52</span>
      </div>
    </div>
  );
}

export function FieldNotes() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <div className="flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-[0.22em] opacity-70">Field notes</span>
        <span className="text-[10px] uppercase tracking-[0.22em] opacity-70">JA · 18°N</span>
      </div>
      <div className="relative mx-auto h-[58%] w-[78%]">
        {/* botanical specimen card */}
        <div className="absolute inset-0 rounded-[4px] border border-current opacity-60" />
        <div className="absolute inset-3 flex flex-col justify-between">
          {/* stem + leaves */}
          <svg viewBox="0 0 100 80" className="h-full w-full" aria-hidden>
            <path
              d="M50 78 C50 60 50 40 50 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M50 56 C40 52 32 50 22 52 C30 56 40 58 50 56"
              fill="currentColor"
              opacity="0.55"
            />
            <path
              d="M50 42 C60 38 68 36 78 38 C70 42 60 44 50 42"
              fill="currentColor"
              opacity="0.55"
            />
            <path
              d="M50 28 C42 24 36 22 28 24 C36 28 42 30 50 28"
              fill="currentColor"
              opacity="0.55"
            />
            <circle cx="50" cy="14" r="6" fill="currentColor" opacity="0.7" />
          </svg>
        </div>
      </div>
      <div className="hairline-t pt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] opacity-70">
        <span>Botanic</span>
        <span>No. 09</span>
      </div>
    </div>
  );
}
