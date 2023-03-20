const express = require("express");
const mongoose = require('mongoose');
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5001;
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json()); // Convert all the request & response as JSON
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/tasks', require("./routes/taskRoutes"));

app.use(errorHandler); // Error Handler

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});