import './Environments.css'
import Reveal from '../components/Reveal'
import { ENVIRONMENTS } from '../data/content'

export default function Environments() {
  return (
    <section aria-labelledby="env-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Deployment workflow</p>
          <h2 id="env-title">One Platform. Separate Environments.</h2>
          <p className="lede">Every build produces an image. You decide which image goes to which environment.</p>
        </Reveal>
        <Reveal className="env-flow">
          <div className="env-source">
            <div className="meta-k">Built image</div>
            <div className="meta-v">my-app:3f9a2c1</div>
            <div className="meta-k">Runtime</div>
            <div className="meta-v">Flask</div>
            <div className="meta-k">Stored in</div>
            <div className="meta-v">Container registry</div>
          </div>
          <svg className="env-connector" viewBox="0 0 96 200" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 100 H36 C52 100 48 40 64 40 H90" />
            <path className="live" d="M0 100 H36 C52 100 48 160 64 160 H90" />
            <circle cx="4" cy="100" r="3" />
          </svg>
          <div className="env-targets">
            {ENVIRONMENTS.map((env) => (
              <div className={`env-target${env.id === 'production' ? ' prod' : ''}`} key={env.id}>
                <h3>{env.title}</h3>
                <p>{env.text}</p>
                <div className="env-tag">environment: {env.id}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
