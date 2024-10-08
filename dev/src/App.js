import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './layout/AppRoutes';
import { Navbar } from './layout/shared/component/C-NavBar/navbar';
import './App.css'

function App() {
  return (
    <div className='container'>
      <Router>
        <div >
          <div className='navbar-area'>
            <Navbar />
          </div>
          <div className='route-area'>
            <AppRoutes />
          </div>
        </div>
      </Router>
    </div>

  );
}

export default App;
