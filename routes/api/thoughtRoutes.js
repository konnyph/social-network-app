const router = require('express').Router();


const {
  createThought,
  getThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);

router.route('/:userId').post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought);

router.route('/:thoughtId/users/:userIdno').delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

//export router
module.exports = router;