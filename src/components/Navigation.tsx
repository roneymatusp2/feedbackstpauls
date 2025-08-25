import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import stPaulsLogo from "@/assets/st-pauls-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img 
                src={stPaulsLogo} 
                alt="St. Paul's School Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="text-xl font-bold text-foreground">St. Paul's Feedback</span>
                <div className="text-xs text-muted-foreground">Teacher Development Platform</div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Platform Features
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">
              Success Stories
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About Our School
            </a>
            <Button variant="hero" size="sm">
              Access Platform
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <a
                href="#features"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Platform Features
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About Our School
              </a>
              <div className="px-3 pt-2">
                <Button variant="hero" size="sm" className="w-full">
                  Access Platform
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;