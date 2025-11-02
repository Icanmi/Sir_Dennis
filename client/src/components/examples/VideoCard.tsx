import { VideoCard } from "../VideoCard";

export default function VideoCardExample() {
  const mockVideo = {
    id: "1",
    title: "Building a Full-Stack App with React and Node.js",
    videoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Complete tutorial on building a full-stack application",
    viewCount: "10.5K",
    publishedAt: new Date("2024-01-10"),
  };

  return <VideoCard video={mockVideo} />;
}
