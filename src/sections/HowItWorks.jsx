import './HowItWorks.css'
import Reveal from '../components/Reveal'
import { StepIcon } from '../components/icons'
import { STEPS } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="rule-top" aria-labelledby="how-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title">From Repository to Production. Simplified.</h2>
          <p className="lede">
            Connect your code, configure your application, and let DevyOpsy handle the deployment workflow.
          </p>
        </Reveal>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" className="step" key={s.title}>
              <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <StepIcon name={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
