import './App.css'
import { Home } from './pages'
import { Route, Routes, NavLink } from 'react-router-dom'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/about" element={<Home/>}/>
      </Route>

        <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
