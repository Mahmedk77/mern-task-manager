import { useEffect, useState } from "react";
import { data } from "../utils/data";
import { getTask, updateTask } from "../utils/taskAPI";
import { Link, useParams } from "react-router-dom";
import { UpdatePageList, VerificationMsg } from "./";

const UpdatePage = () => {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await getTask(id);
        console.log(res);
        console.log(res?.data?.data?.task)
        console.log(res?.data?.data?.completed)

        setTask(res?.data?.data?.task);
        setFlag(res?.data?.data?.completed)
      } catch (error) {
        console.log(error);
      }
    };
    fetchTask();
  }, [id]); //since our useEffect depends on Id so its better to add it as dependency

  const handleCheck = () => {
    setFlag((prev) => !prev);
    // console.log("loading flag...", isChecked);
  };

  const handleUpdate = async () => {
    await updateTask(task, id, flag);
    setMessage("Task Updated Successfully");
  };

  return (
    <section className="bg-blue-100 h-screen flex flex-col justify-center items-center gap-10">
      <div className="border-2 w-2xl h-[25rem] bg-white rounded-xl flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-extrabold mb-[3rem] "> Edit Task </h1>
        {data.map((element) => {
          return (
            <div
              className="flex justify-between items-center w-[28rem] gap-8 mb-6 "
              key={element.id}
            >
            <UpdatePageList  heading={element.heading} id={id} task={task} flag={flag}
            setTask={setTask}  handleCheck={handleCheck} 
            />
            </div>
          );
        })}
        <button
          className="bg-orange-400 text-white w-xs rounded-sm font-bold
         hover:bg-orange-500 cursor-pointer p-1"
          onClick={handleUpdate}
        >
          Update
        </button>
        <VerificationMsg message={message} />
      </div>
      <Link to={"/"}>
        <button
          className="w-sm p-2 text-white bg-gray-950 font-bold rounded-md
         hover:text-gray-300 cursor-pointer"
        >
          Back to Tasks
        </button>
      </Link>
    </section>
  );
};

export default UpdatePage;

