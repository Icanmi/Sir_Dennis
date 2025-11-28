import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AdminAuthProvider } from "@/lib/adminAuth";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Resume from "@/pages/Resume";
import Blog from "@/pages/Blog";
import YouTube from "@/pages/YouTube";
import NotFound from "@/pages/not-found";
import AdminLogin from "@/pages/admin/Login";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminProjects from "@/pages/admin/Projects";
import AdminBlogPosts from "@/pages/admin/BlogPosts";
import AdminVideos from "@/pages/admin/Videos";
import AdminContacts from "@/pages/admin/Contacts";

function PublicRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
      <Route path="/blog" component={Blog} />
      <Route path="/youtube" component={YouTube} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AdminRouter() {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/projects" component={AdminProjects} />
        <Route path="/admin/blog" component={AdminBlogPosts} />
        <Route path="/admin/videos" component={AdminVideos} />
        <Route path="/admin/contacts" component={AdminContacts} />
      </Switch>
    </AdminLayout>
  );
}

function AppContent() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");
  const isAdminLoginRoute = location === "/admin/login";

  if (isAdminLoginRoute) {
    return <AdminLogin />;
  }

  if (isAdminRoute) {
    return <AdminRouter />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <PublicRouter />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <AdminAuthProvider>
            <AppContent />
            <Toaster />
          </AdminAuthProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
