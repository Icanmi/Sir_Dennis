import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you build, scale, or optimize your application to drive real business value.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Free 30-min consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>No-obligation proposal</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Start within 1-2 weeks</span>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8" onClick={scrollToContact}>
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Limited availability - Currently accepting 2-3 new projects per quarter
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
