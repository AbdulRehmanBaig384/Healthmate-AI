const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  addVital,
  getVitals,
  getVital,
  updateVital,
  deleteVital,
  getVitalsSummary
} = require('../controllers/vitalController');

// All routes are protected
router.use(protect);

// Get vitals summary
router.get('/summary', getVitalsSummary);

// Get all vitals
router.get('/', getVitals);

// Add vital reading
router.post('/', addVital);

// Get single vital
router.get('/:id', getVital);

// Update vital
router.put('/:id', updateVital);

// Delete vital
router.delete('/:id', deleteVital);

module.exports = router;
