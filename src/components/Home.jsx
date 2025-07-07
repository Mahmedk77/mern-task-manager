import { useEffect, useState } from "react";
import {Heading, TasksList, VerificationMsg, TaskInput} from './';
import { getAllTasks, createTask, deleteTask } from "../utils/taskAPI.js";

function Home() {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const [getTasks, setGetTasks] = useState([]);
  const [empty, setEmpty] = useState("No Tasks Found");

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
    <section className=' bg-black h-screen flex justify-center items-start relative pop' >
    <div className="w-7xl h-[95%] bg-[url('/456.png')]  bg-cover bg-center 
    bg-no-repeat rounded-b-3xl gap-[6rem] shadow-2xl 
    shadow-blue-500/20 flex justify-center items-center">
        {/* <Heading /> */}
        <div className=" h-[30rem] flex items-center justify-start flex-col mt-[7rem] gap-[5rem]">
          <TaskInput task={task} setTask={setTask} handleCreate={handleCreate} />
        <TasksList  getTasks={getTasks} handleDelete={handleDelete} empty={empty} />
        <VerificationMsg message={message} />
        </div>
      </div>
    </section>
  );
}

export default Home
