import type { ReactNode } from "react";

type Palette = "maroon" | "mint" | "amber" | "navy" | "pink" | "forest";

const bg: Record<Palette, string> = {
  maroon: "bg-maroon",
  mint: "bg-mint",
  amber: "bg-amber",
  navy: "bg-navy",
  pink: "bg-pink",
  forest: "bg-forest",
};

const ink: Record<Palette, string> = {
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
}

export function ProjectTile({ palette, name, category, year, children }: Props) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`relative aspect-[3/4] overflow-hidden rounded-[10px] ${bg[palette]} ${ink[palette]} transition-transform duration-500 ease-out group-hover:scale-[1.01]`}
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
    </div>
  );
}

/* ─────────── Individual designs ─────────── */

export function MaroonPoster() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <div className="flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">No. 014</span>
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">MMXXVI</span>
      </div>
      <div className="-mx-1">
        <h3 className="font-serif text-[44px] leading-[0.92] tracking-tight">
          Nights in
          <br />
          motion,
          <br />
          <span className="opacity-70">a study.</span>
        </h3>
      </div>
      <div className="hairline-t pt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] opacity-70">
        <span>Kingston</span>
        <span>Poster series</span>
      </div>
    </div>
  );
}

export function MintBottle() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="relative h-[78%] w-[42%]">
        {/* bottle silhouette */}
        <div className="absolute inset-x-0 top-0 mx-auto h-[14%] w-[34%] rounded-t-md bg-current opacity-90" />
        <div className="absolute inset-x-0 top-[12%] mx-auto h-[6%] w-[58%] bg-current opacity-90" />
        <div className="absolute inset-x-0 top-[18%] h-[82%] rounded-b-[18px] rounded-t-[6px] bg-current opacity-90" />
        {/* label */}
        <div className="absolute inset-x-2 top-[36%] flex h-[44%] flex-col items-center justify-between rounded-[4px] bg-mint p-3 text-center text-mint-ink">
          <span className="text-[8px] uppercase tracking-[0.2em] opacity-70">Slow brew</span>
          <div className="font-serif text-[22px] leading-none">cold</div>
          <span className="text-[8px] uppercase tracking-[0.2em] opacity-70">355 ml</span>
        </div>
      </div>
    </div>
  );
}

export function AmberFlyer() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">A workshop</p>
        <h3 className="mt-3 font-serif text-[40px] leading-[0.95]">
          Hands,
          <br />
          paper &amp;
          <br />
          patience.
        </h3>
      </div>
      <div className="space-y-1.5 text-[11px] leading-relaxed">
        <div className="hairline-t pt-2 flex justify-between">
          <span className="opacity-70">Date</span>
          <span>Sat 18 Apr</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Time</span>
          <span>10:00 — 16:00</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Place</span>
          <span>Hope Road 22</span>
        </div>
      </div>
    </div>
  );
}

export function NavyBrand() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-current opacity-90" />
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Atelier mar</span>
      </div>
      <div>
        <div className="font-serif text-[56px] leading-none">M.</div>
        <p className="mt-3 text-[11px] leading-relaxed opacity-80 max-w-[80%]">
          A small studio building quiet brands for people who care about the small things.
        </p>
      </div>
      <div className="hairline-t pt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] opacity-70">
        <span>Identity</span>
        <span>Card 01 / 06</span>
      </div>
    </div>
  );
}

export function PinkEditorial() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-7">
      <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Issue 07 — Spring</p>
      <div>
        <h3 className="font-serif text-[42px] leading-[0.95]">
          On
          <br />
          softness,
          <br />
          &amp; other
          <br />
          quiet things.
        </h3>
      </div>
      <div className="hairline-t pt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] opacity-70">
        <span>Editorial</span>
        <span>p. 24</span>
      </div>
    </div>
  );
}

export function ForestHoney() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="relative h-[72%] w-[58%] rounded-[6px] bg-current opacity-95">
        {/* lid */}
        <div className="absolute -top-3 left-1/2 h-5 w-[70%] -translate-x-1/2 rounded-[4px] bg-current opacity-90" />
        {/* label */}
        <div className="absolute inset-x-3 top-6 bottom-6 flex flex-col items-center justify-between rounded-[4px] bg-forest p-4 text-center text-forest-ink">
          <span className="text-[9px] uppercase tracking-[0.22em] opacity-70">Wild bloom</span>
          <div>
            <div className="font-serif text-[26px] leading-none">honey</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.22em] opacity-70">No. 03</div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.22em] opacity-70">250 g · raw</span>
        </div>
      </div>
    </div>
  );
}
