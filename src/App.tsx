import { useMemo, useState } from 'react'
import dashboardEn from './assets/screenshots/dashboard_en.png'
import printersEn from './assets/screenshots/printers_en.png'
import cartridgesEn from './assets/screenshots/cartridges_en.png'
import backupEn from './assets/screenshots/backup_en.png'
import dashboardRu from './assets/screenshots/dashboard_ru.png'
import printersRu from './assets/screenshots/printers_ru.png'
import cartridgesRu from './assets/screenshots/cartridges_ru.png'
import backupRu from './assets/screenshots/backup_ru.png'
import './App.css'

type Language = 'ru' | 'en'

type ScreenshotKey = 'dashboard' | 'printers' | 'cartridges' | 'backup'

const githubUrl = 'https://github.com/fedorovdo/printledger'
const docsUrl = 'https://github.com/fedorovdo/printledger#documentation'
const supportUrl = 'mailto:YOUR_EMAIL_HERE'

const screenshotImages: Record<Language, Record<ScreenshotKey, string>> = {
  ru: {
    dashboard: dashboardRu,
    printers: printersRu,
    cartridges: cartridgesRu,
    backup: backupRu,
  },
  en: {
    dashboard: dashboardEn,
    printers: printersEn,
    cartridges: cartridgesEn,
    backup: backupEn,
  },
}

const translations = {
  ru: {
    navAria: 'Основная навигация',
    homeAria: 'Главная страница PrintLedger',
    nav: {
      features: 'Возможности',
      screenshots: 'Скриншоты',
      architecture: 'Архитектура',
      github: 'GitHub',
    },
    hero: {
      eyebrow: 'OPEN-SOURCE · SELF-HOSTED · ЛОКАЛЬНАЯ СЕТЬ',
      title: 'PrintLedger',
      subtitle: 'Self-hosted учет принтеров и картриджей для IT-команд.',
      description:
        'Open-source система для учета принтеров, картриджей, расходников, складских операций, ремонтов, локаций, пользователей и резервных копий внутри локальной сети.',
      previewAlt: 'Dashboard PrintLedger',
      actionsAria: 'Ссылки проекта',
      github: 'GitHub',
      docs: 'Документация',
      support: 'Коммерческая поддержка',
    },
    problem: {
      eyebrow: 'Проблема',
      title: 'Хватит вести учет картриджей в разрозненных таблицах',
      text: 'Учет принтеров и картриджей часто начинается в Excel, но со временем становится трудно поддерживать актуальные остатки, перемещения, ремонты, заправки, списания и планирование закупок.',
    },
    features: {
      eyebrow: 'Возможности',
      title: 'Возможности',
      description:
        'Ежедневные операции остаются видимыми и проверяемыми без лишней сложности.',
      items: [
        'Учет принтеров',
        'Склад картриджей',
        'История операций',
        'Ремонты и архив',
        'Аналитика расхода',
        'Backup и restore',
        'Локальная авторизация',
        'Docker-развертывание',
      ],
    },
    screenshots: {
      eyebrow: 'Интерфейс',
      title: 'Скриншоты',
      items: {
        dashboard: {
          title: 'Dashboard',
          alt: 'Dashboard PrintLedger со статусами и аналитикой расхода картриджей',
        },
        printers: {
          title: 'Принтеры',
          alt: 'Таблица принтеров PrintLedger с поиском, фильтрами и локациями',
        },
        cartridges: {
          title: 'Картриджи',
          alt: 'Таблица остатков картриджей PrintLedger с быстрыми действиями',
        },
        backup: {
          title: 'Резервные копии',
          alt: 'Страница управления резервными копиями PrintLedger',
        },
      },
    },
    architecture: {
      eyebrow: 'Стек',
      title: 'Архитектура',
      flowAria: 'Схема архитектуры приложения',
      flow: ['Браузер', 'Next.js frontend', 'FastAPI backend', 'PostgreSQL', 'Backup/Restore'],
      note: 'Для production-развертывания используется Docker Compose и nginx.',
    },
    openSource: {
      eyebrow: 'Open Source',
      title: 'Open-source core',
      text: 'PrintLedger развивается как self-hosted open-source инструмент. Его можно развернуть в локальной сети, изучать, изменять и адаптировать под свои процессы.',
    },
    commercialSupport: {
      eyebrow: 'Поддержка',
      title: 'Внедрение и поддержка',
      text: 'Доступны платные услуги по установке, Docker-развертыванию, настройке nginx/HTTPS, резервному копированию, миграции из Excel, доработкам, отчетам, обучению и сопровождению.',
    },
    footer: {
      docs: 'Документация',
    },
  },
  en: {
    navAria: 'Primary',
    homeAria: 'PrintLedger home',
    nav: {
      features: 'Features',
      screenshots: 'Screenshots',
      architecture: 'Architecture',
      github: 'GitHub',
    },
    hero: {
      eyebrow: 'Open-source · Self-hosted · Local network',
      title: 'PrintLedger',
      subtitle: 'Self-hosted printer and cartridge inventory for IT teams.',
      description:
        'Open-source system for tracking printers, cartridges, consumables, stock movements, repairs, locations, users, and backups inside your local network.',
      previewAlt: 'PrintLedger dashboard preview',
      actionsAria: 'Project links',
      github: 'GitHub',
      docs: 'Documentation',
      support: 'Commercial Support',
    },
    problem: {
      eyebrow: 'Problem',
      title: 'Stop tracking cartridges in scattered spreadsheets',
      text: 'Printer and cartridge accounting often starts in Excel, but becomes hard to maintain when stock, locations, repairs, refills, write-offs, and purchase planning need reliable history.',
    },
    features: {
      eyebrow: 'Features',
      title: 'Built for practical IT inventory work',
      description:
        'Keep daily operations visible and traceable without turning a small inventory system into enterprise overhead.',
      items: [
        'Printer inventory',
        'Cartridge stock',
        'Stock movement history',
        'Repair and archive workflow',
        'Dashboard analytics',
        'Backup and restore',
        'Local-network authentication',
        'Docker deployment',
      ],
    },
    screenshots: {
      eyebrow: 'Screenshots',
      title: 'Core workflows in one interface',
      items: {
        dashboard: {
          title: 'Dashboard',
          alt: 'PrintLedger dashboard with status cards and cartridge usage analytics',
        },
        printers: {
          title: 'Printers',
          alt: 'PrintLedger printers table with search, filters, and location details',
        },
        cartridges: {
          title: 'Cartridges',
          alt: 'PrintLedger cartridge stock table with quick actions',
        },
        backup: {
          title: 'Backup',
          alt: 'PrintLedger backup management page',
        },
      },
    },
    architecture: {
      eyebrow: 'Architecture',
      title: 'Simple self-hosted stack',
      flowAria: 'Application architecture flow',
      flow: ['Browser', 'Next.js frontend', 'FastAPI backend', 'PostgreSQL', 'Backup/Restore'],
      note: 'Docker Compose + nginx for production deployment.',
    },
    openSource: {
      eyebrow: 'Open Source',
      title: 'Deploy and adapt it yourself',
      text: 'PrintLedger is planned as an open-source self-hosted tool. The core application can be deployed and modified by users.',
    },
    commercialSupport: {
      eyebrow: 'Commercial Support',
      title: 'Help when you need it',
      text: 'Paid services are available for installation, Docker deployment, nginx/HTTPS setup, backup configuration, migration from Excel, customization, reports, training, and support.',
    },
    footer: {
      docs: 'Project docs',
    },
  },
} satisfies Record<Language, object>

