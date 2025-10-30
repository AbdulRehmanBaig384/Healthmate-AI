import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {  Heart,Upload, Activity,FileText, TrendingUp,  Calendar, Plus,ArrowRight, Brain,Shield,Clock,AlertCircle,CheckCircle, Star} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import LoadingSpinner from '../components/LoadingSpinner'
import axios from 'axios'

const Dashboard = () => {
  const { user } = useAuth()
  const { t, isUrdu } = useLanguage()
  const [loading, setLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState({
    recentReports: [],
    vitals: [],
    healthTips: [],
    friendlyMessage: '',
    stats: {
      totalReports: 0,
      totalVitals: 0,
      abnormalReadings: 0,
      lastUpload: null
    }
  })

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      
      // Fetch recent reports
      const reportsResponse = await axios.get('/api/reports?limit=3')
      
      // Fetch recent vitals
      const vitalsResponse = await axios.get('/api/vitals?limit=5')
      
      // Fetch AI insights
      const aiResponse = await axios.get('/api/ai/insights')
      
      setDashboardData({
        recentReports: reportsResponse.data.reports || [],
        vitals: vitalsResponse.data.vitals || [],
        healthTips: aiResponse.data.insights.healthTips || [],
        friendlyMessage: aiResponse.data.insights.friendlyMessage || '',
        stats: {
          totalReports: reportsResponse.data.total || 0,
          totalVitals: vitalsResponse.data.total || 0,
          abnormalReadings: vitalsResponse.data.vitals?.filter(v => !v.isNormal).length || 0,
          lastUpload: reportsResponse.data.reports?.[0]?.createdAt || null
        }
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      // Set default data on error
      setDashboardData({
        recentReports: [],
        vitals: [],
        healthTips: [
          isUrdu ? 'Rozana 8 glass pani piyein' : 'Drink 8 glasses of water daily',
          isUrdu ? '30 minutes walk karein' : 'Take a 30-minute walk',
          isUrdu ? 'Fresh fruits aur vegetables khayein' : 'Eat fresh fruits and vegetables'
        ],
        friendlyMessage: isUrdu 
          ? `Assalam-o-Alaikum ${user?.name}! Aaj apna khayal rakhiye aur healthy rahiye! 🌟`
          : `Hello ${user?.name}! Take care of yourself today and stay healthy! 🌟`,
        stats: {
          totalReports: 0,
          totalVitals: 0,
          abnormalReadings: 0,
          lastUpload: null
        }
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingSpinner text={isUrdu ? 'Dashboard load ho raha hai...' : 'Loading dashboard...'} />
  }

  const quickActions = [
    {
      title: isUrdu ? 'Report Upload Karein' : 'Upload Report',
      description: isUrdu ? 'Medical report upload karein aur AI analysis paayein' : 'Upload medical report and get AI analysis',
      icon: Upload,
      link: '/reports/upload',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: isUrdu ? 'Vitals Add Karein' : 'Add Vitals',
      description: isUrdu ? 'BP, Sugar, Weight add karein' : 'Add BP, Sugar, Weight readings',
      icon: Activity,
      link: '/vitals',
      color: 'from-green-500 to-green-600'
    },
    {
      title: isUrdu ? 'Reports Dekhein' : 'View Reports',
      description: isUrdu ? 'Apne sabhi reports dekhein' : 'View all your reports',
      icon: FileText,
      link: '/reports',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const stats = [
    {
      title: isUrdu ? 'Total Reports' : 'Total Reports',
      value: dashboardData.stats.totalReports,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: isUrdu ? 'Vital Readings' : 'Vital Readings',
      value: dashboardData.stats.totalVitals,
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: isUrdu ? 'Abnormal Values' : 'Abnormal Values',
      value: dashboardData.stats.abnormalReadings,
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: isUrdu ? 'Health Score' : 'Health Score',
      value: '85%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {isUrdu ? `Khush Amdeed, ${user?.name}!` : `Welcome back, ${user?.name}!`}
              </h1>
              <p className="text-lg text-gray-600">
                {isUrdu 
                  ? 'Apni health journey continue karein'
                  : 'Continue your health journey'
                }
              </p>
            </div>
            <div className="hidden md:block">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isUrdu ? 'Quick Actions' : 'Quick Actions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="card card-hover p-6"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {action.description}
                  </p>
                  <Link
                    to={action.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    {isUrdu ? 'Start Karein' : 'Get Started'}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Reports */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {isUrdu ? 'Recent Reports' : 'Recent Reports'}
                </h2>
                <Link
                  to="/reports"
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  {isUrdu ? 'Sab Dekhein' : 'View All'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              {dashboardData.recentReports.length > 0 ? (
                <div className="space-y-4">
                  {dashboardData.recentReports.map((report, index) => (
                    <motion.div
                      key={report._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{report.title}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(report.reportDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {report.isAnalyzed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Clock className="w-5 h-5 text-orange-500" />
                        )}
                        <span className="text-sm text-gray-500">
                          {report.isAnalyzed 
                            ? (isUrdu ? 'Analyzed' : 'Analyzed')
                            : (isUrdu ? 'Processing' : 'Processing')
                          }
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">
                    {isUrdu ? 'Abhi tak koi reports nahi hain' : 'No reports yet'}
                  </p>
                  <Link
                    to="/reports/upload"
                    className="btn-primary"
                  >
                    {isUrdu ? 'Pehla Report Upload Karein' : 'Upload First Report'}
                  </Link>
                </div>
              )}
            </div>
          </motion.div>

          {/* AI Insights Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Friendly Message */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {isUrdu ? 'AI Message' : 'AI Message'}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {dashboardData.friendlyMessage}
              </p>
            </div>

            {/* Health Tips */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {isUrdu ? 'Health Tips' : 'Health Tips'}
                </h3>
              </div>
              <div className="space-y-3">
                {dashboardData.healthTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Vitals */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {isUrdu ? 'Recent Vitals' : 'Recent Vitals'}
                  </h3>
                </div>
                <Link
                  to="/vitals"
                  className="text-primary-600 hover:text-primary-700"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {dashboardData.vitals.length > 0 ? (
                <div className="space-y-3">
                  {dashboardData.vitals.slice(0, 3).map((vital, index) => (
                    <div key={vital._id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 capitalize">
                          {vital.type.replace('_', ' ')}
                        </p>
                        <p className="text-sm text-gray-500">
                          {vital.formattedValue}
                        </p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        vital.isNormal ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {vital.isNormal ? (isUrdu ? 'Normal' : 'Normal') : (isUrdu ? 'Abnormal' : 'Abnormal')}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <Activity className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">
                    {isUrdu ? 'Koi vitals nahi hain' : 'No vitals recorded'}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
