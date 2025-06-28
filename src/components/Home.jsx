import { useEffect, useState } from "react";
import {Heading, TasksList, VerificationMsg, TaskInput} from './';
import { getAllTasks, createTask, deleteTask } from "../utils/taskAPI.js";
import {Trash2Icon } from "lucide-react";

function Home() {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const [getTasks, setGetTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
    // console.log(getTasks)
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks();
      setGetTasks(res?.data?.data);
      console.log(res?.data?.data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async () => {
    try {
      task && (await createTask(task));
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

  const handleUpdate = () => {
    try {
      

    } catch (error) {
      
    }
  }

  return (
    <section className="bg-black flex justify-center items-center ">
      <div
        className="w-3xl h-[30rem] bg-[hsl(30,33%,99%)]
     text-black text-center p-8 flex flex-col justify-start items-center gap-2 "
      >
        <Heading />
        <TaskInput task={task} setTask={setTask} handleCreate={handleCreate} />
        <VerificationMsg message={message} setMessage={setMessage} />
        <TasksList  getTasks={getTasks} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      </div>
    </section>
  );
}

export default Home;

