import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-foreground mb-8">Your Profile</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary-foreground text-2xl font-bold">RN</span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Roney Nascimento</h2>
                      <p className="text-muted-foreground mb-4">Mathematics Teacher</p>
                      <Badge variant="secondary">Senior School</Badge>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Teaching Subjects</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>IB Mathematics</span>
                          <Badge>Key Stage 5</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>IGCSE Mathematics</span>
                          <Badge>Key Stage 4</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>KS3 Mathematics</span>
                          <Badge>Key Stage 3</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>General Mathematics</span>
                          <Badge>All Levels</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Professional Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-foreground">Last Login:</span>
                          <p className="text-muted-foreground">20 Aug 2025</p>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Department:</span>
                          <p className="text-muted-foreground">Mathematics</p>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Employee ID:</span>
                          <p className="text-muted-foreground">SP2025-MAT-001</p>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Years at School:</span>
                          <p className="text-muted-foreground">5 years</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Accessibility Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Toggle dyslexic friendly font</span>
                        <Badge variant="outline">Available</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Please contact your school system administrator if you wish to make any changes to your profile.
                      </p>
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
}