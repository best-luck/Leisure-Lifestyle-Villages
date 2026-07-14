import type { ReactNode } from "react";

export function PageHero({
  eyebrow, title, lead, image, imageAlt,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative border-b border-earth-900/5 bg-sand-100">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt={imageAlt ?? ""} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 via-earth-900/25 to-earth-900/10" />
        </div>
      )}
      <div className={`container-narrow relative ${image ? "text-sand-50" : "text-earth-900"} py-24 lg:py-36`}>
        {eyebrow && (
          <span className={`mb-6 block text-xs font-semibold uppercase tracking-[0.24em] ${image ? "text-sand-50/80" : "text-clay-600"}`}>
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-[22ch] text-balance text-4xl font-normal leading-[1.05] lg:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className={`mt-8 max-w-[54ch] text-pretty text-lg leading-relaxed ${image ? "text-sand-50/85" : "text-earth-800/75"}`}>
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
