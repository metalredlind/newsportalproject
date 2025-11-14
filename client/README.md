# News Portal Admin Dashboard

A modern, feature-rich admin dashboard for the News Portal application built with React 19, Vite, and Tailwind CSS. This dashboard provides comprehensive content management capabilities for news publishing.

## 🌟 Features

### News Management
- **Create News**: Rich text editor with Jodit for content creation
- **Edit News**: Modify existing news articles with full formatting
- **Delete News**: Remove articles with confirmation
- **Image Upload**: Direct image integration with Cloudinary
- **Category Management**: Organize news by categories
- **Preview Functionality**: Preview articles before publishing

### Writer Management
- **Writer Profiles**: Manage writer information and bios
- **Role Assignment**: Assign admin or writer roles
- **Writer Statistics**: Track writer contributions
- **Profile Editing**: Update writer details and images

### Image Gallery
- **Bulk Upload**: Upload multiple images at once
- **Image Management**: Organize and categorize images
- **Cloudinary Integration**: Automatic image optimization
- **Gallery Integration**: Easy image selection for articles

### Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Admin and writer permissions
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Automatic token handling

### User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Loading States**: Smooth loading indicators
- **Toast Notifications**: User-friendly feedback
- **Form Validation**: Client-side validation
- **Auto-save**: Draft saving functionality

## 🛠️ Technology Stack

### Core Technologies
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Ultra-fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM 7** - Client-side routing with nested routes

### UI/UX Libraries
- **React Icons 5** - Comprehensive icon library
- **React Hot Toast** - Beautiful notification system
- **React Spinners** - Loading animation components
- **React Fast Marquee** - Smooth scrolling text

### Content Management
- **Jodit React** - Feature-rich WYSIWYG editor
- **Axios** - Promise-based HTTP client
- **JWT Decode** - JWT token parsing and validation

### Development Tools
- **ESLint 9** - Code linting and quality assurance
- **Vite Plugin React** - React integration for Vite
- **TypeScript Support** - Type definitions for React

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Backend API server running (see main README)

### 1. Navigate to Client Directory
```bash
cd client
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Ensure the backend API URL is properly configured in [`src/config/config.js`](src/config/config.js:1):

```javascript
export const base_url = "http://localhost:5001";
```

### 4. Start Development Server
```bash
npm run dev
```

The dashboard will be available at `http://localhost:5173`

## 🚀 Available Scripts

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production deployment
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Build Optimization
- `npm run build` - Creates optimized production build
- Vite automatically handles code splitting and optimization

## 📁 Project Structure

```
client/
├── public/                     # Static assets
│   └── vite.svg               # Vite logo
├── src/                       # Source code
│   ├── assets/               # Images and media files
│   │   ├── logo.png          # Application logo
│   │   ├── profile.png       # Default profile image
│   │   └── react.svg         # React logo
│   ├── components/           # Reusable UI components
│   │   └── Gallery.jsx       # Image gallery component
│   ├── config/               # Configuration files
│   │   └── config.js         # API endpoints and settings
│   ├── context/              # React context for state management
│   │   ├── storeContext.js   # Context creation
│   │   ├── StoreProvider.jsx # Context provider
│   │   └── storeReducer.js   # State reducer logic
│   ├── dashboard/            # Dashboard-specific components
│   │   ├── components/       # Dashboard components
│   │   │   ├── Gallery.jsx   # Image gallery management
│   │   │   └── NewsContent.jsx # News content editor
│   │   ├── layouts/          # Layout components
│   │   │   ├── Header.jsx    # Top navigation header
│   │   │   ├── MainLayout.jsx # Main layout wrapper
│   │   │   └── Sidebar.jsx   # Side navigation menu
│   │   └── pages/            # Dashboard pages
│   │       ├── AddWriter.jsx  # Writer creation form
│   │       ├── Adminindex.jsx # Admin dashboard home
│   │       ├── CreateNews.jsx # News creation form
│   │       ├── EditNews.jsx   # News editing interface
│   │       ├── EditWriter.jsx # Writer editing interface
│   │       ├── Login.jsx      # Authentication page
│   │       ├── News.jsx       # News management page
│   │       ├── Profile.jsx    # User profile page
│   │       ├── Unable.jsx     # Access denied page
│   │       ├── Writerindex.jsx # Writer dashboard home
│   │       └── Writers.jsx    # Writers management page
│   ├── middleware/           # Route protection logic
│   │   ├── ProtectDashboard.jsx # Dashboard access protection
│   │   └── ProtectRole.jsx    # Role-based access control
│   ├── utils/                # Utility functions
│   │   └── index.js          # Helper functions
│   ├── App.jsx               # Main application component
│   ├── App.css               # Global styles
│   ├── main.jsx              # Application entry point
│   └── index.css             # Base CSS styles
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── eslint.config.js         # ESLint configuration
```

