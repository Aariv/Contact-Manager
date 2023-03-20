const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const User = require("../models/User");

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
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        res.send(400);
        throw new Error("All fields are mandatory");
    }
    const userAvalilable = await User.findOne({email});
    if(userAvalilable) {
        res.send(400);
        throw new Error("User already registered");
    }
    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed password", hashedPassword);
    res
    .status(200)
    .json({message: `Create a user ${req.body}`});
});

// @desc Login user
// @route POST /api/login
// @access public 
const loginUser = asyncHandler(async (req, res) => {
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