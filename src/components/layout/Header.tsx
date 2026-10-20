import { Menu, ShieldCheck } from "lucide-react";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="admin-header">
      <button aria-label="Abrir navegación" className="admin-menu-button" onClick={onMenuClick} type="button">
        <Menu size={21} />
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
