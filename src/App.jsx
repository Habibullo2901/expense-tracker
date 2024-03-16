import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Addexpense from './routes/Addexpense'
import History from './routes/History'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addexpense' element={<Addexpense />}/>
          <Route path='/history' element={<History />}/>
        </Routes>
      </div>
        <Navbar />
    </>
  )
}

export default App
