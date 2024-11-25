// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/m1-homepages/homepages';
import { RecipePage } from './pages/m1-recipepage/recipepage';
import { RecipeDetail } from './shared/component/C-RecipeDetail/RecipeDetail';


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<RecipePage />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes>
    </div>

  );
};

export default AppRoutes;
