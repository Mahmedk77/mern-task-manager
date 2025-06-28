import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, UpdatePage } from './components'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:id" element={<UpdatePage />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
