import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Plus,
  ChevronDown,
  Sparkles,
  Gamepad2,
  Check,
  MapPin,
  MoveUpRight,
  Phone,
  Mail,
  Globe,
  Menu,
  X,
} from 'lucide-react';

const servicesLinks = [
  { href: '/arcade-machine-hire', label: 'Arcade machine hire' },
  { href: '/claw-machine-hire', label: 'Claw machine hire' },
  { href: '/arcade-machine-placement', label: 'Venue machine placement' },
  { href: '/arcade-machines-for-sale', label: 'Arcade machine sales' },
  { href: '/amusement-machine-supply-installation', label: 'Supply & installation' },
];

const guidesLinks = [
  { href: '/guides/arcade-machine-hire-costs', label: 'Arcade machine hire costs' },
  { href: '/guides/claw-machine-prize-planning', label: 'Claw machine prize planning' },
  { href: '/guides/arcade-machine-placement-vs-buying', label: 'Placement vs buying' },
];

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/service-areas', label: 'Service areas' },
  { href: '/about', label: 'About us' },
  { href: '/privacy', label: 'Privacy' },
];

const faqs = [
  {
    q: 'Can I hire a machine for a party or corporate event?',
    a: 'Yes. Arcade and claw machine hire are available to enquire about for parties, weddings and corporate events. Send the date, venue suburb and guest numbers to check suitable options.',
  },
  {
    q: 'Do you offer ongoing machine placement for venues?',
    a: 'Yes. Commercial arcade and claw placement is one of our main services, covering pubs, clubs, RSLs, shopping centres, cinemas, play centres and other venues. Equipment and commercial terms are agreed for each site.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'Our enquiry areas are metropolitan Sydney, Western Sydney, South-West Sydney, North-West Sydney, Wollongong and Illawarra, the Central Coast and greater NSW. Include your exact suburb or postcode to check delivery and availability.',
  },
  {
    q: 'How much does arcade hire cost?',
    a: 'The quote depends on the machines, hire period, location and delivery access. Equipment, delivery, setup and collection should be clear in the booking before you commit.',
  },
  {
    q: 'What do you need to prepare a quote?',
    a: 'Start with the service you need and your suburb or postcode. Add dates, guest numbers or venue details if you have them. You do not need a finished plan to get in touch.',
  },
];

const regions = [
  { no: '01', label: 'Sydney metropolitan', href: '/service-areas#sydney' },
  { no: '02', label: 'Western Sydney', href: '/service-areas#western-sydney' },
  { no: '03', label: 'South-West Sydney', href: '/service-areas#south-west-sydney' },
  { no: '04', label: 'North-West Sydney', href: '/service-areas#north-west-sydney' },
  { no: '05', label: 'Wollongong & Illawarra', href: '/service-areas#illawarra' },
  { no: '06', label: 'Central Coast', href: '/service-areas#central-coast' },
  { no: '07', label: 'Greater NSW', href: '/service-areas#nsw' },
];

const venueTypes = [
  'Pubs & clubs',
  'RSLs',
  'Shopping centres',
  'Cinemas',
  'Play centres',
  'Entertainment venues',
];

