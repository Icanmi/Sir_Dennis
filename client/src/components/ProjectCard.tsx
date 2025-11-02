import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { PortfolioProject } from "@shared/schema";

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-transform hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-project-title-${project.id}`}>
          {project.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
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
              Live Demo
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
