import { VideoCard } from "@/components/VideoCard";
import { useQuery } from "@tanstack/react-query";
import type { YoutubeVideo } from "@shared/schema";

export default function YouTube() {
  const { data: videos = [], isLoading, isError, error } = useQuery<YoutubeVideo[]>({
    queryKey: ["/api/videos"],
  });

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Resources & Tutorials</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In-depth tutorials on building scalable applications, technical leadership, and proven strategies that deliver results.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            <p className="mt-4 text-muted-foreground">Loading videos...</p>
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <p className="text-destructive font-semibold mb-2">Failed to load videos</p>
            <p className="text-muted-foreground text-sm">
              {error instanceof Error ? error.message : "An unexpected error occurred"}
            </p>
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No videos found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
