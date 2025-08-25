import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  BookOpen, 
  BarChart3, 
  Calendar, 
  Shield,
  Camera,
  Lightbulb,
  Target
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Peer-to-Peer Observation",
      description: "Structured observation protocols enable teachers to learn from each other through guided feedback sessions.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Constructive Feedback System",
      description: "Evidence-based feedback tools that focus on growth and professional development rather than evaluation.",
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "Best Practices Gallery",
      description: "Curated repository of teaching strategies and successful practices shared across your institution.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track observation trends, engagement metrics, and professional development progress with detailed reporting.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated scheduling system that makes it easy to arrange observation sessions and follow-up meetings.",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Privacy & Compliance",
      description: "Secure platform with role-based access controls and compliance with educational data protection standards.",
      color: "text-accent"
    },
    {
      icon: Camera,
      title: "Video Integration",
      description: "Optional video capture for asynchronous observation and reflective analysis with privacy controls.",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Insights",
      description: "Intelligent suggestions for improvement areas and trending teaching practices across your network.",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Goal Setting & Tracking",
      description: "Set professional development goals and track progress through structured observation cycles.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block text-primary">Effective Teacher Development</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our comprehensive platform combines the best practices from educational research with modern technology 
            to create a seamless experience for peer observation and professional growth.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={dashboardPreview}
              alt="OFS Dashboard Preview"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-current/10 flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your institution's approach to teacher development?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Badge variant="outline" className="text-primary border-primary">
              ✨ No setup fees
            </Badge>
            <Badge variant="outline" className="text-primary border-primary">
              📚 Free training included
            </Badge>
            <Badge variant="outline" className="text-primary border-primary">
              🔒 GDPR compliant
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;