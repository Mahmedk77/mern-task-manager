import axios from "axios";
import { useEffect, useState } from "react";
import { Trash2, Trash2Icon } from "lucide-react";
import { createTask, deleteTasks } from "./utils/methods.js";
import Header from "./components/Header.jsx";

function App() {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const [getTasks, setGetTasks] = useState([]);

  useEffect(() => {
    getAllTasks(method = 'get');
  }, []);

  const createTask = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/v1/task/", {
        task,
      });
      setMessage("Task Created Sucessfully");
      console.log(message);
      await getAllTasks();
      setTask("");
    } catch (error) {
      console.log(error);
      setMessage("Task Creation Error");
    }
  };
  const getAllTasks = async () => {
    try {
      console.log("getting tasks...");

      const res = await axios.get("http://localhost:5000/api/v1/task/");
      const tasks = res?.data?.data;

      console.log("updated tasks", tasks);
      setGetTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async (taskId) => {
    try {
      console.log('Deleting')
      console.log(taskId)
      const res = await axios.delete('http://localhost:5000/api/v1/task/', {data : {task: taskId}});
      console.log(res)
      getAllTasks()
      
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <div className="bg-black flex justify-center items-center ">
      <div
        className="w-3xl h-[30rem] bg-[hsl(30,33%,99%)]
     text-black text-center p-8 flex flex-col justify-start items-center gap-3 "
      >
        <Header task={task} setTask={setTask} />
        <div>
          <h1 className="text-4xl font-bold">Welcome...</h1>
          <p className="text-sm font-light ">to task manager</p>
        </div>
        <div className="relative  mb-2">
          <input
            className="w-xs rounded-2xl text-xs p-2 border-1"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task here..."
          />
          <button
            className="absolute right-[-1px] top-[0.5px] h-[2.085rem] text-white bg-orange-400 
        hover:bg-orange-500 cursor-pointer rounded-2xl w-[5.2rem] p-1 focused-none"
            onClick={() => createTask(method = 'post', task)}
          >
            Enter
          </button>
        </div>
        <div
          className="overflow-y-auto overflow-x-hidden w-xl h-auto
       flex flex-col justify-center items-center m-2 space-x-1 scroll-smooth"
        >
          {getTasks.map((data) => {
            return (
              <div
                className="flex justify-between items-center w-xl
                rounded-full hover:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.08)] py-4 px-2"
                key={data._id}
              >
                <p className="w-[32rem] text-left first-letter:uppercase mx-3 cursor-default">
                  {data.task}
                </p>
                <button
                  className="rounded-full w-[1.8rem] cursor-pointer aspect-[1/1] 
              flex justify-center items-center p-1 bg-amber-500"
              onClick={() => deleteTasks(data._id)}
                >
                  <Trash2Icon size={"1.1rem"} color="white" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

//
