"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [sidebarHidden, setSidebarHidden] = useState(false);

  return (
    <div className={`admin-shell${sidebarHidden ? " is-sidebar-hidden" : ""}`}>
      <Sidebar open={navigationOpen} hidden={sidebarHidden} onNavigate={() => setNavigationOpen(false)} />
      {navigationOpen && (
        <button
          aria-label="Cerrar navegación"
          className="admin-sidebar-backdrop"
          onClick={() => setNavigationOpen(false)}
          type="button"
        />
      )}
      <div className="admin-workspace">
        <Header
          onMenuClick={() => setNavigationOpen((open) => !open)}
          onSidebarToggle={() => setSidebarHidden((hidden) => !hidden)}
          sidebarHidden={sidebarHidden}
        />
        <main className="admin-main" id="main-content">
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  );
}
