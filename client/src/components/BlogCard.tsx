import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@shared/schema";
import { Link } from "wouter";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="overflow-hidden hover-elevate transition-transform hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="mb-2">
          <Badge variant="secondary">{post.category}</Badge>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-blog-title-${post.id}`}>
          {post.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4" data-testid={`text-blog-excerpt-${post.id}`}>
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.id}`}>
          <Button data-testid={`button-read-blog-${post.id}`}>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
