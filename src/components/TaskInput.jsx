

const TaskInput = ({task, setTask, handleCreate}) => {
  return (
    <div className="relative mb-2">
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
            onClick={() => handleCreate()}
          >
            Enter
          </button>
    </div>
  )
}

export default TaskInput
