import { storage } from "./storage";
import type { InsertPortfolioProject, InsertBlogPost, InsertYoutubeVideo } from "@shared/schema";

const portfolioProjects: InsertPortfolioProject[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics dashboard.",
    imageUrl: "/assets/generated_images/Web_app_project_screenshot_bd2f72f3.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://example-ecommerce.com",
    category: "Web Application",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and project tracking features.",
    imageUrl: "/assets/generated_images/Mobile_app_project_screenshot_88d5377a.png",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    githubUrl: "https://github.com/example/tasks",
    liveUrl: "https://example-tasks.com",
    category: "Mobile App",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, custom reports, and data export capabilities.",
    imageUrl: "/assets/generated_images/Web_app_project_screenshot_bd2f72f3.png",
    technologies: ["Next.js", "Chart.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/example/analytics",
    liveUrl: "https://example-analytics.com",
    category: "Web Application",
  },
  {
    title: "Social Media Platform",
    description: "Modern social networking platform with posts, stories, messaging, and content discovery algorithms.",
    imageUrl: "/assets/generated_images/Mobile_app_project_screenshot_88d5377a.png",
    technologies: ["React", "GraphQL", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com/example/social",
    liveUrl: "https://example-social.com",
    category: "Web Application",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile fitness app with workout tracking, nutrition logging, and progress visualization features.",
    imageUrl: "/assets/generated_images/Mobile_app_project_screenshot_88d5377a.png",
    technologies: ["React Native", "Node.js", "MongoDB", "HealthKit"],
    githubUrl: "https://github.com/example/fitness",
    liveUrl: null,
    category: "Mobile App",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool for marketing copy, blog posts, and social media content.",
    imageUrl: "/assets/generated_images/Web_app_project_screenshot_bd2f72f3.png",
    technologies: ["React", "Python", "OpenAI", "FastAPI"],
    githubUrl: "https://github.com/example/ai-content",
    liveUrl: "https://example-ai.com",
    category: "Web Application",
  },
];

const blogPosts: InsertBlogPost[] = [
  {
    title: "Building Scalable Applications with React and TypeScript",
    excerpt: "Learn best practices for architecting large-scale applications using React and TypeScript, including state management, testing, and deployment strategies.",
    content: "Full content here...",
    imageUrl: "/assets/generated_images/Tech_blog_featured_image_311acda1.png",
    category: "Development",
    readTime: "8 min read",
    publishedAt: new Date("2024-01-15"),
  },
  {
    title: "The Path to Financial Independence for Developers",
    excerpt: "Discover how developers can leverage their skills to build multiple income streams and achieve financial freedom through freelancing, SaaS products, and investments.",
    content: "Full content here...",
    imageUrl: "/assets/generated_images/Developer_working_image_184b9666.png",
    category: "Wealth Creation",
    readTime: "10 min read",
    publishedAt: new Date("2024-01-10"),
  },
  {
    title: "Mastering Personal Growth Through Continuous Learning",
    excerpt: "Explore strategies for continuous skill development, building good habits, and maintaining work-life balance in the fast-paced tech industry.",
    content: "Full content here...",
    imageUrl: "/assets/generated_images/Tech_blog_featured_image_311acda1.png",
    category: "Growth",
    readTime: "6 min read",
    publishedAt: new Date("2024-01-05"),
  },
  {
    title: "Modern Backend Architecture Patterns",
    excerpt: "Deep dive into microservices, serverless, and event-driven architectures with practical examples and implementation strategies.",
    content: "Full content here...",
    imageUrl: "/assets/generated_images/Developer_working_image_184b9666.png",
    category: "Development",
    readTime: "12 min read",
    publishedAt: new Date("2023-12-28"),
  },
  {
    title: "Building Passive Income as a Developer",
    excerpt: "Step-by-step guide to creating and monetizing digital products, from SaaS apps to online courses and technical writing.",
    content: "Full content here...",
    imageUrl: "/assets/generated_images/Tech_blog_featured_image_311acda1.png",
    category: "Wealth Creation",
    readTime: "9 min read",
    publishedAt: new Date("2023-12-20"),
  },
  {
    title: "The Developer's Guide to Productivity",
    excerpt: "Time management techniques, tools, and workflows that help developers stay focused and achieve more in less time.",
    content: "Full content here...",
    imageUrl: "/assets/generated_images/Developer_working_image_184b9666.png",
    category: "Growth",
    readTime: "7 min read",
    publishedAt: new Date("2023-12-15"),
  },
];

const youtubeVideos: InsertYoutubeVideo[] = [
  {
    title: "Building a Full-Stack App with React and Node.js - Complete Tutorial",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Complete step-by-step tutorial on building a full-stack application",
    viewCount: "125K",
    publishedAt: new Date("2024-01-12"),
  },
  {
    title: "TypeScript Best Practices for Enterprise Applications",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Learn professional TypeScript patterns and practices",
    viewCount: "87K",
    publishedAt: new Date("2024-01-08"),
  },
  {
    title: "Passive Income Strategies for Developers in 2024",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "How to build multiple income streams as a developer",
    viewCount: "203K",
    publishedAt: new Date("2024-01-03"),
  },
  {
    title: "Mastering React Hooks - Advanced Patterns",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Deep dive into advanced React Hooks patterns and use cases",
    viewCount: "156K",
    publishedAt: new Date("2023-12-28"),
  },
  {
    title: "From Junior to Senior Developer - Career Growth Guide",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Roadmap and strategies for advancing your developer career",
    viewCount: "312K",
    publishedAt: new Date("2023-12-22"),
  },
  {
    title: "Building SaaS Products - From Idea to Launch",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Complete guide to building and launching your own SaaS product",
    viewCount: "189K",
    publishedAt: new Date("2023-12-18"),
  },
  {
    title: "Database Design Principles Every Developer Should Know",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Essential database design patterns and normalization techniques",
    viewCount: "98K",
    publishedAt: new Date("2023-12-14"),
  },
  {
    title: "The Psychology of Wealth Building for Tech Professionals",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Mindset and strategies for building long-term wealth",
    viewCount: "267K",
    publishedAt: new Date("2023-12-09"),
  },
  {
    title: "Microservices Architecture Explained with Real Examples",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Learn microservices architecture with practical implementation",
    viewCount: "143K",
    publishedAt: new Date("2023-12-05"),
  },
];

export async function seedData() {
  console.log("Seeding data...");
  
  for (const project of portfolioProjects) {
    await storage.createProject(project);
  }
  console.log(`Seeded ${portfolioProjects.length} portfolio projects`);
  
  for (const post of blogPosts) {
    await storage.createBlogPost(post);
  }
  console.log(`Seeded ${blogPosts.length} blog posts`);
  
  for (const video of youtubeVideos) {
    await storage.createVideo(video);
  }
  console.log(`Seeded ${youtubeVideos.length} YouTube videos`);
  
  console.log("Data seeding complete!");
}
