const express = require("express");
const router = express.Router();

const {
    getUsers,
    getUser,
    createUser,
    loginUser,
    updateUser,
    deleteUser
} = require("../controllers/usersController");

router.route("/").get(getUsers).post(createUser);
router.route("/login").post(loginUser);
router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);

module.exports = router;