import { createFileRoute } from "@tanstack/react-router";
import { Menu, ShoppingCart, Minus, Plus } from "lucide-react";
import { useState } from "react";

import bottle from "@/assets/artemis-bottle.webp";
import packaging from "@/assets/artemis-packaging.webp";
import model from "@/assets/artemis-model.webp";
import pyramid from "@/assets/artemis-pyramid.webp";
import shadow from "@/assets/artemis-shadow.webp";
import unisexHero from "@/assets/artemis-hero.webp";
import car from "@/assets/artemis-car.webp";
import leather from "@/assets/artemis-leather.webp";
import notesFlatlay from "@/assets/artemis-notes.webp";
import noteMusk from "@/assets/note-white-musk.webp";
import noteRum from "@/assets/note-rum.webp";
import noteVanilla from "@/assets/note-vanilla.webp";
import notePeach from "@/assets/note-peach.webp";
import noteLily from "@/assets/note-lily.webp";
import noteCloves from "@/assets/note-cloves.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Artemis (100ml) — Men's Parfum | Sarkar" },
      {
        name: "description",
        content:
          "Artemis by Sarkar. A men's parfum of white musk, rum, vanilla, peach, lily and cloves. 100ml, 25% oil concentration. Incl. of all taxes.",
      },
      { property: "og:title", content: "Artemis (100ml) — Men's Parfum | Sarkar" },
      {
        property: "og:description",
        content:
          "Artemis by Sarkar. A men's parfum of white musk, rum, vanilla, peach, lily and cloves. 100ml, 25% oil concentration. Incl. of all taxes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NOTE_PHOTOS = [
  { name: "White Musk", src: noteMusk },
  { name: "Rum", src: noteRum },
  { name: "Vanilla", src: noteVanilla },
  { name: "Peach", src: notePeach },
  { name: "Lily", src: noteLily },
  { name: "Cloves", src: noteCloves },
];

const FACTS = [
  ["Cruelty", "Free"],
  ["Long", "Lasting"],
  ["25% Oil", "Concentration"],
  ["IFRA", "Certified"],
  ["Formulated", "In France"],
];

