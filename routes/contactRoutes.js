const express = require("express");
const router = express.Router();
const { 
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact
} = require("../controllers/contactsController");

const validateToken = require("../middleware/validationTokenHandler");
router.use(validateToken);

router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;