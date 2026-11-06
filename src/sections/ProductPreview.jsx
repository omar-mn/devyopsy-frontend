import './ProductPreview.css'
import { LogoMark } from '../components/Logo'
import Reveal from '../components/Reveal'
import { APP_META, PREVIEW_BUILDS } from '../data/content'

export default function ProductPreview() {
  return (
    <section className="preview" aria-labelledby="preview-title">
      <div className="container">
        <h2 id="preview-title" className="sr-only">Application dashboard preview</h2>
        <Reveal
          className="app-window"
          role="img"
          aria-label="Static preview of a DevyOpsy application page for my-app showing a successful build and a development deployment"
        >
          <div className="app-topbar">
            <span className="brand" aria-hidden="true"><LogoMark /></span>
            <div className="crumbs">
              <span className="crumb-root">Applications</span>
              <span className="sep crumb-root">/</span>
              <b>my-app</b>
            </div>
            <span className="app-user" aria-hidden="true">AC</span>
          </div>
          <div className="app-head">
            <div>
              <h3>my-app</h3>
              <p className="sub">Last build finished 4 minutes ago</p>
            </div>
            <span className="status">Build succeeded</span>
          </div>
          <div className="app-meta">
            {APP_META.map((m) => (
              <div key={m.label}>
                <div className="meta-k">{m.label}</div>
                <div className="meta-v">{m.value}</div>
              </div>
            ))}
          </div>
          <div className="app-body">
            <div className="app-panel">
              <div className="panel-title">Builds</div>
              <ul className="rows">
                {PREVIEW_BUILDS.map((b) => (
                  <li key={b.image}>
                    <div>
                      <div className="main">{b.image}</div>
                      <div className="sub">main · {b.commit}</div>
                    </div>
                    <div className="right ok">succeeded</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="app-panel">
              <div className="panel-title">Deployments</div>
              <ul className="rows">
                <li>
                  <div>
                    <div className="main">development</div>
                    <div className="sub">my-app:3f9a2c1</div>
                  </div>
                  <div className="right ok">deployed</div>
                </li>
                <li>
                  <div>
                    <div className="main">URL</div>
                    <div className="sub">
                      <a href="#" tabIndex={-1} aria-disabled="true" onClick={(e) => e.preventDefault()}>
                        my-app.dev.example.com
                      </a>
                    </div>
                  </div>
                  <div className="right">example</div>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
