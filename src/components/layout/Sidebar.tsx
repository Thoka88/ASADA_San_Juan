"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplet, X } from "lucide-react";
import { managementGroups, managementNavigation } from "@/lib/management-navigation";

type SidebarProps = {
  collapsed: boolean;
  onClose: () => void;
  onNavigate: () => void;
  open: boolean;
};

export function Sidebar({ collapsed, onClose, onNavigate, open }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      aria-label="Menú de gestión"
      aria-modal={open || undefined}
      className={`admin-sidebar${collapsed ? " is-collapsed" : ""}${open ? " is-open" : ""}`}
      id="management-sidebar"
      role={open ? "dialog" : undefined}
    >
      <div className="admin-sidebar-top">
        <Link aria-label="ASADA San Juan de Dios, dashboard" className="admin-brand" href="/dashboard" onClick={onNavigate}>
          <span className="admin-brand-mark" aria-hidden="true"><Droplet size={21} fill="currentColor" /></span>
          <span className="admin-brand-copy"><strong>ASADA</strong><small>San Juan de Dios</small></span>
        </Link>
        <button aria-label="Cerrar menú de gestión" className="admin-drawer-close" onClick={onClose} type="button">
          <X aria-hidden="true" size={19} />
        </button>
      </div>
      <div className="admin-sidebar-label">GESTIÓN</div>
      <nav aria-label="Navegación administrativa" className="admin-navigation">
        {managementGroups.map((group) => {
          const destinations = managementNavigation.filter((destination) => destination.group === group);
          if (destinations.length === 0) return null;

          return (
            <section aria-label={group} className="admin-navigation-group" key={group}>
              {group !== "Inicio" && <h2 className="admin-navigation-group-title">{group}</h2>}
              {destinations.map(({ id, title, path, icon: Icon, iconLabel, comingSoon }) => {
                const active = pathname === path;
                return (
                  <Link
                    key={id}
                    aria-current={active ? "page" : undefined}
                    aria-label={`${title}. Icono: ${iconLabel}`}
                    className={`admin-navigation-link${active ? " is-active" : ""}`}
                    href={path}
                    onClick={onNavigate}
                    title={collapsed ? `${title} — ${iconLabel}` : undefined}
                  >
                    <Icon aria-hidden="true" className="admin-navigation-icon" size={18} strokeWidth={1.8} />
                    <span>{title}</span>
                    {comingSoon && (
                      <small className="admin-navigation-coming-soon">Próximamente</small>
                    )}
                  </Link>
                );
              })}
            </section>
          );
        })}
      </nav>
      <div className="admin-sidebar-footer">Servicio comunal de agua potable</div>
    </aside>
  );
}
