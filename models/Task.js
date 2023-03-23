const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String
    },
    completed: {
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);