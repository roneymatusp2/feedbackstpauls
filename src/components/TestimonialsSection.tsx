import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Martina Oparaocha",
      role: "Head of Senior School",
      school: "St. Paul's School, São Paulo",
      content: "Our internal feedback platform has transformed how we approach professional development. The peer-to-peer observation system creates genuine opportunities for collaborative growth among our faculty.",
      rating: 5,
      image: "/lovable-uploads/6604dda8-a72a-4cda-852c-83819ac3280c.png"
    },
    {
      name: "Dr. Louise Simpson",
      role: "Head of Primary School",
      school: "St. Paul's School, São Paulo",
      content: "The best practices gallery has become an invaluable resource for sharing innovative teaching strategies across departments. Our teachers are genuinely engaged in continuous improvement.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c78f7b12?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mr. James Wright",
      role: "Deputy Head Academic",
      school: "St. Paul's School, São Paulo",
      content: "The structured feedback system helps us support our teachers more effectively while maintaining our high academic standards. It's professional development that actually works.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const stats = [
    {
      metric: "97%",
      description: "Faculty Satisfaction Rate",
      subtitle: "with peer observation process"
    },
    {
      metric: "65%",
      description: "Increase in Cross-Department",
      subtitle: "collaboration initiatives"
    },
    {
      metric: "4.2x",
      description: "More Feedback Sessions",
      subtitle: "since platform implementation"
    },
    {
      metric: "92%",
      description: "Report Enhanced Teaching",
      subtitle: "within first academic year"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Faculty Success Stories
            <span className="block text-accent">at St. Paul's School</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hear from our colleagues about how our internal platform is enhancing professional 
            development and collaboration across departments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-accent/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    <p className="text-primary text-sm font-medium">{testimonial.school}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-elegant">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Impact Across Our School Community
            </h3>
            <p className="text-muted-foreground">
              Real impact metrics from our faculty development platform over the past 12 months
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <div className="text-foreground font-semibold mb-1">
                  {stat.description}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Faculty Development Community
            </h3>
            <p className="text-muted-foreground mb-6">
              Access our internal platform to connect with colleagues, share best practices, 
              and continue your professional growth journey at St. Paul's School.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Badge variant="outline" className="text-accent border-accent">
                👥 Faculty-focused development
              </Badge>
              <Badge variant="outline" className="text-accent border-accent">
                🎯 Personalized growth plans
              </Badge>
              <Badge variant="outline" className="text-accent border-accent">
                💬 Ongoing support from colleagues
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;