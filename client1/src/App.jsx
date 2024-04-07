import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Courses from './components/Courses';
import Login from './pages/Login';
import Register from './pages/register';
import Lectures from './components/Lectures';
const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/lectures" element={<Lectures/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
