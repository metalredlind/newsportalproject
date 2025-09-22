# News Portal - Public Website

A modern, responsive news portal website built with Next.js 15.5.2 and TailwindCSS. This is the public-facing website where visitors can read news articles, browse categories, search for content, and explore the latest news updates.

## 🎯 Overview

The frontend serves as the public interface for the News Portal application, providing a seamless reading experience with fast loading times, SEO optimization, and responsive design for all devices.

## ✨ Features

### 📰 News Content
- **Latest News Display** with featured articles
- **Category-based Browsing** for organized content
- **Article Details Page** with full content and metadata
- **Related News Suggestions** for enhanced engagement
- **Popular News Section** highlighting trending articles
- **Recent News Updates** with real-time content

### 🔍 Search & Navigation
- **Advanced Search Functionality** with filtering
- **Category Navigation** with dynamic routing
- **Breadcrumb Navigation** for better UX
- **SEO-friendly URLs** with slug-based routing
- **Responsive Navigation** for mobile devices

### 🎨 User Experience
- **Responsive Design** for all screen sizes
- **Fast Page Loading** with Next.js optimization
- **Image Gallery** with optimized loading
- **Smooth Animations** and transitions
- **Accessible Design** following web standards
- **Dark/Light Theme** support

### 🚀 Performance
- **Server-Side Rendering (SSR)** for better SEO
- **Static Site Generation (SSG)** for improved performance
- **Image Optimization** with Next.js Image component
- **Code Splitting** for faster load times
- **Caching Strategies** for optimal performance

## 🛠️ Tech Stack

