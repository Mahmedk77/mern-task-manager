import {TakeItem} from './index.js'
 
const TasksList = ({getTasks, handleDelete, empty}) => {
    return (

    <div
        className=" 
    overflow-auto overflow-x-hidden 
    w-[19rem] sm:w-sm md:w-2xl rounded-xl p-5
    m-2 scroll-smooth h-[18rem] sm:h-[15rem]
    isolate bg-white/10 shadow-lg ring-1 ring-black/5" 
    >
        {getTasks.length == 0 ? <h1 className='text-white text-center h-full flex items-center justify-center'>{empty}</h1> : <div className='flex flex-col justify-center items-center gap-2 m-2'>
            {getTasks.map((data) => {
            
            return (
                <TakeItem handleDelete={handleDelete} 
                dataId={data._id} checked={data.completed}
                dataTask={data.task} key={data._id}/>
            );
        })}
        </div>}
        
    </div>


    )
}

export default TasksList


