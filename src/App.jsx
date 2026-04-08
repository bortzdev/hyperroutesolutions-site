import { useEffect } from 'react'
import './App.css'

const modules = [
  {
    subtitle: 'Для Telegram и рабочих программ',
    title: 'Личные прокси',
    text: 'Отдельный доступ на каждого сотрудника. Подключение в один тап по ссылке. Трафик маскируется под обычный HTTPS — провайдер не видит ничего подозрительного и не блокирует.',
  },
  {
    subtitle: 'Для офиса или дома',
    title: 'Роутер с умной маршрутизацией',
    text: 'Нужные сайты (Instagram, YouTube, рабочие сервисы) идут через защищённый канал. Российские — Сбербанк, Госуслуги, ВК — напрямую, без потери скорости и слетевших авторизаций. Списки обновляются сами.',
  },
  {
    subtitle: 'Для компании с офисом',
    title: 'Корпоративная сеть',
    text: 'Настраиваем сеть в офисе с разграничением по отделам. Круглосуточный мониторинг: сервер пингуется каждые 30 секунд, при сбое сразу алерт в Telegram. Документация и обучение ответственного сотрудника.',
  },
  {
    subtitle: 'Для сотрудников за границей',
    title: 'Доступ к российским сервисам',
    text: 'Сбербанк, Тинькофф, Госуслуги, 1С и корпоративные системы работают как дома. Трафик выходит с российского IP — сервисы видят «своего» пользователя, не блокируют и не требуют лишних проверок.',
  },
]

const benefits = [
  'Одно подключение для всей команды',
  'Кто подключён — под контролем',
  'Трафик идёт туда, куда нужно',
  'Круглосуточная поддержка',
]

const steps = [
  {
    number: '01',
    title: 'Соберём нужные сервисы',
    text: 'Определяем, к чему нужен доступ и сколько сотрудников будут подключены.',
  },
  {
    number: '02',
    title: 'Создадим прокси под задачу',
    text: 'Подбираем решение: личные прокси, роутер, корпоративная сеть или комбинация.',
  },
  {
    number: '03',
    title: 'Подключение и надзор',
    text: 'Настраиваем под ключ, подключаем команду и берём на круглосуточную поддержку.',
  },
]

const compareRows = [
  ['', 'Обычный VPN', 'HyperRoute'],
  ['Сервер', 'Общий на тысячи', 'Отдельный, ваш'],
  ['Управление доступами', 'Нет', 'Есть'],
  ['Маршруты трафика', 'Один для всех', 'Под ваши задачи'],
  ['Поддержка', 'Нет', 'Круглосуточно'],
  ['Прозрачность', 'Чёрный ящик', 'Схема и документация'],
]

const checks = [
  'Личная сеть, а не общая с тысячами чужих пользователей',
  'Документация по всей инфраструктуре',
  'Разные настройки для офиса, дома и сотрудников за рубежом',
  'Видно, кто подключён. Отключить — один клик.',
]

