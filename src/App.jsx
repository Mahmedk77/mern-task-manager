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
      <Route exact path="/start" element={<Home />} />
      <Route exact path="/update/:id" element={<UpdatePage />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
