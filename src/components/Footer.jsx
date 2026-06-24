import {
  FOOTER_COPY,
  FOOTER_NAV,
  FOOTER_SOCIAL,
} from '../data/contact.js'

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="container-wide py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8">
          {/* Logo */}
          <a href="#home" className="group inline-flex items-center gap-2.5">
            <span
              className="inline-block h-4 w-2.5 rounded-[1px] border border-red-800/60 bg-red-950/40 transition-colors duration-300 group-hover:border-red-700/80"
              aria-hidden="true"
            />
            <span className="font-serif text-lg tracking-[0.18em] text-white/95 sm:text-xl">
              ZINNIA
            </span>
          </a>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-center">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[9px] font-light uppercase tracking-[0.22em] text-white/45 transition-colors duration-400 hover:text-white/85"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-4 lg:items-end">
            <ul className="flex gap-6">
              {FOOTER_SOCIAL.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-light uppercase tracking-[0.22em] text-white/45 transition-colors duration-400 hover:text-white/85"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={FOOTER_COPY.phoneHref}
              className="text-sm font-light text-white/50 transition-colors duration-400 hover:text-white/80"
            >
              {FOOTER_COPY.phone}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="divider-subtle mt-12 pt-8 text-center sm:mt-14 sm:pt-10">
          <p className="text-[10px] font-light tracking-[0.15em] text-white/25">
            {FOOTER_COPY.copyright}
          </p>
          <p className="mt-2 font-serif text-xs italic tracking-wide text-white/20">
            {FOOTER_COPY.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
