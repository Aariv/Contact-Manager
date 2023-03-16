const asyncHandler = require("express-async-handler");

// @desc Get all users
// @route GET /api/users
// @access public 
const getUsers = asyncHandler(async (req, res) => {
    res
    .status(200)
    .json({message: "Get all users"});
});

// @desc Get a user
// @route GET /api/users/:id
// @access public 
const getUser = asyncHandler(async (req, res) => {
    res
    .status(200)
    .json({message: `Get a user ${req.params.id}`});
});

// @desc Create a user
// @route POST /api/users
// @access public 
const createUser = asyncHandler(async (req, res) => {
    res
    .status(200)
    .json({message: `Create a user ${req.body}`});
});

// @desc Update a user
// @route PUT /api/users/:id
// @access public 
const updateUser = asyncHandler(async (req, res) => {
    res
    .status(200)
    .json({message: `Update a user ${req.params.id}`});
});

// @desc Delete a user
// @route DELETE /api/users/:id
// @access public 
const deleteUser = asyncHandler(async (req, res) => {
    res
    .status(200)
    .json({message: `Delete a user ${req.params.id}`});
});

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };