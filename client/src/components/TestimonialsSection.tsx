import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
    company: "Series A Startup",
    content: "Delivered our MVP in 6 weeks that helped us secure $3M Series A funding. The platform now serves 50K+ active users with 99.9% uptime. Best technical hire we've made.",
    metric: "$3M raised",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "VP Engineering, DataFlow Corp",
    company: "Fortune 500",
    content: "Architected a microservices solution that reduced our infrastructure costs by 40% while improving response time by 65%. Exceptional problem-solver who delivers beyond expectations.",
    metric: "40% cost reduction",
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Founder & CEO, HealthTrack",
    company: "Healthcare SaaS",
    content: "Built our entire platform from scratch, enabling us to onboard our first 1,000 paying customers in 4 months. Revenue is now at $500K ARR and growing 20% MoM.",
    metric: "$500K ARR",
  },
  {
    id: "4",
    name: "David Kim",
    role: "Product Director, ShopNow",
    company: "E-commerce Platform",
    content: "Implemented features that increased our conversion rate by 35% and average order value by 28%. The ROI was visible within weeks. Highly recommend for growth-focused projects.",
    metric: "35% conversion lift",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    role: "Head of Digital, FinanceFirst",
    company: "Financial Services",
    content: "Rebuilt our customer portal, improving user satisfaction scores from 6.2 to 9.1. Reduced support tickets by 45% and enabled our team to scale without adding headcount.",
    metric: "45% fewer tickets",
  },
  {
    id: "6",
    name: "James Martinez",
    role: "Co-founder, EduLearn",
    company: "EdTech Startup",
    content: "Took us from idea to paying customers in 8 weeks. The platform now handles 100K+ monthly active users seamlessly. Worth every penny and more.",
    metric: "100K+ MAU",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Leaders Who Value Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients say about the measurable impact we've created together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-base mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>

              <div className="pt-3 border-t">
                <span className="text-sm font-bold text-primary">
                  📊 {testimonial.metric}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Join 50+ successful projects and counting
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="font-bold text-lg">TechVentures</div>
            <div className="font-bold text-lg">DataFlow</div>
            <div className="font-bold text-lg">HealthTrack</div>
            <div className="font-bold text-lg">ShopNow</div>
            <div className="font-bold text-lg">FinanceFirst</div>
            <div className="font-bold text-lg">EduLearn</div>
          </div>
        </div>
      </div>
    </section>
  );
}
