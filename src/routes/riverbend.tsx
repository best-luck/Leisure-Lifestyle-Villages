import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import { EnquiryForm } from "../components/enquiry-form";
import { Download, MapPin } from "lucide-react";
import riverbendImg from "../assets/riverbend.jpg";
import homeInt from "../assets/home-interior.jpg";
import homeExt from "../assets/home-exterior.jpg";

export const Route = createFileRoute("/riverbend")({
  head: () => ({
    meta: [
      { title: "Riverbend Lifestyle Village — Hervey Bay, QLD | LLV" },
      { name: "description", content: "Riverbend is a premium land lease lifestyle community on Queensland's Fraser Coast — architecturally designed homes, resort amenities and coastal freedom." },
      { property: "og:title", content: "Riverbend Lifestyle Village" },
      { property: "og:description", content: "Premium coastal lifestyle community in Hervey Bay, QLD." },
      { property: "og:url", content: "/riverbend" },
      { property: "og:image", content: riverbendImg },
    ],
    links: [{ rel: "canonical", href: "/riverbend" }],
  }),
  component: Riverbend,
});

const amenities = [
  { n: "01", title: "Infinity Lap Pool", body: "Temperature-controlled year round with poolside cabanas." },
  { n: "02", title: "Residents Clubhouse", body: "A generous gathering space with lounge, dining and library." },
  { n: "03", title: "Wellness Suite", body: "Gymnasium, yoga studio and recovery amenities." },
  { n: "04", title: "Culinary Pavilion", body: "Commercial kitchen and outdoor dining for events." },
  { n: "05", title: "Bowling Green", body: "Manicured, floodlit and social — day and night." },
  { n: "06", title: "Community Gardens", body: "Shared productive gardens tended by residents." },
];

function Riverbend() {
  return (
    <>
      <PageHero
        eyebrow="Now Selling — Hervey Bay, QLD"
        title="Riverbend Lifestyle Village."
        lead="Positioned at the gateway to the Great Sandy Strait, Riverbend is a curated environment where architecture meets the ease of the coast."
        image={riverbendImg}
        imageAlt="Riverbend clubhouse and infinity pool at sunset"
      />

      <section className="container-narrow grid grid-cols-1 gap-20 py-24 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <nav className="flex flex-col gap-4 text-sm font-medium text-earth-800/60">
              {[
                ["#overview", "Overview"],
                ["#amenities", "Amenities"],
                ["#homes", "Home Designs"],
                ["#location", "Location"],
                ["#enquire", "Enquire"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="border-l-2 border-transparent pl-4 hover:border-earth-900 hover:text-earth-900">
                  {label}
                </a>
              ))}
            </nav>
            <div className="rounded-2xl bg-sand-100 p-8">
              <p className="mb-4 text-sm font-medium text-earth-900">Community brochure</p>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-earth-900/15 bg-sand-50 py-3 text-xs font-semibold uppercase tracking-wider text-earth-900 hover:bg-white"
              >
                <Download className="size-4" /> Download PDF
              </a>
            </div>
          </div>
        </aside>

        <div className="space-y-24 lg:col-span-8">
          <div id="overview">
            <h2 className="mb-8 text-balance text-3xl text-earth-900">Reimagined coastal life.</h2>
            <p className="mb-8 max-w-[56ch] text-lg leading-relaxed text-earth-800/80">
              Riverbend is more than a destination — it's a curated environment
              where every home is architecturally designed and every amenity is
              considered for the way people actually spend their time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src={homeInt} alt="Interior of a Riverbend home" className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
              <img src={homeExt} alt="Exterior of a Riverbend home" className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
            </div>
          </div>

          <div id="amenities">
            <h3 className="mb-10 text-2xl text-earth-900">The Riverbend Club.</h3>
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              {amenities.map((a) => (
                <div key={a.n} className="flex gap-5">
                  <span className="font-display italic text-earth-900/30">{a.n}</span>
                  <div>
                    <p className="font-medium text-earth-900">{a.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-earth-800/65">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="homes">
            <h3 className="mb-4 text-2xl text-earth-900">Home designs.</h3>
            <p className="mb-8 max-w-[56ch] text-earth-800/75">
              Six architect-designed floor plans, from two-bedroom courtyard
              homes to three-bedroom family layouts — each specified with
              premium finishes as standard.
            </p>
            <Link to="/home-designs" className="inline-flex rounded-full bg-earth-900 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-clay-700">
              Browse home designs
            </Link>
          </div>

          <div id="location">
            <h3 className="mb-6 text-2xl text-earth-900">Location.</h3>
            <div className="mb-6 flex items-center gap-3 text-sm text-earth-800/70">
              <MapPin className="size-4 text-clay-600" /> Hervey Bay, Queensland
            </div>
            <div className="overflow-hidden rounded-2xl border border-earth-900/10">
              <iframe
                title="Riverbend location"
                src="https://www.google.com/maps?q=Hervey+Bay+QLD&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div id="enquire" className="rounded-3xl bg-sand-100 p-8 lg:p-12">
            <h3 className="mb-2 text-2xl text-earth-900">Register your interest.</h3>
            <p className="mb-8 text-sm text-earth-800/70">Speak with the Riverbend sales team.</p>
            <EnquiryForm interestOptions={["Home purchase", "Site visit", "Investment", "General enquiry"]} />
          </div>
        </div>
      </section>
    </>
  );
}
