import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './layout/AppRoutes';
import { Navbar } from './layout/shared/component/C-NavBar/navbar';
import './App.css'
import { CategoryList } from './layout/shared/component/C-CategoryList/categorylist';

function App() {
  return (
    <div className='container-app'>
      <Router>
        <div className='layout-app'>
          <div className='navbar-area'>
            <Navbar />
          </div>

          <div className='rightContent'>
            <div className='titleApp'>
                Hello world
            </div>
            <div className='route-area'>
              <AppRoutes />
              <CategoryList/>
            </div>
            
          </div>
          
        </div>
      </Router>
    </div>

  );
}

export default App;
