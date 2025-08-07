import { use, useEffect, useState } from "react";
import { data } from "../utils/data";
import { getTask, updateTask } from "../utils/taskAPI";
import { Link, useParams } from "react-router-dom";
import { UpdatePageList, VerificationMsg } from "./";
import ClipLoader from "react-spinners/ClipLoader";

const UpdatePage = () => {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    await updateTask(task, id, flag);
    setIsLoading(false)
    setMessage("Task Updated Successfully");
  };

  return (

      <div className="flex flex-col justify-center items-center h-[38rem]">
        <h1 className="text-3xl font-semibold  text-white mb-3 tracking-wide "> Edit Task </h1>
      <div className="w-[17rem] sm:w-xs md:w-2xl lg:h-[25rem] text-white p-5
      isolate bg-white/10 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col justify-center items-center gap-5">
        {data.map((element) => {
          return (
            <div
              className="flex flex-col sm:flex-row justify-between items-center w-[15rem] sm:w-[28rem] gap-2 mb-0  sm:mb-6 "
              key={element.id}
            >
            <UpdatePageList  heading={element.heading} id={id} task={task} flag={flag}
            setTask={setTask}  handleCheck={handleCheck} 
            />
            </div>
          );
        })}
        <button
          className="bg-[#ffffffd1] w-[7rem] sm:w-xs rounded-full font-bold
         hover:bg-white text-black cursor-pointer p-1 sm:p-2 mt-3 text-base sm:text-xl transition-all duration-200 "
          onClick={handleUpdate}
        >
          Update
        </button>
        {
          isLoading 
          ? <ClipLoader color={"white"} loading={true} size={20} />
          : <VerificationMsg message={message} />
        }
        
      </div>
      <Link to={"/start"}>
        <button
          className="w-[10rem] sm:w-xs md:w-sm p-2 mt-2 lg:mt-6  text-gray-300 text-md font-semibold rounded-md
         hover:text-white cursor-pointer
          isolate bg-white/5 shadow-lg ring-1 ring-black/5
          hover:bg-white/10 transition-all duration-200"
        >
          Back to Tasks
        </button>
      </Link>
      </div>
 
  );
};

export default UpdatePage;



