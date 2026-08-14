import { createFileRoute } from "@tanstack/react-router";
import { Menu, ShoppingCart, Minus, Plus } from "lucide-react";
import { useState } from "react";

import bottle from "@/assets/artemis-bottle.jpg";
import hero from "@/assets/artemis-hero.jpg";
import notes from "@/assets/artemis-notes.jpg";
import packaging from "@/assets/artemis-packaging.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Artemis (100ml) — Men's Parfum | Sarkar" },
      {
        name: "description",
        content:
          "Artemis by Sarkar. A men's parfum of white musk, rum, vanilla, peach, lily and cloves. 100ml. Incl. of all taxes.",
      },
      { property: "og:title", content: "Artemis (100ml) — Men's Parfum | Sarkar" },
      {
        property: "og:description",
        content:
          "White musk, rum, vanilla, peach, lily, cloves. Artemis is built for men who arrive last and stay longest.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NOTES = ["White Musk", "Rum", "Vanilla", "Peach", "Lily", "Cloves"];

function Index() {
  const [qty, setQty] = useState(1);

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
        {/* Product */}
        <section id="buy" className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-shade p-6 lg:p-10">
            <img
              src={bottle}
              alt="Artemis 100ml parfum bottle by Sarkar"
              width={1200}
              height={1200}
              className="w-full max-w-[560px]"
            />
          </div>

          <div className="px-6 py-10 lg:px-14 lg:py-16">
            <h1 className="font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              Artemis{" "}
              <span className="text-2xl md:text-3xl">(100ml)</span>
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
              {NOTES.map((n) => (
                <div
                  key={n}
                  className="border border-border px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.1em]"
                >
                  {n}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex w-full items-center justify-between border border-border px-4 py-3 sm:w-36">
                <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
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

        {/* Editorial hero */}
        <section className="relative">
          <img
            src={hero}
            alt="Artemis campaign visual"
            width={1920}
            height={1088}
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

        {/* Notes */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <img
            src={notes}
            alt="Artemis fragrance notes: white musk, rum, vanilla, peach, lily, cloves"
            width={1408}
            height={912}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="bg-ink px-6 py-14 text-ink-foreground lg:px-14 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-foreground/60">
              The Composition
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase md:text-4xl">
              Six notes. One verdict.
            </h2>
            <ul className="mt-8 divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
              {NOTES.map((n) => (
                <li
                  key={n}
                  className="flex items-center justify-between py-4 text-sm font-medium uppercase tracking-[0.12em]"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
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
