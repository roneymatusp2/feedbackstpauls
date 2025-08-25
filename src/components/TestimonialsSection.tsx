import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Head of Professional Development",
      school: "St. Paul's School, São Paulo",
      content: "The OFS platform has revolutionised how we approach teacher observation. The peer-to-peer system creates a culture of collaborative growth rather than evaluation anxiety.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c78f7b12?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Thompson",
      role: "Deputy Head Teacher",
      school: "Wellington International School",
      content: "The best practices gallery has become our go-to resource for sharing innovative teaching strategies. Teachers are genuinely excited about professional development now.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Prof. Maria Rodriguez",
      role: "Academic Director",
      school: "British School of Barcelona",
      content: "The analytics and reporting features help us identify trends and support our teachers more effectively. It's data-driven professional development at its finest.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const stats = [
    {
      metric: "95%",
      description: "Teacher Satisfaction Rate",
      subtitle: "with peer observation process"
    },
    {
      metric: "40%",
      description: "Increase in Collaboration",
      subtitle: "between departments"
    },
    {
      metric: "3.2x",
      description: "More Feedback Sessions",
      subtitle: "compared to traditional methods"
    },
    {
      metric: "89%",
      description: "Report Improved Teaching",
      subtitle: "within first semester"
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
            Trusted by Leading
            <span className="block text-accent">Educational Institutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how schools worldwide are transforming their approach to teacher development 
            with our observation and feedback platform.
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
              Proven Results Across Our Network
            </h3>
            <p className="text-muted-foreground">
              Real impact metrics from schools using OFS over the past 12 months
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
              Ready to Join These Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a personalised demo to see how OFS can transform professional development at your institution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Badge variant="outline" className="text-accent border-accent">
                📊 Free impact assessment
              </Badge>
              <Badge variant="outline" className="text-accent border-accent">
                🎯 Customised implementation plan
              </Badge>
              <Badge variant="outline" className="text-accent border-accent">
                📞 Direct access to our team
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;