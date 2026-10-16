import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Droplet,
  Droplets,
  Fingerprint,
  Leaf,
  MapPin,
  ShieldCheck,
  UsersRound,
  Waves,
} from "lucide-react";

const commitments = [
  {
    icon: Droplets,
    number: "01",
    title: "Agua para la comunidad.",
    description: "Trabajamos cada día para que el agua llegue de forma segura a cada hogar.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Protección del recurso hídrico.",
    description: "Cuidamos las fuentes de agua que sostienen la vida de nuestra comunidad.",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Gestión comunitaria.",
    description: "Administramos este servicio con compromiso, cercanía y responsabilidad.",
  },
];

const steps = [
  { icon: Droplet, label: "Tené a mano tu NISE", detail: "Lo encontrás en un recibo anterior." },
  { icon: Fingerprint, label: "Ingresá la cédula del abonado", detail: "La necesitás para identificar el servicio." },
  { icon: ArrowRight, label: "Consultá tu recibo", detail: "Pronto podrás ver el saldo pendiente en línea." },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="ASADA San Juan de Dios, inicio">
      <span className="brand-mark" aria-hidden="true"><Droplet size={23} fill="currentColor" strokeWidth={1.6} /></span>
      <span className="brand-copy"><strong>ASADA</strong><span>San Juan de Dios</span></span>
    </Link>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#compromiso">Nuestro compromiso</a>
          <a href="#consulta">Cómo consultar</a>
          <Link className="admin-link" href="/login"><ShieldCheck size={16} /> Acceso administrativo</Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Abrir navegación"><span></span><span></span></summary>
          <nav aria-label="Navegación móvil">
            <a href="#compromiso">Nuestro compromiso</a>
            <a href="#consulta">Cómo consultar</a>
            <Link href="/login">Acceso administrativo</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><Brand light /><p>El agua que nos une.<br />Un compromiso de toda la comunidad.</p></div>
        <div className="footer-location"><span className="footer-label">Estamos en</span><span><MapPin size={16} /> Barú · Pérez Zeledón</span><span className="footer-note">Servicio comunal de agua potable</span></div>
        <div className="footer-links"><span className="footer-label">Enlaces</span><Link href="/consulta">Consultar recibo <ArrowRight size={15} /></Link><Link href="/login">Acceso administrativo <ArrowRight size={15} /></Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} ASADA San Juan de Dios</span><span>Hecho para nuestra comunidad <span aria-hidden="true">♥</span></span></div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Río de montaña rodeado de bosque tropical" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <span className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Barú · Pérez Zeledón</span>
            <h1 id="hero-title">El agua que<br /><em>nos une.</em></h1>
            <p>Protegemos nuestro recurso hídrico.<br className="desktop-break" /> Cuidamos lo que compartimos.</p>
            <Link className="button button-primary hero-button" href="/consulta">Consultar mi recibo <ArrowRight size={19} /></Link>
            <a className="hero-scroll" href="#compromiso"><span>Conocé nuestra labor</span><ArrowDown size={15} /></a>
          </div>
          <div className="hero-caption"><Waves size={15} /> Agua de nuestra tierra, para nuestra gente.</div>
        </section>

        <section className="intro-section" id="compromiso">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow"><span className="eyebrow-line" /> Nuestra razón de ser</span>
              <h2>Un servicio cercano,<br /><em>un compromiso compartido.</em></h2>
              <p>Somos parte de esta comunidad. Trabajamos para llevar agua potable a cada hogar y proteger las fuentes que nos dan vida.</p>
            </div>
            <div className="commitment-grid">
              {commitments.map(({ icon: Icon, number, title, description }) => (
                <article className="commitment-card" key={number}>
                  <div className="card-top"><span className="card-icon"><Icon size={23} strokeWidth={1.7} /></span><span className="card-number">{number}</span></div>
                  <h3>{title}</h3><p>{description}</p><span className="card-accent" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="consult-section" id="consulta">
          <div className="container consult-layout">
            <div className="consult-copy">
              <span className="eyebrow"><span className="eyebrow-line" /> Próximamente en línea</span>
              <h2>Tu recibo,<br /><em>a un paso.</em></h2>
              <p>Muy pronto vas a poder consultar tu recibo y el saldo pendiente desde aquí. Para cuando llegue el momento, tené listos estos datos:</p>
              <Link className="text-link" href="/consulta">Más información <ArrowRight size={17} /></Link>
            </div>
            <div className="steps-list">
              {steps.map(({ icon: Icon, label, detail }, index) => (
                <div className="step-row" key={label}>
                  <span className="step-index">0{index + 1}</span><span className="step-icon"><Icon size={21} strokeWidth={1.7} /></span>
                  <div><h3>{label}</h3><p>{detail}</p></div>
                </div>
              ))}
              <div className="steps-note"><ShieldCheck size={17} /><span>Tu información estará protegida. La consulta estará disponible en una próxima fase.</span></div>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-orb closing-orb-one" /><div className="closing-orb closing-orb-two" />
          <div className="container closing-content">
            <span className="closing-icon"><Droplet size={25} fill="currentColor" /></span>
            <span className="eyebrow closing-eyebrow">Al servicio de nuestra gente</span>
            <h2>El agua nos conecta.<br /><em>Cuidémosla juntos.</em></h2>
            <Link className="button button-primary hero-button" href="/consulta">Consultar recibo ahora <ArrowRight size={19} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
