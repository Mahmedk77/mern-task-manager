import { CodeXml, House } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pop
    w-xs sm:w-xl md:w-3xl lg:w-4xl py-2 px-2 sm:px-4 rounded-full mt-12 sm:mt-5
     isolate bg-white/20 shadow-lg ring-1 ring-black/5 cursor-pointer font-semibold"
    >
        <Link to={'/'}>
        <button className='flex  justify-center gap-2 items-center w-[4rem] sm:w-[7rem] 
        rounded-full border-black text-sm font-medium px-2 py-1 sm:p-2 cursor-pointer bg-white hover:text-white
        transition-all duration-200 hover:bg-black'>
            <House className='hidden sm:block'/>
            Home
        </button>
        </Link>
        <a href="https://github.com/Mahmedk77/mern-task-manager" target="_blank" rel="noopener noreferrer">
        <button className='flex justify-center gap-2 items-center
        text-sm px-2 py-1 sm:p-2  w-[7rem] sm:w-[10rem] font-medium cursor-pointer rounded-full p-2 bg-white hover:text-white
        transition-all duration-200 hover:bg-black'>
            <CodeXml className='hidden sm:block'/>
            Source Code
        </button>
        </a>
    </div>
  )
}

export default Navbar
