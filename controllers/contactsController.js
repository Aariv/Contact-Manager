const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// @access public 
const getContacts = asyncHandler(async (req, res) => {
    res
    .status(200)
    .json({message: "Get all contacts"});
});

// @desc Create a contact
// @route POST /api/contacts
// @access public 
const createContact = asyncHandler( async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res
    .status(201)
    .json({message: "Contact created"});
});


// @desc Update a contact
// @route PUT /api/contacts
// @access public 
const updateContact = asyncHandler (async (req, res) => {
    res
    .status(200)
    .json({message: "Contact Updated"});
});


// @desc Get a contact
// @route GET /api/contacts
// @access public 
const getContact = asyncHandler( async (req, res) => {
    res
    .status(200)
    .json({message: `Contact ${req.params.id}`});
});

// @desc Delete a contact
// @route DELETE /api/contacts
// @access public 
const deleteContact = asyncHandler( async (req, res) => {
    res
    .status(200)
    .json({message: `Delete Contact ${req.params.id}`});
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };