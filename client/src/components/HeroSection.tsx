import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, TrendingUp, Users, DollarSign } from "lucide-react";
import heroImage from "@assets/stage_1766084502983.jpg";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    window.location.href = "/portfolio";
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <Badge className="mb-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30">
          ✓ Available for High-Impact Projects
        </Badge>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Dennis Willie
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-6 font-medium">
          Math Tutor | Data Analyst | Forex & Crypto Trader | Web3 Developer | Full-Stack Web Developer
        </p>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          I Build Apps That Generate Revenue & Drive Growth
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Full-stack & Web3 developer who's delivered <span className="font-bold text-white">$2M+ in measurable value</span> through scalable applications and blockchain solutions. Hackathon winner and expert in building startups that reach Series A and scale to millions of users.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
            <div className="text-sm text-white/80">Projects Delivered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">10M+</div>
            <div className="text-sm text-white/80">Users Served</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">$2M+</div>
            <div className="text-sm text-white/80">Value Created</div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary border-primary-border text-lg px-8"
            data-testid="button-get-in-touch"
            onClick={scrollToContact}
          >
            Start Your Project →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 text-lg px-8"
            data-testid="button-view-work"
            onClick={scrollToPortfolio}
          >
            See Case Studies
          </Button>
        </div>
        
        <p className="text-sm text-white/70 mt-6">
          🚀 Trusted by startups, scale-ups, and Fortune 500 companies
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
}
