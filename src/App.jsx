import './App.css'

const painPoints = [
  {
    title: 'Каждый подключается как может',
    text: 'Кто через бесплатный VPN, кто через телефон. Компания не видит, кто и как работает.',
  },
  {
    title: 'Данные уходят через чужие серверы',
    text: 'Бесплатные сервисы живут за счёт вашего трафика. Что с ним происходит — неизвестно.',
  },
  {
    title: 'Непонятно, у кого есть доступ',
    text: 'Сотрудник уволился — его подключение осталось. Новый пришёл — неделю настраивают вручную.',
  },
  {
    title: 'Сервисы падают в самый неподходящий момент',
    text: 'Бесплатные инструменты нестабильны. Когда доступ пропадает, работа останавливается.',
  },
]

const modules = [
  {
    subtitle: 'Telegram и браузеры',
    title: 'MTProto + SOCKS5',
    text: 'Личные прокси для Telegram, браузеров и рабочих программ. Стабильно, быстро, с отдельным доступом для каждого сотрудника.',
  },
  {
    subtitle: 'Роутер для офиса или дома',
    title: 'Keenetic',
    text: 'Настройка роутера так, что нужные сайты и сервисы работают без лишних действий — остальное идёт напрямую.',
  },
  {
    subtitle: 'Корпоративная сеть',
    title: 'MikroTik',
    text: 'Сеть для офиса с разграничением доступа по ролям, настроенными туннелями и документацией.',
  },
  {
    subtitle: 'Доступ из других стран',
    title: 'Российские сервисы из-за рубежа',
    text: 'Банки, корпоративные системы, привычные сервисы — всё работает для сотрудников, которые находятся за границей.',
  },
]

const benefits = [
  'Одно подключение для всей команды',
  'Кто подключён — под контролем',
  'Трафик идёт туда, куда нужно',
  'Поддержка и мониторинг',
]

const steps = [
  {
    number: '01',
    title: 'Разбираем задачу',
    text: 'Смотрим, как сейчас подключаются сотрудники, к каким сервисам нужен доступ и где узкие места.',
  },
  {
    number: '02',
    title: 'Проектируем схему',
    text: 'Подбираем подходящее решение: личные прокси, роутер, корпоративная сеть или комбинация.',
  },
  {
    number: '03',
    title: 'Запускаем и сопровождаем',
    text: 'Настраиваем всё под ключ, подключаем сотрудников, тестируем и берём на поддержку.',
  },
]

const compareRows = [
  ['', 'Обычный VPN', 'HyperRoute'],
  ['Сервер', 'Общий для тысяч пользователей', 'Отдельный, только для вас'],
  ['Управление доступами', 'Нет', 'Есть'],
  ['Маршруты трафика', 'Один для всех', 'Под задачи вашей компании'],
  ['Поддержка', 'Без ответственности', 'По регламенту'],
  ['Прозрачность', 'Чёрный ящик', 'Понятная схема и документация'],
]

const checks = [
  'Ваша личная сеть — не общая с тысячами чужих пользователей',
  'Документация: понятно, как устроена сеть',
  'Разные настройки для офиса, дома и сотрудников за рубежом',
  'Видно, кто подключён. Отключить — один клик в боте.',
]

