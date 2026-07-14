import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — LLV" },
      { name: "description", content: "How Leisure Lifestyle Villages collects, uses and protects your personal information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="container-narrow max-w-3xl py-24">
        <div className="prose prose-earth space-y-6 text-earth-800/80">
          <p>Leisure Lifestyle Villages Pty Ltd ("LLV", "we", "our", "us") is committed to protecting the privacy of visitors to our website and individuals we engage with as part of our business.</p>
          <h2 className="text-2xl text-earth-900">What we collect</h2>
          <p>We collect information you provide directly to us, such as your name, contact details and enquiry content, as well as technical information collected automatically when you use our website.</p>
          <h2 className="text-2xl text-earth-900">How we use information</h2>
          <p>We use personal information to respond to enquiries, deliver services, comply with our legal obligations, and improve our communities and communications.</p>
          <h2 className="text-2xl text-earth-900">Disclosure</h2>
          <p>We do not sell your personal information. We may disclose information to service providers who help us operate our business, or where required by law.</p>
          <h2 className="text-2xl text-earth-900">Your rights</h2>
          <p>You can request access to or correction of your personal information by contacting us at <a href="mailto:privacy@llv.com.au" className="text-earth-900 underline">privacy@llv.com.au</a>.</p>
          <p className="text-xs text-earth-800/60">This policy is provided for informational purposes and does not constitute legal advice.</p>
        </div>
      </section>
    </>
  );
}
