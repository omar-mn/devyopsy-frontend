import Header from './sections/Header'
import Hero from './sections/Hero'
import ProductPreview from './sections/ProductPreview'
import HowItWorks from './sections/HowItWorks'
import Runtimes from './sections/Runtimes'
import Environments from './sections/Environments'
import Features from './sections/Features'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <ProductPreview />
        <HowItWorks />
        <Runtimes />
        <Environments />
        <Features />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
