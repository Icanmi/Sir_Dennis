import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import type { PortfolioProject } from "@shared/schema";

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-transform hover:scale-[1.02] flex flex-col h-full group">
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-primary/90 backdrop-blur-sm text-white">
            Case Study
          </Badge>
        </div>
      </div>
      <CardHeader>
        <div className="mb-2">
          <Badge variant="secondary" data-testid={`badge-category-${project.id}`}>
            {project.category}
          </Badge>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
          {project.title}
        </h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
          {project.description}
        </p>
        
        {(project as any).results && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-foreground mb-1">Results:</p>
                <p className="text-sm text-muted-foreground">{(project as any).results}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 5} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" data-testid={`button-github-${project.id}`}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" data-testid={`button-live-${project.id}`}>
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
