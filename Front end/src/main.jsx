import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Zone from './pages/Zone.jsx';
import Footer from './components/Footer.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/zone' element={<Zone/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
