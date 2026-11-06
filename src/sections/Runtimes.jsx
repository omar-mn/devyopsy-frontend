import './Runtimes.css'
import Reveal from '../components/Reveal'
import { RuntimeIcon } from '../components/icons'
import { RUNTIMES } from '../data/content'

export default function Runtimes() {
  return (
    <section id="runtimes" className="runtimes" aria-labelledby="runtimes-title">
      <div className="container runtimes-inner">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Supported runtimes</p>
          <h2 id="runtimes-title">Built for the Stack You Already Use.</h2>
        </Reveal>
        <Reveal as="ul" className="runtime-list">
          {RUNTIMES.map((name) => (
            <li key={name}>
              <RuntimeIcon name={name} />
              {name}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