- **Next.js**: 15.5.2 - React framework with SSR/SSG
- **React**: 19.1.0 - UI library
- **TailwindCSS**: 4.0 - Utility-first CSS framework
- **React Icons**: 5.5.0 - Icon library
- **React Multi Carousel**: 2.8.6 - Carousel components
- **React Fast Marquee**: 1.6.5 - Scrolling text animations
- **React Spinners**: 2.0.4 - Loading animations
- **Moment.js**: 2.30.1 - Date formatting
- **HTML to Text**: 9.0.5 - Content processing
- **React HTML Parser**: 2.0.2 - HTML content rendering

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API server running (see main project README)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Environment Setup
Create a [`.env.local`](.env.local) file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_NAME=News Portal
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Start Development Server
```bash
npm run dev
```
The website will be available at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm start
```

## 📱 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build optimized production bundle
- **`npm start`** - Start production server
- **`npm run lint`** - Run Next.js built-in linting

## 📁 Project Structure

```
frontend/
├── 📁 app/                      # Next.js App Router
│   ├── 📄 layout.js            # Root layout component
│   ├── 📄 page.js              # Home page
│   ├── 📄 globals.css          # Global styles
│   ├── 📄 favicon.ico          # Site favicon
│   ├── 📁 news/                # News-related pages
│   │   ├── 📁 [slug]/          # Dynamic news detail page
│   │   │   └── 📄 page.jsx     # Individual news article
│   │   └── 📁 category/        # Category pages
│   │       └── 📁 [category]/  # Dynamic category page
│   │           └── 📄 page.jsx # Category news listing
│   └── 📁 search/              # Search functionality
│       └── 📁 news/            # News search results
│           └── 📄 page.jsx     # Search results page
├── 📁 components/              # Reusable React components
│   ├── 📄 Header.jsx          # Main navigation header
│   ├── 📄 Footer.jsx          # Site footer
│   ├── 📄 Category.jsx        # Category display
│   ├── 📄 Gallery.jsx         # Image gallery
│   ├── 📄 HeadLines.jsx       # Headlines section
│   ├── 📄 Title.jsx           # Dynamic page titles
│   ├── 📄 Breadcrump.jsx      # Navigation breadcrumbs
│   ├── 📄 Header_Category.jsx # Category header
│   └── 📁 news/               # News-specific components
│       ├── 📄 LatestNews.jsx  # Latest news display
│       ├── 📄 PopularNews.jsx # Popular articles
│       ├── 📄 RecentNews.jsx  # Recent updates
│       ├── 📄 RelatedNews.jsx # Related articles
│       ├── 📄 Search.jsx      # Search component
│       ├── 📄 SearchNews.jsx  # Search results
│       ├── 📄 DetailsNews.jsx # Article details
│       ├── 📄 DetailNewsCol.jsx    # Detail column layout
│       ├── 📄 DetailsNewsRow.jsx   # Detail row layout
│       ├── 📄 RecentNewsFooter.jsx # Footer recent news
│       └── 📁 item/           # News item components
│           ├── 📄 NewsCard.jsx           # News card component
│           ├── 📄 SimpleNewsCard.jsx     # Simple news card
│           └── 📄 SimpleDetailsNewsCard.jsx # Simple detail card
├── 📁 assets/                 # Static assets
│   ├── 📁 images/            # Image files
│   │   ├── logo.png          # Site logo
│   │   ├── header-bg.jpg     # Header background
│   │   └── add.png           # Advertisement placeholder
├── 📁 config/                # Configuration files
│   └── 📄 config.js          # API and site configuration
├── 📁 public/                # Public static files
│   ├── next.svg              # Next.js logo
│   ├── vercel.svg            # Vercel logo
│   └── *.svg                 # Various SVG icons
├── 📄 package.json           # Dependencies and scripts
├── 📄 next.config.mjs        # Next.js configuration
├── 📄 postcss.config.mjs     # PostCSS configuration
└── 📄 jsconfig.json          # JavaScript configuration
```

## 🎨 Key Components

### Layout Components
- **[`app/layout.js`](app/layout.js)** - Root layout with metadata and global providers
- **[`components/Header.jsx`](components/Header.jsx)** - Navigation header with menu and search
- **[`components/Footer.jsx`](components/Footer.jsx)** - Site footer with links and info

### News Display Components
- **[`components/news/LatestNews.jsx`](components/news/LatestNews.jsx)** - Featured latest news
- **[`components/news/PopularNews.jsx`](components/news/PopularNews.jsx)** - Trending articles
- **[`components/news/DetailsNews.jsx`](components/news/DetailsNews.jsx)** - Full article display
- **[`components/news/RelatedNews.jsx`](components/news/RelatedNews.jsx)** - Related article suggestions

### Navigation Components
- **[`components/Category.jsx`](components/Category.jsx)** - Category navigation menu
- **[`components/Breadcrump.jsx`](components/Breadcrump.jsx)** - Breadcrumb navigation
- **[`components/news/Search.jsx`](components/news/Search.jsx)** - Search functionality

### Item Components
- **[`components/news/item/NewsCard.jsx`](components/news/item/NewsCard.jsx)** - Reusable news card
- **[`components/news/item/SimpleNewsCard.jsx`](components/news/item/SimpleNewsCard.jsx)** - Minimal news card
- **[`components/news/item/SimpleDetailsNewsCard.jsx`](components/news/item/SimpleDetailsNewsCard.jsx)** - Detail card variant

## 🗺️ Routing Structure

### Static Routes
- **`/`** - Home page with latest news
- **`/search/news`** - Search results page

### Dynamic Routes
- **`/news/[slug]`** - Individual news article page
- **`/news/category/[category]`** - Category-specific news listing

### Route Examples
```
/ → Home page
/news/breaking-news-today → News article detail
/news/category/sports → Sports category page
/news/category/technology → Technology category page
/search/news?q=covid → Search results for "covid"
```

## 🔧 Configuration

### Next.js Configuration ([`next.config.mjs`](next.config.mjs))
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Cloudinary images
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
```

### API Configuration ([`config/config.js`](config/config.js))
```javascript
export const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'News Portal';
```

## 🎨 Styling

### TailwindCSS Configuration
- **Utility-first** approach for rapid development
- **Custom color palette** matching brand guidelines
- **Responsive breakpoints** for mobile-first design
- **Component variants** for consistent styling

### Global Styles ([`app/globals.css`](app/globals.css))
- **Typography** settings and font families
- **Base component** styles
- **Custom CSS variables** for theming
- **Accessibility** enhancements

### Responsive Design
```css
/* Mobile First Approach */
.news-grid {
  @apply grid grid-cols-1 gap-4;
  
  /* Tablet */
  @apply md:grid-cols-2 md:gap-6;
  
  /* Desktop */
  @apply lg:grid-cols-3 lg:gap-8;
}
```

## 🔌 API Integration

The website fetches data from the backend API:

