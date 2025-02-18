import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

export default function App() {
  const [username, setUsername] = useState('');

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setUsername={setUsername} />} />
          <Route path="/dashboard" element={<Dashboard username={username} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
