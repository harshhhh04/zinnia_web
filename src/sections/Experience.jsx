import ExperienceIcon from '../components/ExperienceIcon.jsx'
import { EXPERIENCE_HEADER, EXPERIENCES } from '../data/experiences.js'
import { useInView } from '../hooks/useInView.js'

function ExperienceCard({ experience, index }) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <article
      ref={ref}
      className={`experience-panel scroll-reveal group ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="mb-8 flex items-center justify-between">
        <ExperienceIcon name={experience.icon} />
        <span className="text-label">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <span
        className="mb-6 block h-px w-8 bg-red-900/50 transition-all duration-500 group-hover:w-14 group-hover:bg-red-800/70"
        aria-hidden="true"
      />

      <h3 className="heading-dish text-2xl sm:text-3xl">{experience.title}</h3>

      <p className="text-body mt-5 max-w-[16rem]">{experience.description}</p>
    </article>
  )
}

function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()

  return (
    <section id="experience" className="section-padding relative bg-black">
      <div className="container-wide">
        {/* Section header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-16 max-w-2xl text-center sm:mb-20 lg:mb-24 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{EXPERIENCE_HEADER.label}</p>

          <h2 className="heading-section">{EXPERIENCE_HEADER.heading}</h2>

          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {EXPERIENCE_HEADER.subheading}
          </p>
        </header>

        {/* Experience panels */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {EXPERIENCES.map((item, index) => (
            <ExperienceCard key={item.id} experience={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
