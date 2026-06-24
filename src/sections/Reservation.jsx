import { useState } from 'react'
import {
  GUEST_OPTIONS,
  RESERVATION_HEADER,
  RESERVATION_INFO,
  TIME_OPTIONS,
} from '../data/reservation.js'
import { useInView } from '../hooks/useInView.js'

function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="reservation-form-panel flex min-h-[28rem] flex-col items-center justify-center text-center">
        <span
          className="font-serif text-4xl font-light text-red-800/50"
          aria-hidden="true"
        >
          ✓
        </span>
        <h3 className="heading-dish mt-6 text-2xl sm:text-3xl">
          Request Received
        </h3>
        <p className="text-body mt-5 max-w-xs">
          Thank you. Our team will confirm your reservation shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reservation-form-panel"
      noValidate
    >
      <div className="space-y-7 sm:space-y-8">
        <div className="form-field">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91"
            className="form-input"
          />
        </div>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
          <div className="form-field">
            <label htmlFor="guests" className="form-label">
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              required
              defaultValue=""
              className="form-input form-select"
            >
              <option value="" disabled hidden>
                Select
              </option>
              {GUEST_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="date" className="form-label">
              Preferred Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              className="form-input"
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="time" className="form-label">
            Preferred Time
          </label>
          <select
            id="time"
            name="time"
            required
            defaultValue=""
            className="form-input form-select"
          >
            <option value="" disabled hidden>
              Select a time
            </option>
            {TIME_OPTIONS.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="requests" className="form-label">
            Special Requests
          </label>
          <textarea
            id="requests"
            name="requests"
            rows={3}
            placeholder="Dietary preferences, celebrations, seating requests..."
            className="form-input form-textarea resize-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-10 w-full sm:mt-12">
        Reserve Table
      </button>
    </form>
  )
}

function Reservation() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: contentRef, isVisible: contentVisible } = useInView()

  return (
    <section id="reservations" className="section-padding relative bg-black">
      <div className="container-wide">
        {/* Section header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-16 max-w-2xl text-center sm:mb-20 lg:mb-24 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{RESERVATION_HEADER.label}</p>

          <h2 className="heading-section">{RESERVATION_HEADER.heading}</h2>

          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {RESERVATION_HEADER.subheading}
          </p>
        </header>

        {/* Two-column layout */}
        <div
          ref={contentRef}
          className={`scroll-reveal grid gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24 ${
            contentVisible ? 'is-visible' : ''
          }`}
        >
          {/* Left — information */}
          <div className="lg:py-4">
            <div className="flex gap-10 sm:gap-14">
              <div>
                <p className="stat-value text-3xl sm:text-4xl">
                  {RESERVATION_INFO.rating}
                </p>
                <p className="stat-label mt-2">Rating</p>
              </div>
              <div className="divider-vertical pl-10 sm:pl-14">
                <p className="stat-value text-3xl sm:text-4xl">
                  {RESERVATION_INFO.reviews}
                </p>
                <p className="stat-label mt-2">Reviews</p>
              </div>
            </div>

            <div className="divider-subtle mt-12 pt-12 sm:mt-14 sm:pt-14">
              <p className="text-label mb-8">Recommended Reservations</p>

              <div className="space-y-6">
                {RESERVATION_INFO.hours.map((slot) => (
                  <div key={slot.meal}>
                    <p className="font-serif text-xl font-light text-white/85 sm:text-2xl">
                      {slot.meal}
                    </p>
                    <p className="text-body mt-1.5">{slot.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-4 sm:mt-14">
              {RESERVATION_INFO.notes.map((note) => (
                <p key={note} className="text-body max-w-sm">
                  {note}
                </p>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <ReservationForm />
        </div>
      </div>
    </section>
  )
}

export default Reservation
