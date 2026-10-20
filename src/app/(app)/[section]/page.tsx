import Link from "next/link";
import { ArrowLeft, ArrowRight, CircleHelp, Construction } from "lucide-react";
import { notFound } from "next/navigation";

const sections: Record<string, { title: string; description: string; tasks: string[] }> = {
  abonados: { title: "Abonados", description: "Consulta y administra la información de las personas abonadas al acueducto.", tasks: ["Consultar el padrón de abonados", "Registrar un nuevo abonado", "Actualizar datos de contacto"] },
  servicios: { title: "Servicios", description: "Gestiona las conexiones de agua potable y sus estados de servicio.", tasks: ["Consultar servicios activos", "Registrar una conexión", "Dar seguimiento a solicitudes y suspensiones"] },
  lecturas: { title: "Lecturas", description: "Registra y consulta las lecturas de los medidores para cada ciclo.", tasks: ["Ingresar lecturas del periodo", "Identificar lecturas pendientes", "Revisar el historial de consumo"] },
  facturacion: { title: "Facturación", description: "Prepara y consulta los recibos de cada ciclo de consumo.", tasks: ["Revisar el ciclo de facturación", "Generar recibos", "Consultar recibos emitidos"] },
  pagos: { title: "Pagos", description: "Registra pagos y consulta saldos pendientes de los servicios.", tasks: ["Registrar un pago", "Consultar movimientos", "Revisar recibos pendientes"] },
  reportes: { title: "Reportes", description: "Reúne información operativa y financiera para apoyar la gestión del acueducto.", tasks: ["Resumen de recaudación", "Consumo por periodo", "Listado de saldos pendientes"] },
  administracion: { title: "Administración", description: "Configura los parámetros generales para el funcionamiento del sistema.", tasks: ["Datos de la ASADA", "Tarifas y periodos", "Usuarios y permisos"] },
};

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const content = sections[section];
  if (!content) notFound();

  return (
    <div className="section-page">
      <Link href="/dashboard" className="section-back"><ArrowLeft size={16} /> Volver al dashboard</Link>
      <div className="section-page-heading"><span className="dashboard-eyebrow">GESTIÓN · ASADA SAN JUAN DE DIOS</span><h1>{content.title}</h1><p>{content.description}</p></div>
      <div className="section-placeholder-card">
        <span className="section-placeholder-icon"><Construction size={23} /></span>
        <div><h2>Módulo en preparación</h2><p>Esta sección servirá para las siguientes tareas:</p></div>
        <ul>{content.tasks.map((task) => <li key={task}><ArrowRight size={15} /> {task}</li>)}</ul>
        <div className="section-placeholder-note"><CircleHelp size={17} /> Los registros se mostrarán aquí cuando se conecten los datos de gestión.</div>
      </div>
    </div>
  );
}
