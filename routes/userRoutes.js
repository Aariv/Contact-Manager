const express = require("express");
const router = express.Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/usersController");

router.route("/").get(getUsers).post(createUser);
router.route(":/id").put(updateUser).delete(deleteUser).get(getUser);

module.exports = router;