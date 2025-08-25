import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { CreateObservationCard } from "@/components/dashboard/CreateObservationCard";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <CreateObservationCard />
                  
                  {/* Card: Observations made about you */}
                  <Card className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-24 bg-sps-green relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <div className="relative z-10 p-6 text-center">
                          <Eye className="h-10 w-10 text-white mx-auto drop-shadow-sm" />
                        </div>
                      </div>
                      <div className="p-6 bg-gradient-to-b from-background to-background/80">
                        <h3 className="font-semibold text-foreground text-lg mb-2">Observations made about you</h3>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-primary rounded-full"></div>
                          <p className="text-sm text-muted-foreground font-medium">1 new</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card: Observations created by you */}
                  <Card className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-24 bg-sps-indigo relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <div className="relative z-10 p-6 text-center">
                          <Users className="h-10 w-10 text-white mx-auto drop-shadow-sm" />
                        </div>
                      </div>
                      <div className="p-6 bg-gradient-to-b from-background to-background/80">
                        <h3 className="font-semibold text-foreground text-lg mb-2">Observations created by you</h3>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-primary rounded-full"></div>
                          <p className="text-sm text-muted-foreground font-medium">10 unpublished</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;