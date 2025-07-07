import { SquarePen, Trash2Icon } from 'lucide-react'
import React from 'react'

const Btns = ({icon, handleDelete, handleUpdate}) => {
    
    const handleClick = () => {
        if (icon == 'remove') handleDelete()
    }
  return (
    <button className="rounded-full w-[1.8rem] cursor-pointer aspect-[1/1] 
    flex justify-center items-center p-1 "
     onClick={handleClick}>
        {
            (icon == 'edit') && <SquarePen size={"1.15rem"}   className='btn-hover'/> ||
            (icon == 'remove') &&  <Trash2Icon size={"1.15rem"} className='btn-hover'/>
        }
    </button>
  )
}

export default Btns
