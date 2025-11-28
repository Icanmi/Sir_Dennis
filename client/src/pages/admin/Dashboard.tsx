import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FolderKanban, FileText, Video, Mail, Bell } from "lucide-react";

interface Stats {
  projects: number;
  blogPosts: number;
  videos: number;
  contacts: number;
  unreadContacts: number;
}

export default function AdminDashboard() {
  const { data: stats, isLoading } = useQuery<Stats>({
    queryKey: ["/api/admin/stats"],
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Overview</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Projects",
      value: stats?.projects || 0,
      icon: FolderKanban,
      color: "text-blue-500",
    },
    {
      title: "Blog Posts",
      value: stats?.blogPosts || 0,
      icon: FileText,
      color: "text-green-500",
    },
    {
      title: "YouTube Videos",
      value: stats?.videos || 0,
      icon: Video,
      color: "text-red-500",
    },
    {
      title: "Contact Messages",
      value: stats?.contacts || 0,
      icon: Mail,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-bold">Overview</h2>
        {(stats?.unreadContacts ?? 0) > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-yellow-100 dark:bg-yellow-900/20 px-3 py-1.5 rounded-md">
            <Bell className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
            <span>{stats?.unreadContacts} unread message{(stats?.unreadContacts ?? 0) !== 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title} data-testid={`card-stat-${stat.title.toLowerCase().replace(' ', '-')}`}>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold" data-testid={`text-stat-value-${stat.title.toLowerCase().replace(' ', '-')}`}>
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Use the sidebar to navigate between different sections of the admin panel.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• <strong>Projects</strong> - Manage your portfolio projects</li>
              <li>• <strong>Blog Posts</strong> - Create and edit blog content</li>
              <li>• <strong>Videos</strong> - Manage YouTube video listings</li>
              <li>• <strong>Contacts</strong> - View and respond to messages</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Keep your portfolio fresh by regularly updating content:
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Add new projects as you complete them</li>
              <li>• Write blog posts to share your expertise</li>
              <li>• Keep your video list updated with latest content</li>
              <li>• Respond to contact inquiries promptly</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