const guides = [
  {
    category: 'Event planning',
    title: 'What goes into an arcade machine hire quote?',
    desc: 'Understand arcade hire costs, delivery, hire duration and venue access. Use a practical comparison checklist before booking machines for a Sydney or NSW event.',
    href: '/guides/arcade-machine-hire-costs',
  },
  {
    category: 'Claw machines',
    title: 'Planning prizes for a hired claw machine',
    desc: 'Plan prizes for a hired claw machine: check fit, samples, quantities, refills and presentation before a party, wedding or corporate event.',
    href: '/guides/claw-machine-prize-planning',
  },
  {
    category: 'Commercial venues',
    title: 'Arcade machine placement or buying: a venue planning guide',
    desc: 'Compare arcade machine placement and ownership for pubs, clubs, RSLs and other venues. Review responsibilities, costs, income assumptions and trial questions.',
    href: '/guides/arcade-machine-placement-vs-buying',
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="Arcade Game Australia home">
          <img
            className="brand-logo"
            src="/images/arcade-game-australia-logo.png"
            width={635}
            height={200}
            alt="Arcade Game Australia"
          />
        </a>
        <nav
          aria-label="Main navigation"
          className="desktop-nav site-navigation"
        >
          <ul className="desktop-nav-list">
            <li className="nav-item">
              <a href="/" aria-current="page" className="nav-link">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-trigger"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services{' '}
                <ChevronDown
                  size={14}
                  style={{
                    marginLeft: 4,
                    transition: 'transform 0.3s',
                    transform: servicesOpen ? 'rotate(180deg)' : 'none',
                  }}
                />
              </button>
              {servicesOpen && (
                <ul className="service-dropdown">
                  {servicesLinks.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="service-menu-link">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navItems.slice(1).map((item) => (
              <li key={item.href} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li
              className="nav-item"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button
                className="nav-trigger"
                aria-expanded={guidesOpen}
                onClick={() => setGuidesOpen(!guidesOpen)}
              >
                Guides{' '}
                <ChevronDown
                  size={14}
                  style={{
                    marginLeft: 4,
                    transition: 'transform 0.3s',
                    transform: guidesOpen ? 'rotate(180deg)' : 'none',
                  }}
                />
              </button>
              {guidesOpen && (
                <ul className="service-dropdown">
                  {guidesLinks.map((g) => (
                    <li key={g.href}>
                      <a href={g.href} className="service-menu-link">
                        {g.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="/guides" className="service-menu-link">
                      All planning guides
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <a className="button button-brand header-cta" href="/contact">
          Get a quote <ArrowUpRight size={17} />
        </a>
        <button
          className="menu-button"
          aria-label="Open menu"
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              onClick: () => setMobileOpen(false),
            }}
            onClick={() => setMobileOpen(false)}
          />
          <div className="mobile-sheet" style={{ position: 'relative', marginLeft: 'auto' }}>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'none',
                border: 0,
                color: '#fff',
                cursor: 'pointer',
                padding: 8,
              }}
            >
              <X size={24} />
            </button>
            <nav>
              <a href="/" aria-current="page" onClick={() => setMobileOpen(false)}>
                Home
              </a>
              <div style={{ paddingTop: 20, color: 'var(--brand-on-dark)', fontSize: 14, fontWeight: 700 }}>
                Services
              </div>
              {servicesLinks.map((s) => (
                <a key={s.href} href={s.href} onClick={() => setMobileOpen(false)}>
                  {s.label}
                </a>
              ))}
              {navItems.slice(1).map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div style={{ paddingTop: 20, color: 'var(--brand-on-dark)', fontSize: 14, fontWeight: 700 }}>
                Guides
              </div>
              {guidesLinks.map((g) => (
                <a key={g.href} href={g.href} onClick={() => setMobileOpen(false)}>
                  {g.label}
                </a>
              ))}
              <a href="/guides" onClick={() => setMobileOpen(false)}>
                All planning guides
              </a>
              <a
                href="/contact"
                className="button button-brand"
                onClick={() => setMobileOpen(false)}
              >
                Get a quote <ArrowUpRight size={17} />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src="/images/arcade-hero.webp"
          width={1672}
          height={941}
          alt="Illustrative arcade cabinets and a claw machine with colourful lights"
          fetchPriority="high"
        />
      </div>
      <div className="container hero-content">
        <div className="eyebrow">
          <span className="live-dot"></span> Sydney &amp; New South Wales
        </div>
        <h1>
          ARCADE GAMES.
          <br />
          <span>SYDNEY &amp; NSW.</span>
        </h1>
        <p className="hero-intro">
          Arcade Game Australia brings more play to your space.
          <br className="desktop-break" /> Arcade and claw machine hire, commercial
          venue placement, machine sales, supply and installation.
        </p>
        <div className="button-row">
          <a href="/contact" className="button button-brand">
            Let&apos;s get the ball rolling <ArrowUpRight size={19} />
          </a>
          <a href="#services" className="text-link light">
            Explore our services <ArrowDown size={17} />
          </a>
        </div>
        <div className="hero-footer">
          <span>FOR VENUES. FOR EVENTS. FOR THE FUN OF IT.</span>
          <span className="image-note">Illustrative machines</span>
        </div>
      </div>
      <div className="hero-side-label">PRESS START ON SOMETHING GOOD</div>
    </section>
  );
}

function Ticker() {
  const content = (
    <>
      MORE PLAY <Plus size={19} />
      <span>MORE CONNECTION</span>
      <Plus size={19} /> MORE GOOD TIMES <Plus size={19} />
      <span>ARCADE GAME AUSTRALIA</span>
      <Plus size={19} />
    </>
  );
  return (
    <div
      className="ticker"
      aria-label="Hire, placement, sales and installation"
    >
      <div>
        {content}
        {content}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section container" id="services">
      <div className="section-heading">
        <div>
          <div className="eyebrow">01 / Find your kind of fun</div>
          <h2>
            A LITTLE PLAY.
            <br />
            A LOT OF POSSIBILITIES.
          </h2>
        </div>
        <p>
          For a single event, start with arcade or claw machine hire. For an
          ongoing games area, explore venue placement or buying your own
          equipment. Supply and installation brings the equipment and the site
          plan together.
        </p>
      </div>
      <div className="service-grid">
        <a className="service-card card-arcade" href="/arcade-machine-hire">
          <img
            src="/images/arcade-hero.webp"
            width={1672}
            height={941}
            alt="Colourfully lit arcade game cabinets"
            loading="lazy"
          />
          <div className="card-top">
            <span>01 / HIRE</span>
            <span className="circle-arrow">
              <ArrowUpRight size={24} />
            </span>
          </div>
          <div className="card-copy">
            <h3>
              LEVEL UP
              <br />
              YOUR EVENT.
            </h3>
            <p>Arcade machine hire for parties, corporate events and celebrations.</p>
            <span className="card-link">
              Explore arcade hire <ArrowUpRight size={17} />
            </span>
          </div>
        </a>
        <a className="service-card card-claw" href="/claw-machine-hire">
          <img
            src="/images/claw-machine.webp"
            width={1000}
            height={1333}
            alt="An illuminated claw machine with colourful prizes"
            loading="lazy"
          />
          <div className="card-top">
            <span>02 / CLAW MACHINES</span>
            <span className="circle-arrow">
              <ArrowUpRight size={24} />
            </span>
          </div>
          <div className="card-copy">
            <h3>
              ONE MORE
              <br />
              GO?
            </h3>
            <p>Claw machine hire with a little suspense and a lot of personality.</p>
            <span className="card-link">
              Explore claw hire <ArrowUpRight size={17} />
            </span>
          </div>
        </a>
        <a
          className="service-card card-placement"
          href="/arcade-machine-placement"
        >
          <div className="card-top">
            <span>03 / VENUE PLACEMENT</span>
            <span className="circle-arrow dark">
              <ArrowUpRight size={24} />
            </span>
          </div>
          <Gamepad2
            size={24}
            strokeWidth={1}
            className="placement-icon"
          />
          <div className="card-copy">
            <h3>
              MAKE ROOM
              <br />
              FOR PLAY.
            </h3>
            <p>
              Explore a permanent arcade or claw machine setup for your venue.
            </p>
            <span className="card-link">
              Let&apos;s talk placement <ArrowUpRight size={17} />
            </span>
          </div>
        </a>
      </div>
      <div className="secondary-services">
        <a href="/arcade-machines-for-sale">
          <span className="small-number">04</span>
          <div>
            <h3>MAKE IT YOURS.</h3>
            <p>Arcade machines for sale</p>
          </div>
          <ArrowUpRight size={24} />
        </a>
        <a href="/amusement-machine-supply-installation">
          <span className="small-number">05</span>
          <div>
            <h3>BRING IT ALL TOGETHER.</h3>
            <p>Amusement machine supply &amp; installation</p>
          </div>
          <ArrowUpRight size={24} />
        </a>
      </div>
    </section>
  );
}

function VenueSection() {
  return (
    <section className="venue-section">
      <div className="container venue-layout">
        <div className="venue-visual">
          <img
            src="/images/claw-machine.webp"
            width={1000}
            height={1333}
            alt="Illustrative claw machine for a games area"
            loading="lazy"
          />
          <div className="image-stamp">
            <Sparkles size={23} />
            <span>
              SMALL SPACE.
              <br />
              BIG PLAY ENERGY.
            </span>
          </div>
        </div>
        <div className="venue-copy">
          <div className="eyebrow">For the places people come together</div>
          <h2>
            GIVE THEM
            <br />
            A REASON TO
            <br />
            <em>STAY &amp; PLAY.</em>
          </h2>
          <p>
            A games area gives visitors another activity to enjoy while they are
            at your venue. Plan arcade and claw machine placement around your
            audience, the available space and how the area will operate.
          </p>
          <div className="venue-types">
            {venueTypes.map((vt) => (
              <span key={vt}>
                <Check size={14} />
                {vt}
              </span>
            ))}
          </div>
          <a href="/arcade-machine-placement" className="button button-brand">
            Explore venue placement <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section container">
      <div className="section-heading">
        <div>
          <div className="eyebrow">02 / From idea to game on</div>
          <h2>LET&apos;S MAKE IT HAPPEN.</h2>
        </div>
        <p>
          Start with the service and location. Dates, room dimensions and game
          preferences help, but you do not need a complete brief to get in
          touch.
        </p>
      </div>
      <div className="steps">
        <div className="step">
          <span className="step-number">
            01 <MoveUpRight size={22} />
          </span>
          <h3>Tell us your idea</h3>
          <p>
            A party, a venue or your own games room? Share your location, timing
            and the kind of experience you want.
          </p>
        </div>
        <div className="step">
          <span className="step-number">
            02 <MoveUpRight size={22} />
          </span>
          <h3>Find the right fit</h3>
          <p>
            Match the available machines to your space and intended use, with
            the delivery requirements included in the quote.
          </p>
        </div>
        <div className="step">
          <span className="step-number">
            03 <MoveUpRight size={22} />
          </span>
          <h3>Get ready to play</h3>
          <p>
            Review the equipment, dates, price and delivery arrangements, then
            agree the booking or project details.
          </p>
        </div>
      </div>
    </section>
  );
}

function AreasSection() {
  return (
    <section className="areas-section">
      <div className="container areas-layout">
        <div>
          <div className="eyebrow">
            <MapPin size={14} /> Our neighbourhood, and beyond
          </div>
          <h2>
            SYDNEY.
            <br />
            THE COAST.
            <br />
            <span>YOUR NEXT EVENT.</span>
          </h2>
          <p>
            Our service enquiries cover metropolitan Sydney, the surrounding
            regions and greater NSW. Choose your area for the details to
            include in a delivery or installation enquiry.
          </p>
          <a href="/service-areas" className="text-link">
            See our service areas <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="region-list">
          {regions.map((r) => (
            <a key={r.href} href={r.href}>
              <span className="region-no">{r.no}</span>
              {r.label}
              <ArrowUpRight size={19} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section container faq-layout">
      <div>
        <div className="eyebrow">03 / Good questions</div>
        <h2>
          BEFORE YOU
          <br />
          PRESS START.
        </h2>
        <p>Have something else in mind?</p>
        <a className="text-link" href="/contact">
          Ask us a question <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="faq">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="faq-trigger"
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown size={16} />
              </button>
            </h3>
            <div className={`faq-content ${openIndex === i ? 'open' : ''}`}>
              <div>{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GuidesSection() {
  return (
    <section className="section container related-guide-section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">Useful before you decide</div>
          <h2>A LITTLE KNOW-HOW.</h2>
        </div>
        <a className="text-link" href="/guides">
          All planning guides
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="related-guide-grid">
        {guides.map((g) => (
          <article key={g.href}>
            <span className="guide-category">{g.category}</span>
            <h3>
              <a href={g.href}>{g.title}</a>
            </h3>
            <p>{g.desc}</p>
            <a href={g.href} className="text-link">
              Read the guide
              <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-layout">
        <div>
          <div className="eyebrow">Your next good idea starts here</div>
          <h2>
            READY? <span>LET&apos;S PLAY.</span>
          </h2>
          <p>Tell us about your space, your event or the machine you have in mind.</p>
        </div>
        <a className="button button-dark" href="/contact">
          Start a conversation <ArrowUpRight size={19} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-intro">
            <a href="/" className="brand" aria-label="Arcade Game Australia home">
              <img
                className="brand-logo"
                src="/images/arcade-game-australia-logo.png"
                width={635}
                height={200}
                alt="Arcade Game Australia"
              />
            </a>
            <p>
              Bringing a little more play to venues,
              <br />
              events and spaces across Sydney &amp; NSW.
            </p>
            <a href="/contact" className="text-link light">
              Let&apos;s make something fun happen <ArrowUpRight size={16} />
            </a>
          </div>
          <div>
            <h2>FIND YOUR FUN</h2>
            {servicesLinks.map((s) => (
              <a key={s.href} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
          <div>
            <h2>GET TO KNOW US</h2>
            <a href="/about">About us</a>
            <a href="/service-areas">Service areas</a>
            <a href="/contact">Contact &amp; quotes</a>
            <a href="/guides">Guides &amp; checklists</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
        <div
          className="demo-contact demo-contact-compact"
          aria-label="Demo contact details"
        >
          <span className="demo-contact-label">Demo contact details</span>
          <div className="demo-contact-items">
            <div>
              <Phone size={16} />
              <span>
                <small>Phone</small>02 0000 0000
              </span>
            </div>
            <div>
              <Mail size={16} />
              <span>
                <small>Email</small>hello@arcadegameaustralia.example
              </span>
            </div>
            <div>
              <Globe size={16} />
              <span>
                <small>Demo domain</small>arcadegameaustralia.example
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Arcade Game Australia</span>
          <span>Made for good times.</span>
          <img
            className="footer-mark"
            src="/arcade-icon.svg"
            width={24}
            height={24}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <Services />
        <VenueSection />
        <Steps />
        <AreasSection />
        <FAQSection />
        <GuidesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;
