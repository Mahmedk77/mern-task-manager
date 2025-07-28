import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, UpdatePage } from './components'
import Navbar from './components/Navbar'
import FirstPage from './components/FirstPage'


const App = () => {
  return (
    <BrowserRouter>
    <section className=' bg-black h-screen w-full flex justify-center items-start relative pop' >
    <div className="w-sm sm:w-3xl lg:w-7xl h-[95%] bg-[url('/456.png')]  bg-cover bg-center 
    bg-no-repeat rounded-b-3xl gap-[2rem] shadow-2xl 
    shadow-blue-500/20 flex  items-center flex-col">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<FirstPage />} />
      <Route exact path="/start" element={<Home />} />
      <Route exact path="/update/:id" element={<UpdatePage />} />
    </Routes>

    </div>
    </section>
    
      
    </BrowserRouter>
  )
}

export default App
