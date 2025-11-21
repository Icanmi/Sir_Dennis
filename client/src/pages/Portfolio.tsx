import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioProject } from "@shared/schema";

const categories = ["All", "Web Application", "Mobile App"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: projects = [], isLoading, isError, error } = useQuery<PortfolioProject[]>({
    queryKey: ["/api/projects"],
  });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies: Real Results for Real Businesses</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how I've helped startups secure funding, enterprises reduce costs, and businesses scale to millions of users. 
            Every project includes measurable outcomes and ROI.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(" ", "-")}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            <p className="mt-4 text-muted-foreground">Loading projects...</p>
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <p className="text-destructive font-semibold mb-2">Failed to load projects</p>
            <p className="text-muted-foreground text-sm">
              {error instanceof Error ? error.message : "An unexpected error occurred"}
            </p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
      
      <CTASection />
    </div>
  );
}
