import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/resume", label: "Resume" },
  { path: "/blog", label: "Blog" },
  { path: "/youtube", label: "YouTube" },
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold hover-elevate active-elevate-2 px-2 py-1 rounded-md" data-testid="link-logo">
            <span className="font-mono text-primary">&lt;</span>
            DevPortfolio
            <span className="font-mono text-primary">/&gt;</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={location === link.path ? "secondary" : "ghost"}
                data-testid={`link-${link.label.toLowerCase()}`}
                asChild
              >
                <Link href={link.path}>{link.label}</Link>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={location === link.path ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
                asChild
              >
                <Link href={link.path}>{link.label}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
