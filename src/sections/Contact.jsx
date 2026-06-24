import locationImage from '../../assets/3.jpg'
import {
  CONTACT_DETAILS,
  CONTACT_HEADER,
  FINAL_CTA,
} from '../data/contact.js'
import { useInView } from '../hooks/useInView.js'

function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: contentRef, isVisible: contentVisible } = useInView()
  const { ref: ctaRef, isVisible: ctaVisible } = useInView()

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_DETAILS.mapQuery)}`

  return (
    <section id="contact" className="section-padding relative bg-black">
      <div className="container-wide">
        {/* Section header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mb-16 max-w-xl sm:mb-20 lg:mb-24 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{CONTACT_HEADER.label}</p>

          <h2 className="heading-section">{CONTACT_HEADER.heading}</h2>

          <p className="text-body mt-8 max-w-md sm:mt-10">
            {CONTACT_HEADER.subheading}
          </p>
        </header>

        {/* Contact grid */}
        <div
          ref={contentRef}
          className={`scroll-reveal grid gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24 ${
            contentVisible ? 'is-visible' : ''
          }`}
        >
          {/* Left — contact details */}
          <div className="lg:py-2">
            <div className="space-y-10 sm:space-y-12">
              <div>
                <p className="text-label mb-3">Address</p>
                <p className="font-serif text-xl font-light text-white/85 sm:text-2xl">
                  {CONTACT_DETAILS.address}
                </p>
              </div>

              <div>
                <p className="text-label mb-3">Phone</p>
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="font-serif text-xl font-light text-white/85 transition-colors duration-400 hover:text-red-200/70 sm:text-2xl"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </div>

              <div>
                <p className="text-label mb-5">Hours</p>
                <div className="space-y-5">
                  {CONTACT_DETAILS.hours.map((slot) => (
                    <div key={slot.meal}>
                      <p className="font-serif text-lg font-light text-white/75">
                        {slot.meal}
                      </p>
                      <p className="text-body mt-1">{slot.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — location card */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-card group block"
          >
            <img
              src={locationImage}
              alt="Zinnia restaurant interior in Sector 10, Chandigarh"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"
              aria-hidden="true"
            />

            {/* Map grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
              aria-hidden="true"
            />

            <div className="relative flex h-full min-h-[18rem] flex-col justify-end p-8 sm:min-h-[22rem] sm:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-5 w-3 rounded-[1px] border border-red-700/70 bg-red-950/50"
                  aria-hidden="true"
                />
                <p className="text-label text-white/40">Sector 10</p>
              </div>
              <p className="mt-3 font-serif text-2xl font-light text-white sm:text-3xl">
                Chandigarh
              </p>
              <p className="mt-4 text-[10px] font-light uppercase tracking-[0.22em] text-white/40 transition-colors duration-500 group-hover:text-red-200/50">
                View Location →
              </p>
            </div>
          </a>
        </div>

        {/* Final CTA */}
        <div
          ref={ctaRef}
          className={`scroll-reveal cta-block divider-subtle mt-20 pt-16 text-center sm:mt-24 sm:pt-20 ${
            ctaVisible ? 'is-visible' : ''
          }`}
        >
          <h3 className="heading-dish mx-auto max-w-lg text-2xl sm:text-3xl lg:text-4xl">
            {FINAL_CTA.heading}
          </h3>
          <a href={FINAL_CTA.buttonHref} className="btn-primary mt-10 inline-flex">
            {FINAL_CTA.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
