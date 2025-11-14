# News Portal Public Frontend

A modern, SEO-optimized public news portal built with Next.js 15, React 19, and Tailwind CSS. This frontend provides a fast, responsive, and search-engine-friendly news reading experience.

## 🌟 Features

### News Display
- **Category-based Organization**: News organized by categories (Technology, Sports, Health, etc.)
- **Latest News**: Real-time latest news updates
- **Popular News**: Most viewed and trending articles
- **Recent News**: Recently published articles
- **Breaking News**: Marquee-style headline display
- **Related News**: Smart article recommendations

### User Experience
- **Responsive Design**: Mobile-first, fully responsive layout
- **Fast Loading**: Next.js optimization and static generation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Search Functionality**: Full-text search across articles
- **Category Navigation**: Easy category browsing
- **Social Sharing**: Share articles on social media

### Performance & SEO
- **Static Generation**: Pre-rendered pages for fast loading
- **Dynamic Routing**: Clean URLs with category and article slugs
- **Image Optimization**: Automatic image compression and lazy loading
- **Meta Tags**: Dynamic meta descriptions and Open Graph tags
- **Structured Data**: JSON-LD for better search engine understanding
- **Sitemap Ready**: Automatic sitemap generation capability

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Modern React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization

### UI/UX Libraries
- **React Icons 5** - Comprehensive icon library
- **React Multi Carousel** - Touch-enabled carousel component
- **React Fast Marquee** - Smooth scrolling marquee
- **React Spinners** - Loading animation components

### Content Processing
- **HTML to Text** - HTML content conversion
- **React HTML Parser** - HTML parsing and rendering
- **Moment.js** - Date and time formatting

### Performance Tools
- **Next.js Image Optimization** - Automatic image optimization
- **Static Generation** - Pre-rendered pages at build time
- **Incremental Static Regeneration** - On-demand page updates

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Backend API server running (see main README)

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Ensure the backend API URL is properly configured in [`config/config.js`](config/config.js:1):

```javascript
export const base_api_url = "http://localhost:5001";
```

### 4. Start Development Server
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🚀 Available Scripts

### Development
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production deployment
- `npm run start` - Start production server

### Build Process
- **Static Generation**: Pre-renders pages at build time
- **Image Optimization**: Processes and optimizes images
- **CSS Processing**: Tailwind CSS compilation and optimization

## 📁 Project Structure

```
frontend/
├── app/                       # Next.js App Router
│   ├── news/                 # News-related routes
│   │   ├── [slug]/           # Dynamic article pages
│   │   │   └── page.jsx      # Article detail page
│   │   └── category/         # Category routes
│   │       └── [category]/   # Dynamic category pages
│   │           └── page.jsx  # Category listing page
│   ├── search/               # Search functionality
│   │   └── news/             # Search results
│   │       └── page.jsx      # Search results page
│   ├── layout.js             # Root layout component
│   ├── page.js               # Homepage component
│   ├── globals.css           # Global styles
│   └── favicon.ico           # Site favicon
├── components/               # Reusable React components
│   ├── news/                 # News-specific components
│   │   ├── item/             # News item components
│   │   │   ├── NewsCard.jsx  # Main news card
│   │   │   ├── SimpleNewsCard.jsx # Simple news card
│   │   │   └── SimpleDetailsNewsCard.jsx # Detailed news card
│   │   ├── DetailNewsCol.jsx # Column layout for news
│   │   ├── DetailsNews.jsx   # Detailed news display
│   │   ├── DetailsNewsRow.jsx # Row layout for news
│   │   ├── LatestNews.jsx    # Latest news section
│   │   ├── PopularNews.jsx   # Popular news section
│   │   ├── RecentNews.jsx    # Recent news section
│   │   ├── RelatedNews.jsx   # Related articles
│   │   ├── Search.jsx        # Search component
│   │   └── SearchNews.jsx    # Search results display
│   ├── Breadcrump.jsx        # Breadcrumb navigation
│   ├── Category.jsx          # Category navigation
│   ├── Footer.jsx            # Site footer
│   ├── Gallery.jsx           # Image gallery
│   ├── Header.jsx            # Site header
│   ├── Header_Category.jsx   # Category header
│   ├── HeadLines.jsx         # Breaking news marquee
│   └── Title.jsx             # Section titles
├── config/                   # Configuration files
│   └── config.js             # API endpoints and settings
├── assets/                   # Static assets
│   ├── add.png               # Add icon
│   ├── header-bg.jpg         # Header background
│   └── logo.png              # Site logo
├── public/                   # Next.js public assets
│   ├── file.svg              # File icon
│   ├── globe.svg             # Globe icon
│   ├── next.svg              # Next.js logo
│   ├── vercel.svg            # Vercel logo
│   └── window.svg            # Window icon
├── package.json              # Dependencies and scripts
├── next.config.mjs           # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── jsconfig.json             # JavaScript configuration
```

## 🔧 Configuration

### API Configuration
Update the backend API URL in [`config/config.js`](config/config.js:1):

```javascript
export const base_api_url = "http://your-backend-api.com";
```

