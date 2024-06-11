import React from 'react';
import './App.css';
import './Components/Login';
import ButtonAppBar from './Components/NavBar';
import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
    <div>
    <ButtonAppBar/>
    <AppRoutes/>
    </div>
  )
}

export default App;