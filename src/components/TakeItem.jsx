import { SquarePen, Trash2Icon } from "lucide-react"
import Btns from "./Btns"
import { Link } from "react-router"


const TakeItem = ({ dataId, dataTask, handleDelete, checked }) => {
    return (
        <div
            className="flex justify-between items-center w-xl
    rounded-full hover:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.08)] py-4 px-2"
            key={dataId}
        >
            <p className={`w-[32rem] text-left first-letter:uppercase mx-3 cursor-default ${checked && `line-through`}`}>
                {dataTask}
            </p>
            <div className="flex justify-center items-center w-[10rem] gap-2">
                <Link to={`/${dataId}`}>
                    <Btns icon={'edit'} />
                </Link>
                <Btns icon={'remove'} handleDelete={() => handleDelete(dataId)} />
            </div>
        </div>
    )
}

export default TakeItem
