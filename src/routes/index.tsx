import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Leaf, Users } from "lucide-react";
import heroImg from "../assets/hero-village.jpg";
import riverbendImg from "../assets/riverbend.jpg";
import bowenImg from "../assets/bowen-palms.jpg";
import duskImg from "../assets/coastal-dusk.jpg";
import homeInt from "../assets/home-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leisure Lifestyle Villages — Premium Communities in Queensland" },
      { name: "description", content: "LLV develops and operates lifestyle villages, land lease communities and caravan parks across regional Queensland — designed for long-term value." },
      { property: "og:title", content: "Leisure Lifestyle Villages" },
      { property: "og:description", content: "Premium lifestyle communities across regional Queensland." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="container-narrow grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-12 lg:py-24">
          <div className="z-10 lg:col-span-6">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
              Est. Queensland, Australia
            </span>
            <h1 className="mb-8 text-balance text-4xl leading-[1.05] text-earth-900 lg:text-6xl">
              The art of considered coastal living.
            </h1>
            <p className="mb-10 max-w-[52ch] text-pretty text-lg leading-relaxed text-earth-800/75 lg:text-xl">
              Leisure Lifestyle Villages develops and operates premium land lease
              communities that honour the Queensland landscape — unhurried,
              generous, and designed for long-term value.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/developments"
                className="inline-flex items-center gap-2 rounded-full bg-earth-900 py-3 pl-6 pr-6 text-sm font-medium text-sand-50 transition-colors hover:bg-clay-700"
              >
                Explore Communities <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/investors"
                className="inline-flex items-center gap-2 rounded-full border border-earth-900/15 py-3 pl-6 pr-6 text-sm font-medium text-earth-900 transition-colors hover:bg-sand-100"
              >
                Investment Strategy
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl outline outline-1 -outline-offset-1 outline-black/5">
              <img
                src={heroImg}
                alt="Aerial view of a Queensland lifestyle village at golden hour"
                width={1600}
                height={1200}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-sand-100 py-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <Pillar
              icon={<Building2 className="size-4" />}
              title="Institutional Quality"
              body="Three decades of development expertise, transparent governance and disciplined land acquisition."
            />
            <Pillar
              icon={<Users className="size-4" />}
              title="Community Led"
              body="Managed villages that foster connection, movement and belonging — with every detail resident-first."
            />
            <Pillar
              icon={<Leaf className="size-4" />}
              title="Enduring Value"
              body="Environmentally sensitive master-planning and stewardship that compounds value across decades."
            />
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-[48ch]">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-earth-900/40">
                Our Portfolio
              </span>
              <h2 className="text-balance text-3xl text-earth-900 lg:text-4xl">
                Communities shaped by nature.
              </h2>
            </div>
            <Link
              to="/developments"
              className="group inline-flex items-center gap-2 border-b border-earth-900/10 pb-1 text-sm font-medium text-earth-900 transition-colors hover:border-earth-900"
            >
              View all developments
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <CommunityCard
              to="/riverbend"
              image={riverbendImg}
              alt="Riverbend clubhouse and infinity pool at sunset"
              tag="Now Selling"
              title="Riverbend Lifestyle Village"
              copy="An oasis of modern architecture and tropical tranquility on Queensland's Fraser Coast."
              location="Hervey Bay, QLD"
            />
            <CommunityCard
              to="/bowen-palms"
              image={bowenImg}
              alt="Bowen Palms Caravan Park entry with mature palms"
              tag="Established"
              title="Bowen Palms Caravan Park"
              copy="The quintessential Whitsundays coastal escape — palms, sunshine and easy living."
              location="Bowen, QLD"
            />
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="bg-sand-100 py-24">
        <div className="container-narrow grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={homeInt}
              alt="Modern Australian home interior with timber and stone finishes"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
              A Different Way to Live
            </span>
            <h2 className="mb-6 text-balance text-3xl leading-tight text-earth-900 lg:text-4xl">
              Own your home. Lease the land. Free your lifestyle.
            </h2>
            <p className="mb-8 max-w-[54ch] text-pretty text-lg leading-relaxed text-earth-800/75">
              Our land lease model unlocks the freedom of ownership without the
              overhead of land — with resort-quality amenities, active social
              calendars and homes designed for the Queensland climate.
            </p>
            <Link
              to="/home-designs"
              className="group inline-flex items-center gap-3 text-sm font-medium text-earth-900"
            >
              <span className="border-b border-earth-900/20 pb-1 transition-colors group-hover:border-earth-900">
                Explore our home designs
              </span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dual audience CTA */}
      <section className="relative overflow-hidden">
        <img src={duskImg} alt="Coastal dusk over a Queensland estuary" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-earth-900/70" />
        <div className="container-narrow relative py-28 text-center text-sand-50">
          <h2 className="mx-auto max-w-[24ch] text-balance text-3xl leading-tight lg:text-5xl">
            Join a community that reflects your vision.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-sand-50 px-8 py-4 text-sm font-medium text-earth-900 transition-colors hover:bg-sand-100"
            >
              Resident Enquiries
            </Link>
            <Link
              to="/investors"
              className="rounded-full border border-sand-50/25 px-8 py-4 text-sm font-medium text-sand-50 transition-colors hover:bg-sand-50/10"
            >
              Investor Relations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="space-y-4">
      <div className="grid size-10 place-items-center rounded-full bg-sand-200 text-earth-900">
        {icon}
      </div>
      <h3 className="text-xl text-earth-900">{title}</h3>
      <p className="max-w-[56ch] text-pretty text-sm leading-relaxed text-earth-800/70">{body}</p>
    </div>
  );
}

function CommunityCard({
  to, image, alt, tag, title, copy, location,
}: {
  to: string; image: string; alt: string; tag: string; title: string; copy: string; location: string;
}) {
  return (
    <Link to={to} className="group block">
      <div className="relative mb-6 aspect-[3/2] w-full overflow-hidden rounded-2xl">
        <img src={image} alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute left-6 top-6 rounded-full bg-sand-50/90 px-3 py-1 backdrop-blur-sm">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-earth-900">{tag}</span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="mb-2 text-2xl text-earth-900">{title}</h4>
          <p className="text-sm text-earth-800/70">{copy}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="block text-xs uppercase tracking-wider text-earth-800/40">Location</span>
          <span className="text-sm font-medium text-earth-900">{location}</span>
        </div>
      </div>
    </Link>
  );
}
