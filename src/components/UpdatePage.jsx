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
    // <section className=' bg-black h-screen flex justify-center items-start relative' >
    
    // <section className="bg-black h-screen flex flex-col justify-center items-center gap-10 pop">
    // <div className="w-sm sm:w-7xl h-[95%] bg-[url('/456.png')]  bg-cover bg-center 
    // bg-no-repeat rounded-b-3xl gap-[6rem] shadow-2xl 
    // shadow-blue-500/20 flex justify-center items-center flex-col ">
      <div className="flex flex-col justify-center items-center h-[38rem]">
        <h1 className="text-3xl font-semibold  text-white mb-3 tracking-wide "> Edit Task </h1>
      <div className="w-xs sm:w-2xl sm:h-[25rem] text-white p-5
      isolate bg-white/10 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col justify-center items-center gap-5">
        {data.map((element) => {
          return (
            <div
              className="flex justify-between items-center w-xs sm:w-[28rem] gap-2 mb-6 p-3 sm:p-0 "
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
        <VerificationMsg message={message} />
      </div>
      <Link to={"/start"}>
        <button
          className="w-xs sm:w-sm p-2 mt-6  text-gray-300 text-md font-semibold rounded-md
         hover:text-white cursor-pointer
          isolate bg-white/5 shadow-lg ring-1 ring-black/5
          hover:bg-white/10 transition-all duration-200"
        >
          Back to Tasks
        </button>
      </Link>
      </div>
    //   </div>
    // </section>
  );
};

export default UpdatePage;



