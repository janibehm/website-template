'use client'

import {useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const navLinks = [
  {label: 'About', href: '/about'},
  {label: 'Services', href: '/services'},
  {label: 'Blog', href: '/blog'},
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] bg-white/85 border-b border-gray-200/20">
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="font-black text-neutral text-xl tracking-tight">
            Acme Co
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'relative text-sm font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-neutral/70 hover:text-primary',
                  ].join(' ')}
                >
                  {link.label}
                  <span
                    className={[
                      'absolute left-0 top-full mt-2 h-[2px] rounded-full bg-primary transition-all duration-300',
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            aria-current={isActiveLink('/contact') ? 'page' : undefined}
            className={[
              'text-sm font-bold px-5 py-2.5 rounded-xl shadow-[0_20px_40px_0_rgba(84,56,255,0.08)] transition-colors',
              isActiveLink('/contact')
                ? 'bg-neutral text-white'
                : 'bg-primary text-white hover:bg-primary/90',
            ].join(' ')}
          >
            Contact sales
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-neutral"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white/98 px-8 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'text-sm font-medium py-2 border-b border-gray-200/30 transition-colors',
                  isActive ? 'text-primary' : 'text-neutral/70',
                ].join(' ')}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            aria-current={isActiveLink('/contact') ? 'page' : undefined}
            className={[
              'text-sm font-bold px-5 py-3 rounded-xl mt-2 text-center transition-colors',
              isActiveLink('/contact') ? 'bg-neutral text-white' : 'bg-primary text-white',
            ].join(' ')}
            onClick={() => setMobileOpen(false)}
          >
            Contact us
          </Link>
        </nav>
      )}
    </header>
  )
}
