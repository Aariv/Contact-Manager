const asyncHandler = require("express-async-handler");
const Contact = require("../models/Contact");

// @desc Get all tasks
// @route GET /api/tasks
// @access public 
const getTasks = asyncHandler(async (req, res) => {
    const contacts = Contact.find();
    res
    .status(200)
    .json(contacts);
});

// @desc Create a task
// @route POST /api/tasks
// @access public 
const createTask = asyncHandler( async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, completed} = req.body;
    if(!name) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const task = await Task.create({
        name, completed
    });
    if(task) {
        res.status(201).json({_id: task.id, completed: task.email});
    } else {
        res.status(400);
        throw new Error("Task data isn't valid");
    }
    res
    .status(201)
    .json({message: "Task created"});
});


// @desc Update a contact
// @route PUT /api/tasks/:id
// @access public 
const updateTask = asyncHandler (async (req, res) => {
    res
    .status(200)
    .json({message: "Task Updated"});
});


// @desc Get task
// @route GET /api/tasks/:id
// @access public 
const getTask = asyncHandler( async (req, res) => {
    const task = Contact.findById(req.params.id);
    res
    .status(200)
    .json(task);
});

// @desc Delete a task
// @route DELETE /api/tasks/:id
// @access public 
const deleteTask = asyncHandler( async (req, res) => {
    const task = Task.findById(req.params.id);
    if(!task) {
        res.status(400);
        throw new Error("No task found");
    }
    await task.deleteOne(req.params.id);
    res
    .status(200)
    .json({message: `Deleted task ${task.name}`});
});

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };