const express = require("express");
const router = express.Router();
const { 
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact
} = require("../controllers/contactsController");

router.route("/").get(getContact).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;