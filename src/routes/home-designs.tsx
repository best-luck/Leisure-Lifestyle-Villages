import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import { ArrowRight } from "lucide-react";
import homeExt from "../assets/home-exterior.jpg";
import homeInt from "../assets/home-interior.jpg";
import riverbendImg from "../assets/riverbend.jpg";

export const Route = createFileRoute("/home-designs")({
  head: () => ({
    meta: [
      { title: "Home Designs — Architect-Designed Living | LLV" },
      { name: "description", content: "Explore our range of architect-designed homes for Queensland lifestyle communities — from two-bedroom courtyard homes to three-bedroom family layouts." },
      { property: "og:title", content: "LLV Home Designs" },
      { property: "og:description", content: "Architect-designed homes for Queensland lifestyle communities." },
      { property: "og:url", content: "/home-designs" },
      { property: "og:image", content: homeExt },
    ],
    links: [{ rel: "canonical", href: "/home-designs" }],
  }),
  component: HomeDesigns,
});

const homes = [
  { name: "The Coral", beds: 2, baths: 2, size: "142 m²", copy: "Compact courtyard home with a north-facing living zone.", img: homeExt },
  { name: "The Palm", beds: 2, baths: 2, size: "168 m²", copy: "Open-plan layout with an oversized alfresco and study nook.", img: homeInt },
  { name: "The Reef", beds: 3, baths: 2, size: "195 m²", copy: "Three bedrooms, media room and generous garage.", img: riverbendImg },
  { name: "The Whitsunday", beds: 3, baths: 2, size: "212 m²", copy: "Our flagship layout — separate wings and a butler's pantry.", img: homeExt },
];

function HomeDesigns() {
  return (
    <>
      <PageHero
        eyebrow="Home Designs"
        title="Designed for the way you live."
        lead="Every home in our communities is architect-designed for the Queensland climate — with premium finishes, considered floor plans and outdoor rooms as standard."
      />

      <section className="container-narrow py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {homes.map((h) => (
            <article key={h.name} className="group">
              <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={h.img} alt={`${h.name} — architect-designed home`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-2xl text-earth-900">{h.name}</h3>
                  <p className="text-sm text-earth-800/70">{h.copy}</p>
                </div>
                <dl className="text-right text-xs uppercase tracking-wider text-earth-800/60">
                  <div>{h.beds} bed · {h.baths} bath</div>
                  <div className="mt-1 text-earth-900">{h.size}</div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-sand-100 p-10 text-center">
          <h2 className="mb-4 text-3xl text-earth-900">Download the full home designs brochure</h2>
          <p className="mx-auto mb-8 max-w-[48ch] text-earth-800/70">
            Detailed floor plans, inclusions and specifications for every layout.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-earth-900 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-clay-700"
          >
            Request brochure <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
