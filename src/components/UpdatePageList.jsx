
const UpdatePageList = ({heading, id, task, setTask, handleCheck, flag}) => {
  return (
    <>
        <h3 className="text-xl font-bold">{heading}:</h3>
        {heading == "Task ID" && (
        <p className="w-xs text-center text-lg font-normal">{id}</p>
        )}
        {heading == "Name" && (
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-[18rem] rounded-md bg-gray-100 p-2 pl-3 font-light text-sm"
            placeholder="Add text here..."
        />
        )}
        {heading == "Completed" && (
        <input
            type="checkbox"
            className="mr-auto p-2 size-4"
            onChange={handleCheck}
            checked={flag}
        />
              )}
    </>
  )
}

export default UpdatePageList
