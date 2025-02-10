import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SaaS Pro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link to="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link to="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}