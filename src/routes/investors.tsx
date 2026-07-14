import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import { EnquiryForm } from "../components/enquiry-form";
import heroImg from "../assets/hero-village.jpg";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — Institutional Opportunity | LLV" },
      { name: "description", content: "Partner with LLV — a Queensland-based developer of institutional-grade land lease lifestyle communities with a strong pipeline." },
      { property: "og:title", content: "Investors — LLV" },
      { property: "og:description", content: "Institutional-grade lifestyle community development opportunities." },
      { property: "og:url", content: "/investors" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/investors" }],
  }),
  component: Investors,
});

function Investors() {
  return (
    <>
      <PageHero
        eyebrow="Investors & Partners"
        title="Institutional-grade lifestyle assets."
        lead="LLV develops and operates land lease lifestyle communities across Queensland, offering long-duration income backed by tangible assets and demographic tailwinds."
        image={heroImg}
        imageAlt="LLV community aerial"
      />

      <section className="container-narrow grid grid-cols-2 gap-8 py-20 md:grid-cols-4">
        {[
          { k: "$AUD", l: "Denominated" },
          { k: "20+ yr", l: "Operating history" },
          { k: "1,200+", l: "Lots in pipeline" },
          { k: "QLD", l: "Coastal focus" },
        ].map((s) => (
          <div key={s.l} className="border-t border-earth-900/10 pt-6">
            <p className="font-display text-3xl text-earth-900 lg:text-4xl">{s.k}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-earth-800/60">{s.l}</p>
          </div>
        ))}
      </section>

      <section className="bg-sand-100 py-24">
        <div className="container-narrow grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">The Opportunity</span>
            <h2 className="mt-4 text-3xl text-earth-900 lg:text-4xl">
              A defensive, real-asset thesis.
            </h2>
          </div>
          <div className="space-y-8 lg:col-span-7">
            {[
              { title: "Demographic tailwinds", body: "An ageing Australian population is driving structural demand for right-sized, community-based housing options — particularly in coastal regional markets." },
              { title: "Recurring cashflows", body: "Land lease models generate long-duration, indexed rental income underpinned by home ownership by residents." },
              { title: "Aligned operator", body: "LLV develops and operates the same assets it invests in — permanently aligning incentives across the portfolio." },
              { title: "Regional focus", body: "Queensland's coastal corridors offer the strongest combination of migration, affordability and lifestyle in Australia." },
            ].map((b) => (
              <div key={b.title} className="border-t border-earth-900/10 pt-6">
                <h3 className="mb-2 text-xl text-earth-900">{b.title}</h3>
                <p className="text-earth-800/75">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow py-24">
        <div className="mx-auto max-w-2xl rounded-3xl bg-sand-100 p-10">
          <h2 className="mb-2 text-3xl text-earth-900">Investor & landowner enquiries</h2>
          <p className="mb-8 text-sm text-earth-800/70">
            Speak confidentially with our capital and acquisitions team.
          </p>
          <EnquiryForm interestOptions={["Institutional investment", "Land acquisition", "Joint venture", "Investor briefing"]} />
        </div>
      </section>
    </>
  );
}
