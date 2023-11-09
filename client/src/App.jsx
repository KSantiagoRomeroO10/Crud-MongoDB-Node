import { Route, Routes } from 'react-router-dom'

import Read from './Components/Read/Read'
import Create from './Components/Create/Create'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Read/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </>
  ) 
}

export default App
