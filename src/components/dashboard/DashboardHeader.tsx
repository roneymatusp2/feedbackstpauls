import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell, Settings, LogOut, User } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="h-20 border-b bg-gradient-to-r from-background via-background/95 to-background backdrop-blur-sm flex items-center justify-between px-8 shadow-sm">
      <div className="flex items-center gap-6">
        <SidebarTrigger className="hover:bg-accent/50 rounded-lg p-2 transition-all" />
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">St. Paul's School</span>
            <span className="mx-2">•</span>
            <span>Teacher Development Platform</span>
          </div>
          <div className="hidden md:block text-xs bg-gradient-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
            Date Range: 01/08/25 - 25/08/25
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative hover:bg-accent/50 rounded-lg">
          <Bell className="h-5 w-5" />
          <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </div>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 px-3 py-2 h-auto hover:bg-accent/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-white text-sm font-bold">RN</span>
              </div>
              <div className="hidden md:block text-left">
                <div className="text-sm font-medium text-foreground">Roney Nascimento</div>
                <div className="text-xs text-muted-foreground">Mathematics Teacher</div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-sm border border-border/50 shadow-elegant">
            <DropdownMenuLabel className="font-semibold">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer hover:bg-accent/50">
              <User className="mr-2 h-4 w-4" />
              Profile Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-accent/50">
              <Settings className="mr-2 h-4 w-4" />
              Preferences
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer hover:bg-destructive/10 text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}