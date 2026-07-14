import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import { ArrowRight } from "lucide-react";
import riverbendImg from "../assets/riverbend.jpg";
import bowenImg from "../assets/bowen-palms.jpg";
import heroImg from "../assets/hero-village.jpg";

export const Route = createFileRoute("/developments")({
  head: () => ({
    meta: [
      { title: "Developments & Portfolio — LLV" },
      { name: "description", content: "Explore LLV's active, established and upcoming lifestyle communities across regional Queensland." },
      { property: "og:title", content: "LLV Developments" },
      { property: "og:description", content: "Active, established and upcoming lifestyle communities." },
      { property: "og:url", content: "/developments" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/developments" }],
  }),
  component: Developments,
});

const projects = [
  { to: "/riverbend", tag: "Now Selling", title: "Riverbend Lifestyle Village", location: "Hervey Bay, QLD", img: riverbendImg, copy: "A flagship land lease community on the Fraser Coast." },
  { to: "/bowen-palms", tag: "Established", title: "Bowen Palms Caravan Park", location: "Bowen, QLD", img: bowenImg, copy: "Palm-lined holiday park at the gateway to the Whitsundays." },
  { to: "/bowen-lifestyle", tag: "Coming Soon", title: "Bowen Palms Lifestyle Village", location: "Bowen, QLD", img: heroImg, copy: "A new master-planned lifestyle community, launching soon." },
];

function Developments() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Every project, a place with meaning."
        lead="Our developments range from established caravan parks to master-planned lifestyle villages — each one shaped by its landscape and community."
      />

      <section className="container-narrow py-24">
        <div className="space-y-16">
          {projects.map((p, i) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute left-6 top-6 rounded-full bg-sand-50/90 px-3 py-1 backdrop-blur-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-earth-900">{p.tag}</span>
                </div>
              </div>
              <div>
                <span className="mb-4 block text-xs uppercase tracking-[0.24em] text-clay-600">{p.location}</span>
                <h3 className="mb-4 text-3xl text-earth-900 lg:text-4xl">{p.title}</h3>
                <p className="mb-6 max-w-[52ch] text-earth-800/75">{p.copy}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-earth-900">
                  Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
