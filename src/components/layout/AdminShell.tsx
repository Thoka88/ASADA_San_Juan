"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

export function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <div className="admin-shell">
      <Sidebar open={navigationOpen} onNavigate={() => setNavigationOpen(false)} />
      {navigationOpen && (
        <button
          aria-label="Cerrar navegación"
          className="admin-sidebar-backdrop"
          onClick={() => setNavigationOpen(false)}
          type="button"
        />
      )}
      <div className="admin-workspace">
        <Header onMenuClick={() => setNavigationOpen((open) => !open)} />
        <main className="admin-main" id="main-content">{children}</main>
      </div>
    </div>
  );
}
