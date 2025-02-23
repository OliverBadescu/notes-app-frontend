import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import { UserProvider } from './services/api/userContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <UserProvider>

      <Router>
        <Routes>
          <Route path='/' element ={<Login/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/home' element ={<Home/>}/>
        </Routes>
      </Router>
      
    </UserProvider>
     
    </>
  )
}

export default App
