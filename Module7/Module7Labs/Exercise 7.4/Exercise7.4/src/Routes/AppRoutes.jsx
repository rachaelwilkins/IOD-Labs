import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BitcoinPage from '../Components/Bitcoinpage';
import LogIn from '../Components/Login';
import Homepage from '../Components/Homepage';

function AppRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Homepage/>} /> 
    <Route path='/login' element={<LogIn/>} /> 
    <Route path='/bitcoin' element={<BitcoinPage/>} /> 
    </Routes>
    </div>
  )
}

export default AppRoutes;