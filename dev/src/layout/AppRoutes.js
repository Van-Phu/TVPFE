// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/m1-homepages/homepages';


const AppRoutes = () => {
  return (
    <div style={{backgroundColor: 'red', width: '100%'}}>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>

  );
};

export default AppRoutes;
