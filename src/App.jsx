import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, UpdatePage } from './components'
import Navbar from './components/Navbar'
import FirstPage from './components/FirstPage'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<FirstPage />} />
      {/* <Route exact path="/home" element={<Home />} /> */}
      {/* <Route exact path="/:id" element={<UpdatePage />} /> */}
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
