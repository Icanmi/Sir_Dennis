import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Play } from "lucide-react";
import type { YoutubeVideo } from "@shared/schema";
import { useState } from "react";

interface VideoCardProps {
  video: YoutubeVideo;
}

export function VideoCard({ video }: VideoCardProps) {
  const [showPlayer, setShowPlayer] = useState(false);

  const date = new Date(video.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="overflow-hidden hover-elevate transition-transform hover:scale-[1.02]">
      {!showPlayer ? (
        <button
          className="relative w-full aspect-video overflow-hidden bg-muted group"
          onClick={() => setShowPlayer(true)}
          data-testid={`button-play-video-${video.id}`}
        >
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary-foreground fill-current" />
            </div>
          </div>
        </button>
      ) : (
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <CardHeader>
        <h3 className="text-lg font-semibold line-clamp-2" data-testid={`text-video-title-${video.id}`}>
          {video.title}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {video.viewCount && <span>{video.viewCount} views</span>}
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
