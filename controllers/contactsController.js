const asyncHandler = require("express-async-handler");
const Contact = require("../models/Contact");

// @desc Get all contacts
// @route GET /api/contacts
// @access public 
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res
    .status(200)
    .json(contacts);
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
    console.log("Validation completed");
    const data = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });
    console.log("POJO constructed", req.body);
    try {
        const dataToSave = await data.save();
        console.log("Data Persisted ", dataToSave);
    } catch (error) {
        res.status(400).json({message: error.message});
        console.log("Error");
    }
    res
    .status(201)
    .json({message: "Contact created"});
});


// @desc Update a contact
// @route PUT /api/contacts/:id
// @access public 
const updateContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res
    .status(200)
    .json(updatedContact);
});


// @desc Get contact
// @route GET /api/contacts/:id
// @access public 
const getContact = asyncHandler( async (req, res) => {
    const contact = Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res
    .status(200)
    .json(contact);
});

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access public 
const deleteContact = asyncHandler( async (req, res) => {
    console.debug("Delete Call");
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await contact.deleteOne(req.params.id);
    res
    .status(200)
    .json(contact);
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };