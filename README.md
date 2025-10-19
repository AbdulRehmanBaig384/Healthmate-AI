# 🏥 HealthMate - Sehat ka Smart Dost

> AI-powered health companion that analyzes medical reports and provides health insights

![HealthMate Banner](https://via.placeholder.com/800x200/0ea5e9/ffffff?text=HealthMate+-+AI+Health+Companion)

## 🌟 Features

### 🔐 Authentication & Security
- **JWT-based authentication** with secure login/register
- **Password hashing** with bcrypt
- **Protected routes** and middleware
- **Rate limiting** and security headers

### 📄 Medical Report Analysis
- **File upload** (PDF, PNG, JPG) with Cloudinary storage
- **AI-powered analysis** using Google Gemini API
- **Bilingual summaries** (English + Roman Urdu)
- **Abnormal value detection** with severity levels
- **Doctor questions generation**
- **Diet suggestions** and home remedies

### 💊 Vitals Tracking
- **Manual vitals input** (BP, Sugar, Weight, Heart Rate, etc.)
- **Normal/abnormal detection** with color coding
- **Timeline view** of all readings
- **Statistics and trends**

### 🤖 AI Integration
- **Gemini 1.5 Flash** for report analysis
- **Health tips generation** in user's preferred language
- **Friendly messages** personalized for users
- **Confidence scoring** for AI analysis

### 🎨 Beautiful UI/UX
- **Glassmorphism design** with modern gradients
- **Framer Motion animations** for smooth interactions
- **Mobile responsive** design
- **Dark/light theme** support
- **Bilingual interface** (English ↔ Roman Urdu)

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Axios** for API calls
- **React Hot Toast** for notifications
- **React Dropzone** for file uploads

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Cloudinary** for file storage
- **Google Gemini AI** for analysis
- **Helmet** for security
- **Morgan** for logging

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas
- **File Storage**: Cloudinary

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account
- Cloudinary account
- Google Gemini API key

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/healthmate.git
cd healthmate
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
cp env.example .env

# Edit .env with your credentials
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healthmate
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
NODE_ENV=development

# Start backend server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install

# Start frontend development server
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📱 Usage

### 1. Registration & Login
- Create a new account or login with existing credentials
- Choose your preferred language (English/Roman Urdu)

### 2. Upload Medical Reports
- Go to "Upload Report" section
- Select PDF or image file
- Fill in report details (title, type, date)
- AI will automatically analyze the report

### 3. View AI Analysis
- Get bilingual summary of your report
- See abnormal values with severity levels
- Get questions to ask your doctor
- Receive diet suggestions and home remedies

### 4. Track Vitals
- Add manual vital readings (BP, Sugar, Weight, etc.)
- View timeline of all readings
- Get normal/abnormal status indicators

### 5. Dashboard Overview
- See recent reports and vitals
- Get AI-generated health tips
- View statistics and trends

## 🔧 API Endpoints

### Authentication
```
POST /api/auth/register    - Register new user
POST /api/auth/login       - Login user
GET  /api/auth/me          - Get current user
PUT  /api/auth/profile     - Update profile
POST /api/auth/logout      - Logout user
```

### Reports
```
POST /api/reports/upload   - Upload medical report
GET  /api/reports          - Get all reports
GET  /api/reports/:id      - Get single report
PUT  /api/reports/:id      - Update report
DELETE /api/reports/:id    - Delete report
```

### Vitals
```
POST /api/vitals           - Add vital reading
GET  /api/vitals           - Get all vitals
GET  /api/vitals/summary   - Get vitals summary
PUT  /api/vitals/:id       - Update vital
DELETE /api/vitals/:id     - Delete vital
```

### AI
```
GET /api/ai/health-tips    - Get health tips
GET /api/ai/friendly-message - Get friendly message
GET /api/ai/insights       - Get AI insights
```

## 🌐 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables
5. Deploy automatically on push

### Environment Variables for Production
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healthmate
JWT_SECRET=your_production_jwt_secret
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
NODE_ENV=production
```

## 🎯 Key Features Explained

### AI Report Analysis
- Uses Google Gemini 1.5 Flash model
- Analyzes medical reports without OCR
- Provides bilingual summaries
- Detects abnormal values with confidence scores
- Generates actionable recommendations

### Bilingual Support
- Complete interface in English and Roman Urdu
- AI responses in both languages
- Language toggle in navigation
- User preference saved in profile

### Security Features
- JWT token authentication
- Password hashing with bcrypt
- Rate limiting on API endpoints
- CORS protection
- Helmet security headers
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for powerful medical analysis
- **Cloudinary** for reliable file storage
- **MongoDB Atlas** for database hosting
- **Vercel** and **Render** for deployment
- **Tailwind CSS** and **Framer Motion** for beautiful UI

## 📞 Support

For support, email support@healthmate.com or create an issue in the repository.

## ⚠️ Disclaimer

**Important**: This application is for educational and informational purposes only. The AI analysis should not be considered as medical advice. Always consult with qualified healthcare professionals for medical decisions and treatment.

---

**Made with ❤️ for better health management**
