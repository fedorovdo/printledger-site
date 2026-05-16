import dashboardScreenshot from './assets/screenshots/dashboard_en.png'
import printersScreenshot from './assets/screenshots/printers_en.png'
import cartridgesScreenshot from './assets/screenshots/cartridges_en.png'
import backupScreenshot from './assets/screenshots/backup_en.png'
import './App.css'

const githubUrl = 'https://github.com/fedorovdo/printledger'
const docsUrl = 'https://github.com/fedorovdo/printledger#documentation'
const supportUrl = 'mailto:YOUR_EMAIL_HERE'

const features = [
  'Printer inventory',
  'Cartridge stock',
  'Stock movement history',
  'Repair and archive workflow',
  'Dashboard analytics',
  'Backup and restore',
  'Local-network authentication',
  'Docker deployment',
]

const screenshots = [
  {
    title: 'Dashboard',
    image: dashboardScreenshot,
    alt: 'PrintLedger dashboard with status cards and cartridge usage analytics',
  },
  {
    title: 'Printers',
    image: printersScreenshot,
    alt: 'PrintLedger printers table with search, filters, and location details',
  },
  {
    title: 'Cartridges',
    image: cartridgesScreenshot,
    alt: 'PrintLedger cartridge stock table with quick actions',
  },
  {
    title: 'Backup',
    image: backupScreenshot,
    alt: 'PrintLedger backup management page',
  },
]

function App() {
  return (
    <main>
      <section className="hero-section">
        <nav className="top-nav" aria-label="Primary">
          <a className="brand" href="#top" aria-label="PrintLedger home">
            <span className="brand-mark">PL</span>
            <span>PrintLedger</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#architecture">Architecture</a>
            <a href={githubUrl}>GitHub</a>
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Open-source · Self-hosted · Local network</p>
            <h1>PrintLedger</h1>
            <p className="subtitle">Self-hosted printer and cartridge inventory for IT teams.</p>
            <p className="hero-description">
              Open-source system for tracking printers, cartridges, consumables, stock movements,
              repairs, locations, users, and backups inside your local network.
            </p>
            <div className="hero-actions" aria-label="Project links">
              <a className="button primary" href={githubUrl}>
                GitHub
              </a>
              <a className="button secondary" href={docsUrl}>
                Documentation
              </a>
              <a className="button secondary" href={supportUrl}>
                Commercial Support
              </a>
            </div>
          </div>

          <div className="hero-preview" aria-label="PrintLedger dashboard preview">
            <img src={dashboardScreenshot} alt="PrintLedger dashboard preview" />
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="section-copy narrow">
          <p className="eyebrow">Problem</p>
          <h2>Stop tracking cartridges in scattered spreadsheets</h2>
          <p>
            Printer and cartridge accounting often starts in Excel, but becomes hard to maintain
            when stock, locations, repairs, refills, write-offs, and purchase planning need reliable
            history.
          </p>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-heading">
          <p className="eyebrow">Features</p>
          <h2>Built for practical IT inventory work</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature}>
              <h3>{feature}</h3>
              <p>
                Keep daily operations visible and traceable without turning a small inventory system
                into enterprise overhead.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="screenshots" className="section screenshots-section">
        <div className="section-heading">
          <p className="eyebrow">Screenshots</p>
          <h2>Core workflows in one interface</h2>
        </div>
        <div className="screenshot-grid">
          {screenshots.map((screenshot) => (
            <figure className="screenshot-card" key={screenshot.title}>
              <img src={screenshot.image} alt={screenshot.alt} />
              <figcaption>{screenshot.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="architecture" className="section architecture-section">
        <div className="section-heading">
          <p className="eyebrow">Architecture</p>
          <h2>Simple self-hosted stack</h2>
        </div>
        <div className="flow" aria-label="Application architecture flow">
          <span>Browser</span>
          <span>Next.js frontend</span>
          <span>FastAPI backend</span>
          <span>PostgreSQL</span>
          <span>Backup/Restore</span>
        </div>
        <p className="architecture-note">Docker Compose + nginx for production deployment.</p>
      </section>

      <section className="section split-section">
        <article className="info-card">
          <p className="eyebrow">Open Source</p>
          <h2>Deploy and adapt it yourself</h2>
          <p>
            PrintLedger is planned as an open-source self-hosted tool. The core application can be
            deployed and modified by users.
          </p>
        </article>
        <article className="info-card">
          <p className="eyebrow">Commercial Support</p>
          <h2>Help when you need it</h2>
          <p>
            Paid services are available for installation, Docker deployment, nginx/HTTPS setup,
            backup configuration, migration from Excel, customization, reports, training, and
            support.
          </p>
        </article>
      </section>

      <footer className="footer">
        <div>
          <strong>PrintLedger</strong>
          <span>Dmitrii Fedorov</span>
        </div>
        <div className="footer-links">
          <a href={githubUrl}>GitHub</a>
          <a href={docsUrl}>Project docs</a>
          <a href="https://simplyadmin.org">simplyadmin.org</a>
        </div>
      </footer>
    </main>
  )
}

export default App
