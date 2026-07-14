import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import duskImg from "../assets/coastal-dusk.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LLV — Building Australia's Lifestyle Communities" },
      { name: "description", content: "Leisure Lifestyle Villages is a Queensland developer and operator of premium land lease communities, focused on long-term value and community stewardship." },
      { property: "og:title", content: "About Leisure Lifestyle Villages" },
      { property: "og:description", content: "Our story, our approach, and our commitment to the communities we build." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: duskImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About LLV"
        title={<>A developer with a deeper<br />sense of place.</>}
        lead="For over two decades, Leisure Lifestyle Villages has been quietly reshaping how Australians live in retirement and beyond — building coastal communities that endure."
        image={duskImg}
        imageAlt="Coastal Queensland dusk with silhouetted palms"
      />

      <section className="container-narrow grid grid-cols-1 gap-16 py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">Our Story</span>
        </div>
        <div className="space-y-6 lg:col-span-8">
          <h2 className="text-balance text-3xl text-earth-900 lg:text-4xl">
            Communities designed for a lifetime, not a season.
          </h2>
          <p className="text-lg leading-relaxed text-earth-800/80">
            LLV was founded on a simple conviction — that regional Queensland
            deserves lifestyle communities of the same quality as those found in
            the capital cities. We acquire, design, develop and operate land
            lease villages and caravan parks with the long view in mind, working
            in partnership with councils, landowners and institutional capital.
          </p>
          <p className="leading-relaxed text-earth-800/70">
            Every project begins with the land — its climate, its stories, its
            neighbours. From master-planning through construction and ongoing
            operations, our team remains involved in the villages we build.
          </p>
        </div>
      </section>

      <section className="bg-sand-100 py-24">
        <div className="container-narrow">
          <div className="mb-16 max-w-[48ch]">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
              Our Approach
            </span>
            <h2 className="text-balance text-3xl text-earth-900 lg:text-4xl">
              Three principles guide every decision.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Long-term stewardship",
                body: "We own and operate what we build. Our incentives are permanently aligned with our residents and investors.",
              },
              {
                n: "02",
                title: "Considered design",
                body: "Architecturally designed homes and amenities that respond to climate, landscape and how Australians actually live.",
              },
              {
                n: "03",
                title: "Regional focus",
                body: "We invest deeply in Queensland's regional coastal corridors, where lifestyle, affordability and growth converge.",
              },
            ].map((p) => (
              <div key={p.n} className="space-y-4">
                <span className="font-display italic text-earth-900/30">{p.n}</span>
                <h3 className="text-xl text-earth-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-earth-800/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow grid grid-cols-2 gap-8 py-24 md:grid-cols-4">
        {[
          { k: "20+", l: "Years operating" },
          { k: "1,200+", l: "Lots in pipeline" },
          { k: "2", l: "Active communities" },
          { k: "100%", l: "Queensland based" },
        ].map((s) => (
          <div key={s.l} className="border-t border-earth-900/10 pt-6">
            <p className="font-display text-4xl text-earth-900 lg:text-5xl">{s.k}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-earth-800/60">{s.l}</p>
          </div>
        ))}
      </section>
    </>
  );
}
