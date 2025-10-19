# HealthMate Backend API

AI-powered health companion backend built with Node.js, Express, MongoDB, and Gemini AI.

## Features

- 🔐 JWT Authentication (Register/Login)
- 📄 Medical Report Upload & AI Analysis
- 💊 Vitals Tracking (BP, Sugar, Weight, etc.)
- 🤖 Gemini AI Integration
- ☁️ Cloudinary File Storage
- 📊 Health Insights & Tips
- 🌐 Bilingual Support (English/Roman Urdu)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Storage**: Cloudinary
- **AI**: Google Gemini API
- **Security**: Helmet, CORS, Rate Limiting

## Environment Variables

Create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healthmate

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here

# Server
PORT=5000
NODE_ENV=development
```

## Installation

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/logout` - Logout user

### Reports
- `POST /api/reports/upload` - Upload medical report
- `GET /api/reports` - Get all reports
- `GET /api/reports/:id` - Get single report
- `PUT /api/reports/:id` - Update report
- `DELETE /api/reports/:id` - Delete report
- `POST /api/reports/:id/analyze` - Re-analyze report

### Vitals
- `POST /api/vitals` - Add vital reading
- `GET /api/vitals` - Get all vitals
- `GET /api/vitals/summary` - Get vitals summary
- `GET /api/vitals/:id` - Get single vital
- `PUT /api/vitals/:id` - Update vital
- `DELETE /api/vitals/:id` - Delete vital

### AI
- `GET /api/ai/health-tips` - Get health tips
- `GET /api/ai/friendly-message` - Get friendly message
- `GET /api/ai/insights` - Get AI insights

## Project Structure

```
backend/
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # MongoDB models
├── routes/         # API routes
├── utils/          # Utility functions
├── server.js       # Main server file
└── package.json    # Dependencies
```

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation
- File upload restrictions

## AI Integration

The backend integrates with Google Gemini AI to:
- Analyze medical reports
- Generate health tips
- Provide friendly messages
- Support bilingual responses (English/Roman Urdu)

## Deployment

The backend is designed to be deployed on Render or similar platforms. Make sure to set all environment variables in your deployment environment.
