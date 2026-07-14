import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import duskImg from "../assets/coastal-dusk.jpg";

export const Route = createFileRoute("/bowen-lifestyle")({
  head: () => ({
    meta: [
      { title: "Bowen Palms Lifestyle Village — Coming Soon | LLV" },
      { name: "description", content: "A new master-planned lifestyle village in Bowen, Queensland — register your interest for launch updates." },
      { property: "og:title", content: "Bowen Palms Lifestyle Village — Coming Soon" },
      { property: "og:description", content: "New master-planned lifestyle village in Bowen, QLD. Coming soon." },
      { property: "og:url", content: "/bowen-lifestyle" },
      { property: "og:image", content: duskImg },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/bowen-lifestyle" }],
  }),
  component: BowenLifestyle,
});

function BowenLifestyle() {
  return (
    <>
      <PageHero
        eyebrow="Coming Soon — Bowen, QLD"
        title="Bowen Palms Lifestyle Village."
        lead="A new master-planned lifestyle community at the gateway to the Whitsundays. Register your interest for launch updates, floor plans and priority previews."
        image={duskImg}
        imageAlt="Coastal Queensland dusk"
      />

      <section className="container-narrow py-24 text-center">
        <p className="mx-auto max-w-[48ch] text-lg text-earth-800/75">
          Details for Bowen Palms Lifestyle Village will be released in the
          coming months. To be among the first to receive information, please
          register your interest.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-earth-900 px-8 py-4 text-sm font-medium text-sand-50 hover:bg-clay-700"
        >
          Register your interest
        </Link>
      </section>
    </>
  );
}
