import { CircleHelp, Construction } from "lucide-react";
import { notFound } from "next/navigation";
import { getManagementDestination, managementNavigation } from "@/lib/management-navigation";

export function generateStaticParams() {
  return managementNavigation.filter(({ comingSoon }) => comingSoon).map(({ id }) => ({ section: id }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const destination = getManagementDestination(`/${section}`);
  if (!destination?.comingSoon) notFound();

  const Icon = destination.icon;
  return (
    <div className="section-page">
      <div className="section-page-heading">
        <span className="dashboard-eyebrow">GESTIÓN · ASADA SAN JUAN DE DIOS</span>
        <h1>{destination.title}</h1>
        <p>Este destino está configurado para una próxima etapa.</p>
      </div>
      <section className="section-placeholder-card" aria-labelledby="section-placeholder-title">
        <span className="section-placeholder-icon"><Icon aria-label={destination.iconLabel} role="img" size={23} /></span>
        <span className="section-coming-soon-label"><Construction aria-hidden="true" size={15} /> Próximamente</span>
        <h2 id="section-placeholder-title">Módulo en preparación</h2>
        <p>La sección {destination.title} todavía no está disponible. La ruta ya está configurada y abre esta vista informativa.</p>
        <div className="section-placeholder-note"><CircleHelp aria-hidden="true" size={17} /> Las funciones y los datos de este módulo se incorporarán en una fase posterior.</div>
      </section>
    </div>
  );
}
