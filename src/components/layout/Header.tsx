import { Menu, PanelLeftClose, PanelLeftOpen, ShieldCheck } from "lucide-react";

type HeaderProps = {
  navigationOpen: boolean;
  onMenuClick: () => void;
  onSidebarToggle: () => void;
  sidebarCollapsed: boolean;
};

export function Header({ navigationOpen, onMenuClick, onSidebarToggle, sidebarCollapsed }: HeaderProps) {
  const sidebarAction = sidebarCollapsed ? "Expandir menú de gestión" : "Contraer menú de gestión";

  return (
    <header className="admin-header">
      <button
        aria-controls="management-sidebar"
        aria-expanded={navigationOpen}
        aria-label={navigationOpen ? "Cerrar menú de gestión" : "Abrir menú de gestión"}
        className="admin-menu-button"
        id="admin-menu-trigger"
        onClick={onMenuClick}
        type="button"
      >
        <Menu aria-hidden="true" size={21} />
      </button>
      <button
        aria-controls="management-sidebar"
        aria-expanded={!sidebarCollapsed}
        aria-label={sidebarAction}
        className="admin-sidebar-toggle"
        onClick={onSidebarToggle}
        title={sidebarAction}
        type="button"
      >
        {sidebarCollapsed
          ? <PanelLeftOpen aria-hidden="true" size={19} />
          : <PanelLeftClose aria-hidden="true" size={19} />}
      </button>
      <div className="admin-header-title">
        <span>ASADA San Juan de Dios</span>
        <strong>Área administrativa</strong>
      </div>
      <div aria-label="Sesión administrativa" className="admin-session-badge">
        <ShieldCheck aria-hidden="true" size={17} />
        <span>Administración</span>
      </div>
    </header>
  );
}
