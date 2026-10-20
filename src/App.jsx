const NAV_LINKS = [
  { href: '#how', label: 'how it works' },
  { href: '#spec', label: 'spec' },
  { href: '#built-for', label: 'built for' },
]

const STEPS = [
  { n: '01', title: 'discover', text: 'bluetooth low energy finds every other phone running pulsenet within range.' },
  { n: '02', title: 'connect', text: 'once two phones see each other, they open a wifi-direct link for fast transfer.' },
  { n: '03', title: 'relay', text: 'every connected phone forwards messages for the people around it, hop by hop.' },
  { n: '04', title: 'extend', text: 'low-cost repeater nodes bridge distant clusters, stretching the mesh further.' },
]

const SPEC = [
  ['platform', 'android (kotlin), native'],
  ['discovery', 'bluetooth low energy'],
  ['transfer', 'wifi direct'],
  ['routing', 'store-and-forward, multi-hop'],
  ['encryption', 'end-to-end, per-conversation keys'],
  ['identity', 'none — no phone number, no account, no server'],
  ['range per hop', 'tens of metres, extended by repeater nodes'],
  ['to extend coverage', 'add one low-power repeater per dead zone'],
]

const CARDS = [
  { tag: 'campus', title: 'lecture halls & hostels', text: "places where everyone has a phone and the campus wifi doesn't reach, or doesn't cope." },
  { tag: 'events', title: 'crowds & contests', text: 'pitch days, concerts, markets — anywhere hundreds of phones compete for the same tower.' },
  { tag: 'emergencies', title: 'when the grid goes down', text: 'when the network goes down first, pulsenet is often the only thing still working.' },
]

const HERO_LINES = [
  [700, 60, 800, 140], [700, 60, 620, 150], [800, 140, 760, 240],
  [620, 150, 760, 240], [60, 300, 150, 360], [150, 360, 110, 410],
]
const HERO_NODES = [
  [700, 60, 4], [800, 140, 4], [620, 150, 3], [760, 240, 3],
  [60, 300, 3], [150, 360, 3], [110, 410, 3],
]

const sectionTitle = { fontSize: 20, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.5px' }
const bodyText = { color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.7 }

function Nav() {
  return (
    <nav className="top">
      <div className="wrap nav-inner">
        <span className="brand">pulsenet<span className="cursor">_</span></span>
        <div className="links">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <svg className="hero-bg" viewBox="0 0 860 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {HERO_LINES.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1E3524" strokeWidth="1" />
        ))}
        {HERO_NODES.map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="none" stroke="#3DFB6F" strokeWidth="1" />
        ))}
      </svg>
      <div className="wrap hero-inner">
        <div className="terminal">
          <div><span className="prompt">$</span> pulsenet --status</div>
          <div>scanning for peers...</div>
          <div>found 3 phones via bluetooth le</div>
          <div>negotiating wifi-direct link... <span className="ok">ok</span></div>
          <div><span className="ok">mesh: online</span> &middot; repeater: in range<span className="cursor">_</span></div>
        </div>
        <h1 className="headline">talk to anyone nearby.<br />even offline.</h1>
        <p className="sub">
          pulsenet turns every phone into part of the network. no sim, no router, no cell tower, no internet
          connection at all &mdash; just two phones close enough to find each other.
        </p>
        <div className="cta-row">
          <a className="btn primary" href="#how">[ see how it works ]</a>
          <a className="btn" href="#spec">[ read the spec ]</a>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section id="problem">
      <div className="wrap prose">
        <div className="kicker">cat problem.md</div>
        <h2 style={{ ...sectionTitle, fontSize: 20, marginBottom: 14 }}>the network fails exactly when you need it</h2>
        <p style={bodyText}>
          a packed lecture hall overloads the local tower. a blackout takes down the home router. an emergency can
          take out both at once. on a crowded campus in buea, or anywhere hundreds of phones compete for the same
          signal, &quot;no network&quot; is the normal case, not the exception.
        </p>
        <p style={{ ...bodyText, marginTop: 14 }}>
          pulsenet routes around all three by not depending on any of them. messages travel phone to phone, over
          bluetooth and wifi-direct, with no infrastructure in between.
        </p>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="kicker">cat how-it-works.md</div>
        <h2 style={{ ...sectionTitle, marginBottom: 6 }}>four hops, no tower</h2>
        <p className="prose" style={{ ...bodyText, marginTop: 10 }}>
          every phone running pulsenet does all four of these at once, continuously, in the background.
        </p>
        <div className="flow">
          {STEPS.map((s, i) => (
            <div className="flow-item" key={s.n}>
              <div className="step">
                <span className="n">{s.n}</span>
                <span className="t">{s.title}</span>
                <span className="d">{s.text}</span>
              </div>
              {i < STEPS.length - 1 && <div className="arrow" aria-hidden="true">&rarr;</div>}
            </div>
          ))}
        </div>
        <div className="forward">
          if no path exists yet, the message waits. it is held, encrypted, on the nearest relay phone until a route
          to the recipient opens up &mdash; then it continues automatically, sometimes seconds later, sometimes
          after someone walks back into range.
        </div>
      </div>
    </section>
  )
}

function Spec() {
  return (
    <section id="spec">
      <div className="wrap prose">
        <div className="kicker">cat specs.txt</div>
        <h2 style={sectionTitle}>under the hood</h2>
        <table className="spec">
          <tbody>
            {SPEC.map(([k, v]) => (
              <tr key={k}><td className="k">{k}</td><td className="v">{v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function BuiltFor() {
  return (
    <section id="built-for">
      <div className="wrap">
        <div className="kicker">cat built-for.md</div>
        <h2 style={sectionTitle}>built for where networks give out</h2>
        <div className="cards">
          {CARDS.map((c) => (
            <div className="card" key={c.tag}>
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <span className="wrap footer-inner">
        <span>pulsenet &middot; mesh messaging, no network required</span>
        <a href="#top">back to top &uarr;</a>
      </span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Spec />
      <BuiltFor />
      <Footer />
    </>
  )
}
