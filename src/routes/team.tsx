import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Team — Leadership at LLV" },
      { name: "description", content: "Meet the leadership team behind Leisure Lifestyle Villages — decades of experience in property development, operations and investment." },
      { property: "og:title", content: "The Team — LLV" },
      { property: "og:description", content: "Leadership at Leisure Lifestyle Villages." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

const team = [
  { name: "Managing Director", role: "Founder & MD", bio: "Over three decades of experience in Queensland property development, from residential subdivisions to master-planned communities." },
  { name: "Chief Operating Officer", role: "Operations", bio: "Leads community operations, resident experience and delivery of every LLV village." },
  { name: "Head of Development", role: "Development", bio: "Responsible for site acquisition, master-planning and construction delivery across the portfolio." },
  { name: "Chief Financial Officer", role: "Finance & Investor Relations", bio: "Manages capital, investor relations and financial stewardship of the group." },
  { name: "Head of Sales & Marketing", role: "Sales", bio: "Leads the resident sales journey and brand across every community." },
  { name: "Company Secretary", role: "Governance", bio: "Corporate governance, compliance and stakeholder engagement." },
];

function Team() {
  return (
    <>
      <PageHero
        eyebrow="The Team"
        title="Experienced. Grounded. Local."
        lead="Our leadership team brings together decades of experience in Queensland property development, operations and institutional capital."
      />
      <section className="container-narrow py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-earth-900/10 bg-sand-50 p-8">
              <div className="mb-6 aspect-square rounded-xl bg-gradient-to-br from-sand-200 to-sand-100" />
              <p className="text-xs uppercase tracking-[0.18em] text-clay-600">{m.role}</p>
              <h3 className="mt-2 text-xl text-earth-900">{m.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-earth-800/70">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
