import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import './App.css';

import { Home } from './pages/Home';
import { Pin } from './pages/Pin';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/pin' element={<Pin />} />
        <Route path='*' element={<Navigate to='/pin' replace />} />
      </Routes>
    </BrowserRouter>
  );
}
