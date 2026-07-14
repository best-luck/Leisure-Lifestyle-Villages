import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join LLV" },
      { name: "description", content: "Career opportunities at Leisure Lifestyle Villages — build a career with a Queensland lifestyle community developer and operator." },
      { property: "og:title", content: "Careers at LLV" },
      { property: "og:description", content: "Opportunities to join a Queensland lifestyle community developer." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const roles = [
  { title: "Community Manager", location: "Hervey Bay, QLD", type: "Full time" },
  { title: "Sales Consultant — Riverbend", location: "Hervey Bay, QLD", type: "Full time" },
  { title: "Development Manager", location: "Queensland", type: "Full time" },
  { title: "Park Manager — Bowen Palms", location: "Bowen, QLD", type: "Full time" },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career where your work is felt."
        lead="At LLV, our people shape the communities we build. If you value craft, care and long-term thinking, we'd like to hear from you."
      />
      <section className="container-narrow py-24">
        <h2 className="mb-10 text-3xl text-earth-900">Current opportunities</h2>
        <div className="divide-y divide-earth-900/10 border-y border-earth-900/10">
          {roles.map((r) => (
            <Link
              key={r.title}
              to="/contact"
              className="group flex flex-wrap items-center justify-between gap-4 py-6 transition-colors hover:bg-sand-100/60"
            >
              <div>
                <h3 className="text-xl text-earth-900">{r.title}</h3>
                <p className="mt-1 text-sm text-earth-800/60">{r.location} · {r.type}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-earth-900">
                Apply <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-16 max-w-[60ch] text-earth-800/70">
          Don't see the role you're looking for? We're always open to conversations with talented
          people. Reach out via our{" "}
          <Link to="/contact" className="underline decoration-earth-900/30 underline-offset-4 hover:decoration-earth-900">contact page</Link>.
        </p>
      </section>
    </>
  );
}
