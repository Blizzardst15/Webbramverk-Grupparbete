const express = require('express')
const router = express.Router()
const {getSkolor, 
    setSkola, 
    updateSkola, 
    deleteSkola
    } = require ('../controllers/skolaController')

    const { protect} = require ('../middleware/authMiddleware')

router.route('/').get(protect, getSkolor).post(protect, setSkola)
router.route('/:id').delete(protect, deleteSkola).put(protect, updateSkola)

 module.exports = router