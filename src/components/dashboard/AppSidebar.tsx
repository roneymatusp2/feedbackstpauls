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
} from "@/components/ui/sidebar";
import stPaulsLogo from "@/assets/st-pauls-logo.png";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Your Profile", url: "/dashboard/profile", icon: User },
  { title: "Your Gallery", url: "/dashboard/gallery", icon: ImageIcon },
  { title: "Best Practices", url: "/dashboard/best-practices", icon: BookOpen },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-white shadow-glow border-0 hover:shadow-glow" 
      : "hover:bg-accent/50 hover:text-accent-foreground text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className="w-64 min-w-64" variant="sidebar">{/* Fixed width always */}
      <SidebarContent className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-r border-border/50">
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-4">
            <img src={stPaulsLogo} alt="St. Paul's School" className="w-12 h-12 object-contain flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-foreground text-lg truncate">St. Paul's</h2>
              <p className="text-xs text-muted-foreground font-medium truncate">Teacher Portal</p>
            </div>
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
                  <SidebarMenuButton asChild className="w-full rounded-xl transition-all duration-200 hover:shadow-sm">
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => `${getNavCls({ isActive })} flex items-center gap-3 py-3 px-4 w-full text-left`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-sm">{item.title}</span>
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