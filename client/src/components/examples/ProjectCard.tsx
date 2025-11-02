import { ProjectCard } from "../ProjectCard";
import webAppImage from "@assets/generated_images/Web_app_project_screenshot_bd2f72f3.png";

export default function ProjectCardExample() {
  const mockProject = {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.",
    imageUrl: webAppImage,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/example/project",
    liveUrl: "https://example.com",
    category: "Web Application",
  };

  return <ProjectCard project={mockProject} />;
}
