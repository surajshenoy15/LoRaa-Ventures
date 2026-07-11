import { useEffect, useState } from 'react';

const PRODUCT_URL = 'https://loraa-connect.vikasanafoundation.org';
const PRIVACY_URL = '/privacy-policy';
const CONTACT_EMAILS = [
  'suraj@loraaventures.com',
  'sushmitha@loraaventures.com',
];

const capabilities = [
  {
    icon: 'verify',
    title: 'Verified activity records',
    text: 'Capture participation evidence through a structured workflow designed for student activities and institutional programs.',
  },
  {
    icon: 'location',
    title: 'Location-aware validation',
    text: 'Support venue-based checks when location verification is required for an event or activity submission.',
  },
  {
    icon: 'review',
    title: 'Centralized review',
    text: 'Give authorized teams a clear process to review submissions, manage outcomes, and maintain reliable records.',
  },
  {
    icon: 'certificate',
    title: 'Certificate workflows',
    text: 'Maintain approved participation details in an organized format that supports digital certificate generation.',
  },
];

function Icon({ name, size = 22 }) {
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m10 14 10-10" />
        <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    verify: (
      <>
        <path d="M12 3 5 6v5c0 4.5 2.8 8 7 10 4.2-2 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
    review: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h5" />
        <path d="m14 17 1.5 1.5L19 15" />
      </>
    ),
    certificate: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m9 14-1 7 4-2 4 2-1-7" />
        <path d="m10.2 9 1.2 1.2L14 7.8" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    camera: (
      <>
        <path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.5Z" />
        <circle cx="12" cy="12" r="3.5" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  };

  return <svg {...shared}>{paths[name]}</svg>;
}

function Logo({ tone = 'blue', className = '' }) {
  const source = tone === 'white' ? '/PNG-05.png' : '/PNG-03.png';
  return <img className={`brand-logo ${className}`.trim()} src={source} alt="LoRaa Ventures" />;
}

