const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({}, {timestamps : true});

export const Todo = mongoose.model("Todo", todoSchema);