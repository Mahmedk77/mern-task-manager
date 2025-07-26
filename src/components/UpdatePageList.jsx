
const UpdatePageList = ({heading, id, task, setTask, handleCheck, flag}) => {
  return (
    <>
        <h3 className="text-base sm:text-2xl font-semibold">{heading}:</h3>
        {heading == "Task ID" && (
        <p className="text-center text-sm sm:text-lg font-normal">{id}</p>
        )}
        {heading == "Name" && (
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-[18rem] ml-2 sm:ml-0 rounded-md pl-2 py-2 font-normal text-sm
            isolate bg-white/10 shadow-lg ring-1 ring-black/5"
            placeholder="Add text here..."
        />
        )}
        {heading == "Completed" && (
        <input
            type="checkbox"
            className="mr-auto p-2 ml-2 size-5"
            onChange={handleCheck}
            checked={flag}
        />
              )}
    </>
  )
}

export default UpdatePageList
