import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Components/HomePage5';
import SignIn from '../Components/LoginPage5';
import BitcoinPage from '../Components/BitcoinPage5';


function AppRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Homepage/>} /> 
    <Route path='/login' element={<SignIn/>} /> 
    <Route path='/bitcoin' element={<BitcoinPage/>} /> 
    </Routes>
    </div>
  )
}

export default AppRoutes;