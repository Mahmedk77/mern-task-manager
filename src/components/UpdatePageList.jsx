
const UpdatePageList = ({heading, id, task, setTask, handleCheck, flag}) => {
  return (
    <>
        <h3 className="text-2xl font-semibold">{heading}:</h3>
        {heading == "Task ID" && (
        <p className="w-xs text-center text-lg font-normal">{id}</p>
        )}
        {heading == "Name" && (
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-[18rem] rounded-md p-3 font-normal text-sm
            isolate bg-white/10 shadow-lg ring-1 ring-black/5"
            placeholder="Add text here..."
        />
        )}
        {heading == "Completed" && (
        <input
            type="checkbox"
            className="mr-auto p-2 size-5"
            onChange={handleCheck}
            checked={flag}
        />
              )}
    </>
  )
}

export default UpdatePageList
