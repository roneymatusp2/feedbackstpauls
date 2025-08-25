import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Target, Users } from "lucide-react";

const bestPractices = [
  {
    id: 1,
    title: "Effective Differentiation Strategies",
    category: "Teaching Methods",
    description: "Proven techniques for adapting lessons to meet diverse learning needs in mathematics",
    author: "Dr. Louise Simpson",
    date: "18 Aug 2025",
    rating: 5
  },
  {
    id: 2,
    title: "Using Technology in Mathematics Teaching",
    category: "Digital Tools",
    description: "Best practices for integrating educational technology into mathematics lessons",
    author: "Sam Bishop",
    date: "15 Aug 2025",
    rating: 4
  },
  {
    id: 3,
    title: "Peer Assessment Techniques",
    category: "Assessment",
    description: "Effective strategies for implementing peer assessment in the classroom",
    author: "Martina Oparaocha",
    date: "12 Aug 2025",
    rating: 5
  },
  {
    id: 4,
    title: "Building Mathematical Resilience",
    category: "Student Support",
    description: "Helping students develop confidence and perseverance in mathematics",
    author: "Mr. James Wright",
    date: "10 Aug 2025",
    rating: 4
  }
];

export default function BestPractices() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-foreground">Best Practices</h1>
                <Button>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Share Practice
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">42</div>
                    <div className="text-muted-foreground">Total Practices</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">18</div>
                    <div className="text-muted-foreground">Highly Rated</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <div className="text-muted-foreground">Implementation Guides</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">28</div>
                    <div className="text-muted-foreground">Contributors</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bestPractices.map((practice) => (
                      <div key={practice.id} className="border border-border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-foreground">{practice.title}</h3>
                              <Badge variant="secondary">{practice.category}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{practice.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>By {practice.author}</span>
                              <span>{practice.date}</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < practice.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline">
                            Read More
                          </Button>
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