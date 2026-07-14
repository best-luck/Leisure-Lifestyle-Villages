import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-earth-900/5 bg-sand-50 pb-12 pt-20">
      <div className="container-narrow">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <SiteLogo />
              <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-earth-900">
                Leisure Lifestyle Villages
              </span>
            </div>
            <p className="max-w-[38ch] text-pretty text-sm leading-relaxed text-earth-800/65">
              A diversified developer and operator creating enduring lifestyle
              communities across regional Australia.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid size-9 place-items-center rounded-full border border-earth-900/10 text-earth-800/70 transition-colors hover:border-earth-900 hover:text-earth-900"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Communities"
            items={[
              { to: "/riverbend", label: "Riverbend Lifestyle Village" },
              { to: "/bowen-palms", label: "Bowen Palms Caravan Park" },
              { to: "/bowen-lifestyle", label: "Bowen Palms Lifestyle Village" },
              { to: "/developments", label: "All Developments" },
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              { to: "/about", label: "About LLV" },
              { to: "/team", label: "The Team" },
              { to: "/careers", label: "Careers" },
              { to: "/investors", label: "Investors" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-900">Head Office</p>
            <p className="text-sm leading-relaxed text-earth-800/65">
              Queensland, Australia<br />
              <a href="mailto:info@llv.com.au" className="text-earth-900 underline decoration-earth-900/20 underline-offset-4 hover:decoration-earth-900">
                info@llv.com.au
              </a>
              <br />
              <a href="tel:+61700000000" className="hover:text-earth-900">+61 7 0000 0000</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-earth-900/5 pt-8 text-xs uppercase tracking-[0.16em] text-earth-800/40 md:flex-row">
          <p>© {new Date().getFullYear()} Leisure Lifestyle Villages Pty Ltd.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-earth-900">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-earth-900">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-900">{title}</p>
      <ul className="space-y-3 text-sm text-earth-800/65">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="transition-colors hover:text-earth-900">{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
