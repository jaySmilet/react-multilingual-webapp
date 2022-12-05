import * as React from 'react';
import { BrowserRouter, Route, Routes}  from "react-router-dom";
import Home from './pages/Home';

import './style.css';

export default function App() {
  return (
    ]<BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    ]</BrowserRouter>
  );
}
