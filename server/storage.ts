import { 
  type User, 
  type InsertUser, 
  type PortfolioProject, 
  type InsertPortfolioProject,
  type UpdatePortfolioProject,
  type BlogPost, 
  type InsertBlogPost,
  type UpdateBlogPost,
  type YoutubeVideo, 
  type InsertYoutubeVideo,
  type UpdateYoutubeVideo,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProjects(): Promise<PortfolioProject[]>;
  getProjectById(id: string): Promise<PortfolioProject | undefined>;
  getProjectsByCategory(category: string): Promise<PortfolioProject[]>;
  createProject(project: InsertPortfolioProject): Promise<PortfolioProject>;
  updateProject(id: string, project: UpdatePortfolioProject): Promise<PortfolioProject | undefined>;
  deleteProject(id: string): Promise<boolean>;
  
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: UpdateBlogPost): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  getAllVideos(): Promise<YoutubeVideo[]>;
  getVideoById(id: string): Promise<YoutubeVideo | undefined>;
  createVideo(video: InsertYoutubeVideo): Promise<YoutubeVideo>;
  updateVideo(id: string, video: UpdateYoutubeVideo): Promise<YoutubeVideo | undefined>;
  deleteVideo(id: string): Promise<boolean>;

  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmissionById(id: string): Promise<ContactSubmission | undefined>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  markContactAsRead(id: string): Promise<ContactSubmission | undefined>;
  deleteContactSubmission(id: string): Promise<boolean>;

  getStats(): Promise<{ projects: number; blogPosts: number; videos: number; contacts: number; unreadContacts: number }>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private projects: Map<string, PortfolioProject>;
  private blogPosts: Map<string, BlogPost>;
  private videos: Map<string, YoutubeVideo>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.blogPosts = new Map();
    this.videos = new Map();
    this.contactSubmissions = new Map();
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

  async updateProject(id: string, updateData: UpdatePortfolioProject): Promise<PortfolioProject | undefined> {
    const existing = this.projects.get(id);
    if (!existing) return undefined;
    
    const updated: PortfolioProject = {
      ...existing,
      ...updateData,
      githubUrl: updateData.githubUrl !== undefined ? updateData.githubUrl ?? null : existing.githubUrl,
      liveUrl: updateData.liveUrl !== undefined ? updateData.liveUrl ?? null : existing.liveUrl,
    };
    this.projects.set(id, updated);
    return updated;
  }

  async deleteProject(id: string): Promise<boolean> {
    return this.projects.delete(id);
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

  async updateBlogPost(id: string, updateData: UpdateBlogPost): Promise<BlogPost | undefined> {
    const existing = this.blogPosts.get(id);
    if (!existing) return undefined;
    
    const updated: BlogPost = { ...existing, ...updateData };
    this.blogPosts.set(id, updated);
    return updated;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
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

  async updateVideo(id: string, updateData: UpdateYoutubeVideo): Promise<YoutubeVideo | undefined> {
    const existing = this.videos.get(id);
    if (!existing) return undefined;
    
    const updated: YoutubeVideo = {
      ...existing,
      ...updateData,
      description: updateData.description !== undefined ? updateData.description ?? null : existing.description,
      viewCount: updateData.viewCount !== undefined ? updateData.viewCount ?? null : existing.viewCount,
    };
    this.videos.set(id, updated);
    return updated;
  }

  async deleteVideo(id: string): Promise<boolean> {
    return this.videos.delete(id);
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContactSubmissionById(id: string): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      company: insertSubmission.company ?? null,
      budget: insertSubmission.budget ?? null,
      isRead: false,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async markContactAsRead(id: string): Promise<ContactSubmission | undefined> {
    const existing = this.contactSubmissions.get(id);
    if (!existing) return undefined;
    
    const updated: ContactSubmission = { ...existing, isRead: true };
    this.contactSubmissions.set(id, updated);
    return updated;
  }

  async deleteContactSubmission(id: string): Promise<boolean> {
    return this.contactSubmissions.delete(id);
  }

  async getStats(): Promise<{ projects: number; blogPosts: number; videos: number; contacts: number; unreadContacts: number }> {
    const contacts = Array.from(this.contactSubmissions.values());
    return {
      projects: this.projects.size,
      blogPosts: this.blogPosts.size,
      videos: this.videos.size,
      contacts: contacts.length,
      unreadContacts: contacts.filter(c => !c.isRead).length,
    };
  }
}

export const storage = new MemStorage();
