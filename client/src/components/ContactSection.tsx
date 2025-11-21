import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Clock, Shield, Zap } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your business goals. Free 30-minute consultation included.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">24-Hour Response</h3>
            <p className="text-sm text-muted-foreground">I respond to all inquiries within one business day</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">NDA Available</h3>
            <p className="text-sm text-muted-foreground">Your ideas are safe. Signed NDAs upon request</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Fast Start</h3>
            <p className="text-sm text-muted-foreground">Begin development within 1-2 weeks of agreement</p>
          </Card>
        </div>

        <ContactForm />

        <div className="text-center mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-3">Or reach out directly:</p>
          <p className="text-base">
            <a href="mailto:your.email@example.com" className="text-primary hover:underline font-medium">
              your.email@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
