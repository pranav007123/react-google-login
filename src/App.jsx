
import { Route , Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<LoginPage/>} ></Route>
      <Route path='/dashboard' element={<DashboardPage/>} ></Route>

     </Routes>
    </>
  )
}

export default App
