# Developer Portfolio Application

## Overview

A modern, full-stack developer portfolio website built with React, TypeScript, Express, and PostgreSQL. The application showcases portfolio projects, blog posts, and YouTube videos through a clean, professional interface with dark/light theme support. Built using the shadcn/ui component library with a focus on responsive design and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing instead of React Router
- **React Query (@tanstack/react-query)** for server state management and data fetching

**UI Component Strategy**
- **shadcn/ui** component library based on Radix UI primitives
- Components configured in "new-york" style with custom theming
- **Tailwind CSS** for utility-first styling with custom design tokens
- All UI components are local to the project (in `client/src/components/ui/`) for full customization

**Design System**
- Custom color system using CSS variables for theme support (light/dark modes)
- Typography system using DM Sans and Fira Code fonts
- Consistent spacing scale based on Tailwind's default units
- Professional minimalist aesthetic with developer-focused design
- Responsive grid layouts: 1 column mobile, 2-3 columns desktop

**State Management**
- React Context API for theme management (ThemeProvider)
- React Query for all server data fetching and caching
- Local component state for UI interactions (modals, filters, etc.)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the REST API
- Middleware-based request handling with logging
- Environment-based configuration (development vs production)

**API Structure**
- RESTful endpoints organized by resource type:
  - `/api/projects` - Portfolio project CRUD operations
  - `/api/blog` - Blog post management
  - `/api/videos` - YouTube video integration
- Category-based filtering support (e.g., `/api/projects/category/:category`)
- Validation using Zod schemas from drizzle-zod integration

**Data Layer**
- **Storage abstraction pattern**: `IStorage` interface allows switching between in-memory and database implementations
- Current implementation uses `MemStorage` (in-memory Map storage) for development
- Designed to support database migration via the storage interface

**Development vs Production**
- Development mode uses Vite middleware for HMR and asset serving
- Production mode serves pre-built static assets from `dist/public`
- Custom error handling and request logging middleware

### Data Storage Solutions

**Database Schema (PostgreSQL with Drizzle ORM)**

The application is configured to use PostgreSQL through Drizzle ORM, though currently running with in-memory storage:

- **users** table: User authentication (username, password)
- **portfolio_projects** table: Project showcase with technologies, images, links, categories
- **blog_posts** table: Blog content with excerpts, categories, publish dates, read time
- **youtube_videos** table: Video metadata with thumbnails, view counts, publish dates

**Schema Design Decisions**
- UUID primary keys via PostgreSQL's `gen_random_uuid()`
- Array types for storing multiple technologies per project
- Timestamp tracking for content publication
- Nullable fields for optional data (GitHub URLs, live URLs, video descriptions)

**ORM Choice: Drizzle**
- Type-safe schema definitions that generate TypeScript types
- Integration with Zod for runtime validation via `drizzle-zod`
- Lightweight alternative to heavier ORMs like Prisma
- Direct SQL-like query building with TypeScript inference

**Migration Strategy**
- Drizzle Kit configured for schema migrations
- Migration files stored in `/migrations` directory
- Schema defined in `/shared/schema.ts` for sharing between client and server

### Authentication and Authorization

**Current State**: Admin authentication implemented with session-based login

**Security Features**:
- Admin credentials stored securely via `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables
- Session secret required via `SESSION_SECRET` environment variable (mandatory in production)
- Cookies configured with `httpOnly`, `secure` (in production), and `sameSite: strict`
- Rate limiting on login endpoint: 5 attempts per 15 minutes
- General API rate limiting: 100 requests per minute
- Security headers via Helmet with Content Security Policy in production

**Environment Variables Required**:
- `SESSION_SECRET` - Required in production for session encryption
- `ADMIN_USERNAME` - Admin login username
- `ADMIN_PASSWORD` - Admin login password

### External Dependencies

**Database**
- **Neon Serverless PostgreSQL** (`@neondatabase/serverless`) - Cloud PostgreSQL provider with serverless driver
- **Drizzle ORM** (`drizzle-orm`) - Type-safe database toolkit
- Connection string via `DATABASE_URL` environment variable

**UI Component Library**
- **Radix UI** - Headless UI primitives for 20+ components (Dialog, Dropdown, Tabs, Toast, etc.)
- All components fully styled and customizable via Tailwind

**Styling & Theming**
- **Tailwind CSS** with PostCSS for processing
- **class-variance-authority** for component variant management
- **clsx** and **tailwind-merge** for conditional class composition

**Data Fetching**
- **TanStack Query** (React Query v5) for server state management
- Configured with custom fetch wrapper for error handling

**Form Handling**
- **React Hook Form** with **@hookform/resolvers** for form validation
- Zod schema validation integration

**Development Tools**
- **Replit-specific plugins**: Runtime error overlay, cartographer, dev banner (development only)
- **tsx** for running TypeScript directly in development
- **esbuild** for production server bundling

**Asset Management**
- Generated placeholder images stored in `/attached_assets/generated_images/`
- Image references use Vite's alias system (`@assets`)

**Date Handling**
- **date-fns** for date formatting and manipulation

**Third-Party Integrations**
- YouTube video embedding via iframe with autoplay support
- Social media links (WhatsApp, Facebook, GitHub) configured in contact section
- No active API integrations for YouTube data (videos seeded manually)