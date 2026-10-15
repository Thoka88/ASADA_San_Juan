import Link from "next/link";
import { ArrowLeft, Clock3, Droplet } from "lucide-react";

export default function ConsultaPage() {
  return (
    <main className="placeholder-page">
      <div className="placeholder-card">
        <Link className="placeholder-brand" href="/"><span className="brand-mark"><Droplet size={23} fill="currentColor" /></span><span><strong>ASADA</strong><small>San Juan de Dios</small></span></Link>
        <span className="placeholder-icon"><Clock3 size={27} /></span>
        <span className="eyebrow"><span className="eyebrow-line" /> Estamos trabajando</span>
        <h1>Tu consulta<br /><em>estará aquí.</em></h1>
        <p>La consulta de recibos se habilitará en una próxima fase. Por ahora, tené a mano tu NISE y la cédula del abonado.</p>
        <Link className="button button-primary" href="/">Volver al inicio <ArrowLeft size={18} /></Link>
      </div>
    </main>
  );
}
