import { type User, type InsertUser, type PortfolioProject, type InsertPortfolioProject, type BlogPost, type InsertBlogPost, type YoutubeVideo, type InsertYoutubeVideo } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProjects(): Promise<PortfolioProject[]>;
  getProjectById(id: string): Promise<PortfolioProject | undefined>;
  getProjectsByCategory(category: string): Promise<PortfolioProject[]>;
  createProject(project: InsertPortfolioProject): Promise<PortfolioProject>;
  
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  getAllVideos(): Promise<YoutubeVideo[]>;
  getVideoById(id: string): Promise<YoutubeVideo | undefined>;
  createVideo(video: InsertYoutubeVideo): Promise<YoutubeVideo>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private projects: Map<string, PortfolioProject>;
  private blogPosts: Map<string, BlogPost>;
  private videos: Map<string, YoutubeVideo>;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.blogPosts = new Map();
    this.videos = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProjects(): Promise<PortfolioProject[]> {
    return Array.from(this.projects.values());
  }

  async getProjectById(id: string): Promise<PortfolioProject | undefined> {
    return this.projects.get(id);
  }

  async getProjectsByCategory(category: string): Promise<PortfolioProject[]> {
    return Array.from(this.projects.values()).filter(
      (project) => project.category === category,
    );
  }

  async createProject(insertProject: InsertPortfolioProject): Promise<PortfolioProject> {
    const id = randomUUID();
    const project: PortfolioProject = { 
      ...insertProject, 
      id,
      githubUrl: insertProject.githubUrl ?? null,
      liveUrl: insertProject.liveUrl ?? null,
    };
    this.projects.set(id, project);
    return project;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter((post) => post.category === category)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { ...insertPost, id };
    this.blogPosts.set(id, post);
    return post;
  }

  async getAllVideos(): Promise<YoutubeVideo[]> {
    return Array.from(this.videos.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getVideoById(id: string): Promise<YoutubeVideo | undefined> {
    return this.videos.get(id);
  }

  async createVideo(insertVideo: InsertYoutubeVideo): Promise<YoutubeVideo> {
    const id = randomUUID();
    const video: YoutubeVideo = { 
      ...insertVideo, 
      id,
      description: insertVideo.description ?? null,
      viewCount: insertVideo.viewCount ?? null,
    };
    this.videos.set(id, video);
    return video;
  }
}

export const storage = new MemStorage();
