const router = require("express").Router();


const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUserBonus,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUserBonus)

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router
