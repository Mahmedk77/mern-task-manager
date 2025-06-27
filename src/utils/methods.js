import { fetchFromAPI } from "./axios.js"


export const createTask = async (method, task) => {
   try {
    const res = fetchFromAPI(method, task);
    await getAllTasks(method='get');
    setTask("");
   } catch (error) {
    console.log(error);
   }


}

export const getAllTasks = async (method) => {
    try {
        console.log("getting tasks...");
        const res = fetchFromAPI(method)
        const tasks = res?.data?.data;
        
        console.log("updated tasks:", tasks);
        setGetTasks(tasks);
    
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteTasks = async (method = 'delete', taskId) => {
    try {
        console.log('deleting...');
        const res = fetchFromAPI(method, {data: {task: taskId}});

        getAllTasks(method = 'get');
        
    } catch (error) {
        console.log(error)
    }
    
}