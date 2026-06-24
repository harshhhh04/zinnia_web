import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'navbar-shell-scrolled' : 'navbar-shell'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:py-[1.125rem]">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={closeMenu}
        >
          <span
            className="inline-block h-4 w-2.5 rounded-[1px] border border-red-800/60 bg-red-950/40 transition-colors duration-300 group-hover:border-red-700/80"
            aria-hidden="true"
          />
          <span className="font-serif text-lg tracking-[0.18em] text-white/95 sm:text-xl">
            ZINNIA
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group nav-link">
                  {link.label}
                  <span className="nav-link-line" />
                </a>
              </li>
            ))}
          </ul>

          <a href="#reservations" className="btn-primary-sm">
            Reserve Table
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-px w-5 bg-white/90 transition-all duration-300 ${
              isMenuOpen ? 'translate-y-[3px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-white/90 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-white/90 transition-all duration-300 ${
              isMenuOpen ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'max-h-[100dvh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="menu-fade-in divider-subtle bg-black/95 px-6 pb-10 pt-3 backdrop-blur-md">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-white/[0.04] py-4 text-[11px] font-light uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:text-white/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#reservations" onClick={closeMenu} className="btn-primary mt-8 w-full">
            Reserve Table
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
