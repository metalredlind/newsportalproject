# News Portal - Admin Dashboard

A modern React-based admin dashboard for managing the News Portal application. Built with React 19.1, Vite, and TailwindCSS, this dashboard provides comprehensive content management capabilities for administrators and writers.

## 🎯 Overview

This admin dashboard serves as the content management system for the news portal, allowing administrators and writers to create, edit, and manage news articles, user accounts, and media gallery.

## ✨ Features

### 👥 User Management
- **Role-based Access Control** (Admin/Writer)
- **User Authentication** with JWT tokens
- **Writer Management** (Admin only)
- **Profile Management** for all users

### 📰 Content Management
- **Rich Text Editor** with Jodit React
- **Image Upload & Gallery** with drag-and-drop support
- **Category Management** for organizing news
- **News Article CRUD** operations
- **Article Status Management** (Draft, Published)
- **SEO Meta Data** management

### 🎨 User Interface
- **Responsive Design** with TailwindCSS
- **Dark/Light Theme** support
- **Interactive Components** with React Icons
- **Toast Notifications** for user feedback
- **Loading States** and animations

## 🛠️ Tech Stack

- **React**: 19.1.0 - UI library
- **Vite**: 7.0.4 - Build tool and dev server
- **TailwindCSS**: 4.1.11 - Utility-first CSS framework
- **React Router DOM**: 7.7.1 - Client-side routing
- **Axios**: 1.11.0 - HTTP client
- **Jodit React**: 5.2.19 - Rich text editor
- **JWT Decode**: 4.0.0 - JWT token handling
- **React Hot Toast**: 2.5.2 - Notifications
- **React Icons**: 5.5.0 - Icon library
- **Moment.js**: 2.30.1 - Date manipulation

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API server running (see main project README)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Environment Setup
Create a [`.env`](.env) file in the client directory:
```env
VITE_API_URL=http://localhost:8000
```

### 3. Start Development Server
```bash
npm run dev
```
The dashboard will be available at `http://localhost:5173`

## 📱 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint

## 📁 Project Structure

```
client/
├── 📁 public/                    # Static assets
│   └── vite.svg
├── 📁 src/
│   ├── 📄 App.jsx               # Main app component
│   ├── 📄 main.jsx              # Entry point
│   ├── 📄 index.css             # Global styles
│   ├── 📁 assets/               # Images and static files
│   │   ├── logo.png             # App logo
│   │   ├── mainlogo.png         # Main branding
│   │   └── profile.png          # Default profile image
│   ├── 📁 config/               # Configuration files
│   │   └── config.js            # API endpoints and settings
│   ├── 📁 context/              # React Context
│   │   ├── storeContext.js      # Context definitions
│   │   ├── StoreProvider.jsx    # Context provider
│   │   └── storeReducer.js      # State reducer
│   ├── 📁 dashboard/            # Dashboard components
│   │   ├── 📁 components/       # Reusable components
│   │   │   ├── Gallery.jsx      # Image gallery
│   │   │   └── NewsContent.jsx  # News content display
│   │   ├── 📁 layouts/          # Layout components
│   │   │   ├── Header.jsx       # Top navigation
│   │   │   ├── MainLayout.jsx   # Main layout wrapper
│   │   │   └── Sidebar.jsx      # Side navigation
│   │   └── 📁 pages/            # Dashboard pages
│   │       ├── Adminindex.jsx   # Admin dashboard
│   │       ├── Writerindex.jsx  # Writer dashboard
│   │       ├── Login.jsx        # Login page
│   │       ├── Profile.jsx      # Profile management
│   │       ├── News.jsx         # News list
│   │       ├── CreateNews.jsx   # Create news article
│   │       ├── EditNews.jsx     # Edit news article
│   │       ├── Writers.jsx      # Writers list (Admin)
│   │       ├── AddWriter.jsx    # Add writer (Admin)
│   │       ├── EditWriter.jsx   # Edit writer (Admin)
│   │       └── Unable.jsx       # Access denied page
│   ├── 📁 middleware/           # Route protection
│   │   ├── ProtectDashboard.jsx # Dashboard access control
│   │   └── ProtectRole.jsx      # Role-based protection
│   └── 📁 utils/                # Utility functions
│       └── index.js             # Helper functions
├── 📄 package.json              # Dependencies and scripts
├── 📄 vite.config.js            # Vite configuration
└── 📄 eslint.config.js          # ESLint configuration
```

## 🔐 Authentication & Authorization

### Login Process
1. User enters credentials on [`Login.jsx`](src/dashboard/pages/Login.jsx)
2. JWT token is received and stored in localStorage
3. User is redirected based on their role (Admin/Writer)

### Route Protection
- **[`ProtectDashboard.jsx`](src/dashboard/middleware/ProtectDashboard.jsx)** - Ensures user is authenticated
- **[`ProtectRole.jsx`](src/dashboard/middleware/ProtectRole.jsx)** - Restricts access based on user role

### User Roles
- **Admin**: Full access to all features including user management
- **Writer**: Limited access, can only manage their own content

## 🎨 UI Components

### Layout Components
- **[`MainLayout.jsx`](src/dashboard/layouts/MainLayout.jsx)** - Main dashboard layout
- **[`Header.jsx`](src/dashboard/layouts/Header.jsx)** - Navigation header with user menu
- **[`Sidebar.jsx`](src/dashboard/layouts/Sidebar.jsx)** - Collapsible sidebar navigation

