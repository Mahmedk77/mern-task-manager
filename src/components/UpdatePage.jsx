import { data } from "../utils/data";

const UpdatePage = () => {
  return (
    <section className="bg-blue-100 h-screen flex justify-center items-center">
      <div className="border-2 w-2xl h-[25rem] bg-white rounded-xl flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-extrabold mb-[3rem] "> Edit Task </h1>
        {data.map((element) => {
          return (
            <div
              className="flex justify-between items-center w-[28rem] gap-8 mb-6 "
              key={element.id}
            >
              <h3 className="text-xl font-bold">{element.heading}:</h3>
              {element.heading == "Task ID" && (
                <p className="w-xs text-center text-lg font-normal">1234..</p>
              )}
              {element.heading == "Name" && (
                <input
                  type="text"
                  className="w-[18rem] rounded-md bg-gray-100"
                />
              )}
              {element.heading == "Completed" && (
                <input type="checkbox" className="mr-auto p-2 size-4" />
              )}
            </div>
          );
        })}
        <button className="bg-orange-400 text-white w-xs rounded-sm font-bold hover:bg-orange-500 cursor-pointer p-1">
          Update
        </button>
      </div>
    </section>
  );
};

export default UpdatePage;
