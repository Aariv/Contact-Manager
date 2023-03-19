const asyncHandler = require("express-async-handler");

// @desc Get all tasks
// @route GET /api/tasks
// @access public 
const getTasks = asyncHandler(async (req, res) => {
    res
    .status(200)
    .json({message: "Get all tasks"});
});

// @desc Create a task
// @route POST /api/tasks
// @access public 
const createTask = asyncHandler( async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
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
    res
    .status(200)
    .json({message: `Task ${req.params.id}`});
});

// @desc Delete a task
// @route DELETE /api/tasks/:id
// @access public 
const deleteTask = asyncHandler( async (req, res) => {
    res
    .status(200)
    .json({message: `Delete task ${req.params.id}`});
});

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };