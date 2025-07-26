import {Router} from 'express';
import { createTask,  deleteTask,  getAllTasks, getTask, updateTask } from '../controller/tasks.controller.js';

const taskRoute = Router()

taskRoute.get('/:id', getTask)

taskRoute.get('/', getAllTasks)

taskRoute.post('/', createTask)

taskRoute.put('/update/:id', updateTask)

taskRoute.delete('/', deleteTask)


export default taskRoute;