function App() {
  const [language, setLanguage] = useState<Language>('ru')
  const t = translations[language]

  const screenshots = useMemo(
    () =>
      (['dashboard', 'printers', 'cartridges', 'backup'] as const).map((key) => ({
        key,
        image: screenshotImages[language][key],
        ...t.screenshots.items[key],
      })),
    [language, t.screenshots.items],
  )

  return (
    <main>
      <section className="hero-section">
        <nav className="top-nav" aria-label={t.navAria}>
          <a className="brand" href="#top" aria-label={t.homeAria}>
            <span className="brand-mark">PL</span>
            <span>PrintLedger</span>
          </a>
          <div className="top-nav-right">
            <div className="nav-links">
              <a href="#features">{t.nav.features}</a>
              <a href="#screenshots">{t.nav.screenshots}</a>
              <a href="#architecture">{t.nav.architecture}</a>
              <a href={githubUrl}>{t.nav.github}</a>
            </div>
            <div className="language-switcher" aria-label="Language switcher">
              {(['ru', 'en'] as const).map((item) => (
                <button
                  className={language === item ? 'active' : ''}
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  aria-pressed={language === item}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="subtitle">{t.hero.subtitle}</p>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-actions" aria-label={t.hero.actionsAria}>
              <a className="button primary" href={githubUrl}>
                {t.hero.github}
              </a>
              <a className="button secondary" href={docsUrl}>
                {t.hero.docs}
              </a>
              <a className="button secondary" href={supportUrl}>
                {t.hero.support}
              </a>
            </div>
          </div>

          <div className="hero-preview" aria-label={t.hero.previewAlt}>
            <img src={screenshotImages[language].dashboard} alt={t.hero.previewAlt} />
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="section-copy narrow">
          <p className="eyebrow">{t.problem.eyebrow}</p>
          <h2>{t.problem.title}</h2>
          <p>{t.problem.text}</p>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-heading">
          <p className="eyebrow">{t.features.eyebrow}</p>
          <h2>{t.features.title}</h2>
        </div>
        <div className="feature-grid">
          {t.features.items.map((feature) => (
            <article className="feature-card" key={feature}>
              <h3>{feature}</h3>
              <p>{t.features.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="screenshots" className="section screenshots-section">
        <div className="section-heading">
          <p className="eyebrow">{t.screenshots.eyebrow}</p>
          <h2>{t.screenshots.title}</h2>
        </div>
        <div className="screenshot-grid">
          {screenshots.map((screenshot) => (
            <figure className="screenshot-card" key={screenshot.key}>
              <img src={screenshot.image} alt={screenshot.alt} />
              <figcaption>{screenshot.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="architecture" className="section architecture-section">
        <div className="section-heading">
          <p className="eyebrow">{t.architecture.eyebrow}</p>
          <h2>{t.architecture.title}</h2>
        </div>
        <div className="flow" aria-label={t.architecture.flowAria}>
          {t.architecture.flow.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="architecture-note">{t.architecture.note}</p>
      </section>

      <section className="section split-section">
        <article className="info-card">
          <p className="eyebrow">{t.openSource.eyebrow}</p>
          <h2>{t.openSource.title}</h2>
          <p>{t.openSource.text}</p>
        </article>
        <article className="info-card">
          <p className="eyebrow">{t.commercialSupport.eyebrow}</p>
          <h2>{t.commercialSupport.title}</h2>
          <p>{t.commercialSupport.text}</p>
        </article>
      </section>

      <footer className="footer">
        <div>
          <strong>PrintLedger</strong>
          <span>Dmitrii Fedorov</span>
        </div>
        <div className="footer-links">
          <a href={githubUrl}>GitHub</a>
          <a href={docsUrl}>{t.footer.docs}</a>
          <a href="https://simplyadmin.org">simplyadmin.org</a>
        </div>
      </footer>
    </main>
  )
}

export default App
