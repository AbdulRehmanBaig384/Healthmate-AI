import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

// Language translations
const translations = {
  en: {
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    reports: 'Reports',
    vitals: 'Vitals',
    profile: 'Profile',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    
    // Common
    welcome: 'Welcome',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    upload: 'Upload',
    download: 'Download',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    
    // Auth
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    name: 'Name',
    rememberMe: 'Remember Me',
    forgotPassword: 'Forgot Password?',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    signUp: 'Sign Up',
    signIn: 'Sign In',
    
    // Dashboard
    healthOverview: 'Health Overview',
    recentReports: 'Recent Reports',
    vitalSigns: 'Vital Signs',
    healthTips: 'Health Tips',
    friendlyMessage: 'Friendly Message',
    uploadNewReport: 'Upload New Report',
    addVitalReading: 'Add Vital Reading',
    
    // Reports
    medicalReports: 'Medical Reports',
    reportType: 'Report Type',
    reportDate: 'Report Date',
    uploadReport: 'Upload Report',
    reportAnalysis: 'Report Analysis',
    abnormalValues: 'Abnormal Values',
    doctorQuestions: 'Questions for Doctor',
    dietSuggestions: 'Diet Suggestions',
    homeRemedies: 'Home Remedies',
    confidence: 'Confidence',
    
    // Vitals
    bloodPressure: 'Blood Pressure',
    bloodSugar: 'Blood Sugar',
    weight: 'Weight',
    heartRate: 'Heart Rate',
    temperature: 'Temperature',
    oxygenSaturation: 'Oxygen Saturation',
    systolic: 'Systolic',
    diastolic: 'Diastolic',
    reading: 'Reading',
    unit: 'Unit',
    time: 'Time',
    notes: 'Notes',
    normal: 'Normal',
    high: 'High',
    low: 'Low',
    critical: 'Critical',
    
    // Profile
    profileSettings: 'Profile Settings',
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    language: 'Language',
    avatar: 'Avatar',
    
    // Messages
    welcomeMessage: 'Welcome to HealthMate! Your AI-powered health companion.',
    loginSuccess: 'Login successful! Welcome back!',
    registerSuccess: 'Registration successful! Welcome to HealthMate!',
    logoutSuccess: 'Logged out successfully!',
    uploadSuccess: 'Report uploaded and analyzed successfully!',
    updateSuccess: 'Updated successfully!',
    deleteSuccess: 'Deleted successfully!',
    
    // Errors
    loginError: 'Login failed. Please check your credentials.',
    registerError: 'Registration failed. Please try again.',
    uploadError: 'Upload failed. Please try again.',
    networkError: 'Network error. Please check your connection.',
    serverError: 'Server error. Please try again later.',
    
    // Disclaimer
    disclaimer: 'AI analysis is for educational purposes only. Please consult with healthcare professionals for medical advice.',
    
    // Time periods
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Evening',
    night: 'Night',
    
    // Report types
    bloodTest: 'Blood Test',
    urineTest: 'Urine Test',
    xray: 'X-Ray',
    ctScan: 'CT Scan',
    mri: 'MRI',
    ecg: 'ECG',
    other: 'Other'
  },
  
  ur: {
    // Navigation
    home: 'Ghar',
    dashboard: 'Dashboard',
    reports: 'Reports',
    vitals: 'Vitals',
    profile: 'Profile',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    
    // Common
    welcome: 'Khush Amdeed',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    upload: 'Upload',
    download: 'Download',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    
    // Auth
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    name: 'Name',
    rememberMe: 'Remember Me',
    forgotPassword: 'Forgot Password?',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    signUp: 'Sign Up',
    signIn: 'Sign In',
    
    // Dashboard
    healthOverview: 'Health Overview',
    recentReports: 'Recent Reports',
    vitalSigns: 'Vital Signs',
    healthTips: 'Health Tips',
    friendlyMessage: 'Friendly Message',
    uploadNewReport: 'Upload New Report',
    addVitalReading: 'Add Vital Reading',
    
    // Reports
    medicalReports: 'Medical Reports',
    reportType: 'Report Type',
    reportDate: 'Report Date',
    uploadReport: 'Upload Report',
    reportAnalysis: 'Report Analysis',
    abnormalValues: 'Abnormal Values',
    doctorQuestions: 'Questions for Doctor',
    dietSuggestions: 'Diet Suggestions',
    homeRemedies: 'Home Remedies',
    confidence: 'Confidence',
    
    // Vitals
    bloodPressure: 'Blood Pressure',
    bloodSugar: 'Blood Sugar',
    weight: 'Weight',
    heartRate: 'Heart Rate',
    temperature: 'Temperature',
    oxygenSaturation: 'Oxygen Saturation',
    systolic: 'Systolic',
    diastolic: 'Diastolic',
    reading: 'Reading',
    unit: 'Unit',
    time: 'Time',
    notes: 'Notes',
    normal: 'Normal',
    high: 'High',
    low: 'Low',
    critical: 'Critical',
    
    // Profile
    profileSettings: 'Profile Settings',
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    language: 'Language',
    avatar: 'Avatar',
    
    // Messages
    welcomeMessage: 'HealthMate mein khush amdeed! Aap ka AI-powered health companion.',
    loginSuccess: 'Login successful! Welcome back!',
    registerSuccess: 'Registration successful! Welcome to HealthMate!',
    logoutSuccess: 'Logged out successfully!',
    uploadSuccess: 'Report uploaded and analyzed successfully!',
    updateSuccess: 'Updated successfully!',
    deleteSuccess: 'Deleted successfully!',
    
    // Errors
    loginError: 'Login failed. Please check your credentials.',
    registerError: 'Registration failed. Please try again.',
    uploadError: 'Upload failed. Please try again.',
    networkError: 'Network error. Please check your connection.',
    serverError: 'Server error. Please try again later.',
    
    // Disclaimer
    disclaimer: 'AI analysis sirf educational purposes ke liye hai. Medical advice ke liye healthcare professionals se consult karein.',
    
    // Time periods
    morning: 'Subah',
    afternoon: 'Dopahar',
    evening: 'Sham',
    night: 'Raat',
    
    // Report types
    bloodTest: 'Blood Test',
    urineTest: 'Urine Test',
    xray: 'X-Ray',
    ctScan: 'CT Scan',
    mri: 'MRI',
    ecg: 'ECG',
    other: 'Other'
  }
}

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('healthmate-language') || 'en'
  })

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('healthmate-language', language)
  }, [language])

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en')
  }

  // Get translation function
  const t = (key) => {
    return translations[language][key] || key
  }

  // Check if current language is Urdu
  const isUrdu = language === 'ur'

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isUrdu,
    translations: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