function Index() {
  const [qty, setQty] = useState(1);

  const gallery = [
    { src: packaging, alt: "Artemis 100ml parfum with its packaging" },
    { src: model, alt: "Man holding the Artemis parfum bottle" },
    { src: pyramid, alt: "Artemis fragrance notes: entry, core and foundation" },
    { src: shadow, alt: "Artemis bottle in dramatic shadow" },
    { src: car, alt: "Artemis bottle in a car interior at night" },
    { src: leather, alt: "Artemis bottle on a black leather bag" },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <div className="bg-ink py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-foreground">
        Claim two 7ml freebies with every order
      </div>

      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background px-5 py-4 md:px-8">
        <button aria-label="Open menu" className="text-foreground">
          <Menu className="h-6 w-6" strokeWidth={1.75} />
        </button>
        <a
          href="#buy"
          className="font-display text-2xl font-semibold uppercase tracking-[0.35em] md:text-[28px]"
        >
          Sarkar
        </a>
        <div className="flex items-center gap-4">
          <a
            href="#buy"
            className="hidden bg-ink px-5 py-2 text-sm font-semibold text-ink-foreground md:inline-block"
          >
            Buy Now
          </a>
          <button aria-label="Cart">
            <ShoppingCart className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <main>
        {/* Product: gallery + sticky info */}
        <section id="buy" className="grid grid-cols-1 lg:grid-cols-[1fr_480px]">
          <div>
            <div className="flex items-center justify-center bg-shade p-6 lg:p-10">
              <img
                src={bottle}
                alt="Artemis 100ml parfum bottle by Sarkar"
                width={1200}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 620px"
                fetchPriority="high"
                decoding="async"
                className="w-full max-w-[620px]"
              />
            </div>
            <div className="grid grid-cols-2">
              {gallery.map((g) => (
                <img
                  key={g.alt}
                  src={g.src}
                  alt={g.alt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              ))}
            </div>
          </div>

          <div className="px-6 py-10 lg:sticky lg:top-[73px] lg:h-fit lg:px-10 lg:py-14">
            <h1 className="font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              Artemis <span className="text-2xl md:text-3xl">(100ml)</span>
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Men", "Musk", "Parfum"].map((t) => (
                <span
                  key={t}
                  className="bg-shade px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.08em]">
              Late dinners · Long drives · All nighters
            </p>
            <p className="mt-2 text-base text-muted-foreground">
              It smells like white musk, rum and the last word of the night.
            </p>

            <p className="mt-6 font-display text-3xl font-semibold">₹ 2,499</p>
            <p className="mt-1 text-xs text-muted-foreground">Incl. of all taxes</p>

            <p className="mt-8 text-sm font-medium">Fragrance notes</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {NOTE_PHOTOS.map((n) => (
                <div key={n.name} className="border border-border">
                  <img
                    src={n.src}
                    alt={n.name}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <p className="py-2 text-center text-[10px] font-semibold uppercase tracking-[0.1em]">
                    {n.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex w-full items-center justify-between border border-border px-4 py-3 sm:w-36">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold">{qty}</span>
                <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button className="flex-1 bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-ink-foreground transition-opacity hover:opacity-90">
                Add To Cart
              </button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              * Ships within 24-36 hours of ordering.
            </p>
          </div>
        </section>

        {/* Editorial */}
        <section className="relative">
          <img
            src={unisexHero}
            alt="Artemis campaign visual"
            width={1920}
            height={1088}
            loading="lazy"
            className="h-[70vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 pb-16 text-center">
            <h2 className="font-display text-4xl font-semibold uppercase tracking-[0.3em] text-ink-foreground md:text-6xl">
              Artemis
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-foreground/80">
              Silent. Hunting. Certain.
            </p>
          </div>
        </section>

        {/* Notes photos */}
        <section className="bg-ink px-6 py-16 text-ink-foreground lg:px-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-ink-foreground/60">
            The Composition
          </p>
          <h2 className="mt-4 text-center font-display text-3xl font-semibold uppercase md:text-4xl">
            Six notes. One verdict.
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {NOTE_PHOTOS.map((n) => (
              <figure key={n.name}>
                <img
                  src={n.src}
                  alt={n.name}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {n.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Notes flatlay + pyramid */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <img
            src={notesFlatlay}
            alt="Artemis fragrance ingredients flatlay"
            width={1408}
            height={912}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <img
            src={pyramid}
            alt="Artemis notes: the entry, the core, the foundation"
            width={1200}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </section>

        {/* Facts */}
        <section className="grid grid-cols-1 bg-ink text-ink-foreground lg:grid-cols-2">
          <img
            src={shadow}
            alt="Artemis bottle with a long shadow"
            width={1200}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <ul className="flex flex-col justify-center divide-y divide-ink-foreground/15 px-6 py-14 lg:px-14">
            {FACTS.map(([top, bottom]) => (
              <li key={top} className="py-6">
                <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em]">
                  {top}
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-ink-foreground/60">
                  {bottom}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Packaging */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-14 lg:order-1 lg:px-14">
            <h2 className="font-display text-3xl font-semibold uppercase md:text-4xl">
              Made for men.
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              100ml of parfum concentration. Sealed in matte black, engraved in silver,
              built to be seen on the shelf and remembered off it.
            </p>
          </div>
          <img
            src={packaging}
            alt="Artemis 100ml parfum with its packaging"
            width={1200}
            height={1200}
            loading="lazy"
            className="order-1 h-full w-full object-cover lg:order-2"
          />
        </section>
      </main>

      <footer className="bg-ink px-6 py-10 text-center text-ink-foreground">
        <p className="font-display text-xl font-semibold uppercase tracking-[0.35em]">Sarkar</p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink-foreground/60">
          Artemis (100ml) · Parfum for men
        </p>
      </footer>
    </div>
  );
}
