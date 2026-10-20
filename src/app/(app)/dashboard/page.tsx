import Link from "next/link";
import { Activity, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Banknote, Droplet, FileText, Gauge, UsersRound } from "lucide-react";

const metrics = [
  { label: "Abonados activos", value: "1,248", note: "+ 18 este mes", icon: UsersRound, trend: "up" },
  { label: "Servicios activos", value: "1,306", note: "98.4% disponibles", icon: Droplet, trend: "up" },
  { label: "Pendiente de pago", value: "₡ 2.48 M", note: "84 recibos vencidos", icon: Banknote, trend: "down" },
  { label: "Lecturas pendientes", value: "36", note: "Ciclo de octubre", icon: Activity, trend: "down" },
];

const shortcuts = [
  { href: "/abonados", label: "Registrar abonado", icon: UsersRound },
  { href: "/lecturas", label: "Ingresar lectura", icon: Activity },
  { href: "/facturacion", label: "Generar facturación", icon: FileText },
  { href: "/reportes", label: "Ver reportes", icon: Gauge },
];

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-heading">
        <div>
          <span className="dashboard-eyebrow">GESTIÓN · ASADA SAN JUAN DE DIOS</span>
          <h1>Dashboard</h1>
          <p>Resumen general de la operación del acueducto.</p>
        </div>
        <div className="dashboard-heading-actions">
          <Link className="dashboard-home-link" href="/"><ArrowLeft aria-hidden="true" size={15} /> Volver al inicio</Link>
          <div className="dashboard-date">Ciclo actual <strong>Octubre 2026</strong></div>
        </div>
      </div>

      <div className="dashboard-demo-note"><span aria-hidden="true">i</span> Vista de ejemplo: las cifras son ilustrativas y deben conectarse con los datos reales del sistema.</div>

      <section className="dashboard-metrics" aria-label="Indicadores principales">
        {metrics.map(({ label, value, note, icon: Icon, trend }) => (
          <article className="dashboard-metric" key={label}>
            <div className="dashboard-metric-top"><span>{label}</span><span className="dashboard-metric-icon"><Icon size={18} /></span></div>
            <strong className="dashboard-metric-value">{value}</strong>
            <span className={`dashboard-metric-note ${trend === "up" ? "is-positive" : "is-neutral"}`}>
              {trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {note}
            </span>
          </article>
        ))}
      </section>

      <div className="dashboard-lower-grid">
        <section className="dashboard-panel dashboard-activity">
          <div className="dashboard-panel-heading"><div><span className="dashboard-panel-kicker">OPERACIÓN</span><h2>Actividad del mes</h2></div><span className="dashboard-period">Últimos 6 meses</span></div>
          <div className="dashboard-chart" role="img" aria-label="Gráfico ilustrativo de consumo mensual en los últimos seis meses">
            <div className="dashboard-chart-y"><span>2,000</span><span>1,500</span><span>1,000</span><span>500</span><span>0</span></div>
            <div className="dashboard-chart-plot">
              <div className="dashboard-chart-grid"><i /><i /><i /><i /><i /></div>
              <div className="dashboard-bars">{[[48, 61], [60, 74], [54, 67], [72, 83], [64, 77], [78, 91]].map(([a, b], index) => <div className="dashboard-bar-group" key={index}><i style={{ height: `${a}%` }} /><i style={{ height: `${b}%` }} /></div>)}</div>
              <div className="dashboard-chart-x"><span>May</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span></div>
            </div>
          </div>
          <div className="dashboard-chart-legend"><span><i className="legend-current" /> Consumo (m³)</span><span><i className="legend-prior" /> Periodo anterior</span><small>Datos ilustrativos</small></div>
        </section>

        <section className="dashboard-panel dashboard-shortcuts">
          <div className="dashboard-panel-heading"><div><span className="dashboard-panel-kicker">ACCESO RÁPIDO</span><h2>Tareas frecuentes</h2></div></div>
          <div className="dashboard-shortcut-list">{shortcuts.map(({ href, label, icon: Icon }) => <Link href={href} key={href}><span><Icon size={18} /></span><strong>{label}</strong><ArrowRight size={16} /></Link>)}</div>
        </section>
      </div>

      <section className="dashboard-panel dashboard-attention">
        <div className="dashboard-panel-heading"><div><span className="dashboard-panel-kicker">PARA REVISAR</span><h2>Pendientes de gestión</h2></div><Link href="/reportes" className="dashboard-view-all">Ver reportes <ArrowRight size={15} /></Link></div>
        <div className="dashboard-pending-list">
          <div><span className="pending-dot pending-amber" /><span><strong>Lecturas sin registrar</strong><small>36 servicios esperan lectura para cerrar el ciclo.</small></span><Link href="/lecturas">Revisar</Link></div>
          <div><span className="pending-dot pending-blue" /><span><strong>Recibos vencidos</strong><small>84 recibos aparecen pendientes de pago.</small></span><Link href="/pagos">Revisar</Link></div>
          <div><span className="pending-dot pending-green" /><span><strong>Servicios en revisión</strong><small>12 solicitudes requieren seguimiento administrativo.</small></span><Link href="/servicios">Revisar</Link></div>
        </div>
      </section>
    </div>
  );
}
