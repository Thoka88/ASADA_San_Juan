import type { Metadata } from "next";
import { AdminShell } from "@/components/layout/AdminShell";

export const metadata: Metadata = {
  title: { default: "Administración | ASADA San Juan de Dios", template: "%s | ASADA San Juan de Dios" },
};

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AdminShell>{children}</AdminShell>;
}
