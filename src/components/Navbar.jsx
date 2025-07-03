import { CodeXml, House } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pop
    w-5xl p-2 px-4 rounded-full  
    absolute top-4 left-1/2 -translate-x-1/2 z-50  isolate bg-white/20 shadow-lg ring-1 ring-black/5 cursor-pointer font-semibold"
    >
        <Link to={'/home'}>
        <button className='flex  justify-center gap-2 items-center w-[7rem] 
        rounded-full border-black p-2 cursor-pointer bg-white hover:text-white
        transition-all duration-200 hover:bg-black'>
            <House />
            Home
        </button>
        </Link>
        
        <button className='flex justify-center gap-2 items-center w-[10rem] cursor-pointer rounded-full p-2 bg-white hover:text-white
        transition-all duration-200 hover:bg-black'>
            <CodeXml />
            Source Code
        </button>
    </div>
  )
}

export default Navbar
