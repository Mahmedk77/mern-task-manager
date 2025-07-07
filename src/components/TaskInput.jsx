

const TaskInput = ({task, setTask, handleCreate}) => {
  return (
    <div className="relative mb-5 bg-white rounded-full pop w-xl ">
          <input
            className="w-xl px-5 py-3 text-sm font-light focus:outline-none" 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="type here..."
            
          />
          
          <button
            className="absolute right-[2px] top-[2px] text-center w-[7rem] text-md font-semibold tracking-wider
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
    