import React from 'react'
import { Link } from 'react-router'

const FirstPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 sm:gap-[6rem]'>
    <h1 className='text-white text-4xl sm:text-[4rem] orb
     leading-tight text-center tracking-wide'>
        Welcome To <br /> 
        Task Manager 
    </h1>
    <p className='text-gray-300 font-extralight text-center tracking-wider pop text-sm sm:text-xl'>
        A minimal task manager built for speed and  <br />
        focus. Quickly add, edit, or remove tasks to  <br />
        stay productive throughout your day.
    </p>

    <Link to={'/start'}>
    <button className='orb text-white p-2 rounded-3xl w-[10rem] tracking-wider
    text-xl text-center isolate bg-white/10 shadow-lg ring-1 ring-black/5 cursor-pointer hover:bg-white/20 transition-all duration-200'>
        START
    </button>
    </Link>
    </div>
        

  )
}


export default FirstPage