### Next.js Configuration
Key settings in [`next.config.mjs`](next.config.mjs:1):
- **Image Domains**: Configure external image sources
- **API Routes**: Custom API endpoint configuration
- **Static Optimization**: Build-time optimization settings

### SEO Configuration
- **Meta Tags**: Dynamic meta tag generation
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines

## 🎨 UI Components

### Layout Components
- **Header**: Site navigation with category menu
- **Footer**: Site information and links
- **Breadcrumb**: Navigation path indicator
- **Title**: Section headers with styling

### News Components
- **HeadLines**: Breaking news marquee display
- **LatestNews**: Grid layout for latest articles
- **PopularNews**: Carousel for trending articles
- **RecentNews**: List layout for recent articles
- **RelatedNews**: Smart article recommendations

### Card Components
- **NewsCard**: Main article card with image and excerpt
- **SimpleNewsCard**: Compact article display
- **SimpleDetailsNewsCard**: Detailed article card

## 🚀 Page Structure

### Homepage (`/`)
- Breaking news marquee
- Latest news grid
- Category-based news sections
- Popular news carousel
- Multi-column layout with different categories

### Article Page (`/news/[slug]`)
- Full article content
- Author information
- Publication date
- Related articles
- Social sharing buttons
- SEO-optimized meta tags

### Category Page (`/news/category/[category]`)
- Category-specific news listing
- Pagination support
- Category description
- Related categories

### Search Page (`/search/news`)
- Search results display
- Search term highlighting
- Result pagination
- Related search suggestions

## 🔗 Data Fetching

### Static Generation
Pages are pre-rendered at build time for optimal performance:
- **Homepage**: Pre-fetches all news categories
- **Category Pages**: Pre-renders category-specific content
- **Article Pages**: Static generation with dynamic data

### API Integration
Data fetched from backend API:
- **All News**: `GET /api/all/news`
- **Category News**: `GET /api/news/category/[category]`
- **Article Details**: `GET /api/news/[id]`
- **Search Results**: `GET /api/news/search`

### Caching Strategy
- **Static Generation**: Pages cached at build time
- **Incremental Regeneration**: On-demand updates
- **Client-side Caching**: Browser caching for API responses

## 🎯 SEO Optimization

### Meta Tags
- **Dynamic Titles**: Unique page titles for each article
- **Meta Descriptions**: Custom descriptions for better CTR
- **Open Graph**: Facebook/Twitter sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing

### Structured Data
- **Article Schema**: NewsArticle structured data
- **Breadcrumb Schema**: Navigation structured data
- **Organization Schema**: Publisher information

### Performance Optimization
- **Core Web Vitals**: Optimized for Google's metrics
- **Image Optimization**: Automatic compression and WebP format
- **Lazy Loading**: Images loaded on demand
- **Code Splitting**: Automatic bundle splitting

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

### Mobile Features
- **Touch-friendly**: Swipe gestures for carousels
- **Collapsible Navigation**: Hamburger menu
- **Optimized Images**: Responsive image sizing
- **Fast Loading**: Mobile-optimized assets

## 🧪 Testing

### Manual Testing
- **Cross-browser**: Chrome, Firefox, Safari, Edge
- **Device Testing**: Mobile, tablet, desktop
- **Performance**: Lighthouse audit
- **SEO**: Search console validation

### Performance Testing
- **Page Speed**: Google PageSpeed Insights
- **Core Web Vitals**: LCP, FID, CLS metrics
- **Bundle Analysis**: Next.js bundle analyzer

## 🐛 Common Issues & Solutions

### Build Issues
- **Module not found**: Check import paths and file extensions
- **Image optimization fails**: Verify image domains in config
- **CSS not loading**: Check Tailwind CSS configuration

### Runtime Issues
- **API calls failing**: Verify backend URL in config
- **Images not loading**: Check Cloudinary configuration
- **Routing issues**: Check Next.js routing configuration

### SEO Issues
- **Meta tags not updating**: Check dynamic meta tag generation
- **Structured data errors**: Validate JSON-LD syntax
- **Sitemap issues**: Check dynamic route generation

## 🔒 Security Features

- **HTTPS Ready**: Configured for secure connections
- **Content Security Policy**: XSS protection
- **Secure Headers**: Security headers configuration
- **Input Validation**: Client-side validation
- **Rate Limiting**: API rate limiting ready

## 📊 Analytics & Monitoring

### Performance Monitoring
- **Core Web Vitals**: Real user monitoring
- **Page Load Times**: Performance tracking
- **Error Tracking**: JavaScript error monitoring

### SEO Monitoring
- **Search Rankings**: Keyword performance
- **Click-through Rates**: SERP performance
- **Indexation**: Search engine coverage

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Set build commands
4. Deploy with automatic CI/CD

### Custom Deployment
- **Static Export**: `next export` for static hosting
- **Node.js Server**: Custom server deployment
- **Docker**: Containerized deployment ready

---

For more information about the backend API integration, see the main project README. For issues specific to the public frontend, please check the troubleshooting section above.