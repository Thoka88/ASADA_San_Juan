"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Banknote, BarChart3, ClipboardList, Droplet, FileText, Gauge, Settings, UsersRound } from "lucide-react";

type SidebarProps = {
  open: boolean;
  onNavigate: () => void;
};

const sections = [
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/abonados", label: "Abonados", icon: UsersRound },
  { href: "/servicios", label: "Servicios", icon: Droplet },
  { href: "/lecturas", label: "Lecturas", icon: Activity },
  { href: "/facturacion", label: "Facturación", icon: FileText },
  { href: "/pagos", label: "Pagos", icon: Banknote },
  { href: "/reportes", label: "Reportes", icon: BarChart3 },
  { href: "/administracion", label: "Administración", icon: Settings },
];

export function Sidebar({ open, onNavigate }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside className={`admin-sidebar${open ? " is-open" : ""}`}>
      <Link className="admin-brand" href="/dashboard" onClick={onNavigate}>
        <span className="admin-brand-mark" aria-hidden="true"><Droplet size={21} fill="currentColor" /></span>
        <span><strong>ASADA</strong><small>San Juan de Dios</small></span>
      </Link>
      <div className="admin-sidebar-label">GESTIÓN</div>
      <nav aria-label="Navegación administrativa" className="admin-navigation">
        {sections.map(({ href, label, icon: Icon }) => (
          <Link key={href} aria-current={pathname === href ? "page" : undefined} className={`admin-navigation-link${pathname === href ? " is-active" : ""}`} href={href} onClick={onNavigate}>
            <Icon size={18} strokeWidth={1.8} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="admin-sidebar-footer">Servicio comunal de agua potable</div>
    </aside>
  );
}
