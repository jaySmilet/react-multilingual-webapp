import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/nav/Header';

// Components
import Home from './pages/Home';
import Profile from './pages/Profile';

import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
