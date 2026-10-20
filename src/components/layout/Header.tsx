import { Menu, PanelLeftClose, PanelLeftOpen, ShieldCheck } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
  onSidebarToggle: () => void;
  sidebarHidden: boolean;
};

export function Header({ onMenuClick, onSidebarToggle, sidebarHidden }: HeaderProps) {
  return (
    <header className="admin-header">
      <button aria-controls="management-sidebar" aria-label="Abrir navegación" className="admin-menu-button" onClick={onMenuClick} type="button">
        <Menu size={21} />
      </button>
      <button
        aria-controls="management-sidebar"
        aria-label={sidebarHidden ? "Mostrar menú de gestión" : "Ocultar menú de gestión"}
        className="admin-sidebar-toggle"
        onClick={onSidebarToggle}
        title={sidebarHidden ? "Mostrar menú de gestión" : "Ocultar menú de gestión"}
        type="button"
      >
        {sidebarHidden ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
      </button>
      <div className="admin-header-title">
        <span>ASADA San Juan de Dios</span>
        <strong>Área administrativa</strong>
      </div>
      <div aria-label="Sesión administrativa" className="admin-session-badge">
        <ShieldCheck size={17} />
        <span>Administración</span>
      </div>
    </header>
  );
}
