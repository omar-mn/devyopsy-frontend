import './FinalCta.css'
import { LogoMark } from '../components/Logo'
import Reveal from '../components/Reveal'
import { ArrowIcon } from '../components/icons'

export default function FinalCta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <Reveal className="container cta-inner">
        <LogoMark className="mark" />
        <h2 id="cta-title">Your Next Deployment Starts Here.</h2>
        <p className="lede">Focus on your code. Let DevyOpsy handle the infrastructure workflow.</p>
        <a className="btn btn-primary" href="/register">
          Get Started <ArrowIcon />
        </a>
      </Reveal>
    </section>
  )
}
