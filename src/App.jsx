import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import { UserProvider } from './services/state/userContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Route/ProtectedRoute'


function App() {

  return (
    <>

    <UserProvider>

      <Router>
        <Routes>
          <Route path='/' element ={<Login/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/home' element ={ 
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
            />
        </Routes>
      </Router>
      
    </UserProvider>
     
    </>
  )
}

export default App
