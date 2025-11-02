import { BlogCard } from "../BlogCard";
import blogImage from "@assets/generated_images/Tech_blog_featured_image_311acda1.png";

export default function BlogCardExample() {
  const mockPost = {
    id: "1",
    title: "Building Scalable Applications with React and TypeScript",
    excerpt: "Learn best practices for architecting large-scale applications using React and TypeScript, including state management, testing, and deployment strategies.",
    content: "Full content here...",
    imageUrl: blogImage,
    category: "Development",
    readTime: "5 min read",
    publishedAt: new Date("2024-01-15"),
  };

  return <BlogCard post={mockPost} />;
}
