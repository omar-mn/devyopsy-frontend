import './Footer.css'
import Logo from '../components/Logo'
import { FOOTER_LINKS } from '../data/content'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Logo />
            <p>
              Deploy from source code to Kubernetes through a GitOps workflow, without managing the
              infrastructure yourself.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {FOOTER_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            {/* Placeholder: replace with the real repository URL when it exists. */}
            <a href="#" aria-label="DevyOpsy on GitHub (link placeholder)" onClick={(e) => e.preventDefault()}>
              GitHub
            </a>
          </nav>
        </div>
        <p className="footer-legal">© {YEAR} DevyOpsy. All rights reserved.</p>
      </div>
    </footer>
  )
}
