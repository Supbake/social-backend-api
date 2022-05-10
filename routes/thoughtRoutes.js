const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,

} = require('../controllers/thoughtController');

// /api/students
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction);
module.exports = router;