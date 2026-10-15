import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="placeholder-page">
      <div className="placeholder-card">
        <Link className="placeholder-brand" href="/"><span className="brand-mark"><LockKeyhole size={21} /></span><span><strong>ASADA</strong><small>San Juan de Dios</small></span></Link>
        <span className="placeholder-icon"><LockKeyhole size={27} /></span>
        <span className="eyebrow"><span className="eyebrow-line" /> Área administrativa</span>
        <h1>Acceso<br /><em>próximamente.</em></h1>
        <p>El acceso administrativo estará disponible en una próxima fase del proyecto.</p>
        <Link className="button button-primary" href="/"><ArrowLeft size={18} /> Volver al inicio</Link>
      </div>
    </main>
  );
}
