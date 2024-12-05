import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/HOME/Home'
import Login from './views/Login/Login'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Contact from './views/Home/Contact/Contact'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Login />}/>
        <Route path='/home' element ={<Home />}/>
        <Route path='/myappointments' element ={<MyAppointments />}/>
        <Route path='/register' element ={<Register />}/>
        <Route path='/Contact' element ={<Contact />}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
