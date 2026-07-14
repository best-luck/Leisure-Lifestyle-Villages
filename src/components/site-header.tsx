import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SiteLogo } from "./site-logo";

const nav = [
  { to: "/riverbend", label: "Riverbend" },
  { to: "/home-designs", label: "Home Designs" },
  { to: "/bowen-palms", label: "Bowen Palms" },
  { to: "/developments", label: "Developments" },
  { to: "/investors", label: "Investors" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-earth-900/5 bg-sand-50/85 backdrop-blur-md">
      <div className="container-narrow flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <SiteLogo />
          <span className="hidden text-[13px] font-semibold uppercase tracking-[0.18em] text-earth-900 sm:block">
            Leisure Lifestyle Villages
          </span>
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-earth-900 sm:hidden">LLV</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-earth-800/75 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-earth-900"
              activeProps={{ className: "text-earth-900" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-earth-900 py-2.5 pl-4 pr-5 text-sm font-medium text-sand-50 transition-colors hover:bg-clay-700"
          >
            <Phone className="size-4" /> Enquire
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-earth-900/10 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-earth-900/5 bg-sand-50 xl:hidden">
          <nav className="container-narrow flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-earth-800 hover:bg-sand-100"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
