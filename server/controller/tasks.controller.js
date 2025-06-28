import Task from '../model/tasks.model.js';

export const createTask = async (req, res, next) => {
    try {
        const { task } = req.body;
        const duplicate = await Task.findOne({ task });
        if (duplicate) {
            res.status(409).json({
                success: false,
                message: "Task already exists"
            })
        }

        const taskData = await Task.create({ task });

        res.status(201).json({
            success: true,
            data: taskData
        })
    } catch (error) {
        next(error);
    }

}

export const getAllTasks = async (req, res, next) => {
    try {
        const allTasks = await Task.find();

        if (!allTasks) {
            res.status(404).json({
                success: false,
                message: "No tasks found"
            })
        }
        res.status(200).json({
            success: true,
            data: allTasks
        })
    } catch (error) {
        next(error);

    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const { task } = req.body;
        const deletedObj = await Task.findByIdAndDelete(task);

        if (!deletedObj) {
            res.status(404).json({
                success: false,
                message: 'No Task Found'
            })
        }


        res.status(201).json({
            success: true,
            message: 'Task Deleted',
            data: deletedObj
        })
    } catch (error) {
        next(error);
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const newData  = req.body;

        const updatedTask = await Task.findByIdAndUpdate(taskId, newData, {
            new: true,
            runValidators: true
        })

        if (!updatedTask) {
            res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }

        res.status(200).json({
            success: true,
            data: updatedTask
        })
    } catch (error) {
        next(error);

    }
}