# News Portal Application

A full-stack news portal application featuring both a public website and an administrative dashboard. Built with modern technologies including Next.js, React.js, Express.js, and MongoDB.

## 🏗️ Architecture

This project consists of three main components:

- **Backend API Server** (Express.js + MongoDB) - Located in the root directory
- **Admin Dashboard** (React.js + Vite) - Located in the [`client/`](client/) folder
- **Public Website** (Next.js) - Located in the [`frontend/`](frontend/) folder

## ✨ Features

### Public Website (Next.js)
- 📰 Browse latest news articles
- 🏷️ Category-based news filtering
- 🔍 Advanced search functionality
- 📱 Responsive design
- 🖼️ Image gallery
- 📰 Related news suggestions
- 🔗 News sharing capabilities

### Admin Dashboard (React.js)
- 👥 User authentication and role management
- ✍️ Create, edit, and delete news articles
- 🖼️ Image gallery management
- 👨‍💼 Writer management (Admin only)
- 📊 Dashboard analytics
- 🏷️ Category management
- 👤 User profile management

### Backend API
- 🔐 JWT-based authentication
- 🛡️ Role-based access control (Admin/Writer)
- 📸 Cloudinary integration for image uploads
- 🔍 Advanced search and filtering
- 📊 News analytics and statistics

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Image Storage**: Cloudinary
- **Security**: bcrypt for password hashing
- **File Uploads**: Formidable

### Frontend (Public Website)
- **Framework**: Next.js 15.5.2
- **Styling**: TailwindCSS 4.x
- **UI Components**: Custom components with React Icons
- **Date Handling**: Moment.js
- **Carousel**: React Multi Carousel
- **Loading States**: React Spinners

### Admin Dashboard
- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.x
- **Styling**: TailwindCSS 4.x
- **Rich Text Editor**: Jodit React
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast
- **Icons**: React Icons

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Cloudinary account** (for image uploads)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd newsportalproject
```

### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install client (admin dashboard) dependencies
cd client
npm install
cd ..

# Install frontend (public website) dependencies
cd frontend
npm install
cd ..
```

### 3. Environment Setup
Create a [`.env`](.env) file in the root directory using the provided template:

```bash
cp .env.example .env
```

Then edit the [`.env`](.env) file with your actual configuration values. See [`.env.example`](.env.example) for all required variables.

**Important Configuration Notes:**
- Backend API runs on port `8000` (configurable via `PORT` environment variable)
- Client dashboard config should point to `http://localhost:8000` (update [`client/src/config/config.js`](client/src/config/config.js))
- Frontend config should point to `http://localhost:8000` (update [`frontend/config/config.js`](frontend/config/config.js))

### 4. Start the Application

#### Development Mode (All services)
```bash
npm run dev
```
This will start:
- Backend API server on `http://localhost:8000` (or your configured PORT)
- Admin dashboard on `http://localhost:5173`
- Public website on `http://localhost:3000`

**Note:** Ensure your client and frontend config files point to the correct backend API URL.

#### Individual Services
```bash
# Backend API only
npm run server

# Admin dashboard only
npm run client

# Public website only (from frontend directory)
cd frontend
npm run dev
```

#### Production Mode
```bash
# Build and start backend
npm start

# Build and start frontend (from frontend directory)
cd frontend
npm run build
npm start

# Build admin dashboard
npm run build
```

## 📁 Project Structure

```
newsportalproject/
├── 📄 server.js                 # Backend entry point
├── 📄 package.json             # Backend dependencies
├── 📁 controllers/             # API controllers
│   ├── authControllers.js      # Authentication logic
│   └── newsControllers.js      # News management logic
├── 📁 models/                  # MongoDB models
│   ├── authModel.js           # User model
│   ├── newsModel.js           # News article model
│   └── galleryModel.js        # Gallery model
├── 📁 routes/                  # API routes
│   ├── authRoutes.js          # Authentication routes
│   └── newsRoutes.js          # News routes
├── 📁 middlewares/            # Custom middlewares
│   └── middleware.js          # Auth & validation middleware
├── 📁 utilities/              # Utility functions
│   └── db.js                  # Database connection
├── 📁 client/                 # Admin Dashboard (React + Vite)
│   ├── 📁 src/
│   │   ├── 📁 dashboard/      # Dashboard components
│   │   ├── 📁 context/        # React Context
│   │   ├── 📁 middleware/     # Route protection
│   │   └── 📁 utils/          # Utility functions
│   └── 📄 package.json
└── 📁 frontend/               # Public Website (Next.js)
    ├── 📁 app/                # Next.js app directory
    ├── 📁 components/         # React components
    ├── 📁 config/             # Configuration files
    └── 📄 package.json
```

## 🔑 API Endpoints

### Authentication
- `POST /api/login` - User login
- `POST /api/register` - User registration (Admin only)
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile

### News Management
- `GET /api/news` - Get all news articles
- `GET /api/news/:id` - Get single news article
- `POST /api/news` - Create news article (Auth required)
- `PUT /api/news/:id` - Update news article (Auth required)
- `DELETE /api/news/:id` - Delete news article (Auth required)
- `GET /api/news/category/:category` - Get news by category
- `GET /api/search/news` - Search news articles

### Gallery
- `GET /api/gallery` - Get gallery images
- `POST /api/gallery` - Upload image (Auth required)
- `DELETE /api/gallery/:id` - Delete image (Auth required)

## 👥 User Roles

### Admin
- Full access to all features
- Can create, edit, and delete any news article
- Can manage writers (create, edit, delete accounts)
- Can manage categories
- Can manage gallery images
- Dashboard analytics access

### Writer
- Can create and edit their own news articles
- Can upload and manage their own images
- Limited dashboard access
- Cannot manage other users

## 🔧 Configuration

### Backend Configuration
The backend server is configured in [`server.js`](server.js) with:
- CORS settings for development and production
- Body parser for JSON requests
- Route handlers for authentication and news management
- Database connection setup

### Frontend Configuration
- **Next.js Config**: [`frontend/next.config.mjs`](frontend/next.config.mjs)
- **API Base URL**: [`frontend/config/config.js`](frontend/config/config.js)

### Client Configuration
- **Vite Config**: [`client/vite.config.js`](client/vite.config.js)
- **API Base URL**: [`client/src/config/config.js`](client/src/config/config.js)

## 🚀 Deployment

### Production Environment Variables
For production deployment, copy and configure the environment template:

```bash
cp .env.example .env
```

Set `MODE=production` and configure all production URLs and secrets. See [`.env.example`](.env.example) for the complete list of required variables.

### Deployment Steps
1. Build all applications
2. Set production environment variables
3. Deploy backend to your server (Heroku, DigitalOcean, etc.)
4. Deploy frontend to Vercel, Netlify, or similar
5. Deploy admin dashboard as a static site

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check existing documentation in the [`client/`](client/) and [`frontend/`](frontend/) directories

## 🔄 Development Workflow

1. **Backend Development**: Make changes in controllers, models, or routes
2. **Frontend Development**: Work in the [`frontend/`](frontend/) directory for public website
3. **Dashboard Development**: Work in the [`client/`](client/) directory for admin features
4. **Testing**: Test both admin and public interfaces
5. **Database Changes**: Update models and run database migrations if needed

---

Built with ❤️ using modern web technologies.
