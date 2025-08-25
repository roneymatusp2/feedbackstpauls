import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Image, Upload, Download, Eye } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Mathematics Workshop - August 2025",
    type: "Workshop Photo",
    date: "20 Aug 2025",
    description: "Professional development session on innovative teaching methods"
  },
  {
    id: 2,
    title: "Student Achievement Certificates",
    type: "Document",
    date: "15 Aug 2025",
    description: "Recognition certificates for outstanding student performance"
  },
  {
    id: 3,
    title: "Classroom Setup - New Term",
    type: "Classroom Photo",
    date: "10 Aug 2025",
    description: "Updated classroom environment for the new academic year"
  },
  {
    id: 4,
    title: "Teaching Resources Collection",
    type: "Resource Pack",
    date: "5 Aug 2025",
    description: "Compiled teaching materials and visual aids"
  }
];

export default function Gallery() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-foreground">Your Gallery</h1>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Item
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Image className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">24</div>
                    <div className="text-muted-foreground">Total Items</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Upload className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">4</div>
                    <div className="text-muted-foreground">Recent Uploads</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Eye className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">156</div>
                    <div className="text-muted-foreground">Total Views</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Gallery Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {galleryItems.map((item) => (
                      <div key={item.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          </div>
                          <Badge variant="outline">{item.type}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}