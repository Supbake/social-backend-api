const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought,
    createThought,
    updateThought,

} = require('../controllers/thoughtController');

// /api/students
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought);

module.exports = router;