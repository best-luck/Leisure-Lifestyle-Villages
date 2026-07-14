import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import { EnquiryForm } from "../components/enquiry-form";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LLV — Get in Touch" },
      { name: "description", content: "Contact Leisure Lifestyle Villages — enquiries about our communities, home designs, investment opportunities and careers." },
      { property: "og:title", content: "Contact LLV" },
      { property: "og:description", content: "Get in touch with the Leisure Lifestyle Villages team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        lead="Whether you're considering a lifestyle move, exploring investment opportunities or bringing land to market — our team would be glad to speak with you."
      />
      <section className="container-narrow grid grid-cols-1 gap-16 py-24 lg:grid-cols-12">
        <aside className="space-y-8 lg:col-span-4">
          <ContactRow icon={<MapPin className="size-4" />} label="Head Office" value={<>Queensland,<br />Australia</>} />
          <ContactRow icon={<Mail className="size-4" />} label="Email" value={<a href="mailto:info@llv.com.au" className="text-earth-900 hover:text-clay-700">info@llv.com.au</a>} />
          <ContactRow icon={<Phone className="size-4" />} label="Phone" value={<a href="tel:+61700000000" className="text-earth-900 hover:text-clay-700">+61 7 0000 0000</a>} />
        </aside>
        <div className="rounded-3xl bg-sand-100 p-8 lg:col-span-8 lg:p-12">
          <h2 className="mb-2 text-2xl text-earth-900">Send us a message</h2>
          <p className="mb-8 text-sm text-earth-800/70">We'll respond within one business day.</p>
          <EnquiryForm
            interestOptions={[
              "Riverbend Lifestyle Village",
              "Bowen Palms Caravan Park",
              "Bowen Palms Lifestyle Village",
              "Home designs",
              "Investment",
              "Land acquisition",
              "Careers",
              "General enquiry",
            ]}
          />
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="grid size-10 shrink-0 place-items-center rounded-full bg-sand-100 text-earth-900">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-earth-800/60">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-earth-800/85">{value}</p>
      </div>
    </div>
  );
}
