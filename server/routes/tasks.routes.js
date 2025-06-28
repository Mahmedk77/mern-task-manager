import {Router} from 'express';
import { createTask,  deleteTask,  getAllTasks, updateTask } from '../controller/tasks.controller.js';

const taskRoute = Router()

taskRoute.get('/', getAllTasks)

taskRoute.post('/', createTask)

taskRoute.put('/:id', updateTask)

taskRoute.delete('/', deleteTask)

export default taskRoute;