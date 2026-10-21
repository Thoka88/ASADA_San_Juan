"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const TABLET_QUERY = "(min-width: 801px) and (max-width: 1080px)";

export function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const wasNavigationOpen = useRef(false);

  useEffect(() => {
    const tablet = window.matchMedia(TABLET_QUERY);
    const updateForViewport = () => setSidebarCollapsed(tablet.matches);
    updateForViewport();
    tablet.addEventListener("change", updateForViewport);
    return () => tablet.removeEventListener("change", updateForViewport);
  }, []);

  useEffect(() => {
    if (!navigationOpen) {
      if (wasNavigationOpen.current) {
        document.getElementById("admin-menu-trigger")?.focus();
        wasNavigationOpen.current = false;
      }
      return;
    }

    wasNavigationOpen.current = true;
    const sidebar = document.getElementById("management-sidebar");
    sidebar?.querySelector<HTMLElement>(".admin-drawer-close")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setNavigationOpen(false);
        return;
      }
      if (event.key !== "Tab" || !sidebar) return;

      const focusable = Array.from(sidebar.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((element) => element.getClientRects().length > 0);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !sidebar.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !sidebar.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [navigationOpen]);

  return (
    <div className={`admin-shell${sidebarCollapsed ? " is-sidebar-collapsed" : ""}`}>
      <Sidebar
        collapsed={sidebarCollapsed}
        onClose={() => setNavigationOpen(false)}
        onNavigate={() => setNavigationOpen(false)}
        open={navigationOpen}
      />
      {navigationOpen && (
        <button
          aria-label="Cerrar menú de gestión"
          className="admin-sidebar-backdrop"
          onClick={() => setNavigationOpen(false)}
          tabIndex={-1}
          type="button"
        />
      )}
      <div className="admin-workspace">
        <Header
          navigationOpen={navigationOpen}
          onMenuClick={() => setNavigationOpen((open) => !open)}
          onSidebarToggle={() => setSidebarCollapsed((collapsed) => !collapsed)}
          sidebarCollapsed={sidebarCollapsed}
        />
        <main className="admin-main" id="main-content">
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  );
}
