import { useEffect, useState } from "react";
import {Heading, TasksList, VerificationMsg, TaskInput} from './';
import { getAllTasks, createTask, deleteTask } from "../utils/taskAPI.js";

import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const [getTasks, setGetTasks] = useState([]);
  const [empty, setEmpty] = useState("Looks like your task list is empty!");
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    fetchTasks(true);
  }, []);

  const fetchTasks = async (showLoading = true ) => {
    if (showLoading) setIsLoading(true);
    try {
      const res = await getAllTasks();
  
      setGetTasks(res?.data?.data);
      // console.log(res?.data?.data);
      
    } catch (error) {
      // console.log(error);
    } finally{
      setIsLoading(false);
    }
  };

  const handleCreate = async () => {
    try {
      
      if(task){
        await createTask(task);
        await fetchTasks(true);
        setMessage("Task Created Sucessfully");
      } else{
        setMessage("Please enter a task")
      }

      setTimeout(() => setMessage(""), 2000)
      

      setTask("");
    } catch (error) {
      // console.log(error);
      setMessage("Task Creation Error");
      setTask("")
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setMessage('Task Deleted');
      await fetchTasks(false);
      setMessage('')
    } catch (error) {
      // console.log(error);
    }
  };
  return ( 
    <div className=" h-[30rem]  flex items-center justify-start flex-col mt-[7rem] gap-4 sm:gap-[2rem]">
          <TaskInput task={task} setTask={setTask} handleCreate={handleCreate} />
          {isLoading ? <ClipLoader color={"white"} loading={true} size={20} /> : <TasksList  getTasks={getTasks} handleDelete={handleDelete} empty={empty} />}
          <VerificationMsg message={message} />
    </div>
  )
}

export default Home;