## 🔧 Configuration

### API Configuration
Update the backend API URL in [`src/config/config.js`](src/config/config.js:1):

```javascript
export const base_url = "http://your-backend-api.com";
```

### Authentication Configuration
The dashboard uses JWT tokens stored in localStorage. Token expiration and validation are handled automatically.

### Image Upload Configuration
Images are uploaded to Cloudinary through the backend API. Ensure Cloudinary credentials are properly configured in the backend.

## 🎨 UI Components

### Layout Components
- **Header**: Top navigation with user profile and logout
- **Sidebar**: Collapsible side menu with navigation links
- **MainLayout**: Wrapper component for consistent layout

### Form Components
- **CreateNews**: Rich text editor with image upload
- **AddWriter**: User registration form with validation
- **Login**: Authentication form with remember me functionality

### Display Components
- **News**: Data table with search and pagination
- **Writers**: User management interface
- **Gallery**: Image management with drag-and-drop upload

## 🔐 Authentication Flow

1. **Login**: User credentials sent to backend API
2. **Token Storage**: JWT token stored in localStorage
3. **Protected Routes**: Middleware checks token validity
4. **Role-based Access**: Different UI based on user role (admin/writer)
5. **Auto-logout**: Token expiration handling

## 🚀 Development Workflow

### Creating New Features
1. Create component in appropriate directory
2. Add route in React Router configuration
3. Implement API integration with Axios
4. Add form validation and error handling
5. Test responsive design

### State Management
- Global state managed through React Context
- Local component state with useState
- API data caching with useEffect

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Maintain consistent spacing and colors
- Use CSS modules for component-specific styles

## 🧪 Testing

### Manual Testing
- Test all form submissions
- Verify image upload functionality
- Check responsive design on different devices
- Test authentication flow
- Verify role-based access control

### Performance Testing
- Monitor bundle size with Vite analyzer
- Test loading states and animations
- Verify API response times

## 🐛 Common Issues & Solutions

### Build Issues
- **Vite build fails**: Check for circular dependencies
- **Module not found**: Verify import paths and file extensions
- **CSS not loading**: Check Tailwind CSS configuration

### Runtime Issues
- **API calls failing**: Verify backend URL in config
- **Images not uploading**: Check Cloudinary configuration
- **Authentication errors**: Verify JWT token handling
- **Routing issues**: Check React Router configuration

### Development Issues
- **Hot reload not working**: Restart Vite development server
- **ESLint errors**: Run `npm run lint` to identify issues
- **TypeScript errors**: Check type definitions and imports

## 🔗 Integration with Backend

The dashboard communicates with the backend API through:
- **Authentication endpoints**: Login, register, profile management
- **News endpoints**: CRUD operations for news articles
- **Writer endpoints**: User management operations
- **Image endpoints**: Upload and gallery management

Ensure the backend API is running and properly configured before starting the dashboard.

## 📱 Responsive Design

The dashboard is fully responsive with:
- **Mobile**: Collapsible navigation, stacked layouts
- **Tablet**: Sidebar navigation, adjusted grid layouts
- **Desktop**: Full sidebar, multi-column layouts

## 🎯 Performance Optimization

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Cloudinary handles image compression
- **Lazy Loading**: Components loaded on demand
- **Caching**: API responses cached appropriately

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **HTTPS Ready**: Configured for secure connections
- **Input Validation**: Client-side form validation
- **XSS Protection**: React's built-in protection
- **CORS Handling**: Proper cross-origin request handling

---

For more information about the backend API, see the main project README. For issues specific to the admin dashboard, please check the troubleshooting section above.