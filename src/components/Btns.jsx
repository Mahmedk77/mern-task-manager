import { SquarePen, Trash2Icon } from 'lucide-react'
import React from 'react'

const Btns = ({icon, handleDelete, handleUpdate}) => {
    
    const handleClick = () => {
        if (icon == 'edit') handleUpdate()
        if (icon == 'remove') handleDelete()
    }
  return (
    <button className="rounded-full w-[1.8rem] cursor-pointer aspect-[1/1] 
    flex justify-center items-center p-1 bg-amber-500 hover:bg-amber-600"
     onClick={handleClick}>
        {
            (icon == 'edit') && <SquarePen size={"1.1rem"} color="white"/> ||
            (icon == 'remove') &&  <Trash2Icon size={"1.1rem"} color="white" />
        }
    </button>
  )
}

export default Btns
