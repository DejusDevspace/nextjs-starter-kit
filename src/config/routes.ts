import type { LucideIcon } from "lucide-react";
import { Home, LayoutDashboard, Settings } from "lucide-react";

export const routes = {
  home: "/",
  dashboard: "/dashboard",
  settings: "/dashboard/settings",
  login: "/login",
} as const;

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  protected?: boolean;
}

export const mainNav: NavItem[] = [
  { title: "Home", href: routes.home, icon: Home },
  { title: "Dashboard", href: routes.dashboard, icon: LayoutDashboard },
];

export const dashboardNav: NavItem[] = [
  {
    title: "Overview",
    href: routes.dashboard,
    icon: LayoutDashboard,
    protected: true,
  },
  { title: "Settings", href: routes.settings, icon: Settings, protected: true },
];
