// Original DevyOpsy symbol. Colours come from the --logo-* theme tokens
// (see styles/base.css), so the mark stays legible in both themes.
export function LogoMark({ className, ...props }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" focusable="false" {...props}>
      <rect className="logo-ink" x="4" y="4" width="6" height="24" rx="1.5" />
      <path
        className="logo-accent"
        fillRule="evenodd"
        d="M14 4h3a12 12 0 0 1 0 24h-3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 6v12h2a6 6 0 0 0 0-12h-2Z"
      />
      <rect className="logo-ink" x="10" y="15" width="8" height="2" />
      <circle className="logo-ink" cx="19" cy="16" r="2.6" />
    </svg>
  )
}

// Symbol + live-text wordmark.
export default function Logo({ href = '#top' }) {
  return (
    <a className="brand" href={href} aria-label="DevyOpsy home">
      <LogoMark />
      <span>
        Devy<span className="brand-accent">Opsy</span>
      </span>
    </a>
  )
}
