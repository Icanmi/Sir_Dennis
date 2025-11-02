# Professional Developer Portfolio - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like Linear (clean typography), GitHub (developer-focused), and Dribbble (portfolio showcases), combined with professional agency aesthetics. This creates a balance between technical credibility and creative visual impact.

**Core Design Principles:**
- Professional minimalism with bold typographic statements
- Strategic use of whitespace to highlight work
- Developer-centric aesthetic with modern polish
- Consistent visual rhythm across all pages

---

## Typography System

**Primary Font:** Inter or DM Sans (Google Fonts)
**Accent Font:** JetBrains Mono or Fira Code for code snippets/technical elements

**Hierarchy:**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold
- Page Titles: text-4xl md:text-5xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-semibold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text/Captions: text-sm, font-medium

---

## Layout System

**Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Card gaps: gap-6 md:gap-8
- Inner content: space-y-6 to space-y-8

**Container Structure:**
- Max width: max-w-7xl for main content
- Content padding: px-6 md:px-8 lg:px-12
- Prose content: max-w-4xl for blog posts

**Grid Patterns:**
- Portfolio cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Blog posts: grid-cols-1 md:grid-cols-2
- YouTube videos: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

---

## Page-Specific Layouts

### 1. Home Page

**Hero Section (Full viewport 90vh-100vh):**
- Large professional image showing workspace/coding setup or developer at work
- Overlay with semi-transparent dark gradient (from top or bottom)
- Centered content with name in hero headline size
- Tagline/role in large body text
- Primary CTA button with blur background (backdrop-blur-md)
- Scroll indicator at bottom

**About Me Section:**
- Two-column layout (lg:grid-cols-2): Left column text, right column professional headshot or workspace image
- Brief bio paragraph
- Tech stack icons/badges in grid (grid-cols-3 md:grid-cols-4 lg:grid-cols-6)
- Skills highlight cards showing specializations

**Contact Section:**
- Centered layout with contact headline
- Icon grid for social links (grid-cols-2 md:grid-cols-4)
- Each contact method in card with icon, label, and link
- WhatsApp, Facebook, GitHub, Email with corresponding icons from Heroicons
- Hover state: slight scale transform

### 2. Portfolio Page

**Header:**
- Page title with brief description
- Filter buttons/tabs for project categories (if applicable)

**Project Cards (Grid Layout):**
- Each card includes:
  - Featured project image/screenshot (aspect-ratio-video)
  - Project title
  - Brief description (2-3 lines)
  - Tech stack badges
  - Link icons (GitHub, Live Demo)
- Card design: rounded-xl, subtle shadow, hover lift effect
- Staggered/masonry layout consideration for visual interest

**Project Detail Modal/Expanded View:**
- Full project description
- Multiple screenshots in gallery
- Tech details and challenges solved
- Links to repository and live site

### 3. Resume Page

**Layout Structure:**
- Downloadable PDF button prominently placed
- Two-column layout on desktop:
  - Left: Core info (skills, education, certifications)
  - Right: Experience timeline

**Experience Timeline:**
- Vertical timeline with connector line
- Each position as card with:
  - Company name and logo space
  - Role title
  - Date range
  - Responsibilities in bullet points
  - Technologies used as badges

**Skills Section:**
- Categorized skill cards (Languages, Frameworks, Tools, etc.)
- Visual representation with icons

### 4. Blog Page

**Hero Section:**
- Simple typographic header
- Optional featured post highlight

**Blog Grid:**
- Card layout (grid-cols-1 md:grid-cols-2)
- Each card includes:
  - Featured image placeholder
  - Category badge
  - Title
  - Excerpt (2-3 lines)
  - Read time and date
  - Author info (your name/avatar)

**Category Filters:**
- Horizontal pill buttons for Growth, Development, Wealth Creation
- Active state highlighting

**Blog Post Detail View:**
- max-w-prose centered content
- Large featured image
- Title, date, read time, category
- Rich text content with proper typography
- Share buttons at end

### 5. YouTube Gallery Page

**Grid Layout:**
- Video cards in responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card contains:
  - Video thumbnail (16:9 aspect ratio)
  - Play icon overlay
  - Video title
  - View count and date
  - Duration badge

**Video Player Section:**
- Clicking card opens modal or expands inline
- Embedded YouTube iframe (aspect-ratio-video)
- Video description below player
- Related videos sidebar

---

## Navigation

**Desktop Navigation:**
- Sticky header with backdrop blur
- Logo/name on left
- Navigation links centered or right-aligned
- Contact CTA button
- Links: Home, Portfolio, Resume, Blog, YouTube

**Mobile Navigation:**
- Hamburger menu icon
- Slide-in drawer with full menu
- Large, touch-friendly link sizes

---

## Component Library

**Buttons:**
- Primary: Solid with medium padding (px-8 py-3), rounded-lg
- Secondary: Outline style
- Ghost: Text with hover background
- All buttons: Font semibold, transition effects

**Cards:**
- rounded-xl or rounded-2xl
- Subtle shadow with hover elevation
- Padding: p-6 to p-8
- Border or background differentiation

**Badges/Tags:**
- Small, rounded-full or rounded-md
- Compact padding (px-3 py-1)
- Uppercase text-xs font-semibold

**Forms (if needed for contact):**
- Input fields: rounded-lg, p-4, full width
- Labels: text-sm font-medium, mb-2
- Focus states with ring

---

## Images

**Required Images:**
1. **Hero Image (Homepage):** Professional workspace, developer at desk, or coding environment - large, high-quality, horizontal orientation
2. **About Section Image:** Professional headshot or candid workspace photo - square or portrait orientation
3. **Portfolio Project Images:** Screenshots or mockups of each project (4-6 projects)
4. **Blog Post Images:** Featured images for each blog post (placeholder: tech-related stock photos)
5. **YouTube Thumbnails:** Pulled from YouTube API

**Image Treatment:**
- Hero: Full-width with overlay gradient
- Portfolio: Consistent aspect ratio (16:9 or 4:3)
- Blog: Rounded corners matching card style
- All images: Lazy loading, optimized sizes

---

## Accessibility & Best Practices

- Semantic HTML throughout
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Focus states clearly visible
- Sufficient color contrast (handled separately)
- Alt text for all images
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

---

This design creates a professional, modern developer portfolio that balances technical credibility with visual appeal, showcasing your work effectively while maintaining usability across all devices.