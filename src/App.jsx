import './App.css'
import { Home } from './pages'
import { Route, Routes } from 'react-router-dom'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  return (
    <>
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
