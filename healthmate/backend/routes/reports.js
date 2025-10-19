const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { upload, handleUploadError } = require('../middleware/upload');
const {
  uploadReport,
  getReports,
  getReport,
  updateReport,
  deleteReport,
  reanalyzeReport
} = require('../controllers/reportController');

// All routes are protected
router.use(protect);

// Upload report with file
router.post('/upload', upload.single('file'), handleUploadError, uploadReport);

// Get all reports
router.get('/', getReports);

// Get single report
router.get('/:id', getReport);

// Update report
router.put('/:id', updateReport);

// Delete report
router.delete('/:id', deleteReport);

// Re-analyze report
router.post('/:id/analyze', reanalyzeReport);

module.exports = router;
