import './Hero.css'
import { ArrowIcon } from '../components/icons'
import { HERO_PIPELINE } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Deployment without the complexity</p>
          <h1 id="hero-title">
            Your Code. <span className="accent">Our Infrastructure.</span>
          </h1>
          <p className="lede">
            Go from source code to a deployed application without managing Docker configurations,
            CI/CD pipelines, or Kubernetes infrastructure.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/register">
              Get Started <ArrowIcon />
            </a>
            <a className="btn btn-secondary" href="#how-it-works">Explore How It Works</a>
          </div>
        </div>

        <figure
          className="hero-visual"
          style={{ margin: 0 }}
          aria-label="Illustration of the DevyOpsy workflow: repository, build, registry, deployment"
        >
          <div className="visual-bar"><span>my-app / workflow</span><span>main</span></div>
          <ol className="pipe">
            {HERO_PIPELINE.map((row) => (
              <li className="pipe-row" key={row.label}>
                <span className={`node is-${row.state}`} />
                <div>
                  <div className="pipe-label">{row.label}</div>
                  <div className="pipe-value">{row.value}</div>
                </div>
                <span className={`pipe-meta${row.ok ? ' ok' : ''}`}>{row.meta}</span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  )
}
