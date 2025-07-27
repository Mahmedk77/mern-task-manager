import axios from "axios";

const BASE_URL = "mern-task-manager-production-eda3.up.railway.app/api/v1/task/";
export const getAllTasks = async () => axios.get(BASE_URL);
export const createTask = async (task) => axios.post(BASE_URL, {task});
export const deleteTask = async (taskId) => axios.delete(BASE_URL, {data: {task : taskId}});
export const updateTask = async (task, id, flag) => axios.put(`${BASE_URL}update/${id}`, {task, flag})
export const getTask = async (id) => axios.get(`${BASE_URL}${id}`)
