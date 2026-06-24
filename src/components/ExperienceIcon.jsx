const icons = {
  palette: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="12" cy="13" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="19" cy="11" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="21" cy="18" r="1.5" fill="currentColor" opacity="0.5" />
      <path
        d="M10 20c2 3 5 4 8 3"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  rooftop: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
      <path
        d="M6 22h20M8 22V14l8-6 8 6v8"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      <path
        d="M12 18h2v4h-2zM18 16h2v6h-2z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <circle cx="24" cy="8" r="0.75" fill="currentColor" opacity="0.5" />
      <circle cx="27" cy="11" r="0.5" fill="currentColor" opacity="0.35" />
      <circle cx="22" cy="6" r="0.5" fill="currentColor" opacity="0.35" />
    </svg>
  ),
  brush: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
      <path
        d="M8 24c4-1 8-5 12-12 2-3 2-6 0-8s-5-2-8 0c-7 4-11 8-12 12 0 2 2 4 4 4 2 0 3-1 4-2"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8l4 4"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  gathering: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
      <path
        d="M8 20v-6c0-2 2-4 4-4h8c2 0 4 2 4 4v6"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      <path
        d="M6 20h20M10 24h12"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M16 10V8M13 11l-1.5-1.5M19 11l1.5-1.5"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  ),
}

function ExperienceIcon({ name }) {
  return (
    <span className="text-red-800/70 transition-colors duration-500 group-hover:text-red-700/90">
      {icons[name]}
    </span>
  )
}

export default ExperienceIcon
