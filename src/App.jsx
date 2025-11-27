import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import React, { useState } from 'react'
import { Grid } from '@mui/material';
function App() {
     const[showLogin,setShowlogin] = useState(false)

    return (
        <>
            
             <Header onLoginClick={() => setShowlogin(true)} />
            
            <Routes>
                   
                <Route path='/' element={<div className="container"><Home /></div>} />
                    
                    <Route path='/about' element={<div className='container'><About /></div>} />
                
                <Route path='/contact' element={<div className='container'><Contact/></div>}/>
            </Routes>
             
                <Login show={showLogin} onClose={() => setShowlogin(false)} />
              
             
        </>
    )
}
export default App;