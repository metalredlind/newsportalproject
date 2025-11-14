# News Portal Application

A modern, full-stack news portal application built with React, Next.js, Node.js, and MongoDB. This application features a complete content management system for news publishing with both admin dashboard and public-facing frontend.

## 🌟 Features

### Admin Dashboard (React + Vite)
- **News Management**: Create, edit, delete news articles with rich text editor
- **Writer Management**: Manage writers and their profiles
- **Image Gallery**: Upload and manage images with Cloudinary integration
- **Authentication**: Secure JWT-based authentication system
- **Role-based Access**: Admin and writer role management
- **Rich Text Editor**: Jodit editor for content creation
- **Responsive Design**: Tailwind CSS for modern UI

### Public Frontend (Next.js)
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **News Categories**: Organized news by categories (Technology, Sports, Health, etc.)
- **Search Functionality**: Search news articles
- **SEO Optimized**: Next.js for better SEO and performance
- **Dynamic Routing**: Category and news detail pages
- **Latest/Popular/Recent News**: Multiple news display formats
- **Marquee Headlines**: Scrolling headline display

### Backend API (Node.js + Express)
- **RESTful API**: Complete CRUD operations for news and users
- **MongoDB Integration**: NoSQL database for scalability
- **JWT Authentication**: Secure token-based authentication
- **Cloudinary Integration**: Image upload and management
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: Secure environment variable management

## 🛠️ Technology Stack

### Frontend (Admin Dashboard)
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Jodit React** - Rich text editor
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

### Frontend (Public Site)
- **Next.js 15** - React framework for production
- **React 19** - Modern React
- **Tailwind CSS** - Utility-first CSS framework
- **React Multi Carousel** - Carousel component
- **React Fast Marquee** - Marquee component

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image hosting service
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (cloud database)
- Cloudinary account (for image uploads)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd newsportalproject
```

### 2. Install Dependencies

#### Root Directory (Backend)
```bash
npm install
```

#### Admin Dashboard
```bash
cd client
npm install
```

#### Public Frontend
```bash
cd frontend
npm install
```

### 3. Environment Configuration

Copy the `.env.example` file to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Server Configuration
PORT=8000
MODE=development

# Database Configuration (MongoDB Atlas)
db_local_url=mongodb+srv://username:password@cluster.mongodb.net/newsportal
db_production_url=mongodb+srv://username:password@cluster.mongodb.net/newsportal

# JWT Configuration
JWT_SECRET=your_very_secure_jwt_secret_key_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Additional Configuration
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

### 4. Database Setup

This project uses **MongoDB Atlas** (cloud database) for data storage. The database connection is automatically configured based on the environment:

- **Development**: Uses the MongoDB Atlas connection string from `db_local_url` in `.env`
- **Production**: Uses the MongoDB Atlas connection string from `db_production_url` in `.env`

The application will automatically connect to MongoDB Atlas when started. Ensure your MongoDB Atlas cluster is properly configured and the connection string is correctly set in your `.env` file.

### 5. Start the Application

You can start all services simultaneously using:

```bash
npm run dev
```

Or start them individually:

#### Backend Server
```bash
npm run server
```

#### Admin Dashboard
```bash
npm run client
```

#### Public Frontend
```bash
cd frontend
npm run dev
```

## 🚀 Available Scripts

### Root Directory
- `npm run dev` - Start backend server and admin dashboard concurrently
- `npm run server` - Start only the backend server
- `npm run client` - Start only the admin dashboard
- `npm run start` - Start the backend server in production mode
- `npm run build` - Build the admin dashboard for production

### Admin Dashboard (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Public Frontend (frontend/)
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 📁 Project Structure

```
newsportalproject/
├── client/                    # Admin Dashboard (React + Vite)
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── dashboard/        # Admin dashboard pages & components
│   │   ├── context/          # React context for state management
│   │   ├── middleware/       # Route protection middleware
│   │   └── utils/            # Utility functions
│   └── public/               # Static assets
├── frontend/                 # Public Frontend (Next.js)
│   ├── app/                  # Next.js app directory
│   │   ├── news/             # News-related pages
│   │   └── search/           # Search functionality
│   ├── components/           # Reusable components
│   └── public/               # Static assets
├── controllers/              # Backend controllers
├── models/                   # MongoDB models
├── routes/                   # API routes
├── middlewares/              # Backend middleware
├── utilities/                # Backend utilities
└── server.js                 # Main server file
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### News
- `GET /api/all/news` - Get all news articles
- `GET /api/news/:id` - Get specific news article
- `POST /api/news/add` - Create new news article
- `PUT /api/news/update/:id` - Update news article
- `DELETE /api/news/delete/:id` - Delete news article

