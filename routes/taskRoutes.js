const express = require("express");
const router = express.Router();

const { 
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").put(updateTask).get(getTask).delete(deleteTask);

module.exports = router;