### Feature Components
- **[`NewsContent.jsx`](src/dashboard/components/NewsContent.jsx)** - News article display and management
- **[`Gallery.jsx`](src/dashboard/components/Gallery.jsx)** - Image gallery with upload functionality

## 📄 Key Pages

### Dashboard Home
- **[`Adminindex.jsx`](src/dashboard/pages/Adminindex.jsx)** - Admin dashboard with statistics
- **[`Writerindex.jsx`](src/dashboard/pages/Writerindex.jsx)** - Writer dashboard

### Content Management
- **[`News.jsx`](src/dashboard/pages/News.jsx)** - News articles list with search and filter
- **[`CreateNews.jsx`](src/dashboard/pages/CreateNews.jsx)** - Create new news article with rich editor
- **[`EditNews.jsx`](src/dashboard/pages/EditNews.jsx)** - Edit existing news articles

### User Management (Admin Only)
- **[`Writers.jsx`](src/dashboard/pages/Writers.jsx)** - Manage writer accounts
- **[`AddWriter.jsx`](src/dashboard/pages/AddWriter.jsx)** - Add new writer accounts
- **[`EditWriter.jsx`](src/dashboard/pages/EditWriter.jsx)** - Edit writer information

### Profile Management
- **[`Profile.jsx`](src/dashboard/pages/Profile.jsx)** - User profile and settings

## 🔧 Configuration

### API Configuration
Update [`src/config/config.js`](src/config/config.js) to match your backend API:

```javascript
export const api = 'http://localhost:8000';
```

### Vite Configuration
The [`vite.config.js`](vite.config.js) includes:
- React plugin for fast refresh
- Build optimizations
- Development server proxy settings

## 🎯 State Management

The app uses React Context for state management:

- **[`storeContext.js`](src/context/storeContext.js)** - Context definition
- **[`StoreProvider.jsx`](src/context/StoreProvider.jsx)** - Global state provider
- **[`storeReducer.js`](src/context/storeReducer.js)** - State reducer with actions

### Available Actions
- User authentication state
- Loading states
- Error handling
- News articles data
- User profile data

## 🎨 Styling

### TailwindCSS Setup
- **Utility-first** CSS framework
- **Responsive design** classes
- **Custom color palette** for branding
- **Component styles** in individual files

### Custom Styles
- **Global styles** in [`index.css`](src/index.css)
- **Component-specific** styles using Tailwind classes
- **Theme support** for dark/light modes

## 🔌 API Integration

The dashboard integrates with the backend API using Axios:

### News APIs
- `GET /api/news` - Fetch news articles
- `POST /api/news` - Create news article
- `PUT /api/news/:id` - Update news article  
- `DELETE /api/news/:id` - Delete news article

### Authentication APIs
- `POST /api/login` - User login
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update profile

### User Management APIs (Admin)
- `GET /api/writers` - Get all writers
- `POST /api/writer` - Create writer
- `PUT /api/writer/:id` - Update writer
- `DELETE /api/writer/:id` - Delete writer

## 🚀 Production Build

### Build Process
```bash
npm run build
```

This creates a [`dist/`](dist/) folder with:
- Optimized JavaScript bundles
- Minified CSS files
- Processed images and assets
- HTML entry point

### Deployment
The built files can be deployed to:
- **Netlify** - Drag and drop the [`dist/`](dist/) folder
- **Vercel** - Connect GitHub repository
- **Static hosting** - Upload [`dist/`](dist/) contents
- **CDN** - Distribute static assets

## 🔧 Development Guidelines

### Code Style
- Use **functional components** with hooks
- Follow **React best practices**
- Implement **error boundaries**
- Use **TypeScript-ready** patterns

### Component Structure
```jsx
import React, { useState, useEffect } from 'react';

const ComponentName = () => {
    const [state, setState] = useState();
    
    useEffect(() => {
        // Side effects
    }, []);
    
    return (
        <div className="tailwind-classes">
            {/* Component JSX */}
        </div>
    );
};

export default ComponentName;
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check Node.js version (v16+)
   - Clear [`node_modules/`](node_modules/) and reinstall
   - Verify all dependencies are compatible

2. **API Connection Issues**
   - Ensure backend server is running
   - Check API URL in [`config.js`](src/config/config.js)
   - Verify CORS settings on backend

3. **Authentication Issues**
   - Clear localStorage
   - Check JWT token expiration
   - Verify backend authentication endpoints

4. **Styling Issues**
   - Rebuild TailwindCSS
   - Check for conflicting CSS
   - Verify TailwindCSS configuration

## 📈 Future Enhancements

- **TypeScript** migration for better type safety
- **Testing suite** with Jest and React Testing Library  
- **Internationalization** (i18n) support
- **Progressive Web App** features
- **Real-time notifications** with WebSocket
- **Advanced analytics** dashboard

## 🤝 Contributing

1. Follow the component structure guidelines
2. Add proper PropTypes or TypeScript definitions
3. Include responsive design considerations
4. Test on multiple screen sizes
5. Follow the existing code style

---

Built with ⚛️ React and ⚡ Vite for optimal development experience.
