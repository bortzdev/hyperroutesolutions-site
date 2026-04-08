import { useEffect } from 'react'
import './App.css'

const modules = [
  {
    subtitle: 'Telegram и браузеры',
    title: 'MTProto + SOCKS5',
    text: 'Личные прокси для Telegram, браузеров и рабочих программ. Отдельный доступ для каждого сотрудника.',
  },
  {
    subtitle: 'Роутер для офиса или дома',
    title: 'Keenetic',
    text: 'Нужные сайты работают без лишних действий, остальное идёт напрямую.',
  },
  {
    subtitle: 'Корпоративная сеть',
    title: 'MikroTik',
    text: 'Сеть для офиса с разграничением доступа по ролям и документацией.',
  },
  {
    subtitle: 'Доступ из других стран',
    title: 'Российские сервисы из-за рубежа',
    text: 'Банки и корпоративные системы работают для сотрудников за границей.',
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

const plans = [
  { title: 'VPS, базовый', price: 'от 2 290 ₽', period: '/ мес', desc: 'Две страны, команда 10–15 человек. Только VPS.' },
  { title: 'Российские сервисы из-за рубежа', price: 'от 999 ₽', period: '/ мес', desc: 'Доступ к банкам и корпоративным системам для сотрудников за границей.' },
  { title: 'Keenetic', price: '11 000 ₽', period: '+ от 2 899 ₽/мес', desc: 'Роутер под ключ. Либо 3 990 ₽/мес — роутер в аренду.' },
  { title: 'Прокси', price: 'от 999 ₽', period: '/ мес', desc: 'MTProto и SOCKS5 под сотрудников и рабочие задачи.' },
  { title: 'MikroTik', price: 'индивидуально', period: '', desc: 'Корпоративная сеть с разграничением ролей. Считаем под проект.' },
  { title: 'Поддержка 24/7', price: 'включено', period: '', desc: 'Круглосуточная поддержка в случае поломки уже входит в ежемесячную плату.' },
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
            <a href="#top" className="brand">
              <img src="/logo.svg" alt="" className="brand__logo" />
              <span className="brand__text">HyperRoute</span>
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
            <h2 className="reveal">Сотрудники работают откуда угодно. Доступ — никто не контролирует.</h2>
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

            <div className="solutions-layout">
              <div className="scheme reveal">
                <div className="scheme__title">Схема доступа</div>
                <div className="scheme__body">
                  <div className="node node--client">Сотрудники</div>
                  <div className="line"></div>
                  <div className="node node--core">HyperRoute</div>
                  <div className="branches">
                    <div className="branch"><span className="branch__dot"></span><div className="branch__label">Российские сервисы</div></div>
                    <div className="branch"><span className="branch__dot"></span><div className="branch__label">Зарубежные сервисы</div></div>
                    <div className="branch"><span className="branch__dot"></span><div className="branch__label">Офисы и сотрудники за рубежом</div></div>
                  </div>
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
            <h2 className="reveal">Обычный VPN продаёт место в чужой сети. Мы строим вашу.</h2>

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

        <section className="section section--alt" id="pricing">
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
                    <span className="price">{p.price}</span>
                    {p.period && <span className="price-period">{p.period}</span>}
                  </div>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>

            <div className="support-note reveal">
              <strong>Поддержка 24/7 включена в ежемесячную плату.</strong>
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
              <img src="/logo.svg" alt="" className="brand__logo" />
              <span>HyperRoute</span>
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