function App() {
  return (
    <div className="site">
      <header className="hero" id="top">
        <div className="hero__blur hero__blur--left"></div>
        <div className="hero__blur hero__blur--right"></div>

        <div className="container">
          <div className="nav">
            <div className="brand">HyperRoute</div>
            <div className="nav__links">
              <a href="#platform">Платформа</a>
              <a href="#solutions">Решения</a>
              <a href="#why">Почему мы</a>
              <a href="#contacts">Контакты</a>
            </div>
          </div>

          <div className="hero__grid">
            <div className="hero__content">
              <div className="eyebrow">Корпоративный интернет-доступ для бизнеса</div>
              <h1>Интернет-доступ для компании, которым можно управлять</h1>
              <p className="hero__text">
                HyperRoute строит не публичный сервис для всех, а отдельную
                управляемую сеть под вашу компанию: подключение сотрудников,
                настройка маршрутов трафика, доступ к российским и зарубежным
                сервисам, мониторинг и поддержка.
              </p>

              <div className="hero__actions">
                <a
                  className="btn btn--primary"
                  href="https://t.me/HyperRoute"
                  target="_blank"
                  rel="noreferrer"
                >
                  Обсудить внедрение
                </a>
                <a className="btn btn--secondary" href="#solutions">
                  Посмотреть решения
                </a>
              </div>

              <div className="hero__benefits">
                {benefits.map((item) => (
                  <div className="mini-pill" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="network-card">
              <div className="network-card__title">Схема доступа</div>
              <div className="network-card__scheme">
                <div className="scheme-col">
                  <div className="node node--client">Сотрудники</div>
                  <div className="line"></div>
                  <div className="node node--core">HyperRoute</div>
                  <div className="branches">
                    <div className="branch">
                      <span className="branch__dot"></span>
                      <div className="branch__label">Российские сервисы</div>
                    </div>
                    <div className="branch">
                      <span className="branch__dot"></span>
                      <div className="branch__label">Зарубежные сервисы</div>
                    </div>
                    <div className="branch">
                      <span className="branch__dot"></span>
                      <div className="branch__label">Офисы и сотрудники за рубежом</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="network-card__list">
                <div className="network-item">
                  <span>Доступы</span>
                  <strong>Выдача и отключение под контролем</strong>
                </div>
                <div className="network-item">
                  <span>Маршруты</span>
                  <strong>Под правила вашей компании</strong>
                </div>
                <div className="network-item">
                  <span>Стабильность</span>
                  <strong>Мониторинг и поддержка</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--alt">
          <div className="container">
            <p className="section-label">Проблема</p>
            <h2>Сотрудники работают откуда угодно. Доступ — никто не контролирует.</h2>
            <p className="section-text">
              Команды уже используют какие-то инструменты доступа — но компания
              не управляет тем, через что идёт трафик, и не контролирует, у кого
              что подключено.
            </p>

            <div className="grid grid--4">
              {painPoints.map((item) => (
                <article className="card card--pain" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="fact-box">
              <strong>$4,88 млн — средний ущерб от утечки данных</strong>
              <span>
                По данным IBM за 2024 год. Слабый контроль над тем, кто и как
                подключается к корпоративным сервисам — одна из главных причин.
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="platform">
          <div className="container">
            <p className="section-label">Платформа</p>
            <h2>Ваша сеть, под логику вашей компании</h2>
            <p className="section-text">
              HyperRoute настраивает управляемую сеть с понятной схемой
              подключения, маршрутами под ваши задачи, документацией и
              поддержкой. Это не очередной публичный инструмент — это сеть,
              которая работает по вашим правилам.
            </p>

            <div className="grid grid--3">
              <article className="card">
                <h3>Всё в одном месте</h3>
                <p>
                  Подключение, управление доступами, маршруты трафика и поддержка —
                  без разрозненных инструментов.
                </p>
              </article>
              <article className="card">
                <h3>Команды за рубежом</h3>
                <p>
                  Стабильный доступ к российским сервисам для сотрудников,
                  которые работают из других стран.
                </p>
              </article>
              <article className="card">
                <h3>Быстрый старт</h3>
                <p>
                  Минимум времени на запуск. Получаете работающую сеть без долгой
                  ручной настройки.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="solutions">
          <div className="container">
            <p className="section-label">Решения</p>
            <h2>Что именно настраиваем</h2>
            <p className="section-text">
              Выбираем решение под формат работы: личные прокси для сотрудников,
              роутер для офиса или дома, корпоративная сеть, доступ из-за рубежа.
            </p>

            <div className="grid grid--2">
              {modules.map((item) => (
                <article className="card card--module" key={item.title}>
                  <div className="card-subtitle">{item.subtitle}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <p className="section-label">Внедрение</p>
            <h2>Как проходит запуск</h2>
            <div className="steps">
              {steps.map((step) => (
                <article className="step" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt" id="why">
          <div className="container">
            <p className="section-label">Почему не просто VPN</p>
            <h2>Обычный VPN продаёт место в чужой сети. Мы строим вашу.</h2>

            <div className="why-grid">
              <div className="why-checks">
                {checks.map((item) => (
                  <div className="check-item" key={item}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="compare-wrap">
                <div className="compare">
                  {compareRows.map((row, index) => (
                    <div
                      className={`compare__row ${index === 0 ? 'compare__row--head' : ''}`}
                      key={row[0] + index}
                    >
                      {row.map((cell, i) => (
                        <div key={i}>{cell}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-label">Формат работы</p>
            <h2>Разовая настройка, поддержка, сложные проекты</h2>
            <div className="grid grid--3">
              <article className="card">
                <h3>Разовая настройка</h3>
                <p>
                  Разбор ситуации, проектирование, настройка под ключ, подключение
                  сотрудников и передача документации.
                </p>
              </article>
              <article className="card">
                <h3>Ежемесячная поддержка</h3>
                <p>
                  Мониторинг, обновления, изменения в настройках и поддержка
                  по регламенту.
                </p>
              </article>
              <article className="card">
                <h3>Сложные проекты</h3>
                <p>
                  Несколько офисов, разные сценарии доступа, большая команда —
                  проектируем и масштабируем под ваши задачи.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contacts">
          <div className="container">
            <div className="cta">
              <div>
                <p className="section-label">Контакты</p>
                <h2>Обсудим, как это будет работать в вашей компании</h2>
                <p className="section-text">
                  Если нужен не случайный инструмент, а надёжный управляемый
                  доступ — начнём с разбора вашей ситуации.
                </p>
              </div>

              <div className="cta__box">
                <div className="contact-item">
                  <span>Telegram</span>
                  <strong>@HyperRoute</strong>
                </div>
                <a
                  className="btn btn--primary btn--full"
                  href="https://t.me/HyperRoute"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <div className="footer__brand">HyperRoute</div>
            <div className="footer__text">
              Корпоративный интернет-доступ для компаний с офисами,
              распределёнными командами и сотрудниками за рубежом.
            </div>
          </div>

          <div className="footer__links">
            <a href="#platform">Платформа</a>
            <a href="#solutions">Решения</a>
            <a href="#why">Почему мы</a>
            <a href="https://t.me/HyperRoute" target="_blank" rel="noreferrer">
              @HyperRoute
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
