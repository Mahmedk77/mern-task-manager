

const TaskInput = ({task, setTask, handleCreate}) => {
  return (
    <div className="relative mb-5 bg-white rounded-full pop w-[19rem] sm:w-xs md:w-xl border-white border-2 ">
          <input
            className="w-[15rem] sm:w-xs md:w-xl px-5 py-2 sm:py-3 text-sm font-light focus:outline-none" 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="type here..."
            
          />
          
          <button
            className="absolute right-0 top-0  text-center w-[5rem] sm:w-[7rem]  text-sm sm:text-lg font-semibold tracking-wider
        rounded-full border-black p-2 cursor-pointer text-gray-300
        transition-all duration-200 bg-black focused-none hover:text-white"
            onClick={() => handleCreate()}
          >
            enter
          </button>
    </div>
  )
}

export default TaskInput
    // <button 
    