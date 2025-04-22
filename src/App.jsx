import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import About from './pages/About'
import Explore from './pages/Explore'
import Shop from './pages/Shop'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
function App() {



  return (
    <>
    
   <Navbar/>
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='shop' element={<Shop/>}/>
    </Routes>
   </div>
   <Footer/>
    </>
  )
}

export default App
