import { LayoutDashboard, User, ImageIcon, BookOpen, FileText, Calendar } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Your Profile", url: "/dashboard/profile", icon: User },
  { title: "Your Gallery", url: "/dashboard/gallery", icon: ImageIcon },
  { title: "Observations", url: "/dashboard/observations", icon: FileText },
  { title: "Self Assessment", url: "/dashboard/self-assessment", icon: BookOpen },
  { title: "Best Practices", url: "/dashboard/best-practices", icon: Calendar },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-white shadow-glow border-0 hover:shadow-glow" 
      : "hover:bg-accent/50 hover:text-accent-foreground text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-r border-border/50">
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-4">
            <img src="/src/assets/st-pauls-logo.png" alt="St. Paul's School" className="w-15 h-15 object-contain" />
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-foreground text-lg">St. Paul's</h2>
                <p className="text-xs text-muted-foreground font-medium">Teacher Portal</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-xl transition-all duration-200 hover:shadow-sm">
                    <NavLink to={item.url} className={getNavCls}>
                      <div className="flex items-center gap-3 py-1">
                        <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center">
                          <item.icon className="h-4 w-4" />
                        </div>
                        {!isCollapsed && <span className="font-medium">{item.title}</span>}
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}