import { Card, CardContent } from "@/components/ui/card";
import { Plus, Eye, Users } from "lucide-react";

export function DashboardStats() {
  const stats = [
    {
      title: "Create a new observation",
      icon: Plus,
      color: "bg-orange-500",
      action: true
    },
    {
      title: "Observations made about you",
      count: "1 new",
      icon: Eye,
      color: "bg-green-500"
    },
    {
      title: "Observations created by you",
      count: "10 unpublished",
      icon: Users,
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className={`overflow-hidden ${stat.action ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}>
          <CardContent className="p-0">
            <div className={`h-20 ${stat.color} flex items-center justify-center`}>
              <stat.icon className="h-8 w-8 text-white" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground">{stat.title}</h3>
              {stat.count && (
                <p className="text-sm text-muted-foreground mt-1">{stat.count}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}