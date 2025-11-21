import { storage } from "./storage";
import type { InsertPortfolioProject, InsertBlogPost, InsertYoutubeVideo } from "@shared/schema";

const portfolioProjects: any[] = [
  {
    title: "FinTech Payment Platform - Series A Success",
    description: "Built investor-ready MVP that secured $3M Series A funding. Scalable payment processing platform handling $2M+ in monthly transactions with 99.9% uptime. Features real-time fraud detection, multi-currency support, and instant settlements.",
    results: "Helped secure $3M Series A • Processing $2M+/month • 50K+ active users • 99.9% uptime • 35% faster than competitors",
    imageUrl: "/assets/generated_images/Web_app_project_screenshot_bd2f72f3.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS", "TypeScript"],
    githubUrl: "https://github.com/example/fintech",
    liveUrl: "https://example-fintech.com",
    category: "Web Application",
  },
  {
    title: "HealthTech Mobile App - 100K Users in 4 Months",
    description: "Patient management and telemedicine platform that grew from 0 to 100K users in 4 months. Reduced patient wait times by 60% and increased provider efficiency by 45%. HIPAA-compliant architecture with end-to-end encryption.",
    results: "100K users in 4 months • 60% shorter wait times • 45% provider efficiency gain • $500K ARR • 4.8★ app rating",
    imageUrl: "/assets/generated_images/Mobile_app_project_screenshot_88d5377a.png",
    technologies: ["React Native", "TypeScript", "Firebase", "WebRTC", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/example/healthtech",
    liveUrl: "https://example-healthtech.com",
    category: "Mobile App",
  },
  {
    title: "E-Commerce Platform - 40% Cost Reduction",
    description: "Re-architected infrastructure for enterprise e-commerce platform serving 5M+ users. Reduced cloud costs by 40% while improving page load speed by 65%. Implemented advanced caching and CDN strategies.",
    results: "40% infrastructure cost savings • 65% faster load times • 25% conversion rate increase • $150K annual savings",
    imageUrl: "/assets/generated_images/Web_app_project_screenshot_bd2f72f3.png",
    technologies: ["Next.js", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "GraphQL"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://example-ecommerce.com",
    category: "Web Application",
  },
  {
    title: "SaaS Analytics Dashboard - 10M Events/Day",
    description: "Real-time analytics platform processing 10M+ events daily. Custom reporting engine with sub-second query times on datasets exceeding 1TB. Powers business decisions for Fortune 500 clients.",
    results: "10M+ events/day processed • Sub-second queries on 1TB+ data • Serving Fortune 500 • 99.95% availability",
    imageUrl: "/assets/generated_images/Web_app_project_screenshot_bd2f72f3.png",
    technologies: ["React", "Python", "ClickHouse", "Kafka", "FastAPI", "Tailwind", "Chart.js"],
    githubUrl: "https://github.com/example/analytics",
    liveUrl: "https://example-analytics.com",
    category: "Web Application",
  },
  {
    title: "EdTech Learning Platform - Revenue 3X in 6 Months",
    description: "Built features that increased student engagement by 80% and revenue by 3x in 6 months. Interactive learning modules, AI-powered personalization, and gamification drove 92% course completion rate.",
    results: "3x revenue growth in 6 months • 80% engagement increase • 92% completion rate • 50K paying students",
    imageUrl: "/assets/generated_images/Mobile_app_project_screenshot_88d5377a.png",
    technologies: ["React Native", "Node.js", "PostgreSQL", "OpenAI", "Socket.io", "AWS"],
    githubUrl: "https://github.com/example/edtech",
    liveUrl: "https://example-edtech.com",
    category: "Mobile App",
  },
  {
    title: "Real Estate Platform - Automated 70% of Operations",
    description: "AI-powered property management platform that automated 70% of manual operations. Reduced operational costs by $200K annually while improving customer satisfaction from 6.5 to 9.2/10.",
    results: "70% operations automated • $200K annual savings • Customer satisfaction 6.5→9.2 • 45% fewer support tickets",
    imageUrl: "/assets/generated_images/Web_app_project_screenshot_bd2f72f3.png",
    technologies: ["Next.js", "Python", "PostgreSQL", "OpenAI", "AWS Lambda", "S3"],
    githubUrl: "https://github.com/example/realestate",
    liveUrl: "https://example-realestate.com",
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
