"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplet } from "lucide-react";
import { managementGroups, managementNavigation } from "@/lib/management-navigation";

type SidebarProps = { open: boolean; hidden: boolean; onNavigate: () => void };

export function Sidebar({ open, hidden, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`admin-sidebar${hidden ? " is-hidden" : ""}${open ? " is-open" : ""}`} id="management-sidebar">
      <Link className="admin-brand" href="/dashboard" onClick={onNavigate}>
        <span className="admin-brand-mark" aria-hidden="true"><Droplet size={21} fill="currentColor" /></span>
        <span><strong>ASADA</strong><small>San Juan de Dios</small></span>
      </Link>
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
