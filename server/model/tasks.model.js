import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        minLength: 2,
        maxLength: 50,
        require: [true, "Please Enter a Task"],
        trim: true,
        lowercase: true
    },
    completed:{
        type: Boolean,
        default: false
    }
}, {timestamps:true})

const Task = mongoose.model('Task', taskSchema)

export default Task