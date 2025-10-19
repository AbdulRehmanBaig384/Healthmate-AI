const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Report title is required'],
    trim: true
  },
  type: {
    type: String,
    enum: ['blood_test', 'urine_test', 'xray', 'ct_scan', 'mri', 'ecg', 'other'],
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  reportDate: {
    type: Date,
    required: true
  },
  aiAnalysis: {
    summary: {
      english: String,
      urdu: String
    },
    abnormalValues: [{
      parameter: String,
      value: String,
      normalRange: String,
      severity: {
        type: String,
        enum: ['low', 'normal', 'high', 'critical']
      }
    }],
    doctorQuestions: [String],
    dietSuggestions: [String],
    homeRemedies: [String],
    confidence: {
      type: Number,
      min: 0,
      max: 100
    },
    analyzedAt: {
      type: Date,
      default: Date.now
    }
  },
  isAnalyzed: {
    type: Boolean,
    default: false
  },
  tags: [String],
  notes: String
}, {
  timestamps: true
});

// Index for better query performance
reportSchema.index({ user: 1, reportDate: -1 });
reportSchema.index({ user: 1, type: 1 });

module.exports = mongoose.model('Report', reportSchema);
