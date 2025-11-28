import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aboutImage from "@assets/Data cleaning_1764294835751.png";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Solidity",
  "Web3.js",
  "Ethers.js",
  "Smart Contracts",
  "Blockchain",
  "PostgreSQL",
  "Tailwind CSS",
  "Next.js",
  "Python",
  "Docker",
  "AWS",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do for Your Business</h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground">
              <p>
                I don't just write code - <span className="font-semibold text-foreground">I solve business problems that directly impact your bottom line</span>. 
                Over 5 years, I've helped companies increase revenue, reduce costs, and scale to millions of users through strategic technical solutions, including cutting-edge blockchain and Web3 applications.
              </p>
              <p>
                <span className="font-semibold text-foreground">My track record speaks for itself:</span> I've delivered 50+ projects that generated $2M+ in measurable value, 
                helped 3 startups secure Series A funding, and scaled platforms from 0 to 10M+ users while maintaining 99.9% uptime.
              </p>
              <p>
                Whether you need to build an MVP that attracts investors, scale your infrastructure to handle explosive growth, 
                or optimize your application for better conversion rates - <span className="font-semibold text-foreground">I deliver results that matter to your business</span>.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">What You Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6 hover-elevate border-l-4 border-l-primary">
                  <div className="text-primary text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold mb-1">Fast Time-to-Market</h4>
                  <p className="text-sm text-muted-foreground">MVPs in 4-8 weeks, features in days not months</p>
                </Card>
                <Card className="p-6 hover-elevate border-l-4 border-l-primary">
                  <div className="text-primary text-2xl mb-2">📈</div>
                  <h4 className="font-semibold mb-1">Scalable Architecture</h4>
                  <p className="text-sm text-muted-foreground">Built to handle growth from day one</p>
                </Card>
                <Card className="p-6 hover-elevate border-l-4 border-l-primary">
                  <div className="text-primary text-2xl mb-2">💰</div>
                  <h4 className="font-semibold mb-1">Cost Optimization</h4>
                  <p className="text-sm text-muted-foreground">Average 40% reduction in infrastructure costs</p>
                </Card>
                <Card className="p-6 hover-elevate border-l-4 border-l-primary">
                  <div className="text-primary text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-1">Business-First Approach</h4>
                  <p className="text-sm text-muted-foreground">Every technical decision drives ROI</p>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <img
              src={aboutImage}
              alt="Professional developer"
              className="rounded-2xl w-full shadow-lg mb-8"
            />
            
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Problems I Solve</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-sm"><strong>Need investor-ready MVP?</strong> Launch in 4-8 weeks with production-grade code</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-sm"><strong>Slow application?</strong> Optimize for 60%+ performance improvements</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-sm"><strong>Can't scale?</strong> Re-architect for millions of users</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-sm"><strong>High cloud costs?</strong> Reduce infrastructure spend by 40%</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-sm"><strong>Low conversion rates?</strong> Build features that increase revenue</span>
                </li>
              </ul>
            </Card>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Technology Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill.toLowerCase()}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
