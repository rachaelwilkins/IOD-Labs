import { useState } from 'react'
import React from 'react';
import NavBar from './Components/Navbar';
import './App.css';
import AppRoutes from './Routes/AppRoutes';


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
