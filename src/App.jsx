import './App.css'

const painPoints = [
  {
    title: 'Сотрудники подключаются через что придётся',
    text: 'ИТ не видит трафик, доступы выдаются вручную и не отзываются вовремя.',
  },
  {
    title: 'Данные идут через сторонние сервисы',
    text: 'Непрозрачные каналы, нестабильные инструменты, онбординг превращается в квест.',
  },
  {
    title: 'Нет единой точки контроля',
    text: 'У каждого сотрудника свой способ подключения, свои настройки и свои риски.',
  },
  {
    title: 'Сбои бьют по работе команды',
    text: 'Когда доступ нестабилен, останавливаются коммуникации, документы и внутренние процессы.',
  },
]

const modules = [
  {
    subtitle: 'Telegram и браузеры',
    title: 'MTProto + SOCKS5',
    text: 'Частные прокси для Telegram, браузеров и рабочих сред. Отдельные доступы, быстрая выдача и понятное управление.',
  },
  {
    subtitle: 'Роутер для команды',
    title: 'Keenetic',
    text: 'Маршрутизация на уровне роутера для команд и домашних офисов. Часть сервисов идёт по заданным правилам, остальное — напрямую.',
  },
  {
    subtitle: 'Офисная сеть',
    title: 'MikroTik для компаний',
    text: 'Корпоративная сетевая инфраструктура: туннели, правила доступа, сегментация по ролям, мониторинг и документация.',
  },
  {
    subtitle: 'Удалённый доступ',
    title: 'Российские сервисы из-за рубежа',
    text: 'Рабочий доступ к банкам, корпоративным системам и российской инфраструктуре для сотрудников за пределами РФ.',
  },
]

const benefits = [
  'Единая точка подключения',
  'Выдача и отзыв доступов под контролем',
  'Маршрутизация по правилам компании',
  'Мониторинг и сопровождение',
]

const steps = [
  {
    number: '01',
    title: 'Разбираем задачу',
    text: 'Смотрим текущую схему доступа, роли сотрудников, нужные сервисы и риски.',
  },
  {
    number: '02',
    title: 'Проектируем схему',
    text: 'Подбираем подходящий сценарий: индивидуальные доступы, роутер, офисная сеть или комбинированная схема.',
  },
  {
    number: '03',
    title: 'Запускаем и сопровождаем',
    text: 'Настраиваем инфраструктуру, подключаем сотрудников, тестируем и берём систему на сопровождение.',
  },
]

const compareRows = [
  ['Инфраструктура', 'Публичный сервис', 'Частная схема клиента'],
  ['Прозрачность', 'Чёрный ящик', 'Понятная архитектура и документация'],
  ['Управление доступами', 'Почти отсутствует', 'Есть'],
  ['Маршрутизация', 'Одна схема для всех', 'Под логику компании'],
  ['Поддержка', 'Без ответственности', 'Сопровождение по регламенту'],
]

const checks = [
  'Собственная схема подключения',
  'Документация по контуру доступа',
  'Отдельные сценарии для команд, офисов и удалённых сотрудников',
  'Контроль выдачи, отзыва и изменения доступов',
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
              <div className="eyebrow">Частная инфраструктура доступа для бизнеса</div>
              <h1>Корпоративный интернет-доступ, которым можно управлять</h1>
              <p className="hero__text">
                HyperRoute строит не публичный сервис “для всех”, а отдельный
                управляемый контур доступа под задачи компании: подключение сотрудников,
                маршрутизация трафика, доступ к российским и зарубежным сервисам,
                мониторинг и сопровождение.
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
                    <div className="branch__label">Офисы и удалённые команды</div>
                  </div>
                </div>
              </div>

              <div className="network-card__list">
                <div className="network-item">
                  <span>Доступы</span>
                  <strong>Выдача и отзыв под контролем</strong>
                </div>
                <div className="network-item">
                  <span>Маршрутизация</span>
                  <strong>Под правила компании</strong>
                </div>
                <div className="network-item">
                  <span>Стабильность</span>
                  <strong>Мониторинг и сопровождение</strong>
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
            <h2>Команды распределились. Контроль — нет.</h2>
            <p className="section-text">
              Сотрудники уже используют инструменты доступа, но компания не управляет
              каналами, не контролирует выдачу подключений и не получает прозрачной схемы работы.
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
              <strong>$4,88 млн — средняя стоимость утечки</strong>
              <span>IBM, 2024 год. Цена бесконтрольного доступа растёт каждый год.</span>
            </div>
          </div>
        </section>

        <section className="section" id="platform">
          <div className="container">
            <p className="section-label">Платформа</p>
            <h2>Частная инфраструктура доступа под контроль компании</h2>
            <p className="section-text">
              HyperRoute строит управляемую инфраструктуру доступа с понятной схемой
              подключения, маршрутизацией под задачи бизнеса, документацией и сопровождением.
              Это не ещё один публичный инструмент, а отдельный контур доступа,
              который подчиняется логике компании.
            </p>

            <div className="grid grid--3">
              <article className="card">
                <h3>Базовая платформа</h3>
                <p>
                  Подключение, управление правами, маршрутизация, сопровождение и
                  документация.
                </p>
              </article>
              <article className="card">
                <h3>Международные команды</h3>
                <p>
                  Стабильный доступ к российским сервисам для сотрудников и руководителей
                  за пределами РФ.
                </p>
              </article>
              <article className="card">
                <h3>Быстрое внедрение</h3>
                <p>
                  Минимум времени на запуск. Компания получает работающую инфраструктуру
                  без долгой ручной настройки.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="solutions">
          <div className="container">
            <p className="section-label">Решения</p>
            <h2>Модули и сценарии использования</h2>
            <p className="section-text">
              Конфигурация подбирается под формат работы компании: удалённые сотрудники,
              офисные сети, роутеры, сегментация доступа и международные команды.
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
            <h2>Рынок продаёт аккаунт в чужом сервисе. Мы строим управляемый контур доступа.</h2>

            <div className="why-grid">
              <div className="why-checks">
                {checks.map((item) => (
                  <div className="check-item" key={item}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="compare">
                {compareRows.map((row, index) => (
                  <div
                    className={`compare__row ${index === 0 ? 'compare__row--head' : ''}`}
                    key={row[0]}
                  >
                    <div>{row[0]}</div>
                    <div>{row[1]}</div>
                    <div>{row[2]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-label">Формат работы</p>
            <h2>Разовое внедрение, сопровождение, индивидуальные проекты</h2>
            <div className="grid grid--3">
              <article className="card">
                <h3>Разовое внедрение</h3>
                <p>
                  Аудит, проектирование, настройка, подключение сотрудников и передача
                  документации.
                </p>
              </article>
              <article className="card">
                <h3>Ежемесячное сопровождение</h3>
                <p>
                  Мониторинг, обновления, изменения в конфигурации, поддержка и регламент сервиса.
                </p>
              </article>
              <article className="card">
                <h3>Индивидуальные проекты</h3>
                <p>
                  Сложные распределённые сети, несколько сценариев доступа, офисы,
                  удалённые команды и масштабируемая архитектура.
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
                <h2>Обсудим схему доступа под вашу компанию</h2>
                <p className="section-text">
                  Если вашей команде нужен не случайный публичный инструмент, а управляемый
                  и понятный канал доступа — начнём с пилота.
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
              Частная инфраструктура доступа для распределённых команд, офисов и
              международных сценариев работы.
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