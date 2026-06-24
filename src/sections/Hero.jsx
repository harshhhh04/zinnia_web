import heroBackground from '../../assets/3.jpg'

const DEFAULTS = {
  backgroundImage: heroBackground,
  label: "CHANDIGARH'S MODERN DINING EXPERIENCE",
  brandTagline: "Behind Chandigarh's Iconic Red Door",
  heading: 'Experience Abstract Dining',
  subheading: 'Where modern Indian cuisine meets art.',
  primaryCta: { label: 'Reserve Table', href: '#reservations' },
  secondaryCta: { label: 'Explore Menu', href: '#menu' },
  rating: 4.8,
  reviewCount: 618,
}

function Hero({
  backgroundImage = DEFAULTS.backgroundImage,
  label = DEFAULTS.label,
  brandTagline = DEFAULTS.brandTagline,
  heading = DEFAULTS.heading,
  subheading = DEFAULTS.subheading,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta = DEFAULTS.secondaryCta,
  rating = DEFAULTS.rating,
  reviewCount = DEFAULTS.reviewCount,
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image — sharp, atmospheric */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />

      {/* Overlays — lighter centre, image remains visible */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/75 via-black/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.25)_100%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl -translate-y-[10%] px-6 py-20 text-center sm:px-8">
        {/* 1 — Primary heading */}
        <h1
          className="hero-fade-in heading-hero"
          style={{ animationDelay: '0.15s' }}
        >
          {heading}
        </h1>

        {/* 2 — Subheading */}
        <p
          className="hero-fade-in text-body-lg mx-auto mt-6 max-w-sm sm:mt-7"
          style={{ animationDelay: '0.28s' }}
        >
          {subheading}
        </p>

        {/* 3 & 4 — CTAs */}
        <div
          className="hero-fade-in mt-12 flex flex-col items-center justify-center gap-5 sm:mt-14 sm:flex-row sm:gap-10"
          style={{ animationDelay: '0.4s' }}
        >
          <a href={primaryCta.href} className="btn-primary w-full sm:w-auto">
            {primaryCta.label}
          </a>

          <a href={secondaryCta.href} className="group btn-secondary w-full sm:w-auto">
            {secondaryCta.label}
            <span className="btn-secondary-line" />
          </a>
        </div>

        {/* 5 — Red Door tagline */}
        <p
          className="hero-fade-in text-editorial mt-12 sm:mt-14"
          style={{ animationDelay: '0.52s' }}
        >
          {brandTagline}
        </p>

        {/* 6 — Supporting label */}
        <p
          className="hero-fade-in text-supporting mt-4 sm:mt-5"
          style={{ animationDelay: '0.6s' }}
        >
          {label}
        </p>

        {/* 7 — Rating */}
        <div
          className="hero-fade-in divider-subtle mx-auto mt-14 max-w-xs pt-8 sm:mt-16 sm:pt-10"
          style={{ animationDelay: '0.72s' }}
        >
          <div className="flex items-center justify-center gap-3 text-[11px] font-light tracking-[0.12em] text-white/45">
            <span className="text-amber-400/70" aria-hidden="true">
              ★
            </span>
            <span className="text-white/70">{rating} Rating</span>
            <span className="text-white/20" aria-hidden="true">
              ·
            </span>
            <span>{reviewCount} Reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