// Highlight marks which price to show in red
const plans = [
  {
    title: 'Базовый для команды',
    price: 'от 2 290 ₽',
    period: '/ мес',
    desc: 'Две страны, команда 10–15 человек. Защищённый канал для основных задач.',
    highlight: true,
  },
  {
    title: 'Российские сервисы из-за рубежа',
    price: 'от 999 ₽',
    period: '/ мес',
    desc: 'Доступ к банкам и корпоративным системам для сотрудников за границей.',
    highlight: true,
  },
  {
    title: 'Роутер для офиса или дома',
    price: '11 000 ₽',
    period: '+ от 2 899 ₽ / мес',
    desc: 'Роутер с настройкой под ключ. Либо в аренду за 3 990 ₽ / мес.',
    highlightPeriod: true, // highlight the monthly part, not the device cost
  },
  {
    title: 'Личные прокси',
    price: 'от 999 ₽',
    period: '/ мес',
    desc: 'Отдельный доступ для каждого сотрудника под Telegram и рабочие задачи.',
    highlight: true,
  },
  {
    title: 'Корпоративная сеть',
    price: 'индивидуально',
    period: '',
    desc: 'Для компаний с офисом и разграничением доступа по отделам. Считаем под проект.',
    neutral: true,
  },
  {
    title: 'Поддержка 24/7',
    price: 'включено',
    period: '',
    desc: 'Круглосуточная поддержка при поломках уже входит в ежемесячную плату.',
    neutral: true,
  },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function App() {
  useReveal()

  return (
    <div className="site">
      <section className="hero">
        <div className="hero__blur hero__blur--left"></div>
        <div className="hero__blur hero__blur--right"></div>

        <div className="container">
          <nav className="nav">
            <a href="#top" className="brand" aria-label="HyperRoute">
              <img src="/logo.svg" alt="HyperRoute" className="brand__logo" />
            </a>
            <div className="nav__links">
              <a href="#solutions" className="nav-pill">Решения</a>
              <a href="#why" className="nav-pill">Почему мы</a>
              <a href="#pricing" className="nav-pill">Цены</a>
              <a href="#contacts" className="nav-pill">Контакты</a>
            </div>
          </nav>

          <div className="hero__center">
            <div className="eyebrow reveal">Корпоративный интернет-доступ</div>
            <h1 className="reveal">Интернет, которым можно управлять</h1>
            <p className="hero__text reveal">
              Отдельная управляемая сеть под вашу компанию. Без публичных сервисов.
            </p>
            <div className="hero__actions reveal">
              <a className="btn btn--primary btn--lg" href="https://t.me/HyperRoute" target="_blank" rel="noreferrer">
                Обсудить внедрение
              </a>
              <a className="btn btn--secondary btn--lg" href="#solutions">
                Посмотреть решения
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--benefits">
        <div className="container">
          <p className="section-label reveal">Что получает компания</p>
          <h2 className="reveal">Управляемая сеть вместо случайных инструментов</h2>
          <div className="benefits-grid">
            {benefits.map((item, i) => (
              <div className="benefit-card reveal" key={item} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="benefit-card__num">0{i + 1}</div>
                <div className="benefit-card__text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="section section--alt">
          <div className="container">
            <p className="section-label reveal">Проблема</p>
            <h2 className="reveal">Сотрудники работают откуда угодно<br/>Доступ — никто не контролирует</h2>
            <p className="section-text reveal">
              Команды используют какие-то инструменты, но компания не управляет тем, через что идёт трафик.
            </p>

            <div className="fact-box reveal">
              <strong>$4,88 млн</strong>
              <span>
                Средний ущерб от утечки данных по данным IBM за 2024 год. Слабый контроль над подключениями —
                одна из главных причин.
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <p className="section-label reveal">Решения</p>
            <h2 className="reveal">Что именно настраиваем</h2>
            <p className="section-text reveal">
              Выбираем под формат работы: прокси, роутер, корпоративная сеть или доступ из-за рубежа.
            </p>

            {/* SCHEME — full width, before cards */}
            <div className="scheme reveal">
              <div className="scheme__head">
                <div className="scheme__title">Как устроен доступ</div>
                <div className="scheme__desc">
                  Трафик идёт через ваш отдельный сервер. Списки маршрутов обновляются автоматически:
                  рабочие сервисы — через защищённый канал, российские — напрямую без потери скорости.
                </div>
              </div>

              <div className="scheme__flow">
                <div className="scheme__step">
                  <div className="scheme__step-num">1</div>
                  <div className="scheme__step-title">Сотрудники</div>
                  <div className="scheme__step-text">Офис, дом, любая страна. Подключение в один тап.</div>
                </div>

                <div className="scheme__arrow">→</div>

                <div className="scheme__step scheme__step--core">
                  <div className="scheme__step-num">2</div>
                  <div className="scheme__step-title">Ваш сервер HyperRoute</div>
                  <div className="scheme__step-text">Отдельный сервер только для вашей компании. Мониторинг 24/7, алерты в Telegram.</div>
                </div>

                <div className="scheme__arrow">→</div>

                <div className="scheme__step">
                  <div className="scheme__step-num">3</div>
                  <div className="scheme__step-title">Сервисы</div>
                  <div className="scheme__step-text">Рабочие — через канал. Сбербанк, Госуслуги — напрямую.</div>
                </div>
              </div>

              <div className="scheme__facts">
                <div className="scheme__fact"><strong>30 сек</strong><span>интервал проверки сервера</span></div>
                <div className="scheme__fact"><strong>авто</strong><span>обновление списков маршрутов</span></div>
                <div className="scheme__fact"><strong>24/7</strong><span>поддержка и мониторинг</span></div>
              </div>
            </div>

            <div className="solutions-grid">
              {modules.map((item, i) => (
                <article className="card card--module reveal" key={item.title} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="card-subtitle">{item.subtitle}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt" id="process">
          <div className="container">
            <p className="section-label reveal">Внедрение</p>
            <h2 className="reveal">Как проходит запуск</h2>
            <div className="steps">
              {steps.map((step, i) => (
                <article className="step reveal" key={step.number} style={{ transitionDelay: `${i * 80}ms` }}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="container">
            <p className="section-label reveal">Почему не просто VPN</p>
            <h2 className="reveal">Обычный VPN продаёт место в чужой сети<br/>Мы строим вашу</h2>

            <div className="why-grid">
              <div className="why-checks">
                {checks.map((item, i) => (
                  <div className="check-item reveal" key={item} style={{ transitionDelay: `${i * 60}ms` }}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="compare-wrap reveal">
                <div className="compare">
                  {compareRows.map((row, index) => (
                    <div
                      className={`compare__row ${index === 0 ? 'compare__row--head' : ''}`}
                      key={row[0] + index}
                    >
                      {row.map((cell, i) => (
                        <div key={i} className={i === 2 && index !== 0 ? 'compare__cell--hl' : ''}>{cell}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt section--pricing" id="pricing">
          <div className="container">
            <p className="section-label reveal">Цены</p>
            <h2 className="reveal">Считаем индивидуально под вашу компанию</h2>
            <p className="section-text reveal">
              Итоговая цена зависит от числа сотрудников, объёма трафика, типа услуги и количества серверов.
              Ниже — минимальные тарифы. Точные цифры — в Telegram.
            </p>

            <div className="pricing-grid">
              {plans.map((p, i) => (
                <article className="card card--price reveal" key={p.title} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="card-subtitle">{p.title}</div>
                  <div className="price-line">
                    {p.highlightPeriod ? (
                      <>
                        <span className="price price--neutral">{p.price}</span>
                        <span className="price price--hl">{p.period}</span>
                      </>
                    ) : (
                      <>
                        <span className={`price ${p.neutral ? 'price--neutral' : 'price--hl'}`}>{p.price}</span>
                        {p.period && <span className="price-period">{p.period}</span>}
                      </>
                    )}
                  </div>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>

            <div className="support-note reveal">
              <strong>Поддержка 24/7 включена в ежемесячную плату</strong>
              <span>В случае поломки чиним круглосуточно — без дополнительной оплаты.</span>
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contacts">
          <div className="container">
            <div className="cta reveal">
              <div className="cta__left">
                <p className="section-label">Контакты</p>
                <h2>Обсудим, как это будет работать в вашей компании</h2>
                <p className="section-text">
                  Нужен надёжный управляемый доступ — начнём с разбора вашей ситуации.
                </p>
                <a className="btn btn--primary btn--lg" href="https://t.me/HyperRoute" target="_blank" rel="noreferrer">
                  Написать в Telegram
                </a>
              </div>

              <div className="cta__qr">
                <img src="/qr.jpg" alt="QR-код Telegram" />
                <div className="cta__qr-label">Отсканируйте QR<br/>чтобы написать в Telegram</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <div className="footer__brand">
              <img src="/logo.svg" alt="HyperRoute" className="footer__logo" />
            </div>
            <div className="footer__text">
              Корпоративный интернет-доступ для компаний с офисами, распределёнными командами и сотрудниками за рубежом.
            </div>
          </div>

          <div className="footer__links">
            <a href="#solutions">Решения</a>
            <a href="#why">Почему мы</a>
            <a href="#pricing">Цены</a>
            <a href="https://t.me/HyperRoute" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
