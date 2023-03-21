const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
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
    const user = await User.create({
        username, email, password: hashedPassword
    });
    console.log(`User Created ${user}`);
    if(user) {
        res.status(201).json({_id: user.id, email: user.email});
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    res
    .status(200)
    .json({message: `Create a user ${req.body}`});
});

// @desc Login user
// @route POST /api/users/login
// @access public 
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({email});
    // Compare password
    if(user && (await bcrypt.compare(password, user.password))) {
        // Provide access token
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                },
            }, 
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "1m"
            }
        );
        res.status(200).json({accessToken});
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
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

module.exports = { getUsers, getUser, createUser, loginUser, updateUser, deleteUser };