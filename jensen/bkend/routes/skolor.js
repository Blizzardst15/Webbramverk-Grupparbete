const express = require('express');
const router = express.Router();
const { getSkolor, addSkola, deleteSkola } = require('../controllers/skolor');

router
  .route('/')
  .get(getSkolor)
  .post(addSkola);

router
  .route('/:id')
  .delete(deleteSkola);

module.exports = router;