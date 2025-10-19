# 🚀 HealthMate Startup Guide

## Quick Start Instructions

### 1. **Set Up Environment Variables**

Edit the `.env` file in the `healthmate/backend/` directory:

```env
# Database (Get from MongoDB Atlas - Free tier available)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healthmate

# JWT Secret (Generate a random string)
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_EXPIRE=7d

# Cloudinary (Get from cloudinary.com - Free tier available)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Gemini AI (Get from makersuite.google.com - Free tier available)
GEMINI_API_KEY=your_gemini_api_key_here

# Server
PORT=5000
NODE_ENV=development
```

### 2. **Get Required API Keys**

#### MongoDB Atlas (Free)
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free account
3. Create a new cluster
4. Get connection string
5. Replace `<password>` with your database password

#### Google Gemini API (Free)
1. Go to [makersuite.google.com](https://makersuite.google.com)
2. Create API key
3. Copy the key to your `.env` file

#### Cloudinary (Free)
1. Go to [cloudinary.com](https://cloudinary.com)
2. Create free account
3. Get cloud name, API key, and secret from dashboard

### 3. **Start the Application**

#### Terminal 1 - Backend
```bash
cd healthmate/backend
npm install
npm run dev
```
Backend will run on: http://localhost:5000

#### Terminal 2 - Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend will run on: http://localhost:3000

### 4. **Access the Application**

1. Open your browser
2. Go to: http://localhost:3000
3. Register a new account
4. Start using HealthMate!

## 🎯 Demo Credentials (Optional)

You can also use these demo credentials:
- **Email**: demo@healthmate.com
- **Password**: demo123

## 🔧 Troubleshooting

### Backend Issues
- Make sure MongoDB connection string is correct
- Check if all environment variables are set
- Ensure port 5000 is not in use

### Frontend Issues
- Make sure backend is running on port 5000
- Check browser console for errors
- Clear browser cache if needed

### Common Errors
1. **MongoDB Connection Error**: Check your connection string
2. **Gemini API Error**: Verify your API key is correct
3. **Cloudinary Error**: Check your cloudinary credentials
4. **Port Already in Use**: Change PORT in .env file

## 📱 Features to Test

1. **Registration/Login**: Create account and login
2. **Language Toggle**: Switch between English and Roman Urdu
3. **Upload Report**: Upload a medical report (PDF/image)
4. **AI Analysis**: Wait for AI to analyze your report
5. **Add Vitals**: Add blood pressure, sugar, weight readings
6. **Dashboard**: View your health overview
7. **Profile**: Update your profile settings

## 🚀 Ready for Hackathon!

Your HealthMate application is now ready to:
- ✅ Analyze medical reports with AI
- ✅ Track vital signs
- ✅ Provide bilingual support
- ✅ Generate health insights
- ✅ Beautiful modern UI

**Good luck with your hackathon! 🏆**
