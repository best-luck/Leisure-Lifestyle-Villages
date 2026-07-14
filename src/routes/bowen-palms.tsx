import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import { EnquiryForm } from "../components/enquiry-form";
import { MapPin } from "lucide-react";
import bowenImg from "../assets/bowen-palms.jpg";

export const Route = createFileRoute("/bowen-palms")({
  head: () => ({
    meta: [
      { title: "Bowen Palms Caravan Park — Bowen, QLD | LLV" },
      { name: "description", content: "Bowen Palms Caravan Park is a mature, palm-lined holiday park in Bowen, Queensland — the gateway to the Whitsundays." },
      { property: "og:title", content: "Bowen Palms Caravan Park" },
      { property: "og:description", content: "A mature palm-lined holiday park in Bowen, QLD." },
      { property: "og:url", content: "/bowen-palms" },
      { property: "og:image", content: bowenImg },
    ],
    links: [{ rel: "canonical", href: "/bowen-palms" }],
  }),
  component: BowenPalms,
});

function BowenPalms() {
  return (
    <>
      <PageHero
        eyebrow="Bowen, QLD"
        title="Bowen Palms Caravan Park."
        lead="An established, palm-lined holiday park at the gateway to the Whitsundays — powered sites, cabins and modern amenities."
        image={bowenImg}
        imageAlt="Bowen Palms Caravan Park with mature palms"
      />

      <section className="container-narrow grid grid-cols-1 gap-16 py-24 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl text-earth-900">A holiday tradition, refined.</h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-800/80">
            Bowen Palms has welcomed travellers for over 30 years. Under LLV
            stewardship, the park continues to be upgraded with modern amenity
            buildings, landscaping and site infrastructure — without losing the
            relaxed, community atmosphere that defines it.
          </p>
          <ul className="mt-8 space-y-4 border-t border-earth-900/10 pt-8">
            {[
              "Powered and drive-through caravan sites",
              "Ensuite and standard cabins",
              "Camp kitchen and BBQ pavilion",
              "Swimming pool and children's playground",
              "Walking distance to Bowen town centre",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-earth-800/80">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay-600" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-sand-100 p-8">
            <div className="mb-4 flex items-center gap-3 text-sm text-earth-800/70">
              <MapPin className="size-4 text-clay-600" /> Bowen, Queensland
            </div>
            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Bowen Palms location"
                src="https://www.google.com/maps?q=Bowen+QLD&output=embed"
                className="h-[300px] w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-sand-100 p-8">
            <h3 className="mb-2 text-xl text-earth-900">Booking enquiry</h3>
            <p className="mb-6 text-sm text-earth-800/70">Get in touch with the park directly.</p>
            <EnquiryForm interestOptions={["Powered site", "Cabin booking", "Long stay", "General"]} />
          </div>
        </div>
      </section>
    </>
  );
}
