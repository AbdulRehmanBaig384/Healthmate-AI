const mongoose = require('mongoose');

const vitalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['blood_pressure', 'blood_sugar', 'weight', 'heart_rate', 'temperature', 'oxygen_saturation'],
    required: true
  },
  value: {
    systolic: Number, // for blood pressure
    diastolic: Number, // for blood pressure
    reading: Number, // for other vitals
    unit: String
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  time: {
    type: String, // e.g., "morning", "afternoon", "evening", "night"
    default: 'morning'
  },
  notes: String,
  isNormal: {
    type: Boolean,
    default: true
  },
  severity: {
    type: String,
    enum: ['normal', 'low', 'high', 'critical'],
    default: 'normal'
  }
}, {
  timestamps: true
});

// Index for better query performance
vitalSchema.index({ user: 1, date: -1 });
vitalSchema.index({ user: 1, type: 1, date: -1 });

// Virtual for formatted value display
vitalSchema.virtual('formattedValue').get(function() {
  if (this.type === 'blood_pressure') {
    return `${this.value.systolic}/${this.value.diastolic} ${this.value.unit}`;
  }
  return `${this.value.reading} ${this.value.unit}`;
});

module.exports = mongoose.model('Vital', vitalSchema);
