import {
  Activity, Banknote, BarChart3, Bell, BookOpenCheck, CalendarDays,
  ClipboardList, Droplet, FileText, Gauge, Mail, Radio, Scissors,
  Settings, ShieldCheck, Tags, UserCog, UsersRound,
  type LucideIcon,
} from "lucide-react";

export type ManagementGroup =
  | "Inicio"
  | "Padrón y servicios"
  | "Configuración"
  | "Ciclo de consumo"
  | "Facturación y cobro"
  | "Comunicación"
  | "Gestión del sistema";

export type ManagementDestinationId =
  | "dashboard" | "abonados" | "tipos-servicio" | "servicios" | "medidores"
  | "parametros" | "periodos" | "tarifas" | "lecturas" | "facturacion"
  | "estado-cuenta" | "morosidad" | "pagos" | "correos" | "sinpe"
  | "notificaciones" | "cortes-reconexiones" | "reportes" | "usuarios" | "roles";

export type ManagementDestination = {
  id: ManagementDestinationId;
  title: string;
  path: `/dashboard` | `/${Exclude<ManagementDestinationId, "dashboard">}`;
  icon: LucideIcon;
  iconLabel: string;
  group: ManagementGroup;
  comingSoon?: boolean;
  /** Metadatos reservados para autorización futura; no se aplican controles todavía. */
  requiredPermission?: string;
  roles?: readonly string[];
};

export const managementNavigation: readonly ManagementDestination[] = [
  { id: "dashboard", title: "Dashboard", path: "/dashboard", icon: Gauge, iconLabel: "Indicadores", group: "Inicio" },
  { id: "abonados", title: "Abonados", path: "/abonados", icon: UsersRound, iconLabel: "Personas abonadas", group: "Padrón y servicios", comingSoon: true, requiredPermission: "abonados.read" },
  { id: "tipos-servicio", title: "Tipos de servicio", path: "/tipos-servicio", icon: Tags, iconLabel: "Categorías de servicio", group: "Padrón y servicios", comingSoon: true, requiredPermission: "tipos-servicio.read" },
  { id: "servicios", title: "Servicios", path: "/servicios", icon: Droplet, iconLabel: "Conexiones de agua", group: "Padrón y servicios", comingSoon: true, requiredPermission: "servicios.read" },
  { id: "medidores", title: "Medidores", path: "/medidores", icon: Radio, iconLabel: "Medidores de agua", group: "Padrón y servicios", comingSoon: true, requiredPermission: "medidores.read" },
  { id: "parametros", title: "Parámetros", path: "/parametros", icon: Settings, iconLabel: "Configuración", group: "Configuración", comingSoon: true, requiredPermission: "parametros.read" },
  { id: "periodos", title: "Periodos", path: "/periodos", icon: CalendarDays, iconLabel: "Calendario", group: "Configuración", comingSoon: true, requiredPermission: "periodos.read" },
  { id: "tarifas", title: "Tarifas", path: "/tarifas", icon: ClipboardList, iconLabel: "Lista de tarifas", group: "Configuración", comingSoon: true, requiredPermission: "tarifas.read" },
  { id: "lecturas", title: "Lecturas", path: "/lecturas", icon: Activity, iconLabel: "Lecturas de consumo", group: "Ciclo de consumo", comingSoon: true, requiredPermission: "lecturas.read" },
  { id: "facturacion", title: "Facturación", path: "/facturacion", icon: FileText, iconLabel: "Recibos", group: "Facturación y cobro", comingSoon: true, requiredPermission: "facturacion.read" },
  { id: "estado-cuenta", title: "Estado de cuenta", path: "/estado-cuenta", icon: BookOpenCheck, iconLabel: "Estado de cuenta", group: "Facturación y cobro", comingSoon: true, requiredPermission: "estado-cuenta.read" },
  { id: "morosidad", title: "Morosidad", path: "/morosidad", icon: BarChart3, iconLabel: "Saldos pendientes", group: "Facturación y cobro", comingSoon: true, requiredPermission: "morosidad.read" },
  { id: "pagos", title: "Pagos", path: "/pagos", icon: Banknote, iconLabel: "Pagos", group: "Facturación y cobro", comingSoon: true, requiredPermission: "pagos.read" },
  { id: "correos", title: "Correos", path: "/correos", icon: Mail, iconLabel: "Correo electrónico", group: "Comunicación", comingSoon: true, requiredPermission: "correos.read" },
  { id: "sinpe", title: "SINPE", path: "/sinpe", icon: Banknote, iconLabel: "Pago SINPE", group: "Comunicación", comingSoon: true, requiredPermission: "sinpe.read" },
  { id: "notificaciones", title: "Notificaciones", path: "/notificaciones", icon: Bell, iconLabel: "Notificaciones", group: "Comunicación", comingSoon: true, requiredPermission: "notificaciones.read" },
  { id: "cortes-reconexiones", title: "Cortes y reconexiones", path: "/cortes-reconexiones", icon: Scissors, iconLabel: "Corte y reconexión del servicio", group: "Comunicación", comingSoon: true, requiredPermission: "cortes-reconexiones.read" },
  { id: "reportes", title: "Reportes", path: "/reportes", icon: BarChart3, iconLabel: "Gráficos de reportes", group: "Gestión del sistema", comingSoon: true, requiredPermission: "reportes.read" },
  { id: "usuarios", title: "Usuarios", path: "/usuarios", icon: UserCog, iconLabel: "Usuarios del sistema", group: "Gestión del sistema", comingSoon: true, requiredPermission: "usuarios.read" },
  { id: "roles", title: "Roles", path: "/roles", icon: ShieldCheck, iconLabel: "Roles y permisos", group: "Gestión del sistema", comingSoon: true, requiredPermission: "roles.read" },
];

export const managementGroups: readonly ManagementGroup[] = [
  "Inicio", "Padrón y servicios", "Configuración", "Ciclo de consumo",
  "Facturación y cobro", "Comunicación", "Gestión del sistema",
];

export function getManagementDestination(pathname: string) {
  return managementNavigation.find((destination) => destination.path === pathname);
}
