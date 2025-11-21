import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioProject } from "@shared/schema";

export function FeaturedProjects() {
  const { data: projects = [], isLoading } = useQuery<PortfolioProject[]>({
    queryKey: ["/api/projects"],
  });

  const featuredProjects = projects.slice(0, 3);

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects. Real results. Real impact on business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video bg-muted rounded-lg mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects. Real results. Real impact on business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-elevate transition-all hover:scale-[1.02] flex flex-col">
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary/90 backdrop-blur-sm text-white">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <Badge variant="secondary" className="w-fit mb-3">
                  {project.category}
                </Badge>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>
                
                {(project as any).results && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Impact:</p>
                        <p className="text-xs text-muted-foreground">{(project as any).results}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild data-testid="button-view-all-case-studies">
            <a href="/portfolio">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
