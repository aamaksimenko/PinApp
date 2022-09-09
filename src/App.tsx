import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import styles from './App.module.css';
import { navigation } from './constants';

import { Home } from './pages/Home';
import { Pin } from './pages/Pin';

export function App() {
  return (
    <main className={styles.appBackground}>
      <BrowserRouter>
        <Routes>
          <Route path={navigation.home} element={<Home />} />
          <Route path={navigation.pin} element={<Pin />} />
          <Route path='*' element={<Navigate to='/pin' replace />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
