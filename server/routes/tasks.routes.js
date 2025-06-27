import {Router} from 'express';
import { createTask,  deleteTask,  getAllTasks } from '../controller/tasks.controller.js';

const taskRoute = Router()

taskRoute.get('/', getAllTasks)

taskRoute.post('/', createTask)

taskRoute.put('/:id', (req, res) => {
    res.send('update this Task')  
})

taskRoute.delete('/', deleteTask)

export default taskRoute;