function Header({ dark = false }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${dark ? 'site-header-dark' : ''}`}>
      <div className="container navbar">
        <a className="brand-link" href="/" aria-label="LoRaa Ventures home">
          <Logo tone={dark ? 'white' : 'blue'} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Primary navigation">
          <a href="/#product" onClick={() => setOpen(false)}>Product</a>
          <a href="/#capabilities" onClick={() => setOpen(false)}>Capabilities</a>
          <a href={PRIVACY_URL} onClick={() => setOpen(false)}>Privacy</a>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="button button-small button-primary" href={PRODUCT_URL} target="_blank" rel="noreferrer">
            Open LoRaa Connect <Icon name="external" size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <Logo tone="white" />
          <p>Practical digital products for institutions and real-world operations.</p>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          <a href="/#product">LoRaa Connect</a>
          <a href={PRIVACY_URL}>Privacy Policy</a>
          <a href={`mailto:${CONTACT_EMAILS[0]}`}>Contact</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 LoRaa Ventures. All rights reserved.</span>
        <span>Main product: LoRaa Connect</span>
      </div>
    </footer>
  );
}

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="LoRaa Connect product overview">
      <div className="preview-topbar">
        <div>
          <span className="preview-kicker">Flagship product</span>
          <strong>LoRaa Connect</strong>
        </div>
        <span className="preview-status"><span /> Operational workflow</span>
      </div>

      <div className="preview-body">
        <div className="preview-sidebar" aria-hidden="true">
          <span className="sidebar-active" />
          <span />
          <span />
          <span />
        </div>

        <div className="preview-content">
          <div className="preview-heading">
            <div>
              <span>Activity workflow</span>
              <strong>Verified participation</strong>
            </div>
            <div className="preview-avatar">LC</div>
          </div>

          <div className="workflow-list">
            {[
              ['01', 'Register', 'Student and event details'],
              ['02', 'Capture', 'Activity proof and validation'],
              ['03', 'Review', 'Authorized administrative review'],
              ['04', 'Complete', 'Approved participation record'],
            ].map(([number, title, description]) => (
              <div className="workflow-row" key={number}>
                <span className="workflow-number">{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
                <Icon name="check" size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    document.title = 'LoRaa Ventures | Digital Product Company';

    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />

      <main id="main-content">
        <section className="hero-section">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />

          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow eyebrow-light">Technology built around real operations</p>
              <h1>Digital products designed to work beyond the screen.</h1>
              <p className="hero-description">
                LoRaa Ventures builds focused, dependable digital systems for institutions and organized programs.
                Our main product, <strong>LoRaa Connect</strong>, simplifies verified student activities from registration to final review.
              </p>

              <div className="hero-actions">
                <a className="button button-light" href={PRODUCT_URL} target="_blank" rel="noreferrer">
                  Explore LoRaa Connect <Icon name="arrow" size={18} />
                </a>
                <a className="button button-ghost-light" href="#product">
                  View product overview
                </a>
              </div>

              <div className="hero-points" aria-label="Product qualities">
                <span><Icon name="check" size={17} /> Clear workflows</span>
                <span><Icon name="check" size={17} /> Secure-by-design thinking</span>
                <span><Icon name="check" size={17} /> Institution-ready experience</span>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <ProductPreview />
            </div>
          </div>
        </section>

        <section className="section product-section" id="product">
          <div className="container product-grid">
            <div className="section-intro" data-reveal>
              <p className="eyebrow">Main product</p>
              <h2>LoRaa Connect</h2>
              <p>
                A focused platform for managing student activity participation, evidence collection,
                location-aware validation, administrative review, and certificate-ready records.
              </p>
              <a className="text-link" href={PRODUCT_URL} target="_blank" rel="noreferrer">
                Visit the LoRaa Connect website <Icon name="external" size={17} />
              </a>
            </div>

            <div className="product-detail-card" data-reveal>
              <div className="detail-card-header">
                <span className="detail-icon"><Icon name="verify" size={25} /></span>
                <div>
                  <span>Product focus</span>
                  <strong>Reliable participation workflows</strong>
                </div>
              </div>

              <div className="detail-list">
                <div><Icon name="check" size={18} /><span>Structured student and event registration</span></div>
                <div><Icon name="check" size={18} /><span>Proof-based activity submissions</span></div>
                <div><Icon name="check" size={18} /><span>Authorized institutional review</span></div>
                <div><Icon name="check" size={18} /><span>Organized participation and certificate records</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section capabilities-section" id="capabilities">
          <div className="container">
            <div className="section-heading centered" data-reveal>
              <p className="eyebrow">Core capabilities</p>
              <h2>Everything needed for a clear activity workflow.</h2>
              <p>Purpose-built functionality without unnecessary complexity.</p>
            </div>

            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <article className="capability-card" data-reveal key={capability.title} style={{ '--delay': `${index * 70}ms` }}>
                  <span className="capability-icon"><Icon name={capability.icon} size={24} /></span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section privacy-highlight-section">
          <div className="container privacy-highlight" data-reveal>
            <div>
              <p className="eyebrow eyebrow-light">Privacy and transparency</p>
              <h2>Clear information about how LoRaa Connect handles data.</h2>
              <p>
                Review the types of information used for accounts, verification, activity records,
                support, and institutional workflows.
              </p>
            </div>

            <a className="button button-light" href={PRIVACY_URL}>
              Read Privacy Policy <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="section-intro" data-reveal>
              <p className="eyebrow">Contact</p>
              <h2>Get in touch with LoRaa Ventures.</h2>
              <p>For product, support, partnership, or privacy-related communication, email us directly.</p>
            </div>

            <div className="contact-list" data-reveal>
              {CONTACT_EMAILS.map((email) => (
                <a className="contact-email" href={`mailto:${email}`} key={email}>
                  <span className="contact-icon"><Icon name="mail" size={21} /></span>
                  <span>{email}</span>
                  <Icon name="arrow" size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'LoRaa Connect Privacy Policy | LoRaa Ventures';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <a className="skip-link" href="#privacy-content">Skip to policy</a>
      <Header />

      <main className="privacy-page" id="privacy-content">
        <section className="privacy-hero">
          <div className="container privacy-hero-inner">
            <p className="eyebrow">Privacy Policy</p>
            <h1>LoRaa Connect Privacy Policy</h1>
            <p>
              This policy explains how LoRaa Ventures collects, uses, stores, and protects information
              when users access LoRaa Connect.
            </p>
            <div className="policy-meta">
              <span>Application: LoRaa Connect</span>
              <span>Last updated: 11 July 2026</span>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <div className="container policy-layout">
            <aside className="policy-summary" aria-label="Policy summary">
              <div className="policy-summary-card">
                <span className="summary-icon"><Icon name="lock" size={24} /></span>
                <h2>Policy overview</h2>
                <p>
                  LoRaa Connect uses information only to operate accounts, verify activities,
                  support authorized review, maintain records, and provide the service.
                </p>
                <a href={`mailto:${CONTACT_EMAILS[0]}`} className="text-link">
                  Contact regarding privacy <Icon name="arrow" size={17} />
                </a>
              </div>
            </aside>

            <article className="policy-content">
              <section>
                <h2>1. Scope</h2>
                <p>
                  This Privacy Policy applies to the LoRaa Connect mobile application, related web interfaces,
                  and services operated by LoRaa Ventures. It applies to students, faculty members,
                  administrators, event coordinators, and other authorized users.
                </p>
              </section>

              <section>
                <h2>2. Information we collect</h2>
                <p>Depending on the features used, LoRaa Connect may collect:</p>
                <ul>
                  <li>Name, email address, phone number, student identifier or USN, institution, department, and account details.</li>
                  <li>Event registrations, participation details, activity submissions, review status, and certificate records.</li>
                  <li>Photos, selfies, or face-verification images submitted for identity or participation verification.</li>
                  <li>Location information when venue verification or location-based activity validation is required.</li>
                  <li>Device information, diagnostic logs, timestamps, and technical data needed for security and troubleshooting.</li>
                </ul>
              </section>

              <section>
                <h2>3. Camera, photos, face verification, and location</h2>
                <p>
                  Camera access may be requested to capture activity evidence or verification images.
                  Location access may be requested to confirm that an activity submission is made within an approved venue or area.
                  Where face verification is enabled, submitted images are used only to support identity and participation checks within the LoRaa Connect workflow.
                </p>
                <p>
                  These permissions are requested only when a related feature is used. Users can manage app permissions through their device settings,
                  although disabling a required permission may prevent that feature from working.
                </p>
              </section>

              <section>
                <h2>4. How we use information</h2>
                <p>We may use collected information to:</p>
                <ul>
                  <li>Create, authenticate, and manage authorized user access.</li>
                  <li>Register users for events and maintain participation records.</li>
                  <li>Verify activity submissions, identity, venue, timing, and supporting evidence.</li>
                  <li>Enable faculty or administrator review, approval, reporting, and certificate workflows.</li>
                  <li>Prevent misuse, investigate technical issues, improve reliability, and provide support.</li>
                  <li>Comply with applicable legal or institutional requirements.</li>
                </ul>
              </section>

              <section>
                <h2>5. Data sharing</h2>
                <p>
                  LoRaa Ventures does not sell personal information. Information may be shared only with authorized institutions,
                  faculty coordinators, administrators, event organizers, and service providers when necessary to operate LoRaa Connect.
                  Information may also be disclosed when required by law or a valid legal process.
                </p>
              </section>

              <section>
                <h2>6. Storage and security</h2>
                <p>
                  We use reasonable technical and organizational safeguards intended to protect information against unauthorized access,
                  loss, misuse, or alteration. No digital service can guarantee absolute security, but access to operational records is restricted
                  to authorized users and systems based on their responsibilities.
                </p>
              </section>

              <section>
                <h2>7. Data retention</h2>
                <p>
                  Information is retained only for as long as reasonably required for account administration, participation verification,
                  certificate records, institutional reporting, dispute resolution, security, support, or legal obligations.
                  Retention periods may vary according to the type of record and institutional requirements.
                </p>
              </section>

              <section>
                <h2>8. User requests</h2>
                <p>
                  Users may contact LoRaa Ventures to request access to or correction of their personal information, or to request deletion where applicable.
                  Some records may need to be retained when required for institutional verification, certificates, fraud prevention, legal compliance,
                  or other legitimate operational purposes.
                </p>
              </section>

              <section>
                <h2>9. Children’s privacy</h2>
                <p>
                  LoRaa Connect is intended for institution-authorized users. Where a user is a minor, the relevant institution or organizer is responsible
                  for obtaining any approval or consent required under applicable law before the service is used.
                </p>
              </section>

              <section>
                <h2>10. Changes to this policy</h2>
                <p>
                  This policy may be updated to reflect changes in the application, operational practices, or legal requirements.
                  The latest version will be published on this page with an updated effective date.
                </p>
              </section>

              <section>
                <h2>11. Contact</h2>
                <p>For privacy questions or data-related requests, contact LoRaa Ventures:</p>
                <div className="policy-contact-list">
                  {CONTACT_EMAILS.map((email) => (
                    <a href={`mailto:${email}`} key={email}>
                      <Icon name="mail" size={19} /> {email}
                    </a>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
  return normalizedPath === '/privacy-policy' ? <PrivacyPolicyPage /> : <HomePage />;
}
