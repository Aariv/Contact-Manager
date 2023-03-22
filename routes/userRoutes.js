const express = require("express");
const router = express.Router();

const {
    getUsers,
    getUser,
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    currentUser
} = require("../controllers/usersController");

const validationToken = require("../middleware/validationTokenHandler");

router.route("/").get(getUsers).post(createUser);
router.route("/login").post(loginUser);
router.get("/current", validationToken, currentUser);
router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);

module.exports = router;