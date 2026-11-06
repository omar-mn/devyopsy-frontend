import './Features.css'
import Reveal from '../components/Reveal'
import { FEATURES } from '../data/content'

export default function Features() {
  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Features</p>
          <h2 id="features-title">Everything Between Code and Deployment.</h2>
        </Reveal>
        <ol className="feature-list">
          {FEATURES.map((f, i) => (
            <Reveal as="li" className="feature" key={f.title}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
