import { useEffect, useState } from "react";
import {Heading, TasksList, VerificationMsg, TaskInput} from './';
import { getAllTasks, createTask, deleteTask } from "../utils/taskAPI.js";

function Home() {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const [getTasks, setGetTasks] = useState([]);
  const [empty, setEmpty] = useState("Looks like your task list is empty!");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks();
      setGetTasks(res?.data?.data);
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async () => {
    try {

      task && (await createTask(task));
      // await createTask(task)
      setMessage("Task Created Sucessfully");
      await fetchTasks();
      setMessage('')

      setTask("");
    } catch (error) {
      console.log(error);
      setMessage("Task Creation Error");
      setTask("")
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setMessage('Task Deleted')
      await fetchTasks();
      setMessage('')
    } catch (error) {
      console.log(error);
    }
  };
  return ( 
    <div className=" h-[30rem] flex items-center justify-start flex-col mt-[7rem] gap-[5rem]">
          <TaskInput task={task} setTask={setTask} handleCreate={handleCreate} />
          <TasksList  getTasks={getTasks} handleDelete={handleDelete} empty={empty} />
          <VerificationMsg message={message} />
    </div>
  )
}

export default Home

