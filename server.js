const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json()); // Convert all the request & response as JSON
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/tasks', require("./routes/taskRoutes"));

app.use(errorHandler); // Error Handler

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});