### News APIs
- `GET /api/news` - Fetch all news articles
- `GET /api/news/:slug` - Get specific news article
- `GET /api/news/category/:category` - Get news by category
- `GET /api/search/news?q=query` - Search news articles
- `GET /api/news/popular` - Get popular news
- `GET /api/news/latest` - Get latest news

### Data Fetching Patterns
```javascript
// Server-side rendering
export async function generateStaticParams() {
  const response = await fetch(`${api}/api/news`);
  const articles = await response.json();
  return articles.map((article) => ({ slug: article.slug }));
}

// Client-side fetching
const [news, setNews] = useState([]);
useEffect(() => {
  fetch(`${api}/api/news/latest`)
    .then(res => res.json())
    .then(data => setNews(data));
}, []);
```

## 🚀 Performance Optimization

### Next.js Optimizations
- **Automatic Code Splitting** for smaller bundles
- **Image Optimization** with Next.js Image component
- **Font Optimization** with next/font
- **Static Generation** for improved loading times

### SEO Optimization
```javascript
export const metadata = {
  title: 'News Portal - Latest News Updates',
  description: 'Stay updated with the latest news...',
  keywords: 'news, updates, articles, breaking news',
  openGraph: {
    title: 'News Portal',
    description: 'Latest news and updates',
    images: ['/og-image.jpg'],
  },
};
```

### Loading Strategies
- **Lazy Loading** for images and components
- **Prefetching** for critical routes
- **Caching** strategies for API responses
- **Progressive Loading** for better UX

## 🌐 Deployment

### Build Process
```bash
npm run build
```

Creates an optimized production build with:
- **Static HTML** files for SSG pages
- **Optimized JavaScript** bundles
- **Compressed CSS** files
- **Optimized images** and assets

### Deployment Platforms

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Deploy the .next/out directory
```

#### Static Hosting
```bash
npm run build
npm run export
# Deploy the out/ directory
```

### Environment Variables for Production
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_SITE_NAME=Your News Portal
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🔍 SEO Features

### Metadata Generation
- **Dynamic titles** based on content
- **Meta descriptions** for better search visibility
- **Open Graph tags** for social media sharing
- **Twitter Card** support
- **Schema.org markup** for rich snippets

### Sitemap & Robots
```javascript
// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add more URLs
  ];
}
```

## 🧪 Testing

### Testing Strategy
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Lighthouse audit
npm run lighthouse
```

### Testing Components
- **Component testing** with Jest and React Testing Library
- **Integration testing** for API calls
- **Visual regression testing** for UI consistency
- **Performance testing** with Lighthouse

## 🔧 Development Guidelines

### Code Structure
```javascript
// Component structure
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NewsCard({ article }) {
  return (
    <div className="news-card">
      <Image
        src={article.image}
        alt={article.title}
        width={400}
        height={250}
        priority
      />
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </div>
  );
}
```

### Best Practices
- Use **Next.js Image** component for all images
- Implement **proper error boundaries**
- Follow **accessibility guidelines** (WCAG)
- Use **semantic HTML** elements
- Implement **loading states** for better UX

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check Node.js version compatibility
   - Clear [`.next/`](.next/) cache directory
   - Verify all dependencies are installed

2. **API Connection Issues**
   - Check API URL configuration
   - Verify CORS settings on backend
   - Test API endpoints directly

3. **Image Loading Issues**
   - Configure image domains in [`next.config.mjs`](next.config.mjs)
   - Check Cloudinary settings
   - Verify image URLs are accessible

4. **Routing Issues**
   - Check dynamic route parameters
   - Verify file naming conventions
   - Test route generation in development

## 📈 Future Enhancements

- **TypeScript** migration for type safety
- **Internationalization** (i18n) support
- **PWA features** for offline reading
- **RSS feeds** for content syndication
- **AMP pages** for mobile optimization
- **Real-time updates** with WebSockets
- **Comment system** for user engagement
- **Newsletter subscription** functionality

## 📊 Analytics Integration

```javascript
// Google Analytics setup
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
    </html>
  )
}
```

## 🤝 Contributing

1. Follow Next.js best practices
2. Use TypeScript for new components
3. Implement responsive design
4. Add proper SEO metadata
5. Test on multiple devices
6. Follow the existing code style

---

Built with ⚡ Next.js for optimal performance and SEO.