### Images
- `GET /api/images` - Get all images
- `POST /api/images/add` - Upload new images

## 🔐 Authentication & Authorization

The application uses JWT (JSON Web Token) based authentication with role-based access control:

- **Admin Role**: Full access to all features including user management
- **Writer Role**: Can create, edit, and delete their own news articles

Protected routes are implemented using custom middleware to ensure secure access.

## 🖼️ Image Management

Images are managed through Cloudinary integration, providing:
- Secure image uploads
- Automatic image optimization
- CDN delivery for fast loading
- Image gallery management in admin dashboard

## 🎨 UI/UX Features

### Admin Dashboard
- Modern, clean interface with Tailwind CSS
- Responsive design for mobile and desktop
- Rich text editor for content creation
- Image preview and gallery management
- Toast notifications for user feedback
- Loading states and spinners

### Public Frontend
- SEO-optimized pages with Next.js
- Fast page loads with static generation
- Responsive grid layouts
- Category-based news organization
- Search functionality
- Marquee headlines for breaking news

## 🧪 Development Tips

### Database Setup with MongoDB Atlas

1. **Create MongoDB Atlas Account**: Sign up at https://www.mongodb.com/cloud/atlas
2. **Create Cluster**: Set up a new cluster in your preferred region
3. **Configure Database Access**: Create a database user with appropriate permissions
4. **Configure Network Access**: Add your IP address to the whitelist
5. **Get Connection String**: Copy the connection string from Atlas dashboard
6. **Update .env File**: Replace the placeholder connection strings with your actual Atlas connection string

Example MongoDB Atlas connection string format:
```
mongodb+srv://username:password@cluster.mongodb.net/newsportal
```

### Database Seeding
You can create initial data by making POST requests to the API endpoints or using MongoDB Atlas web interface to manually add documents.

### Testing
- Use different browsers to test responsive design
- Test image uploads with various file formats and sizes
- Verify JWT token expiration and refresh mechanisms
- Test role-based access control with different user types

### Performance Optimization
- Enable MongoDB indexing on frequently queried fields
- Use Next.js image optimization for public frontend
- Implement caching strategies for frequently accessed data
- Monitor Cloudinary usage and optimize image sizes

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Atlas Connection Issues**
   - Ensure your MongoDB Atlas cluster is running
   - Check connection string format in `.env` file
   - Verify network access/IP whitelist in Atlas dashboard
   - Confirm database user credentials are correct
   - Check if your IP address is whitelisted in Atlas

2. **Cloudinary Upload Issues**
   - Verify Cloudinary credentials in `.env` file
   - Check file size limits
   - Ensure proper file formats

3. **CORS Issues**
   - Check `ALLOWED_ORIGINS` in `.env` file
   - Verify frontend URLs match your development setup

4. **JWT Authentication Issues**
   - Ensure `JWT_SECRET` is properly configured
   - Check token expiration settings
   - Verify Authorization header format

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Author

Monel S - Initial work and development

## 🙏 Acknowledgments

- React community for amazing libraries
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first approach
- Cloudinary for image management services
- MongoDB for the flexible NoSQL database

---

For questions, issues, or contributions, please open an issue on the GitHub repository.