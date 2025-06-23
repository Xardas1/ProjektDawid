// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import FacebookPage from './components/FacebookPage';
import Error_page from './components/Error_Page';
import Success from './components/Success';

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/facebook" element={<FacebookPage />} />
    <Route path='/error_page' element={<Error_page />} />
    <Route path="/success" element={<Success /> } />
    {/* add more routes here */}
  </Routes>
);

export default App;
