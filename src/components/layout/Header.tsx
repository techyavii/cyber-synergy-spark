import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tracks", href: "/tracks" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Program", href: "/program" },
    { name: "Speakers", href: "/speakers" },
    { name: "Committee", href: "/committee" },
    { name: "Registration", href: "/registration" },
    { name: "Venue", href: "/venue" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card shadow-soft border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo and Conference Title */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SNGC 2026</h1>
                <p className="text-sm text-muted-foreground">Cardiff, UK</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link to="/registration">Register</Link>
            </Button>
            <Button asChild className="gradient-hero">
              <Link to="/call-for-papers">Submit Paper</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t pt-4 pb-6">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/registration">Register</Link>
                </Button>
                <Button className="w-full gradient-hero" asChild>
                  <Link to="/call-for-papers">Submit Paper</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;