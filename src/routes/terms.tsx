import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — LLV" },
      { name: "description", content: "Terms of use for the Leisure Lifestyle Villages website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="container-narrow max-w-3xl py-24">
        <div className="space-y-6 text-earth-800/80">
          <p>By accessing this website you agree to be bound by these terms of use. If you do not accept them, please do not use the site.</p>
          <h2 className="text-2xl text-earth-900">Content</h2>
          <p>All information on this site is provided in good faith for general information only. Renderings, images and floor plans are indicative and subject to change.</p>
          <h2 className="text-2xl text-earth-900">Intellectual property</h2>
          <p>All content on this site is owned by or licensed to LLV and may not be reproduced without written permission.</p>
          <h2 className="text-2xl text-earth-900">Liability</h2>
          <p>To the extent permitted by law, LLV excludes liability for any loss or damage arising from use of, or reliance on, information on this site.</p>
          <h2 className="text-2xl text-earth-900">Governing law</h2>
          <p>These terms are governed by the laws of Queensland, Australia.</p>
          <p className="text-xs text-earth-800/60">This document is provided for informational purposes and does not constitute legal advice.</p>
        </div>
      </section>
    </>
  );
}
