import {
  FEATURED_REVIEWS,
  REVIEWS_HEADER,
  REVIEWS_SUMMARY,
} from '../data/reviews.js'
import { useInView } from '../hooks/useInView.js'

function ReviewCard({ review, index }) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <blockquote
      ref={ref}
      className={`review-panel scroll-reveal group ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span
        className="font-serif text-3xl leading-none text-red-900/40 transition-colors duration-500 group-hover:text-red-800/55"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="mt-4 font-serif text-lg font-light italic leading-[1.65] text-white/75 sm:text-xl sm:leading-[1.7]">
        {review.quote}
      </p>

      <span
        className="mt-8 block h-px w-8 bg-red-900/40 transition-all duration-500 group-hover:w-12 group-hover:bg-red-800/60"
        aria-hidden="true"
      />
    </blockquote>
  )
}

function Reviews() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: summaryRef, isVisible: summaryVisible } = useInView()

  return (
    <section id="reviews" className="section-padding relative bg-black">
      <div className="container-wide">
        {/* Section header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{REVIEWS_HEADER.label}</p>

          <h2 className="heading-section">{REVIEWS_HEADER.heading}</h2>

          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {REVIEWS_HEADER.subheading}
          </p>
        </header>

        {/* Rating summary */}
        <div
          ref={summaryRef}
          className={`scroll-reveal divider-subtle mx-auto mb-14 max-w-lg py-10 sm:mb-16 sm:py-12 lg:mb-20 ${
            summaryVisible ? 'is-visible' : ''
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div className="text-center">
              <p className="stat-value">{REVIEWS_SUMMARY.rating}</p>
              <p className="stat-label mt-2">
                out of {REVIEWS_SUMMARY.maxRating}
              </p>
            </div>

            <span
              className="hidden h-12 w-px bg-white/[0.06] sm:block"
              aria-hidden="true"
            />

            <div className="text-center">
              <p className="stat-value">{REVIEWS_SUMMARY.totalReviews}</p>
              <p className="stat-label mt-2">Reviews</p>
            </div>
          </div>

          <p
            className="mt-6 text-center text-[10px] tracking-[0.3em] text-amber-400/50"
            aria-hidden="true"
          >
            ★ ★ ★ ★ ★
          </p>
        </div>

        {/* Review cards */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {FEATURED_REVIEWS.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
