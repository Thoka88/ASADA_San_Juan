"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { getManagementDestination } from "@/lib/management-navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const current = getManagementDestination(pathname);
  const dashboard = getManagementDestination("/dashboard");
  if (!current || !dashboard) return null;

  return (
    <nav aria-label="Ruta de navegación" className="admin-breadcrumbs">
      {current.id !== dashboard.id && <>
        <Link href={dashboard.path}>{dashboard.title}</Link>
        <ChevronRight aria-hidden="true" size={14} />
      </>}
      <span aria-current="page">{current.title}</span>
    </nav>
  );
}
