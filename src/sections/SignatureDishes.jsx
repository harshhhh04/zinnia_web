import { SIGNATURE_DISHES, SIGNATURE_HEADER } from '../data/signatureDishes.js'
import { useInView } from '../hooks/useInView.js'

function DishRow({ dish, index }) {
  const { ref, isVisible } = useInView()
  const imageLeft = index % 2 === 0

  return (
    <article
      ref={ref}
      className={`scroll-reveal grid items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24 ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {/* Image */}
      <div
        className={`editorial-image relative aspect-[4/5] overflow-hidden sm:aspect-[3/4] ${
          imageLeft ? 'lg:pr-2' : 'lg:order-2 lg:pl-2'
        }`}
      >
        <img
          src={dish.image}
          alt={dish.imageAlt}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out"
          style={{ objectPosition: dish.objectPosition }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div
        className={`lg:py-4 ${imageLeft ? 'lg:pl-4 xl:pl-8' : 'lg:order-1 lg:pr-4 xl:pr-8'}`}
      >
        <span className="text-label mb-6 block">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="heading-dish">{dish.name}</h3>

        <p className="text-body mt-6 max-w-xs sm:mt-7">{dish.description}</p>
      </div>
    </article>
  )
}

function SignatureDishes() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()

  return (
    <section id="menu" className="section-padding relative bg-black">
      <div className="container-wide">
        {/* Section header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-20 max-w-2xl text-center sm:mb-24 lg:mb-28 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{SIGNATURE_HEADER.label}</p>

          <h2 className="heading-section">{SIGNATURE_HEADER.heading}</h2>

          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {SIGNATURE_HEADER.subheading}
          </p>
        </header>

        {/* Editorial rows */}
        <div className="flex flex-col gap-24 sm:gap-28 lg:gap-36">
          {SIGNATURE_DISHES.map((dish, index) => (
            <DishRow key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignatureDishes
