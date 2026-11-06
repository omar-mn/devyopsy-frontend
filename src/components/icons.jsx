// Small local SVG icons. No icon library is used.

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MenuIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

// How It Works step icons

const STEP_ICONS = {
  repository: (
    <>
      <circle cx="8" cy="6" r="2.5" />
      <circle cx="8" cy="22" r="2.5" />
      <circle cx="20" cy="12" r="2.5" />
      <path d="M8 8.5v11M20 14.5c0 4-12 2-12 5" />
    </>
  ),
  configure: (
    <>
      <path d="M4 8h12M22 8h2M4 20h2M12 20h12" />
      <circle cx="19" cy="8" r="2.5" />
      <circle cx="9" cy="20" r="2.5" />
    </>
  ),
  build: (
    <>
      <path d="M14 3l9 5v12l-9 5-9-5V8z" />
      <path d="M5 8l9 5 9-5M14 13v12" />
    </>
  ),
  deploy: (
    <>
      <path d="M14 23V6M7 13l7-7 7 7" />
      <path d="M5 25h18" />
    </>
  ),
}

export function StepIcon({ name }) {
  return (
    <svg className="step-icon" viewBox="0 0 28 28" {...stroke} aria-hidden="true" focusable="false">
      {STEP_ICONS[name]}
    </svg>
  )
}

// Runtime marks: simplified monochrome drawings, not the official logos.
// `knockout` strokes take the section background colour (see Runtimes.css).

function Django() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
      <rect x="5" y="3" width="38" height="42" rx="6" fill="currentColor" />
      <g className="knockout" strokeWidth="3.2" strokeLinecap="round">
        <path d="M19 12v10.5c0 3.5-1.6 4.8-4.4 4.8-.8 0-1.4-.1-2-.2" />
        <path d="M27 20.5v14M27 13.5v1.5" />
        <path d="M27 22c1.5-1.4 3-1.7 5-1.7 3 0 4.5 1.5 4.5 4.8v8" />
      </g>
    </svg>
  )
}

function Flask() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M19 5h10M21 5v14L8.5 38.5C7 41 8.8 44 11.8 44h24.4c3 0 4.8-3 3.3-5.5L27 19V5" />
      <path d="M14.5 31h19" />
      <circle cx="22" cy="37" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="28" cy="35" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function NodeJs() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M24 3l17.5 10v22L24 45 6.5 35V13z" fill="currentColor" />
      <path className="knockout" d="M19 18v12m0-12l10 12m0-12v12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" focusable="false">
      <ellipse cx="24" cy="24" rx="20" ry="7.5" />
      <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(120 24 24)" />
      <circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

const RUNTIME_ICONS = {
  Django: Django,
  Flask: Flask,
  'Node.js': NodeJs,
  React: ReactIcon,
}

export function RuntimeIcon({ name }) {
  const Icon = RUNTIME_ICONS[name]
  return Icon ? <Icon /> : null
}
