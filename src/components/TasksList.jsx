import {TakeItem} from './index.js'
 
const TasksList = ({getTasks, handleDelete, handleUpdate}) => {
    return (

    <div
        className="overflow-y-auto overflow-x-hidden w-xl h-auto
    flex flex-col justify-center items-center m-2 space-x-1 scroll-smooth scroll-hidden"
    >
        {getTasks.map((data) => {
            
            return (
                <TakeItem handleDelete={handleDelete} 
                dataId={data._id} checked={data.completed}
                dataTask={data.task} key={data._id}/>
            );
        })}
    </div>


    )
}

export default TasksList
