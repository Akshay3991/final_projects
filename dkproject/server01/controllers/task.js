import ErrorHandler from "../middlewares/err.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        await Task.create({
            title,
            description: description,
            user: req.user,
        });
        res.status(201).json({
            success: true,
            message: "Task Added Successfully"
        })
    } catch (error) {
        next(error);
    }


}

export const getMyTask = async (req, res, next) => {
    try {
        const userid = req.user._id;

        const tasks = await Task.find({ user: userid });
        res.status(200).json({
            success: true,
            tasks,
        })
    } catch (error) {
        next(error);
    }
}
export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const tasks = await Task.findById(id);
        if (!tasks) {
            return next(new ErrorHandler("Task Not Found!", 404))
        }
        tasks.isCompleted = !tasks.isCompleted
        await tasks.save()
        res.status(200).json({
            success: true,
            message: "Task Updated Successfully!"
        })
    } catch (error) {
        next(error);
    }
}
export const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const tasks = await Task.findById(id);
        if (!tasks) {
            return next(new ErrorHandler("Task Not Found!", 404))
        }
        await tasks.deleteOne()
        res.status(200).json({
            success: true,
            message: "Task Deleted Successfully!"
        })
    } catch (error) {
        next(error);
    }
}
