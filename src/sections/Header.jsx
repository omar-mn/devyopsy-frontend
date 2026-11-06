import { useEffect, useState } from 'react'
import './Header.css'
import Logo from '../components/Logo'
import { CloseIcon, MenuIcon } from '../components/icons'
import { NAV_LINKS } from '../data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 861px)')
    const onChange = () => setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} id="top">
      <div className="container header-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="link-signin" href="/login">Sign In</a>
          <a className="btn btn-primary btn-sm" href="/register">Get Started</a>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon className="icon-open" />
          <CloseIcon className="icon-close" />
        </button>
      </div>
      <div className={`mobile-menu${open ? ' is-open' : ''}`} id="mobile-menu">
        {NAV_LINKS.map((l) => (
          <a key={l.href} className="menu-link" href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="menu-actions">
          <a className="btn btn-secondary" href="/login">Sign In</a>
          <a className="btn btn-primary" href="/register">Get Started</a>
        </div>
      </div>
    </header>
  )
}
