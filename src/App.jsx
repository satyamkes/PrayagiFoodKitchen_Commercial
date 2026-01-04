import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Videos from './pages/Videos';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Products from './pages/Products';
import Community from './pages/Community';

// SEO Component
import SEO from './components/shared/SEO';

function App() {
  return (
    <Router>
      <SEO 
        title="Tasty Creations | Professional Food Content Creator"
        description="Join the food journey with delicious recipes, cooking tutorials, and kitchen essentials. Convert your passion for food into culinary masterpieces."
        keywords="food creator, recipes, cooking tutorials, kitchen essentials, culinary"
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Layout>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;