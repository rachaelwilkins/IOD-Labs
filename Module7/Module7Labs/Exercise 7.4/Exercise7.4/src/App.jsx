import React from 'react';
import NavBar from './Components/Navbar';
import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { BrowserRouter } from 'react-dom'

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
      <NavBar/>
      <AppRoutes/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
